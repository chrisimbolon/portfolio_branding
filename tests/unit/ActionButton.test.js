import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ActionButton from '@/components/shared/ActionButton.vue'

describe('ActionButton.vue', () => {
  it('renders button with correct text', () => {
    const wrapper = mount(ActionButton, {
      props: { btnText: 'Click Me' }
    })
    expect(wrapper.text()).toBe('Click Me')
  })

  it('applies primary style by default', () => {
    const wrapper = mount(ActionButton, {
      props: { btnText: 'Click Me' }
    })
    expect(wrapper.classes()).toContain('primary')
  })

  it('applies secondary style when passed as prop', () => {
    const wrapper = mount(ActionButton, {
      props: { btnText: 'Click Me', styleType: 'secondary' }
    })
    expect(wrapper.classes()).toContain('secondary')
  })
})
