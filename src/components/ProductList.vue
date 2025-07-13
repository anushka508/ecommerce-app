<template>
  <section class="bg-white  px-4">
    <div class="max-w-7xl mx-auto ">
     

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white border border-gray-200 rounded-2xl  shadow-sm hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
        >
          <!-- Image -->
          <div class="pt-5 pb-5 h-56 flex items-center justify-center overflow-hidden">
            <img
              :src="product.img || fallbackImage"
              alt="Product Image"
              class="h-full object-contain transition-transform duration-300"
            />
          </div>

          <!-- Info -->
          <div class="p-5 text-center">
            <h2 class="text-xl font-semibold text-gray-800 mb-1">{{ product.name }}</h2>
            <p class="text-gray-500 text-lg font-medium mb-2">₹{{ product.price.toLocaleString() }}</p>
            <p class="text-sm text-gray-600">{{ product.description }}</p>
          </div>

          <!-- Buttons -->
          <div class="border-t mb-8 px-5 py-6 mt-auto flex flex-wrap md:flex md:flex-nowrap  gap-4  justify-between items-center">
            <button
              @click="addToCart(product)"
              class="bg-blue-600 hover:bg-blue-700 text-white w-full  py-2 rounded-md font-medium transition"
            >
              Add to Cart
            </button>

            <button
              @click="() => handleOrder(product)"
              class="bg-green-600 hover:bg-green-700 text-white w-full  py-2 rounded-md font-medium transition"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCart } from '../composables/useCart'
import { useRouter } from 'vue-router'
import Mobile from '../assets/images/Mobile.jpg'
import Laptop from '../assets/images/Laptop2.webp'
import Tablet from "../assets/images/Tablet.webp"
import Computer from "../assets/images/Computer.jpg"
import SmartWatch from "../assets/images/SmartWatch.webp"
import BluetoothSpeaker from "../assets/images/BluetoothSpeaker.jpeg"
import GamingConsole from "../assets/images/GamingConsole.webp"
import WirelessHeadphones from "../assets/images/WirelessHeadphones.jpg"
import Monitor from "../assets/images/Monitor.jpg"
import KeyboardMouseCombo from '../assets/images/KeyboardMouseCombo.webp'
import WiFiRouter from '../assets/images/WiFiRouterImage.webp'
import ExternalHardDrive from "../assets/images/ExternalHardDrive.webp"
import Webcam from "../assets/images/Webcam.webp"
import Printer from '../assets/images/Printer.webp'
import VRHeadset from "../assets/images/VRHeadset.jpg"

const { addToCart, orderProduct } = useCart()
const router = useRouter()

const fallbackImage = 'https://via.placeholder.com/150'

const products = [
  
  {
    id: 1,
    name: 'Laptop',
    price: 40000,
    img: Laptop,
    description: 'Powerful performance with sleek design. Ideal for work and gaming.'
  },
  {
    id: 2,
    name: 'Phone',
    price: 20000,
    img: Mobile,
    description: 'Feature-packed smartphone with a stunning display and long battery life.'
  },
  {
    id: 3,
    name: 'Tablet',
    price: 15000,
    img: Tablet,
    description: 'Perfect for reading, browsing, and entertainment on the go.'
  },
  {
    id: 4,
    name: 'Computer',
    price: 50000,
    img: Computer,
    description: 'High-performance desktop for multitasking, gaming, and productivity.'
  },
  {
    id: 5,
    name: 'Smartwatch',
    price: 7000,
    img: SmartWatch ,
    description: 'Stay connected with style. Tracks health, notifications, and workouts.'
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    price: 3000,
    img: BluetoothSpeaker,
    description: 'Portable and powerful speaker with deep bass and waterproof design.'
  },
  {
    id: 7,
    name: 'Gaming Console',
    price: 35000,
    img: GamingConsole,
    description: 'Next-gen gaming experience with ultra-fast load times and immersive visuals.'
  },
  {
    id: 8,
    name: 'Wireless Headphones',
    price: 4500,
    img: WirelessHeadphones,
    description: 'Noise-cancelling wireless headphones with long battery life and crisp audio.'
  },
  {
    id: 9,
    name: 'Monitor',
    price: 12000,
    img: Monitor,
    description: '24-inch full HD monitor with eye-care technology and vibrant colors.'
  },
  {
    id: 10,
    name: 'Keyboard & Mouse Combo',
    price: 1500,
    img: KeyboardMouseCombo,
    description: 'Ergonomic keyboard and mouse combo for seamless productivity.'
  },
  {
    id: 11,
    name: 'WiFi Router',
    price: 2500,
    img: WiFiRouter,
    description: 'Dual-band WiFi router with wide coverage and fast speed.'
  },
  {
    id: 12,
    name: 'External Hard Drive',
    price: 6000,
    img: ExternalHardDrive,
    description: '1TB portable external hard drive for secure data storage.'
  },
  {
    id: 13,
    name: 'Webcam',
    price: 2200,
    img: Webcam,
    description: '1080p HD webcam with built-in microphone for video calls and streaming.'
  },
  {
    id: 14,
    name: 'Printer',
    price: 8000,
    img: Printer,
    description: 'All-in-one color printer for scanning, copying, and printing at home.'
  },
  {
    id: 15,
    name: 'VR Headset',
    price: 18000,
    img: VRHeadset,
    description: 'Immersive virtual reality headset for gaming and 3D experiences.'
  }
]


const handleOrder = (product) => {
  orderProduct(product)
  router.push('/orders')
}
</script>
