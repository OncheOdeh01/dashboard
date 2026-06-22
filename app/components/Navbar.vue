<template>
  <nav class="bg-blue-600 text-white p-4">
  <div class="container mx-auto flex justify-between">
    <h1 class="font-bold">
        Welcome to My Nuxt App
    </h1>

    <div class="space-x-4 font-bold">
    <NuxtLink to="/dashboard">
        Dashboard
    </NuxtLink>

    <NuxtLink to="/login">
        Login
    </NuxtLink>

    <NuxtLink to="/signup">
        Sign-Up
    </NuxtLink>
   </div>
  </div>
  </nav>
</template>