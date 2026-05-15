<script setup>
import { ref, onMounted } from 'vue'

const username = ref('')
const password = ref('')

onMounted(() => {
  username.value = localStorage.getItem('username')
  password.value = localStorage.getItem('password')
})
</script>

<template>
  <div class="min-h-screen  text-white p-10">
    
    <h1 class="text-4xl text-black underline font-bold mb-8">
      Dashboard
    </h1>

    <div class="bg-zinc-900 p-6 rounded-2xl max-w-md">
      
      <p class="text-xl mb-4">
        Username:
        <span class="font-bold text-blue-400">
          {{ username }}
        </span>
      </p>

      <p class="text-xl">
        Password:
        <span class="font-bold text-green-400">
          {{ password }}
        </span>
      </p>

       

    </div>
  
   <NuxtLink
        to="/login"
        class="inline-block bg-blue-500 hover:bg-blue-600 px-5 py-2 mt-6 rounded-lg font-bold transition"
      >
        Back To Login
      </NuxtLink>

  </div>
</template>