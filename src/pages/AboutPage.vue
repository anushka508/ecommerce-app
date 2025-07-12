<template>
  <div>
    <Navbar />

    <!-- Hero Banner -->
    <section
      class="relative h-72 bg-cover bg-center text-white"
      style="background-image: url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80')"
    >
      <div class="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
        <h1 class="text-4xl md:text-5xl font-bold animate-fade-in-slow">About Us</h1>
        <p class="text-lg mt-2 animate-slide-up">Who we are & what we do</p>
      </div>
    </section>

    <!-- About Section -->
    <section class="max-w-5xl mx-auto p-10 text-center">
      <h2 class="text-3xl font-semibold mb-4 animate-fade-in-slow">Our Story</h2>
      <p class="text-gray-700 leading-relaxed mb-10 animate-slide-up">
        MyShop was founded with a mission to make technology more accessible and affordable to everyone.
        We are passionate about innovation and committed to bringing the latest electronic gadgets at the
        best prices directly to your doorstep.
      </p>

      <h2 class="text-3xl font-semibold mb-6 animate-fade-in-slow">What Makes Us Different</h2>
      <div class="grid md:grid-cols-3 gap-6 text-left mt-4">
        <div class="bg-white p-6 rounded shadow hover:shadow-lg transition animate-slide-up">
          <h3 class="text-xl font-bold mb-2 text-blue-600">Quality Products</h3>
          <p>We only partner with trusted brands to deliver the highest-quality tech products.</p>
        </div>
        <div class="bg-white p-6 rounded shadow hover:shadow-lg transition animate-slide-up delay-100">
          <h3 class="text-xl font-bold mb-2 text-blue-600">Affordable Pricing</h3>
          <p>We cut the middleman so you get the best prices—guaranteed.</p>
        </div>
        <div class="bg-white p-6 rounded shadow hover:shadow-lg transition animate-slide-up delay-200">
          <h3 class="text-xl font-bold mb-2 text-blue-600">Customer Focus</h3>
          <p>Our support team is always ready to help with your queries and purchases.</p>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="bg-blue-700 text-white text-center p-10">
      <h2 class="text-3xl font-semibold mb-4 animate-fade-in-slow">Our Vision</h2>
      <p class="max-w-3xl mx-auto animate-slide-up">
        To be India’s most customer-centric tech store where people can discover and buy anything innovative at the lowest prices.
      </p>
    </section>

    <!-- Footer -->
    <footer class="bg-blue-800 text-white text-center p-4">
      &copy; 2025 MyShop. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<style scoped>
@keyframes fade-in-slow {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-slow {
  animation: fade-in-slow 1s ease-out both;
}
.animate-slide-up {
  animation: slide-up 0.8s ease-out both;
}
.delay-100 {
  animation-delay: 0.1s;
}
.delay-200 {
  animation-delay: 0.2s;
}
</style>
