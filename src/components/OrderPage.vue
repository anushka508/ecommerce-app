<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">Order Summary</h1>
    <p>Product: {{ product.name }}</p>
    <p>Price: ₹{{ product.price }}</p>
    <p>GST (18%): ₹{{ gst }}</p>
    <p class="font-semibold">Total Amount: ₹{{ total }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const products = {
  1: { name: 'Laptop', price: 40000 },
  2: { name: 'Phone', price: 20000 },
  3: { name: 'Tablet', price: 15000 },
}

const product = products[route.params.id]
const gst = computed(() => product.price * 0.18)
const total = computed(() => product.price + gst.value)
</script>