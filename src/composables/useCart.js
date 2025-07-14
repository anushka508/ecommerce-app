import { ref, watch } from 'vue'

// ✅ Load cart from localStorage
const storedCart = localStorage.getItem('cart')
const cart = ref(storedCart ? JSON.parse(storedCart) : [])

// ✅ Save cart to localStorage whenever it changes
watch(cart, (newCart) => {
  localStorage.setItem('cart', JSON.stringify(newCart))
}, { deep: true })

// ✅ Add to cart or increase quantity
function addToCart(product) {
  const existing = cart.value.find(item => item.id === product.id)
  if (existing) {
    existing.quantity += 1
  } else {
    cart.value.push({ ...product, quantity: 1 })
  }
}

// ✅ Remove item from cart (one by one)
function removeFromCart(id) {
  const item = cart.value.find(i => i.id === id)
  if (item) {
    if (item.quantity > 1) {
      item.quantity--
    } else {
      const index = cart.value.findIndex(i => i.id === id)
      if (index > -1) cart.value.splice(index, 1)
    }
  }
}

// ✅ Simulate order
function orderProduct(product) {
  console.log(`✅ Order placed for: ${product.name}`)
}

// ✅ Export composable
export function useCart() {
  return {
    cart,
    addToCart,
    removeFromCart,
    orderProduct
  }
}
