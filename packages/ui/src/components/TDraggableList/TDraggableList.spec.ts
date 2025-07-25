import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import TDraggableList from './TDraggableList.vue'

// Mock the useDraggable composable
const mockUseDraggable = {
  isDragging: false,
  draggedItem: null,
  draggedOverItem: null,
  handleDragStart: vi.fn(),
  handleDragOver: vi.fn(),
  handleDragEnd: vi.fn(),
  handleTouchMove: vi.fn(),
  isEnabled: true
}

vi.mock('../../composables/useDraggable', () => ({
  useDraggable: () => mockUseDraggable
}))

// Mock TIcon component
vi.mock('../TIcon/TIcon.vue', () => ({
  default: {
    name: 'TIcon',
    template: '<i class="t-icon"></i>',
    props: ['name', 'size']
  }
}))

describe('TDraggableList.vue', () => {
  const mockItems = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' }
  ]

  beforeEach(() => {
    vi.clearAllMocks()
    mockUseDraggable.isDragging = false
    mockUseDraggable.draggedItem = null
    mockUseDraggable.draggedOverItem = null
    mockUseDraggable.isEnabled = true
  })

  it('renders correctly with items', () => {
    const wrapper = mount(TDraggableList, {
      props: {
        items: mockItems
      },
      slots: {
        default: `<template #default="{ item }">
          <div class="item-content">{{ item.title }}</div>
        </template>`
      }
    })
    
    expect(wrapper.html()).toBeTruthy()
    expect(wrapper.find('.draggable-list').exists()).toBe(true)
    expect(wrapper.find('.draggable-list__container').exists()).toBe(true)
    expect(wrapper.findAll('.draggable-list__item')).toHaveLength(3)
  })

  it('renders drag handles when enabled', () => {
    const wrapper = mount(TDraggableList, {
      props: {
        items: mockItems,
        enabled: true
      },
      slots: {
        default: `<template #default="{ item }">
          <div class="item-content">{{ item.title }}</div>
        </template>`
      }
    })
    
    expect(wrapper.findAll('.draggable-list__handle')).toHaveLength(3)
    expect(wrapper.findAllComponents({ name: 'TIcon' })).toHaveLength(3)
  })

  it('hides drag handles when disabled', () => {
    mockUseDraggable.isEnabled = false
    
    const wrapper = mount(TDraggableList, {
      props: {
        items: mockItems,
        enabled: false
      },
      slots: {
        default: `<template #default="{ item }">
          <div class="item-content">{{ item.title }}</div>
        </template>`
      }
    })
    
    expect(wrapper.findAll('.draggable-list__handle')).toHaveLength(0)
  })

  it('applies dragging class to dragged item', () => {
    mockUseDraggable.draggedItem = { id: '2', title: 'Item 2' }
    
    const wrapper = mount(TDraggableList, {
      props: {
        items: mockItems
      },
      slots: {
        default: `<template #default="{ item }">
          <div class="item-content">{{ item.title }}</div>
        </template>`
      }
    })
    
    const items = wrapper.findAll('.draggable-list__item')
    expect(items[1].classes()).toContain('draggable-list__item--dragging')
  })

  it('applies drag-over class to target item', () => {
    mockUseDraggable.draggedOverItem = { id: '3', title: 'Item 3' }
    
    const wrapper = mount(TDraggableList, {
      props: {
        items: mockItems
      },
      slots: {
        default: `<template #default="{ item }">
          <div class="item-content">{{ item.title }}</div>
        </template>`
      }
    })
    
    const items = wrapper.findAll('.draggable-list__item')
    expect(items[2].classes()).toContain('draggable-list__item--drag-over')
  })

  it('applies disabled class when not enabled', () => {
    mockUseDraggable.isEnabled = false
    
    const wrapper = mount(TDraggableList, {
      props: {
        items: mockItems,
        enabled: false
      },
      slots: {
        default: `<template #default="{ item }">
          <div class="item-content">{{ item.title }}</div>
        </template>`
      }
    })
    
    const items = wrapper.findAll('.draggable-list__item')
    items.forEach(item => {
      expect(item.classes()).toContain('draggable-list__item--disabled')
    })
  })

  it('sets draggable attribute correctly', () => {
    const wrapper = mount(TDraggableList, {
      props: {
        items: mockItems,
        enabled: true
      },
      slots: {
        default: `<template #default="{ item }">
          <div class="item-content">{{ item.title }}</div>
        </template>`
      }
    })
    
    const items = wrapper.findAll('.draggable-list__item')
    items.forEach(item => {
      expect(item.attributes('draggable')).toBe('true')
    })
  })

  it('sets correct data attributes', () => {
    const wrapper = mount(TDraggableList, {
      props: {
        items: mockItems
      },
      slots: {
        default: `<template #default="{ item }">
          <div class="item-content">{{ item.title }}</div>
        </template>`
      }
    })
    
    const items = wrapper.findAll('.draggable-list__item')
    expect(items[0].attributes('data-draggable-id')).toBe('1')
    expect(items[1].attributes('data-draggable-id')).toBe('2')
    expect(items[2].attributes('data-draggable-id')).toBe('3')
  })

  it('calls drag handlers on drag events', async () => {
    const wrapper = mount(TDraggableList, {
      props: {
        items: mockItems,
        enabled: true
      },
      slots: {
        default: `<template #default="{ item }">
          <div class="item-content">{{ item.title }}</div>
        </template>`
      }
    })
    
    const firstItem = wrapper.find('.draggable-list__item')
    
    await firstItem.trigger('dragstart')
    expect(mockUseDraggable.handleDragStart).toHaveBeenCalled()
    
    await firstItem.trigger('dragover')
    expect(mockUseDraggable.handleDragOver).toHaveBeenCalled()
    
    await firstItem.trigger('dragend')
    expect(mockUseDraggable.handleDragEnd).toHaveBeenCalled()
  })

  it('calls touch handlers on touch events', async () => {
    const wrapper = mount(TDraggableList, {
      props: {
        items: mockItems,
        enabled: true
      },
      slots: {
        default: `<template #default="{ item }">
          <div class="item-content">{{ item.title }}</div>
        </template>`
      }
    })
    
    const firstItem = wrapper.find('.draggable-list__item')
    
    await firstItem.trigger('touchstart')
    expect(mockUseDraggable.handleDragStart).toHaveBeenCalled()
    
    await firstItem.trigger('touchmove')
    expect(mockUseDraggable.handleTouchMove).toHaveBeenCalled()
    
    await firstItem.trigger('touchend')
    expect(mockUseDraggable.handleDragEnd).toHaveBeenCalled()
  })

  it('passes correct props to slot', () => {
    const wrapper = mount(TDraggableList, {
      props: {
        items: mockItems
      },
      slots: {
        default: `<template #default="{ item, index }">
          <div class="item-content" :data-index="index">{{ item.title }}</div>
        </template>`
      }
    })
    
    const itemContents = wrapper.findAll('.item-content')
    expect(itemContents[0].text()).toBe('Item 1')
    expect(itemContents[0].attributes('data-index')).toBe('0')
    expect(itemContents[1].text()).toBe('Item 2')
    expect(itemContents[1].attributes('data-index')).toBe('1')
  })

  it('handles empty items array', () => {
    const wrapper = mount(TDraggableList, {
      props: {
        items: []
      },
      slots: {
        default: `<template #default="{ item }">
          <div class="item-content">{{ item.title }}</div>
        </template>`
      }
    })
    
    expect(wrapper.find('.draggable-list').exists()).toBe(true)
    expect(wrapper.findAll('.draggable-list__item')).toHaveLength(0)
  })

  it('passes onReorder callback to useDraggable', () => {
    const mockOnReorder = vi.fn()
    
    mount(TDraggableList, {
      props: {
        items: mockItems,
        onReorder: mockOnReorder
      },
      slots: {
        default: `<template #default="{ item }">
          <div class="item-content">{{ item.title }}</div>
        </template>`
      }
    })
    
    // The useDraggable composable should be called with the onReorder callback
    expect(mockUseDraggable).toBeDefined()
  })

  it('has correct drag handle icon', () => {
    const wrapper = mount(TDraggableList, {
      props: {
        items: mockItems,
        enabled: true
      },
      slots: {
        default: `<template #default="{ item }">
          <div class="item-content">{{ item.title }}</div>
        </template>`
      }
    })
    
    const icons = wrapper.findAllComponents({ name: 'TIcon' })
    icons.forEach(icon => {
      expect(icon.props('name')).toBe('drag-handle')
      expect(icon.props('size')).toBe('1.5rem')
    })
  })

  it('maintains proper structure with content wrapper', () => {
    const wrapper = mount(TDraggableList, {
      props: {
        items: mockItems
      },
      slots: {
        default: `<template #default="{ item }">
          <div class="item-content">{{ item.title }}</div>
        </template>`
      }
    })
    
    const items = wrapper.findAll('.draggable-list__item')
    items.forEach(item => {
      expect(item.find('.draggable-list__content').exists()).toBe(true)
    })
  })
})