<template>
  <nav class="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md relative">

    <!-- Logo -->
    <router-link to="/" class="text-2xl font-bold tracking-wide hover:text-cyan-300 transition">
      MyShop
    </router-link>

    <!-- Hamburger Button (Mobile) -->
    <button @click="toggleMenu" class="md:hidden focus:outline-none" aria-label="Toggle Menu">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
        stroke-linejoin="round">
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Desktop Menu -->
    <ul class="hidden md:flex space-x-6 text-lg font-medium">
      <li v-for="item in navItems" :key="item.to">
       <router-link
  :to="item.to"
  class="nav-link flex items-center gap-2"
  :class="{ 'active-link': $route.path === item.to }"
>
  <template v-if="item.to === '/cart'">
    <ShoppingCartIcon class="w-5 h-5 text-white" />
    <span>Cart</span>
  </template>
  <template v-else>
    {{ item.label }}
  </template>
</router-link>

      </li>
    </ul>

    <!-- Mobile Menu -->
    <ul v-if="isOpen"
      class="absolute top-full left-0 w-full bg-blue-600 text-white flex flex-col items-start p-4 space-y-3 md:hidden z-50">
      <li v-for="item in navItems" :key="item.to">
       <router-link
  :to="item.to"
  class="nav-link w-full flex items-center gap-2"
  @click="closeMenu"
  :class="{ 'active-link': $route.path === item.to }"
>
  <template v-if="item.to === '/cart'">
    <ShoppingCartIcon class="w-5 h-5 text-white" />
    <span>Cart</span>
  </template>
  <template v-else>
    {{ item.label }}
  </template>
</router-link>

      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'


const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)
const closeMenu = () => (isOpen.value = false)

const $route = useRoute()

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/cart', label: 'Cart' },
  { to: '/contact', label: 'Contact Us' },
]

</script>

<style scoped>
.nav-link {
  @apply relative transition duration-200 px-1;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -7px;
  width: 100%;
  height: 2px;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  color: #67e8f9;
  /* Tailwind's cyan-300 */
}

.nav-link:hover::after {
  background-color: #67e8f9;
}

.active-link {
  color: #ffffff;
  position: relative;
}

.active-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -7px;
  width: 100%;
  height: 2px;
  background-color: #22d3ee;
  /* Tailwind's cyan-400 */
}
</style>