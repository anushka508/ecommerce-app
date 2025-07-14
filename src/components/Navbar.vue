<template>
  <nav
    class="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md relative"
  >
    <!-- Logo -->
 <router-link
  to="/"
  class="text-2xl font-bold tracking-wide hover:text-cyan-300 transition"
>
  MyShop
</router-link>


    <!-- Hamburger Button (Mobile) -->
    <button @click="toggleMenu" class="md:hidden focus:outline-none">
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Menu (Desktop) -->
    <ul class="hidden md:flex space-x-6 text-lg font-medium">
      <li>
        <router-link
          to="/"
          class="nav-link"
          :class="{ 'active-link': $route.path === '/' }"
          >Home</router-link
        >
      </li>
      <li>
        <router-link
          to="/about"
          class="nav-link"
          :class="{ 'active-link': $route.path === '/about' }"
          >About Us</router-link
        >
      </li>
      <li>
        <router-link
          to="/products"
          class="nav-link"
          :class="{ 'active-link': $route.path === '/products' }"
          >Products</router-link
        >
      </li>
     
      
      <li>
        <router-link to="/cart" class="nav-link"
          :class="{ 'active-link': $route.path === '/cart' }"
          >Cart 🛒</router-link
        >
      </li>
       <li>
        <router-link
          to="/contact"
          class="nav-link w-full"
          @click="closeMenu"
          :class="{ 'active-link': $route.path === '/contact' }"
          >Contact Us</router-link
        >
      </li>
    </ul>

    <!-- Mobile Dropdown Menu -->
    <ul
      v-if="isOpen"
      class="absolute top-full left-0 w-full bg-blue-600 text-white flex flex-col items-start p-4 space-y-3 md:hidden z-50"
    >
      <li>
        <router-link
          to="/"
          class="nav-link w-full"
          @click="closeMenu"
          :class="{ 'active-link': $route.path === '/' }"
          >Home</router-link
        >
      </li>
      <li>
        <router-link
          to="/about"
          class="nav-link w-full"
          @click="closeMenu"
          :class="{ 'active-link': $route.path === '/about' }"
          >About Us</router-link
        >
      </li>
      <li>
        <router-link
          to="/products"
          class="nav-link w-full"
          @click="closeMenu"
          :class="{ 'active-link': $route.path === '/products' }"
          >Products</router-link
        >
      </li>
     
      
      <li>
        <router-link
          to="/cart"
          class="hover:text-yellow-300 transition"
          @click="closeMenu"
          >Cart 🛒</router-link
        >
      </li>
      <li>
        <router-link
          to="/contact"
          class="nav-link w-full"
          @click="closeMenu"
          :class="{ 'active-link': $route.path === '/contact' }"
          >Contact Us</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const closeMenu = () => {
  isOpen.value = false;
};
</script>

<style scoped>
.nav-link {
  @apply relative transition duration-200 px-1;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  color: #67e8f9; /* Tailwind's cyan-300 */
}

.nav-link:hover::after {
  background-color: #67e8f9;
}

.active-link {
  color: #ffffff;
  border-bottom: 2px solid #22d3ee; /* Tailwind's cyan-400 */
}

</style>

