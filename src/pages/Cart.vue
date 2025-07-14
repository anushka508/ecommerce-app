<template>
  <Navbar />

  <div class="p-6 max-w-5xl mx-auto">
    <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center">🛒 Your Cart</h1>

    <!-- Empty State -->
    <div v-if="cart.length === 0" class="text-gray-500 text-center text-lg py-16">
      <p class="text-xl font-medium">Your cart is empty.</p>
      <p class="text-sm mt-2">Browse products and add them to your cart.</p>
    </div>

    <!-- Cart Items -->
    <div v-else class="space-y-6">
      <div
        v-for="item in cart"
        :key="item.id"
        class="bg-white border rounded-xl shadow-sm hover:shadow-md p-5 flex flex-col sm:flex-row items-center gap-6 transition-all duration-300"
      >
        <!-- Product Image -->
        <img
          :src="item.img || fallbackImage"
          alt="Product Image"
          class="w-24 h-24 object-contain rounded-md border"
        />

        <!-- Product Info -->
        <div class="flex-1 w-full">
          <div class="flex justify-between items-center mb-2">
            <h2 class="text-xl font-semibold text-gray-800">{{ item.name }}</h2>
            <button
              @click="removeFromCart(item.id)"
              class="text-red-600 text-sm hover:underline"
            >
              Remove
            </button>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-700">
            <p><span class="font-medium">Price:</span> ₹{{ item.price }}</p>
            <p><span class="font-medium">Quantity:</span> {{ item.quantity }}</p>
            <p><span class="font-medium">GST (18%):</span> ₹{{ (item.price * item.quantity * 0.18).toFixed(2) }}</p>
            <p class="sm:col-span-2 font-bold text-green-700">
              Total: ₹{{ (item.price * item.quantity * 1.18).toFixed(2) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Grand Total -->
      <div class="text-right text-2xl font-bold text-gray-900 border-t pt-6">
        Grand Total:
        <span class="text-green-700">
          ₹{{ cart.reduce((acc, item) => acc + item.price * item.quantity * 1.18, 0).toFixed(2) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import { useCart } from '../composables/useCart'

const { cart, removeFromCart } = useCart()
const fallbackImage = 'https://via.placeholder.com/100x100?text=No+Image'
</script>
