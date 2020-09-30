<template>
  <v-container grid-list-xs>
    <div class="text-center">
      <h1>Admin route</h1>
      <v-btn color="warning" @click="signout()">SignOut</v-btn>
    </div>
  </v-container>
</template>

<script>
import { auth } from '@/services/firebase'
import Cookie from 'js-cookie'
export default {
  methods: {
    async signout() {
      await auth.signOut()
      await Cookie.remove('access_token')

      location.href = '/'
    },
  },
}
</script>

<style></style>
