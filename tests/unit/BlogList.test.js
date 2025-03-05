import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BlogList from '@/components/Blog/BlogList.vue'
import BlogItem from '@/components/Blog/BlogItem.vue'

// Sample mock blogs
const mockBlogs = [
  { id: '1', title: 'First Blog', content: 'Content of the first blog' },
  { id: '2', title: 'Second Blog', content: 'Content of the second blog' },
]

describe('BlogList.vue', () => {
  it('renders the correct number of BlogItem components', () => {
    const wrapper = mount(BlogList, {
      props: { blogs: mockBlogs },
    })

    const blogItems = wrapper.findAllComponents(BlogItem)
    expect(blogItems).toHaveLength(mockBlogs.length)
  })

  it('emits "blog-click" event when a BlogItem is clicked', async () => {
    const wrapper = mount(BlogList, {
      props: { blogs: mockBlogs },
    })

    // Get the first BlogItem and trigger a click event
    await wrapper.findComponent(BlogItem).trigger('click')

    // Assert that the event was emitted with the correct payload
    expect(wrapper.emitted('blog-click')).toBeTruthy()
    expect(wrapper.emitted('blog-click')[0]).toEqual([mockBlogs[0]])
  })
})
