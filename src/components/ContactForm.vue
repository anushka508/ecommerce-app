<template>
  <section class="py-10 px-4 bg-gray-50">
    <div class="max-w-2xl mx-auto text-center mb-10">
      <h2 class="text-4xl font-bold text-blue-700 mb-2">Contact Us</h2>
      <p class="text-gray-600">We’d love to hear from you. Fill out the form and we’ll get in touch shortly.</p>
    </div>

    <form @submit.prevent class="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6 animate-fade-in-up">
      <div>
        <label for="name" class="block mb-2 font-medium text-gray-700">Name</label>
        <input type="text" id="name" placeholder="Your Name" class="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div>
        <label for="email" class="block mb-2 font-medium text-gray-700">Email</label>
        <input type="email" id="email" placeholder="you@example.com" class="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div>
        <label for="subject" class="block mb-2 font-medium text-gray-700">Subject</label>
        <input type="text" id="subject" placeholder="Subject" class="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div>
        <label for="message" class="block mb-2 font-medium text-gray-700">Message</label>
        <textarea id="message" rows="5" placeholder="Write your message here..." class="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>

      <button type="submit" class="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition duration-300">
        Send Message
      </button>
    </form>
  </section>
</template>


