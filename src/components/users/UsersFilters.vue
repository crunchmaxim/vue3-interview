<template>
  <div class="users-filters">

    <v-select
      v-model="countryFilter"
      :items="countriesFilters"
      clearable
      label="Filter by country"
    ></v-select>

    <v-select
      v-model="scoreFilter"
      :items="scoresFilters"
      clearable
      label="Filter by score"
    ></v-select>

  </div>
</template>

<script>
import { ref } from 'vue';
import { CountriesEnum } from '../models';
import { watchEffect } from 'vue';
import { watch } from 'vue';
import { useUsersStore } from '../../stores/UsersStore';

export default {
  name: 'UsersFilters',
  setup () {
    const store = useUsersStore()

    let countryFilter = ref(null)
    let scoreFilter = ref(null)

    let countriesFilters = Object.values(CountriesEnum)

    let scoresFilters = [
      '> 20',
      '< 10',
    ]

    watch(
      () => countryFilter.value,
      () => store.setCountryFilter(countryFilter.value)
    )

    watch(
      () => scoreFilter.value,
      () => store.setScoreFilter(scoreFilter.value)
    )

    return { countriesFilters, scoresFilters, countryFilter, scoreFilter }
  },
};
</script>
