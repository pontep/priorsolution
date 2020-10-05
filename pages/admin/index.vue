<template>
  <v-container>
    <v-card outlined class="mx-auto" max-width="500">
      <v-card-title primary class="d-flex justify-center">
        <div>
          <v-icon>mdi-account</v-icon>
          <span>นายพรเทพ ทวีทรัพย์</span>
        </div>
      </v-card-title>
      <v-divider class=""></v-divider>
      <v-card-text>
        <div class="ma-2">
          <v-row no-gutters justify="center">
            <span class="my-0">
              <v-icon>mdi-school</v-icon> มหาวิทยาลัยเทคโนโลยีสุรนารี</span
            >
          </v-row>
          <v-row no-gutters justify="center">
            <span class="my-2">
              <v-icon>mdi-account-details</v-icon> รหัสนักศึกษา B6000783</span
            >
          </v-row>
          <!-- <v-btn color="info" @click="test()">test</v-btn> -->
          <v-divider class="my-4"></v-divider>
          <v-row no-gutters>
            <span class="my-2">
              <v-icon>mdi-comment-question-outline</v-icon> โจทย์</span
            >
          </v-row>
          <v-row no-gutters>
            <v-img
              class="grey lighten-3"
              src="/question.jpg"
              contain
              alt="Pontep Mission"
            ></v-img>
          </v-row>
        </div>
      </v-card-text>
      <v-divider class="my-4"></v-divider>
      <v-card-actions class="d-flex justify-center">
        <div>
          <v-btn
            icon
            href="https://github.com/pontep"
            target="_blank"
            color="black"
            ><v-icon>mdi-github</v-icon></v-btn
          >
          <v-btn
            icon
            href="https://facebook.com/pontepthaweesup"
            target="_blank"
            color="primary"
            ><v-icon>mdi-facebook</v-icon></v-btn
          >
          <v-btn
            icon
            href="https://www.instagram.com/pontep.thaweesup/"
            target="_blank"
            color="brown"
            ><v-icon>mdi-instagram</v-icon></v-btn
          >
        </div>
      </v-card-actions>
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
  methods: {
    test() {
      this.$notify({
        group: 'foo',
        title: 'Important message',
        text: 'Hello user! This is a notification!',
        type: 'accent',
      })
    },
  },
}
</script>
