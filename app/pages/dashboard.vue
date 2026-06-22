<!-- pages/dashboard.vue -->
<script setup>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const userStore = useUserStore()

if (userStore.users.length === 0) {
  await userStore.fetchUsers()
}

const chartData = computed(() => ({
  labels: ['Active', 'Inactive'],
  datasets: [
    {
      data: [userStore.activeUsers, userStore.inactiveUsers],
      backgroundColor: ['#22c55e', '#ef4444'],
      hoverBackgroundColor: ['#16a34a', '#dc2626']
    }
  ]
}))

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'bottom' }
  }
}
</script>

<template>
  <div>
    <Navbar />

    <div class="flex justify-end mt-6 mr-4">
  <input
    v-model="search"
    type="text"
    placeholder="Search users..."
    class="border rounded-lg px-4 py-2 w-64 shadow"
  >
</div>

    <div class="p-8">
      <h1 class="text-3xl font-bold mb-6">Dashboard</h1>

      <div v-if="userStore.pending">Loading...</div>
      <div v-else-if="userStore.error">{{ userStore.error }}</div>

      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Stat cards -->
        <div class="bg-yellow-400 p-4 rounded shadow text-center">
          <p class="text-sm text-black">Total Users</p>
          <p class="text-2xl font-bold">{{ userStore.totalUsers }}</p>
        </div>
        <div class="bg-green-400 p-4 rounded shadow text-center">
          <p class="text-sm text-black">Active</p>
          <p class="text-2xl font-bold text-green-600">{{ userStore.activeUsers }}</p>
        </div>
        <div class="bg-red-400 p-4 rounded shadow text-center">
          <p class="text-sm text-black">Inactive</p>
          <p class="text-2xl font-bold text-red-600">{{ userStore.inactiveUsers }}</p>
        </div>
      </div>

    <div class="p-6 rounded mt-6 w-72 h-72 mx-auto">
        <Pie :data="chartData" :options="chartOptions" />
      </div>

     <div class="mt-10">
  <h2 class="text-2xl font-bold mb-4">
    Users
  </h2>

  <div class="overflow-x-auto bg-white rounded shadow">
    <table class="w-full">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-3 text-left">ID</th>
          <th class="p-3 text-left">Name</th>
          <th class="p-3 text-left">Email</th>
          <th class="p-3 text-left">Status</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="user in userStore.users"
          :key="user.id"
          class="border-t hover:bg-gray-50"
        >
          <td class="p-3">
            {{ user.id }}
          </td>

          <td class="p-3">
            {{ user.firstName }}
            {{ user.lastName }}
          </td>

          <td class="p-3">
            {{ user.email }}
          </td>

          <td class="p-3">
            <span
              class="font-semibold"
              :class="
                user.active
                  ? 'text-green-600'
                  : 'text-red-600'
              "
            >
              {{ user.active ? 'Active' : 'Inactive' }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


    </div>
  </div>
</template>