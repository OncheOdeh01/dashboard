export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  password?:string
  active: boolean
}

interface UserResponse {
  users: User[]
}

export const useUserStore = defineStore('users', {
  state: () => ({
    users: [] as User[]
  }),

  getters: {
    totalUsers: (state) => state.users.length,

    activeUsers: (state) =>
      state.users.filter(user => user.active).length,

    inactiveUsers: (state) =>
      state.users.filter(user => !user.active).length
  },

actions: {
  async fetchUsers() {
    const data = await $fetch<UserResponse>(
      'https://dummyjson.com/users?limit=30'
    )

    const apiUsers = data.users.map(user => ({
      ...user,
      active: Math.random() > 0.5,
      password: ''
    }))

    let customUsers: User[] = []

    if (import.meta.client) {
      const savedUsers =
        localStorage.getItem('customUsers')

      customUsers = savedUsers
        ? JSON.parse(savedUsers)
        : []
    }

    this.users = [...apiUsers, ...customUsers]
  },

  addUser(user: User) {
    this.users.push(user)

    if (import.meta.client) {
      const customUsers = this.users.filter(
        user => user.password
      )

      localStorage.setItem(
        'customUsers',
        JSON.stringify(customUsers)
      )
    }
  }
}
})