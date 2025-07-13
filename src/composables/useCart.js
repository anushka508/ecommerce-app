// src/composables/useCart.js
import { reactive } from 'vue'

const cart = reactive([])
const orders = reactive([])

export function useCart() {
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      cart.push({ ...product, quantity: 1 })
    }
  }

  const orderProduct = (product) => {
    const existing = orders.find((item) => item.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      orders.push({ ...product, quantity: 1 })
    }
  }

  const removeFromOrders = (id) => {
    const index = orders.findIndex(item => item.id === id)
    if (index > -1) orders.splice(index, 1)
  }

  return {
    cart,
    orders,
    addToCart,
    orderProduct,
    removeFromOrders
  }
}
