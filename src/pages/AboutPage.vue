<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <section class="relative h-80 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
      <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 class="text-4xl md:text-5xl font-extrabold animate-fade-in-slow">About MyShop</h1>
        <p class="text-lg mt-3 animate-slide-up">Delivering Innovation at Your Fingertips</p>
      </div>
    </section>

    <!-- Who We Are -->
    <section class="max-w-6xl mx-auto py-16 px-6 text-center">
      <h2 class="text-3xl font-bold text-blue-700 mb-4 animate-fade-in-slow">Who We Are</h2>
      <p class="text-gray-600 text-lg leading-relaxed animate-slide-up">
        MyShop is a forward-thinking e-commerce platform specializing in electronics and smart gadgets.
        Since our inception in 2023, we’ve been committed to bridging the gap between people and
        cutting-edge technology by providing high-quality products at transparent prices.
      </p>
    </section>

    <!-- Mission & Values -->
    <section class="bg-gray-100 py-16 px-6">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-blue-700 mb-6 animate-fade-in-slow">Our Mission & Values</h2>
        <div class="grid md:grid-cols-3 gap-8 text-left">
          <div class="bg-white p-6 rounded-xl shadow animate-slide-up">
            <h3 class="text-xl font-semibold text-blue-600 mb-2">Innovation</h3>
            <p>We continuously evolve to offer the latest tech innovations and user-centric shopping experiences.</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow animate-slide-up delay-100">
            <h3 class="text-xl font-semibold text-blue-600 mb-2">Integrity</h3>
            <p>We prioritize honest pricing, clear policies, and customer-first decisions in everything we do.</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow animate-slide-up delay-200">
            <h3 class="text-xl font-semibold text-blue-600 mb-2">Accessibility</h3>
            <p>Everyone deserves access to smart gadgets—our platform ensures affordability and reachability.</p>
          </div>
        </div>
      </div>
    </section>



    <!-- Our Process -->
    <section class="max-w-6xl mx-auto py-20 px-6">
      <h2 class="text-3xl font-bold text-blue-700 text-center mb-10 animate-fade-in-slow">How We Work</h2>
      <div class="grid md:grid-cols-4 gap-6 text-center">
        <div class="p-4 animate-slide-up">
          <img src="https://img.icons8.com/ios-filled/100/shopping-cart.png" class="mx-auto w-14 mb-3" />
          <h4 class="font-semibold mb-2">Curate Products</h4>
          <p class="text-gray-600">We handpick trending and reliable gadgets with real-world reviews.</p>
        </div>
        <div class="p-4 animate-slide-up delay-100">
          <img src="https://img.icons8.com/ios-filled/100/checked--v1.png" class="mx-auto w-14 mb-3" />
          <h4 class="font-semibold mb-2">Quality Assurance</h4>
          <p class="text-gray-600">Each product goes through rigorous quality checks before listing.</p>
        </div>
        <div class="p-4 animate-slide-up delay-200">
          <img src="https://img.icons8.com/ios-filled/100/delivery.png" class="mx-auto w-14 mb-3" />
          <h4 class="font-semibold mb-2">Fast Shipping</h4>
          <p class="text-gray-600">We offer quick and reliable delivery across India within 3–5 business days.</p>
        </div>
        <div class="p-4 animate-slide-up delay-300">
          <img src="https://img.icons8.com/ios-filled/100/customer-support.png" class="mx-auto w-14 mb-3" />
          <h4 class="font-semibold mb-2">Customer Support</h4>
          <p class="text-gray-600">Need help? Our live support team is available 24/7 for all your needs.</p>
        </div>
      </div>
    </section>

    
<!-- Careers Section -->
<section class="bg-white py-20 px-6">
  <div class="max-w-6xl mx-auto text-center">
    <h2 class="text-3xl font-bold text-blue-700 mb-4">We're Hiring!</h2>
    <p class="text-gray-600 mb-12 text-lg">
      Join a fast-growing team shaping the future of e-commerce. We value creativity, ownership, and passion for impact.
    </p>

    <div class="grid md:grid-cols-3 gap-8 text-left">
      <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 hover:-translate-y-1">
        <h4 class="text-xl font-semibold text-blue-700 mb-1">Frontend Developer</h4>
        <p class="text-gray-600 mb-2 text-sm">Location: Remote | Type: Full-time</p>
        <p class="text-gray-700 text-sm">Build responsive UIs using Vue or React. Experience with Tailwind, component libraries, and version control required.</p>
      </div>

      <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 hover:-translate-y-1">
        <h4 class="text-xl font-semibold text-blue-700 mb-1">Marketing Executive</h4>
        <p class="text-gray-600 mb-2 text-sm">Location: Mumbai | Type: Full-time</p>
        <p class="text-gray-700 text-sm">Create and manage campaigns, SEO optimization, brand outreach, and performance marketing analytics.</p>
      </div>

      <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 hover:-translate-y-1">
        <h4 class="text-xl font-semibold text-blue-700 mb-1">Customer Success Specialist</h4>
        <p class="text-gray-600 mb-2 text-sm">Location: Remote | Type: Part-time</p>
        <p class="text-gray-700 text-sm">Assist customers, resolve issues, and deliver delightful support via chat, email, and calls.</p>
      </div>

      <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 hover:-translate-y-1">
        <h4 class="text-xl font-semibold text-blue-700 mb-1">Backend Developer</h4>
        <p class="text-gray-600 mb-2 text-sm">Location: Bengaluru | Type: Full-time</p>
        <p class="text-gray-700 text-sm">Work with Node.js, databases (MongoDB/MySQL), REST APIs, and deployment pipelines.</p>
      </div>

      <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 hover:-translate-y-1">
        <h4 class="text-xl font-semibold text-blue-700 mb-1">UI/UX Designer</h4>
        <p class="text-gray-600 mb-2 text-sm">Location: Remote | Type: Freelance</p>
        <p class="text-gray-700 text-sm">Design user-friendly interfaces with Figma/Adobe XD. Experience in wireframing and usability testing preferred.</p>
      </div>

      <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 hover:-translate-y-1">
        <h4 class="text-xl font-semibold text-blue-700 mb-1">Operations Intern</h4>
        <p class="text-gray-600 mb-2 text-sm">Location: Nagpur | Type: Internship</p>
        <p class="text-gray-700 text-sm">Support logistics, order fulfillment, and day-to-day operations. Suitable for recent graduates.</p>
      </div>
    </div>

    <button class="mt-12 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300">
      View All Openings
    </button>
  </div>
