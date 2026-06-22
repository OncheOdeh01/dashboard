<script setup>
const email = ref('')
const password = ref('')

const login = () => {
  console.log(email.value)
  console.log(password.value)

  navigateTo('/dashboard')
}

</script>

<template>
  
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

      <h1 class="text-4xl text-center font-serif mb-8 ">
        login
      </h1>

      <form @submit.prevent="login">

       <div class="mb-4">
        <label class="block mb-2">
          Email
        </label>

        <input
        v-model="email"
        type="email"
        class="w-full border rounded-md p-2">
       </div>

       <div class="mb-6">
        <label class="block mb-2">
          Password
        </label>

         <input
        v-model="password"
        type="password"
        class="w-full border rounded-md p-2">
       </div>

       <button class="w-full bg-blue-600 text-white py-2 rounded">
        login
       </button>

       <NuxtLink
        to="/"
          class="text-blue-600 hover:underline mt-6 inline-block"
          >
          ← Back to Home
          </NuxtLink>


      </form>

    </div>
    </div>
  
</template>