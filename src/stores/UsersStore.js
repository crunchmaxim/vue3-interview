import { defineStore } from 'pinia'
import { filterUsersByCountry, filterUsersByScore } from '../utils'

export const useUsersStore = defineStore('UsersStore', {
  // state
  state: () => {
    return {
      users: [],
      countyFilter: null,
      scoreFilter: null,
    }
  },

  // actions
  actions: {
    setUsers (users) {
      this.users = users
    },
    setCountryFilter (value) {
      this.countyFilter = value
    },
    setScoreFilter (value) {
      this.scoreFilter = value
    },
  },

  // getters
  getters: {
    getUsers () {
      let users = this.users.slice()

      if (this.countyFilter) {
        // Функция фильтрации по country из utils.js.
        users = filterUsersByCountry(users, this.countyFilter)
      }

      if (this.scoreFilter) {
        // Функция фильтрации по score из utils.js.
        users = filterUsersByScore(users, this.scoreFilter)
      }

      return users
    }
  }
})