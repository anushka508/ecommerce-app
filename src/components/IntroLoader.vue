<template>
  <transition name="slide-up">
    <div
      v-if="visible"
      class="fixed inset-0 z-50 bg-black flex items-center justify-center text-white"
    >
      <div class="text-center">
        <h1 class="text-5xl font-extrabold mb-4 text-blue-400 animate-fade-in-up">MyShop</h1>
        <p class="text-lg">Powering your tech dreams...</p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(true)

onMounted(() => {
  setTimeout(() => {
    visible.value = false
  }, 2500) // loader duration
})
</script>

<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 1s ease-out both;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.8s ease-in, opacity 0.8s ease-in;
}
.slide-up-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
