<template>
  <v-container>
    <template>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title
                ><v-icon>mdi-login</v-icon> เข้าสู่ระบบ</v-toolbar-title
              >
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
              <v-btn
                x-large
                color="primary"
                @click="signin()"
                :loading="loading"
                :disabled="loading"
                block
                ><span><b>เข้าสู่ระบบ</b></span></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
export default {
  layout: 'login',
  head() {
    return {
      title: 'เข้าสู่ระบบ',
      meta: [
        {
          hid: 'login',
          name: 'login',
          content: 'หน้าเข้าสู่ระบบ',
        },
      ],
    }
  },
  data() {
    return {
      account: {
        email: '',
        password: '',
      },
      isError: false,
      errMsg: '',
      loading: false,
    }
  },
  methods: {
    async signin() {
      // TODO: add parsing of data
      this.loading = true
      await this.$store
        .dispatch('users/login', this.account)
        .then(() => {
          // this.$router.go('/admin') => not work
          window.location.replace('/admin')
        })
        .catch((error) => {
          this.isError = true
          this.errMsg = error.code
          setTimeout(() => {
            this.isError = false
          }, 5000)
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style></style>
