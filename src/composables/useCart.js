import { reactive, watch } from 'vue'

// Load from localStorage or default to empty
const cart = reactive(JSON.parse(localStorage.getItem('cart') || '[]'))
const orders = reactive(JSON.parse(localStorage.getItem('orders') || '[]'))

export function useCart() {
  const addToCart = (product) => {
  const existing = cart.find(item => item.id === product.id)
  if (existing) {
    existing.quantity++
  } else {
    cart.push({ ...product, quantity: 1 })
  }
}

  const orderProduct = (product) => {
    const existing = orders.find(item => item.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      orders.push({ ...product, quantity: 1 })
    }
  }

const removeFromCart = (id) => {
  const item = cart.find(i => i.id === id)
  if (item) {
    if (item.quantity > 1) {
      item.quantity--
    } else {
      const index = cart.findIndex(i => i.id === id)
      if (index > -1) cart.splice(index, 1)
    }
  }
}
 const removeFromOrders = (id) => {
  const item = orders.find(i => i.id === id)

  if (item) {
    if (item.quantity > 1) {
      item.quantity--
    } else {
      const index = orders.findIndex(i => i.id === id)
      if (index > -1) {
        orders.splice(index, 1)
      }
    }
  }
}


  // Save to localStorage whenever cart or orders change
  watch(cart, () => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, { deep: true })

  watch(orders, () => {
    localStorage.setItem('orders', JSON.stringify(orders))
  }, { deep: true })

  return {
    cart,
    orders,
    addToCart,
    orderProduct,
    removeFromCart,
    removeFromOrders
  }
}
