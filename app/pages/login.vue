<script setup>
import { ref } from "vue"

const username = ref('')
const password = ref('')

const login = () => {
  localStorage.setItem('username', username.value)
  localStorage.setItem('password', password.value)

  navigateTo('/dashboard')
}
</script>

<template>
   <div class="min-h-screen flex items-center justify-center ">
    
    <div class=" p-8 rounded-2xl w-87.5 shadow-lg">
      
      <h1 class="text-3xl text-black font-bold mb-6 text-center underline">
        Welcome 
      </h1>

      <input
        v-model="username"
        type="text"
        placeholder="Username"
        class="w-full p-3 rounded-lg mb-4 bg-blue-400 text-white outline-none"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full p-3 rounded-lg mb-6 bg-blue-400 text-white outline-none"
      />

      <button
        @click="login"
        class="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-bold transition"
      >
        Login
      </button>

    </div>

  </div>
</template>