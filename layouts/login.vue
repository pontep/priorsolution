<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32">
          <img
            src="https://avatars0.githubusercontent.com/u/24294686?s=460&v=4"
            alt="John"
          />
        </v-avatar>

        <span><h4>PONTEP RESTAURANT</h4></span>

        <v-spacer></v-spacer>

        <v-btn
          color="primary"
          to="/login"
          :loading="loading"
          :disabled="loading"
          text
          ><v-icon>mdi-login</v-icon>Sign In</v-btn
        >
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list>
                <v-list-item-group mandatory color="primary" v-model="model">
                  <v-list-item
                    v-for="(item, i) in navigations"
                    :key="i"
                    link
                    @click="handleTo(item.to)"
                  >
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="item.title"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>

                <v-divider class="my-2"></v-divider>
                <about-din-vue />
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <v-container>
                <nuxt />
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { auth } from '@/services/firebase'
import Cookie from 'js-cookie'
import aboutDinVue from '~/components/aboutDin.vue'

export default {
  components: { aboutDinVue },
  data: () => ({
    loading: false,
    model: undefined,
    // links: ['Dashboard', 'Messages', 'Profile', 'Updates'],
    navigations: [
      {
        title: 'หน้าแรก',
        to: '/',
        icon: 'mdi-home',
      },
      {
        title: 'เข้าสู่ระบบ',
        to: '/login',
        icon: 'mdi-login',
      },
    ],
    pontep: [
      {
        title: 'GitHub repository',
        to: 'https://github.com/pontep/priorsolution/',
        icon: 'mdi-github',
      },
      {
        title: 'Facebook',
        to: 'https://www.facebook.com/pontepthaweesup/',
        icon: 'mdi-facebook',
      },
    ],
  }),
  mounted() {
    var currentUrl = window.location.pathname
    this.model = this.navigations
      .map((e) => {
        return e.to
      })
      .indexOf(currentUrl)
  },
  methods: {
    handleTo(i) {
      this.$router.push(i)
    },
  },
}
</script>
