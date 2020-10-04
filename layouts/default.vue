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

        <!-- <v-btn v-for="item in navigations" :key="item.title" text :to="item.to">
          {{ item.title }}
        </v-btn> -->

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>

        <v-btn
          color="primary"
          @click="signout()"
          :loading="loading"
          :disabled="loading"
          text
          >SignOut</v-btn
        >
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="item in navigations"
                  :key="item.title"
                  link
                  :to="item.to"
                >
                  <v-list-item-content>
                    <v-list-item-title> {{ item.title }} </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title> Refresh </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
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

export default {
  data: () => ({
    loading: false,
    // links: ['Dashboard', 'Messages', 'Profile', 'Updates'],
    navigations: [
      {
        title: 'หน้าหลัก',
        to: '/admin',
      },
      {
        title: 'จองร้านอาหาร',
        to: '/admin/booking',
      },
      {
        title: 'แสดงรายการจอง',
        to: '/admin/showbook',
      },
    ],
  }),
  methods: {
    async signout() {
      try {
        this.loading = true
        await auth.signOut()
        await Cookie.remove('access_token')
        location.href = '/'
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
