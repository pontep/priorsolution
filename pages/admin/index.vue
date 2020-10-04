<template>
  <v-container grid-list-xs>
    <div class="text-center">
      <h1>Admin route</h1>
    </div>
  </v-container>
</template>

<script>
import { auth } from '@/services/firebase'
import Cookie from 'js-cookie'
export default {
  data() {
    return {
      loading: false,
    }
  },
  methods: {},
}
</script>

<style></style>
