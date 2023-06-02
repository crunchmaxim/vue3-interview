<template>
  <v-app>
    <v-main>
      <ContentBlock />
    </v-main>

    <v-footer app v-bind="localAttrs">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import ContentBlock from './components/ContentBlock.vue';
import Footer from './components/Footer.vue';
import { computed } from '@vue/reactivity';
import UsersFilters from './components/users/UsersFilters.vue';
import UsersList from './components/users/UsersList.vue';

export default {
  name: 'App',
  components: {
    ContentBlock,
    Footer,
    UsersFilters,
    UsersList,
  },
  setup () {
    const localAttrs = computed(() => {
      const attrs = {}

      attrs.absolute = true
      attrs.fixed = false

      return attrs
    })
    return {
      localAttrs
    }
  },
};
</script>
