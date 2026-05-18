<script setup>
import { ref, onMounted, computed } from 'vue'

const users = ref([])

onMounted(() => {
  const savedUsers = JSON.parse(localStorage.getItem('users'))
  if (savedUsers) {
    users.value = savedUsers
  }
})

const deleteUser = (index) => {
  users.value.splice(index, 1)
  localStorage.setItem('users', JSON.stringify(users.value))
}

const activeUsers = computed(() =>
  users.value.filter(u => u.status === 'online').length
)
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-white p-10">

    <h1 class="text-4xl font-bold mb-10">
      Dashboard
    </h1>

    <!-- Dashboard Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

      <div class="bg-zinc-900 p-6 rounded-2xl">
        <h2 class="text-zinc-400 mb-2">Total Users</h2>
        <p class="text-4xl font-bold text-blue-400">
          {{ users.length }}
        </p>
      </div>

      <div class="bg-zinc-900 p-6 rounded-2xl">
        <h2 class="text-zinc-400 mb-2">Active Status</h2>
        <p class="text-2xl font-bold text-green-400">Online!</p>
      </div>

      <div class="bg-zinc-900 p-6 rounded-2xl">
        <h2 class="text-zinc-400 mb-2">Storage</h2>
        <p class="text-2xl font-bold text-yellow-400">Running!</p>
      </div>

    </div>

    <!-- User Table -->
    <div class="bg-zinc-900 rounded-2xl overflow-hidden">
      <table class="w-full text-left">

        <thead class="bg-zinc-800">
          <tr>
            <th class="p-4">#</th>
            <th class="p-4">Username</th>
            <th class="p-4">Password</th>
            <th class="p-4"></th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(user, index) in users"
            :key="index"
            class="border-t border-zinc-800"
          >
            <td class="p-4">{{ index + 1 }}</td>

            <td class="p-4 text-blue-400 font-bold">
              {{ user.username }}
            </td>

            <td class="p-4">*******</td>

            <td class="p-4">
              <button
                @click="deleteUser(index)"
                class="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg transition"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>

    <!-- Back Button -->
    <NuxtLink
      to="/login"
      class="inline-block mt-8 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-bold transition"
    >
      Back To Login
    </NuxtLink>

  </div>
</template>