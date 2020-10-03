<template>
  <v-container>
    <script src="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.js"></script>
    <link
      type="text/css"
      rel="stylesheet"
      href="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.css"
    />
  </v-container>
</template>

<script>
import * as firebase from 'firebase/app'
export default {
  layout: 'login',
  data() {
    return {
      account: {
        email: '',
        password: '',
      },
      isError: false,
      errMsg: '',
    }
  },
  mounted() {
    const firebaseui = require('firebaseui')
    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false,
        },
      ],
    })
  },
  methods: {
    signin() {
      // TODO: add parsing of data
      this.$store
        .dispatch('users/login', this.account)
        .then(() => {
          this.$router.push('/admin')
        })
        .catch((error) => {
          this.isError = true
          this.errMsg = error.code
          setTimeout(() => {
            this.isError = false
          }, 5000)
        })
    },
  },
}
</script>

<style></style>
