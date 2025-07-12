<template>
  <nav class="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
    <!-- Logo / Brand -->
    <div class="text-2xl font-bold tracking-wide">MyShop</div>

    <!-- Navigation Menu -->
    <ul class="hidden md:flex space-x-6 text-lg font-medium">
      <li>
        <router-link
          to="/"
          class="nav-link"
          :class="{ 'text-yellow-300 border-b-2 border-yellow-300 pb-1': $route.path === '/' }"
        >Home</router-link>
      </li>
      <li>
        <router-link
          to="/about"
          class="nav-link"
          :class="{ 'text-yellow-300 border-b-2 border-yellow-300 pb-1': $route.path === '/about' }"
        >About Us</router-link>
      </li>
      <li>
        <router-link
          to="/products"
          class="nav-link"
          :class="{ 'text-yellow-300 border-b-2 border-yellow-300 pb-1': $route.path === '/products' }"
        >Products</router-link>
      </li>
      <li>
        <router-link
          to="/contact"
          class="nav-link"
          :class="{ 'text-yellow-300 border-b-2 border-yellow-300 pb-1': $route.path === '/contact' }"
        >Contact Us</router-link>
      </li>
      <li>
  <router-link to="/cart" class="hover:text-yellow-300 transition">
    Cart 🛒
  </router-link>
</li>

    </ul>
  </nav>
</template>

<style scoped>
.nav-link {
  @apply hover:text-yellow-300 transition duration-200 relative;
}
</style>
