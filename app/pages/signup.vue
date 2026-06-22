<script setup lang="ts">
const userStore = useUserStore()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const error = ref('')

const signup = () => {
  error.value = ''

  if (
    !firstName.value ||
    !lastName.value ||
    !email.value ||
    !password.value
  ) {
    error.value = 'Please fill in all fields.'
    return
  }

  userStore.addUser({
    id: Date.now(),
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    active: true
  })

  navigateTo('/users')
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-4xl font-serif text-center mb-6">
        Signup
      </h1>
     
    <form @submit.prevent="signup">
        <input
  v-model="firstName"
  placeholder="First Name"
  class="w-full border p-2 rounded mb-4"
/>

<input
  v-model="lastName"
  placeholder="Last Name"
  class="w-full border p-2 rounded mb-4"
/>

<input
  v-model="email"
  type="email"
  placeholder="Email"
  class="w-full border p-2 rounded mb-4"
/>

<input
  v-model="password"
  type="password"
  placeholder="Password"
  class="w-full border p-2 rounded mb-4"
/>
<p v-if="error"
 class="text-red-500 mb-4 text-center">
 {{ error }}
</p>

<button class="w-full bg-green-600 text-white py-2 rounded">
   Create Account
  </button>


        <NuxtLink
        to="/"
        class="text-blue-600 hover:underline mt-4 inline-block"
        >
        ← Back to Home
        </NuxtLink>


    </form>

    </div>
    </div>
  
  </template>