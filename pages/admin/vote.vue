<template>
  <v-container>
    <div>
      <v-card outlined class="mx-auto" max-width="auto">
        <v-card-title>
          <v-icon class="mx-2">mdi-wallet-plus-outline</v-icon>
          <span>โหวต</span>
        </v-card-title>
        <v-card-text>
          <v-card elevation="6" max-width="200">
            <v-card-title primary-title>
              <v-icon class="mr-2">mdi-account</v-icon> ทักษิน ชินวัฒน์
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-img
                height="200"
                width="200"
                src="https://forbesthailand.com/wp-content/uploads/2019/05/19-%E0%B8%97%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%B4%E0%B8%93-%E0%B8%8A%E0%B8%B4%E0%B8%99%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%A3.jpg"
              ></v-img>
              <div class="mx-auto">
                <v-row>
                  <span>
                    <v-icon>mdi-flag</v-icon>
                    พรรคเพื่อไทย
                  </span>
                </v-row>
                <v-row>
                  <span>
                    <v-icon>mdi-square</v-icon>
                    เบอร์ 9
                  </span>
                </v-row>
              </div>
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="primary" text block>Vote</v-btn>
            </v-card-actions>
          </v-card>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import booking from '@/components/booking'
import showbooking from '@/components/showbooking'
export default {
  components: {
    booking,
    showbooking,
  },
}
</script>

<style></style>
