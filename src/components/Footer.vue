<template>
  <footer class="bg-blue-800 text-white py-10 px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      
      <!-- Company Info -->
      <div>
        <h3 class="text-xl font-bold mb-3">MyShop</h3>
        <p class="text-sm text-gray-300">
          Your one-stop destination for innovative tech products, unbeatable deals, and fast delivery.
        </p>
      </div>

      <!-- Navigation -->
      <div>
        <h4 class="font-semibold mb-3">Quick Links</h4>
        <ul class="space-y-2 text-sm text-gray-300">
          <li><router-link to="/" class="hover:text-cyan-300 transition">Home</router-link></li>
          <li><router-link to="/about" class="hover:text-cyan-300 transition">About Us</router-link></li>
          <li><router-link to="/products" class="hover:text-cyan-300 transition">Products</router-link></li>
          <li><router-link to="/contact" class="hover:text-cyan-300 transition">Contact</router-link></li>
        </ul>
      </div>

      <!-- Help -->
      <div>
        <h4 class="font-semibold mb-3">Support</h4>
        <ul class="space-y-2 text-sm text-gray-300">
          <li><a href="#" class="hover:text-cyan-300 transition">FAQs</a></li>
          <li><a href="#" class="hover:text-cyan-300 transition">Shipping & Returns</a></li>
          <li><a href="#" class="hover:text-cyan-300 transition">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-cyan-300 transition">Terms of Service</a></li>
        </ul>
      </div>

      <!-- Social Media -->
      <div>
        <h4 class="font-semibold mb-3">Follow Us</h4>
        <div class="flex space-x-4">
          <a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin-in text-xl hover:text-cyan-300"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" aria-label="Twitter">
            <i class="fab fa-twitter text-xl hover:text-cyan-300"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram text-xl hover:text-cyan-300"></i>
          </a>
          <a href="https://www.github.com" target="_blank" aria-label="GitHub">
            <i class="fab fa-github text-xl hover:text-cyan-300"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="mt-10 text-center text-sm text-gray-400">
      &copy; 2025 MyShop. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
// No logic needed for footer
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
</style>