</section>


    <!-- Testimonials -->
    <section class="bg-blue-50 py-20 px-6">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-blue-700 mb-10 animate-fade-in-slow">What Our Customers Say</h2>
        <div class="grid md:grid-cols-2 gap-8 text-left">
          <div class="bg-white p-6 rounded-lg shadow animate-slide-up">
            <p class="text-gray-700 italic">“Best online store for tech. Ordered a smartwatch and got it in 2 days. Amazing support!”</p>
            <p class="mt-3 font-bold text-blue-700">— Neha K., Mumbai</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow animate-slide-up delay-100">
            <p class="text-gray-700 italic">“They have unbeatable prices! I saved ₹1500 on my latest phone purchase.”</p>
            <p class="mt-3 font-bold text-blue-700">— Ravi S., Bengaluru</p>
          </div>
        </div>
      </div>
    </section>
<section class="bg-white py-16 px-6">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-3xl font-bold text-blue-700 mb-4">Stay in the Loop</h2>
    <p class="text-gray-600 mb-6">Subscribe to get updates on new arrivals, offers, and exclusive deals.</p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <input type="email" placeholder="Enter your email" class="w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button
  @click="handleSubscribe"
  type="button"
  class="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
>
  Subscribe
</button>

    </div>
  </div>
</section>








<!-- FAQ Section -->
<section class="bg-gray-100 py-16 px-6">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-3xl font-bold text-blue-700 text-center mb-8">Frequently Asked Questions</h2>
    <div class="space-y-6">

      <details class="bg-white p-5 rounded-md shadow">
        <summary class="font-semibold cursor-pointer text-blue-600">What is the delivery time?</summary>
        <p class="mt-2 text-gray-600">We typically deliver products within 3–5 business days across India, depending on your location and availability of the item.</p>
      </details>

      <details class="bg-white p-5 rounded-md shadow">
        <summary class="font-semibold cursor-pointer text-blue-600">What payment methods do you accept?</summary>
        <p class="mt-2 text-gray-600">We accept all major debit/credit cards, UPI, net banking, Paytm, and cash on delivery for eligible items.</p>
      </details>

      <details class="bg-white p-5 rounded-md shadow">
        <summary class="font-semibold cursor-pointer text-blue-600">Can I return my order?</summary>
        <p class="mt-2 text-gray-600">Yes, we offer a 7-day easy return policy on most items. Products must be in original condition and packaging. Please refer to our Returns & Refunds page for full details.</p>
      </details>

      <details class="bg-white p-5 rounded-md shadow">
        <summary class="font-semibold cursor-pointer text-blue-600">Do you provide a warranty on products?</summary>
        <p class="mt-2 text-gray-600">Yes, most electronics and gadgets come with a manufacturer warranty ranging from 6 to 12 months. Warranty information is listed on each product page.</p>
      </details>

      <details class="bg-white p-5 rounded-md shadow">
        <summary class="font-semibold cursor-pointer text-blue-600">How can I track my order?</summary>
        <p class="mt-2 text-gray-600">Once your order is shipped, you’ll receive a tracking link via email and SMS. You can also check the status in the “My Orders” section of your account.</p>
      </details>

      <details class="bg-white p-5 rounded-md shadow">
        <summary class="font-semibold cursor-pointer text-blue-600">Is shopping on MyShop secure?</summary>
        <p class="mt-2 text-gray-600">Absolutely! We use SSL encryption and partner with trusted payment gateways to ensure a safe and secure shopping experience for our customers.</p>
      </details>

    </div>
  </div>
</section>

    <!-- Secure Shopping -->
    <section class="bg-gradient-to-r from-green-600 to-green-500 text-white py-16 px-6 text-center">
      <h2 class="text-3xl font-bold mb-4 animate-fade-in-slow">Your Security, Our Priority</h2>
      <p class="max-w-3xl mx-auto text-lg animate-slide-up">
        We use the latest encryption technologies and partner with trusted payment gateways to ensure your personal and payment information remains safe at every step.
      </p>
    </section>
    <div
  v-if="showToast"
  class="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-up"
>
  {{ toastMessage }}
</div>


    <!-- Footer -->
   <Footer/>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue';

import { ref } from 'vue'

const showToast = ref(false)
const toastMessage = ref('')

const handleSubscribe = () => {
  toastMessage.value =`✅ Subscribed successfully `
  showToast.value = true

  setTimeout(() => {
    showToast.value = false
    toastMessage.value = ''
  }, 2000)
}

</script>

<style scoped>
@keyframes fade-in-slow {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-slow {
  animation: fade-in-slow 1s ease-out both;
}
.animate-slide-up {
  animation: slide-up 0.8s ease-out both;
}
.delay-100 {
  animation-delay: 0.1s;
}
.delay-200 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.3s;
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
