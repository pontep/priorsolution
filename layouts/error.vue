<template>
  <v-app dark>
    <v-container fill-height fluid class="black">
      <v-row justify="center" align="center">
        <v-col class="text-center">
          <v-parallax
            height="500"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          >
            <h1 v-if="error.statusCode === 404">
              {{ pageNotFound }}
            </h1>
            <h1 v-else>
              {{ otherError }}
            </h1>
            <NuxtLink to="/"> Home page </NuxtLink>
          </v-parallax>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'default-error',
  props: ['error'],

  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
