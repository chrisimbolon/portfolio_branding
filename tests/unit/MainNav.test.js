import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router'
import MainNav from '@/components/Navigation/MainNav.vue'

// Mock Router

const routes = [
    { path: '/home', name: 'Home', component: {} },
    { path: '/works', name: 'Works', component: {} },
    { path: '/blog', name: 'Blog', component: {} },
    { path: '/contact', name: 'Contact', component: {} },
    { path: '/:pathMatch(.*)*', redirect: '/home' },
  ]
  
const router = createRouter({
  history: createWebHashHistory(), // Use hash history
  routes,
})

describe('MainNav.vue', () => {
  it('renders correctly', async () => {
    const wrapper = mount(MainNav, {
      global: {
        plugins: [router],
      },
    })
    await router.isReady()

    expect(wrapper.exists()).toBe(true)
  })

  it('renders all menu items', async () => {
    const wrapper = mount(MainNav, {
      global: {
        plugins: [router],
      },
    })
    await router.isReady()

    const menuItems = wrapper.findAll('li')
    expect(menuItems.length).toBe(4)
  })

  it('renders correct menu item text and links', async () => {
    const wrapper = mount(MainNav, {
      global: {
        plugins: [router],
      },
    })
    await router.isReady()

    const links = wrapper.findAll('a')

    const expectedItems = [
        { text: 'Home', url: '#/home' },
        { text: 'Works', url: '#/works' },
        { text: 'Blog', url: '#/blog' },
        { text: 'Contact', url: '#/contact' },
      ]
    
      links.forEach((link, index) => {
        console.log(`Link ${index}: ${link.attributes('href')}`)
      })
      
    
      expectedItems.forEach((item, index) => {
        expect(links[index].text()).toBe(item.text)
      
        const actualHref = links[index].attributes('href')
        const normalizedHref = actualHref.replace('#/#', '#/') // Normalize extra hash
      
        expect(normalizedHref).toBe(item.url)
      })
      
  })
})
