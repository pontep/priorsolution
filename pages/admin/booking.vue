<template>
  <v-container>
    <v-card outlined class="mx-auto" max-width="400">
      <v-card-title>
        <v-icon class="mx-2">mdi-wallet-plus-outline</v-icon>
        <span>เพิ่มการจอง</span>
      </v-card-title>
      <v-form class="px-10">
        <v-text-field
          label="ชื่อผู้จอง"
          v-model="booking.name"
          prepend-inner-icon="mdi-account"
        ></v-text-field>
        <v-text-field
          label="เบอร์โทรศัพท์"
          prepend-inner-icon="mdi-phone"
          v-model="booking.phone"
        >
          <template v-slot:progress>
            <v-progress-linear
              :value="progress"
              :color="color"
              absolute
              height="7"
            ></v-progress-linear>
          </template>
        </v-text-field>

        <v-row>
          <v-col>
            <v-text-field
              outlined
              prepend-inner-icon="mdi-seat"
              label="จำนวนที่นั่ง"
              v-model="booking.seat"
              type="number"
            />
          </v-col>
          <v-col>
            <v-select
              prepend-inner-icon="mdi-clock"
              v-model="booking.time"
              :items="times"
              label="เวลา"
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-row justify="center">
          <div class="text-center">
            <v-date-picker
              year-icon="mdi-food"
              full-width
              v-model="booking.date"
              elevation="12"
            ></v-date-picker>
          </div>
        </v-row>
      </v-form>

      <v-divider></v-divider>
      <v-card-actions>
        <v-btn @click="test()" x-large block text color="primary">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      booking: {
        name: '',
        seat: 1,
        time: undefined,
        date: undefined,
        phone: '',
      },
      times: [
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
      ],
    }
  },
  mounted() {},

  methods: {
    test() {
      alert(this.booking.date)
    },
  },
}
</script>

<style></style>
