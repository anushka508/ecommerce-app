<template>
  <div
    class="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
    style="background-image: url('https://images.unsplash.com/photo-1726607424623-6d9fee974241?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0');"
  >
    <!-- Glow Particles -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="w-full h-full animate-glow bg-[radial-gradient(#38bdf8_1px,transparent_1px)] bg-[length:40px_40px] opacity-20"></div>
    </div>

    <!-- Overlay Content -->
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col justify-center items-center text-center text-white px-4 z-10">

      <!-- Badge -->
      <div class="bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-1 text-sm font-semibold rounded-full mb-5 shadow-lg animate-bounce backdrop-blur-sm">
        🚀 Trusted by 10,000+ Happy Shoppers
      </div>

      <!-- Headline -->
      <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-xl animate-fade-in-slow">
        Welcome to
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">MyShop</span>
      </h1>

      <!-- Subheadline -->
      <p class="text-lg md:text-2xl max-w-2xl text-gray-200 mb-8 animate-slide-up">
        Discover the latest gadgets, shop with confidence, and enjoy deals you won't find anywhere else.
      </p>

      <!-- CTA Button -->
      <router-link to="/products">
        <button
          class="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
        >
          🛒 Start Shopping
        </button>
      </router-link>

      <!-- Scroll Down Icon -->
      <div class="mt-10 animate-bounce text-gray-300 text-xl">
        <span class="material-symbols-outlined">expand_more</span>
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
.animate-fade-in-slow {
  animation: fade-in-slow 1.5s ease-out both;
}
.animate-slide-up {
  animation: slide-up 1.2s ease-out both;
}

/* Glow effect animation (subtle background grid glow) */
@keyframes glow {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.02); }
}
.animate-glow {
  animation: glow 4s infinite ease-in-out;
}
</style>
