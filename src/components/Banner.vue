<template>
  <div
    class="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
    style="background-image: url('https://images.unsplash.com/photo-1726607424623-6d9fee974241?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0');"
    aria-label="Hero banner with promotional message"
  >
    <!-- Glow Particles -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="w-full h-full animate-glow bg-[radial-gradient(#38bdf8_1px,transparent_1px)] bg-[length:40px_40px] opacity-20"></div>
    </div>

    <!-- Toast Message -->
  <!-- Toast Message -->
<div
  v-if="showToast"
   class="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-up"
>
  {{ toastMessage }}
</div>

    <!-- Overlay Content -->
    <div class="relative z-10 w-full bg-black/60 backdrop-blur-sm text-white px-4 py-20 flex justify-center">
      <div class="w-full max-w-7xl text-center flex flex-col items-center">

        <!-- Badge -->
        <div class="badge animate-bounce">
          🚀 Trusted by 10,000+ Happy Shoppers
        </div>

        <!-- Headline -->
        <h1 class="animate-fade-in-slow">
          Welcome to
          <span class=" text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">MyShop</span>
        </h1>

        <!-- Subheadline -->
        <p class="subheadline animate-slide-up">
          Explore the latest tech gadgets, experience hassle-free service, and enjoy exclusive deals tailored just for you.
        </p>

        <!-- Key Benefits -->
        <ul class="key-benefits">
          <li><span class="checkmark">✔</span> Free & Fast Shipping Across India</li>
          <li><span class="checkmark">✔</span> 100% Secure & Encrypted Payments</li>
          <li><span class="checkmark">✔</span> 24/7 Real Human Support</li>
          <li><span class="checkmark">✔</span> 7-Day Easy Return Policy</li>
        </ul>

        <!-- Testimonial -->
        <section class="w-full max-w-md mb-12 px-4" aria-label="Customer testimonial">
          <h3 class="text-xl font-semibold mb-3">💬 What Our Customers Say</h3>
          <blockquote class="bg-white text-black rounded-lg  shadow-md">
            <p class="italic">“Lightning-fast delivery and unmatched product quality. MyShop has earned my trust.”</p>
            <footer class="mt-2 font-medium">– Rohan M., Pune</footer>
          </blockquote>
        </section>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 mb-12">
         
          <router-link to="/products" aria-label="Go to products">
            <button class="btn-primary flex gap-x-2">
            <ShoppingCartIcon class="w-6 h-6 text-white " />

            Shop Now</button>
          </router-link>
        
          <router-link to="/contact" aria-label="Contact support">
            <button class="btn-secondary">📞 Contact Support</button>
          </router-link>
        </div>

        <!-- Newsletter Signup -->
        <div class="w-full max-w-lg mb-12 px-4">
          <h3 class="text-xl font-semibold mb-4">📬 Get Early Access to Offers</h3>
          <form @submit.prevent="handleSubscribe" class="flex flex-col sm:flex-row gap-4 justify-center" aria-label="Newsletter signup form">
            <label class="sr-only" for="newsletter-email">Email</label>
            <input
              id="newsletter-email"
              v-model="email"
              type="email"
              placeholder="Enter your email"
              required
              class="px-4 py-2 rounded-full text-black w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button type="submit" class="btn-primary px-6 py-2 text-sm">
              Subscribe
            </button>
          </form>
        </div>

        <!-- Scroll Down Icon -->
        <div class="animate-bounce text-gray-300 text-2xl">
          <span class="material-symbols-outlined" aria-hidden="true">expand_more</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'


const email = ref('')
const showToast = ref(false)
const toastMessage = ref('')

const handleSubscribe = () => {
  if (email.value.trim()) {
    toastMessage.value = `✅ Subscribed successfully with ${email.value}`
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
      toastMessage.value = ''
      email.value = ''
    }, 2000)
  }
}
</script>

<style scoped>
/* Tailwind Custom Utilities */

/* Animations */
@keyframes fade-in-slow {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes slide-up {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes glow {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.02); }
}

.animate-fade-in-slow {
  animation: fade-in-slow 1.5s ease-out both;
}
.animate-slide-up {
  animation: slide-up 1.2s ease-out both;
}
.animate-glow {
  animation: glow 4s infinite ease-in-out;
}
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.5s ease-out;
}
</style>