<template>
  <div
    class="relative min-h-[100vh] bg-cover bg-center bg-no-repeat overflow-hidden"
    style="background-image: url('https://images.unsplash.com/photo-1726607424623-6d9fee974241?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0');"
    aria-label="Hero banner with promotional message"
  >
    <!-- Glow Particles -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="w-full h-full animate-glow bg-[radial-gradient(#38bdf8_1px,transparent_1px)] bg-[length:40px_40px] opacity-20"></div>
    </div>

    <!-- Overlay Content -->
    <div class="relative z-10 w-full bg-black/60 backdrop-blur-sm text-white px-4 py-20 flex justify-center">
      <div class="w-full max-w-7xl text-center flex flex-col items-center">
        
        <!-- Badge -->
        <div class="bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-1 text-sm font-semibold rounded-full mb-6 shadow-lg animate-bounce">
          🚀 Trusted by 10,000+ Happy Shoppers
        </div>

        <!-- Headline -->
        <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-5 drop-shadow-xl animate-fade-in-slow">
          Welcome to
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">MyShop</span>
        </h1>

        <!-- Subheadline -->
        <p class="text-lg md:text-2xl max-w-2xl text-gray-200 mb-10 animate-slide-up">
          Explore the latest tech gadgets, experience hassle-free service, and enjoy exclusive deals tailored just for you.
        </p>

        <!-- Key Benefits -->
        <ul class="text-sm md:text-base text-gray-300 space-y-2 mb-10 w-full max-w-md">
          <li class="flex items-center gap-2 justify-center"><span class="text-green-400 font-bold">✔</span> Free & Fast Shipping Across India</li>
          <li class="flex items-center gap-2 justify-center"><span class="text-green-400 font-bold">✔</span> 100% Secure & Encrypted Payments</li>
          <li class="flex items-center gap-2 justify-center"><span class="text-green-400 font-bold">✔</span> 24/7 Real Human Support</li>
          <li class="flex items-center gap-2 justify-center"><span class="text-green-400 font-bold">✔</span> 7-Day Easy Return Policy</li>
        </ul>

        <!-- Testimonial -->
        <div class="w-full max-w-2xl mb-12 px-4">
          <h3 class="text-xl font-semibold mb-3">💬 What Our Customers Say</h3>
          <div class="bg-white text-black rounded-lg p-4 shadow-md">
            <p class="italic">“Lightning-fast delivery and unmatched product quality. MyShop has earned my trust.”</p>
            <p class="mt-2 font-medium">– Rohan M., Pune</p>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 mb-12">
          <router-link to="/products">
            <button
              type="button"
              class="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition-all duration-300"
            >
              🛒 Shop Now
            </button>
          </router-link>
          <router-link to="/contact">
            <button
              type="button"
              class="bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:bg-blue-100 transition duration-300"
            >
              📞 Contact Support
            </button>
          </router-link>
        </div>

        <!-- Newsletter Signup -->
        <div class="w-full max-w-lg mb-12 px-4">
          <h3 class="text-xl font-semibold mb-4">📬 Get Early Access to Offers</h3>
          <form class="flex flex-col sm:flex-row gap-4 justify-center" @submit.prevent>
            <input
              type="email"
              placeholder="Enter your email"
              class="px-4 py-2 rounded-full text-black w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium shadow-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        <!-- Scroll Down Icon -->
        <div class="animate-bounce text-gray-300 text-2xl">
          <span class="material-symbols-outlined">expand_more</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
</style>
