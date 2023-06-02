<template>
  <div class="users-list-item">
    <v-tooltip :text="item.address" location="start">
      <template v-slot:activator="{ props }">
        <v-list-item
          v-bind="props"
          :prepend-avatar="item.avatar"
        >
          <v-list-item-title v-html="item.title"></v-list-item-title>
          <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
        </v-list-item>
      </template>
    </v-tooltip>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'UsersListItem',
  props: {
    item: { required: true }
  }
};
</script>

<style>
.text--primary {
  color: rgb(var(--v-theme-primary)) !important;
}
</style>