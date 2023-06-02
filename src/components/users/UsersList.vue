<template>
  <div class="users-list">
    <v-card class="mx-auto">
      <v-list lines="two">
        <v-list-subheader :title="'List'"></v-list-subheader>
        <UsersListItem v-for="item in users" :item="item" :key="item.id" />
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import UsersService from '../services/UsersService';
import { useUsersStore } from '../../stores/UsersStore'
import UsersListItem from './UsersListItem.vue';

export default {
  name: 'UsersList',
  components: {
    UsersListItem,
  },
  setup () {
    // Инициализируем сервис пользователей
    const usersService = new UsersService()

    // Инициализируем стор
    const store = useUsersStore()

    // Загружаем список пользователей через сервис
    usersService.loadUsers()

    // Получаем из стора список пользователей
    const users = computed(() => store.getUsers)

    return { users }
  },
};
</script>
