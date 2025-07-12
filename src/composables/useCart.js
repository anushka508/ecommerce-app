import { reactive } from 'vue'

const cart = reactive([])

export function useCart() {
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      cart.push({ ...product, quantity: 1 })
    }
  }

  const removeFromCart = (id) => {
    const index = cart.findIndex(item => item.id === id)
    if (index > -1) cart.splice(index, 1)
  }

  const clearCart = () => cart.splice(0, cart.length)

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart
  }
}
