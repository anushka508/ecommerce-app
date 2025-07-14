<template>
  <section class="py-10 px-4 bg-gray-50">
    <div class="max-w-2xl mx-auto text-center mb-10">
      <h2 class="text-4xl font-bold text-blue-700 mb-2">Contact Us</h2>
      <p class="text-gray-600">We’d love to hear from you. Fill out the form and we’ll get in touch shortly.</p>
    </div>

    <!-- ✅ Toast Message -->
    <div
      v-if="showToast"
      class="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-up"
    >
      {{ toastMessage }}
    </div>

    <form @submit.prevent="handleSubmit" class="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6 animate-fade-in-up">
      <div>
        <label for="name" class="block mb-2 font-medium text-gray-700">Name<span class="text-red-500">*</span></label>
        <input v-model="form.name" type="text" id="name" required placeholder="Your Name" class="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div>
        <label for="email" class="block mb-2 font-medium text-gray-700">Email<span class="text-red-500">*</span></label>
        <input v-model="form.email" type="email" id="email" required placeholder="you@example.com" class="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div>
        <label for="subject" class="block mb-2 font-medium text-gray-700">Subject<span class="text-red-500">*</span></label>
        <input v-model="form.subject" type="text" id="subject" required placeholder="Subject" class="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div>
        <label for="message" class="block mb-2 font-medium text-gray-700">Message<span class="text-red-500">*</span></label>
        <textarea v-model="form.message" id="message" rows="5" required placeholder="Write your message here..." class="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>

      <button type="submit" class="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition duration-300">
        Send Message
      </button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const showToast = ref(false)
const toastMessage = ref('')

const handleSubmit = () => {
  // All fields are required, so this only runs if valid
  toastMessage.value = '✅ Message sent successfully!'
  showToast.value = true

  setTimeout(() => {
    showToast.value = false
    toastMessage.value = ''
    form.value = { name: '', email: '', subject: '', message: '' } // Reset form
  }, 2000)
}
</script>

<style scoped>
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
