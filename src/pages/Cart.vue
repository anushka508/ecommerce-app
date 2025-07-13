<template>
  <Navbar/>
  <div class="p-8 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Your Cart</h1>

    <div v-if="cart.length === 0" class="text-gray-500 text-center">
      Your cart is empty.
    </div>

    <div v-else>
      <div
        v-for="item in cart"
        :key="item.id"
        class="border p-4 mb-4 rounded bg-white shadow flex justify-between items-center"
      >
        <div>
          <h2 class="text-lg font-semibold">{{ item.name }}</h2>
          <p>Price: ₹{{ item.price }}</p>
          <p>Quantity: {{ item.quantity }}</p>
          <p>GST (18%): ₹{{ (item.price * item.quantity * 0.18).toFixed(2) }}</p>
          <p class="font-bold">
            Total: ₹{{ (item.price * item.quantity * 1.18).toFixed(2) }}
          </p>
        </div>

        <button
          @click="removeFromCart(item.id)"
          class="text-sm text-red-600 hover:underline"
        >
          Remove
        </button>
      </div>

      <div class="text-right text-xl font-bold mt-6">
        Grand Total: ₹{{
          cart.reduce((acc, item) => acc + item.price * item.quantity * 1.18, 0).toFixed(2)
        }}
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import { useCart } from '../composables/useCart'

const { cart, removeFromCart } = useCart()
</script>
