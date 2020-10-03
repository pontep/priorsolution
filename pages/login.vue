<template>
  <v-container>
    <template>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Sign In</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form @submit.prevent>
                <v-text-field
                  label="Email"
                  id="nuxtfire-email"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="account.email"
                />
                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model="account.password"
                />
                <div class="text--accent-4" v-if="isError">
                  <p class="mb-0" style="color: red">{{ errMsg }}</p>
                </div>
              </v-form>
            </v-card-text>
            <v-card-actions class="d-flex align-center justify-center">
              <v-btn x-large color="primary" @click="signin()">Sign In</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </template>
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
          this.$router.go('/admin')
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
