import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import BlogSection from '@/components/Blog/BlogSection.vue'
import { getDocs} from 'firebase/firestore'
import { flushPromises } from '@vue/test-utils'
import BlogList from '@/components/Blog/BlogList.vue' 

// Mock Firestore

vi.mock('firebase/firestore', async () => {
    const actual = await vi.importActual('firebase/firestore') // Import real Firestore module
  
    return {
      ...actual,
      collection: vi.fn(),
      getDocs: vi.fn(),
      getFirestore: vi.fn(), // Mock getFirestore
    }
  })
  

describe('BlogSection.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.spyOn(console, 'error').mockImplementation(() => {});
  })

  it('fetches and displays blog posts', async () => {
    // Fake Firestore data
    const mockBlogs = [
      { id: '1', title: 'First Blog', content: 'This is the first blog.', createdAt: { toDate: () => new Date('2025-03-01T10:00:00Z') } },
      { id: '2', title: 'Second Blog', content: 'This is the second blog.', createdAt: { toDate: () => new Date('2025-03-02T12:00:00Z') } },
    ]

    getDocs.mockResolvedValue({
      docs: mockBlogs.map(blog => ({ id: blog.id, data: () => blog })),
    })

    const wrapper = mount(BlogSection)
    await flushPromises() // Wait for async calls

    // Check if the blogs were rendered
    expect(wrapper.text()).toContain('First Blog')
    expect(wrapper.text()).toContain('Second Blog')
  })

  it('displays error message on Firestore failure', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {}); // Silence console.error
    
    getDocs.mockRejectedValue(new Error('Firestore error'));
  
    const wrapper = mount(BlogSection);
    await flushPromises();
  
    expect(wrapper.text()).toContain('Failed to load blog posts.');
  
    console.error.mockRestore(); // Restore console.error after test
  });
  

  it('shows loading state before data is fetched', async () => {
    const wrapper = mount(BlogSection)

    expect(wrapper.text()).toContain('Loading...')

    await flushPromises()
  })

  it('displays "No blogs found" when there are no blog posts', async () => {
    getDocs.mockResolvedValue({ docs: [] }) // Simulate no blogs
  
    const wrapper = mount(BlogSection)
    await flushPromises()
  
    expect(wrapper.text()).toContain('No blogs found') // Ensure correct UI behavior
  })

  it('handles blog post missing createdAt field gracefully', async () => {
    const mockBlogs = [
      { id: '1', title: 'Blog Without Date', content: 'No date available' }
    ]
  
    getDocs.mockResolvedValue({
      docs: mockBlogs.map(blog => ({ id: blog.id, data: () => blog })),
    })
  
    const wrapper = mount(BlogSection)
    await flushPromises()
  
    expect(wrapper.text()).toContain('No date available');

    // expect(wrapper.text()).toContain('Blog Without Date') // Title still shows
    expect(wrapper.text()).not.toContain('undefined') // No error should be visible
  })


  it('passes blog data to BlogList component', async () => {
    const mockBlogs = [
      {
        id: '1',
        title: 'First Blog',
        content: 'This is the first blog.',
        createdAt: { toDate: () => new Date() }
      }
    ]
  
    getDocs.mockResolvedValue({
      docs: mockBlogs.map(blog => ({ id: blog.id, data: () => blog })),
    })
  
    const wrapper = mount(BlogSection)
    await flushPromises()
  
    const blogList = wrapper.findComponent(BlogList)
    expect(blogList.exists()).toBe(true) // Ensure BlogList is present
  
    const expectedBlogs = mockBlogs.map(blog => ({
      ...blog,
      formattedCreatedAt: expect.any(String) // ✅ Accept any formatted date string
    }))
  
    expect(blogList.props('blogs')).toEqual(expectedBlogs) // ✅ Updated assertion
  })
  
  it('emits an event when a blog post is clicked', async () => {
    const mockBlogs = [
      { id: '1', title: 'Clickable Blog', content: 'Click me!', createdAt: { toDate: () => new Date() } }
    ]
  
    getDocs.mockResolvedValue({
      docs: mockBlogs.map(blog => ({ id: blog.id, data: () => blog })),
    })
  
    const wrapper = mount(BlogSection)
    await flushPromises()
  
    await wrapper.vm.$nextTick() // ✅ Ensure component is fully updated
  
    const blogItem = wrapper.find('[data-test="blog-item-1"]')
    expect(blogItem.exists()).toBe(true) // ✅ Ensure it actually exists
  
    await blogItem.trigger('click')
  
    expect(wrapper.emitted('blog-clicked')).toBeTruthy() // Ensure event is emitted
    expect(wrapper.emitted('blog-clicked')[0]).toEqual([{ id: '1', title: 'Clickable Blog', content: 'Click me!' }])
  })
  

it('renders large amounts of blog posts correctly', async () => {
  const mockBlogs = Array.from({ length: 100 }, (_, i) => ({
    id: String(i),
    title: `Blog ${i}`,
    content: `Content for blog ${i}`,
    createdAt: { toDate: () => new Date() }
  }))

  getDocs.mockResolvedValue({
    docs: mockBlogs.map(blog => ({ id: blog.id, data: () => blog })),
  })

  const wrapper = mount(BlogSection)
  await flushPromises()

  // Check if the first and last blogs appear
  expect(wrapper.text()).toContain('Blog 0')
  expect(wrapper.text()).toContain(`Blog 99`)
})


})