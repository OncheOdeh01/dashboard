<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const login = () => {
  if (!username.value || !password.value) {
    alert('Please enter both username and password')
    return
  }

  const newUser = {
    username: username.value,
    password: password.value
  }

  const users =
    JSON.parse(localStorage.getItem('users')) || []

  users.push(newUser)

  localStorage.setItem('users', JSON.stringify(users))

  navigateTo('/dashboard')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">

    <div class=" p-8 bg-black rounded-2xl w-87.5">

      <h1 class="text-white text-3xl font-bold mb-6 text-center">
        Welcome 
      </h1>

      <input
        v-model="username"
        placeholder="Username"
        class="w-full p-3 mb-4 rounded bg-green-400 text-white"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full p-3 mb-6 rounded bg-green-400 text-white"
      />

      <button
        @click="login"
        class="w-full bg-blue-500 hover:bg-blue-600 p-3 rounded text-white font-bold"
      >
        Login
      </button>

    </div>

  </div>
</template>