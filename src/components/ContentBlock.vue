<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
      class="ma-4"
    >
      <v-col cols="12">
        <v-img
          :src="logoSrc"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <!-- Users filters -->
      <v-col cols="12" md="4">
        <UsersFilters />
      </v-col>

      <!-- Users list -->
      <v-col cols="12" md="4">
        <UsersList />
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  import UsersFilters from './users/UsersFilters.vue'
  import UsersList from './users/UsersList.vue'

  export default {
    name: 'ContentBlock',
    components: {
      UsersFilters,
      UsersList,
    },

    setup () {
      let logoSrc = new URL(`../assets/logo.svg`, import.meta.url).href

      return {
        logoSrc,
      }
    },
  }
</script>
