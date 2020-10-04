<template>
  <v-container>
    <v-card outlined class="mx-auto" max-width="400">
      <v-card-title primary>
        <v-icon>mdi-account</v-icon>
        <span>นายพรเทพ ทวีทรัพย์</span>
      </v-card-title>
      <v-divider class=""></v-divider>
      <v-card-text>
        <div class="ma-2">
          <v-row no-gutters>
            <span>
              <v-icon>mdi-school</v-icon> มหาวิทยาลัยเทคโนโลยีสุรนารี</span
            >
          </v-row>
          <v-row no-gutters>
            <span>
              <v-icon>mdi-account-details</v-icon> รหัสนักศึกษา B6000783</span
            >
          </v-row>

          <v-img
            class="my-2 grey lighten-3"
            src="/question.jpg"
            contain
            alt="Pontep Mission"
          ></v-img>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
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
