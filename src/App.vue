<template>
  <v-app>  
    <app-default-layout>
      <router-view />
    </app-default-layout>
  </v-app>
</template>

<script>
import AppDefaultLayout from '@/layouts/AppDefaultLayout'

export default {
  name: 'App',

  components: {
    AppDefaultLayout,
  },
};
</script>