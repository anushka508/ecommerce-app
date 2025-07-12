<template>
  <div class="flex flex-wrap gap-6 justify-center p-6">
    <div
      v-for="product in products"
      :key="product.id"
      class="flex flex-col justify-between border rounded-lg shadow-md hover:shadow-xl transition w-full md:w-[300px] bg-white"
    >
      <!-- Product Info -->
      <div class="p-5">
        <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ product.name }}</h2>
        <p class="text-gray-600 text-lg">₹{{ product.price }}</p>
      </div>

      <!-- Action Buttons -->
      <div class="p-4 border-t flex flex-col gap-3">
        <button
          @click="addToCart(product)"
          class="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Add to Cart
        </button>

        <router-link
          :to="`/order/${product.id}`"
          class="bg-green-600 hover:bg-green-700 text-white py-2 text-center rounded transition"
        >
          Order Now
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from '../composables/useCart'

const products = [
  { id: 1, name: 'Laptop', price: 40000 },
  { id: 2, name: 'Phone', price: 20000 },
  { id: 3, name: 'Tablet', price: 15000 },
]

const { addToCart } = useCart()
</script>
