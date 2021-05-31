<template>
  <v-app>  
    <component :is="layout"> 
      <router-view />
    </component>
  </v-app>
</template>

<script>
import { DEFAULT_LAYOUT_NAME } from '@/layouts/constants'

import AppDefaultLayout from '@/layouts/AppDefaultLayout'
import AppAuthLayout from '@/layouts/AppAuthLayout'

export default {
  name: 'App',

  components: {
    AppDefaultLayout,
    AppAuthLayout,
  },

  computed: {
    layout() {
      return this.$route.meta.layout || DEFAULT_LAYOUT_NAME
    },
  },
}
</script>