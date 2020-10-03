<template>
  <v-container>
    <link
      type="text/css"
      rel="stylesheet"
      href="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.css"
    />
    <!-- The surrounding HTML is left untouched by FirebaseUI.
     Your app may use that space for branding, controls and other customizations.-->
    <v-row>
      <v-col cols="4"> </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-title primary class="text-center">
            Sign in to application
          </v-card-title>
          <v-card-text>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  //   layout: 'login',
  data() {
    return {
      account: {
        email: '',
        password: '',
      },
      isError: false,
      errMsg: '',
      ui: undefined,
    }
  },
  mounted() {
    var firebase = require('firebase')
    var firebaseui = require('firebaseui')
    // Initialize the FirebaseUI Widget using Firebase.
    this.ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth())
    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          // User successfully signed in.
          console.log(JSON.parse(JSON.stringify(authResult)))
          return
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
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true
        },
        uiShown: function () {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById('loader').style.display = 'none'
        },
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: 'popup',
      signInSuccessUrl: '/admin',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      ],
      // Terms of service url.
      tosUrl: 'https://www.facebook.com/pontepthaweesup/',
      // Privacy policy url.
      privacyPolicyUrl: 'https://www.facebook.com/pontepthaweesup/',
    }
    // The start method will wait until the DOM is loaded.
    this.ui.start('#firebaseui-auth-container', uiConfig)
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
