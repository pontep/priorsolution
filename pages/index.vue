<template>
  <v-container grid-list-md>
    <div class="text-center">
      <v-form @submit.prevent>
        <v-text-field
          v-model="account.email"
          label="Email"
          id="nuxtfire-email"
        ></v-text-field>
        <v-text-field
          v-model="account.password"
          label="Enter your password"
          hint="At least 8 characters"
        ></v-text-field>
        <v-btn color="primary" @click="signin()">SignIn</v-btn>
        <div class="alert alert-danger" v-if="isError">
          <p class="mb-0">{{ errMsg }}</p>
        </div>
      </v-form>
    </div>
  </v-container>
</template>

<script>
export default {
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
