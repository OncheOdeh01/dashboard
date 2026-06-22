<script setup lang="ts">
const userStore = useUserStore()

if (userStore.users.length === 0) {
  await userStore.fetchUsers()
}

const search = ref('')

const filteredUsers = computed(() => {
  return userStore.users.filter(user =>
    user.email.toLowerCase().includes(search.value.toLowerCase()) ||
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(search.value.toLowerCase())
  )
})
</script>

<template>
  <div>
    <Navbar />

    <div class="p-8">
      <div class="flex justify-end mb-6">
        <input
          v-model="search"
          placeholder="Search users..."
          class="border rounded-lg px-4 py-2 w-64"
        >
      </div>

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
              v-for="user in filteredUsers"
              :key="user.id"
              class="border-t"
            >
              <td class="p-3">{{ user.id }}</td>
              <td class="p-3">
                {{ user.firstName }} {{ user.lastName }}
              </td>
              <td class="p-3">{{ user.email }}</td>
              <td class="p-3">
                <span
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
</template>