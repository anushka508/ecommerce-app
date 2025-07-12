<template>
  <div>
    <IntroLoader v-if="loading" />
    <router-view v-else />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import IntroLoader from './components/IntroLoader.vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2500)
})
</script>
