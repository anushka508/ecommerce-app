<template>
  <div>
    <Navbar />
    <h1 class="text-3xl font-bold p-6 mx-5">Our Products</h1>
    <ProductList />
    <Footer/>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import ProductList from '../components/ProductList.vue'
import Footer from '../components/Footer.vue';
</script>