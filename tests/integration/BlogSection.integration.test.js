import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import BlogSection from '@/components/Blog/BlogSection.vue'
import { getDocs} from 'firebase/firestore'
import { flushPromises } from '@vue/test-utils'

// Mock Firestore
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
})