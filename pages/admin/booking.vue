<template>
  <v-container>
    <v-card outlined class="mx-auto" max-width="400">
      <v-card-title>
        <v-icon class="mx-2">mdi-wallet-plus-outline</v-icon>
        <span>เพิ่มการจอง</span>
      </v-card-title>
      <v-form class="px-10">
        <v-text-field label="ชื่อผู้จอง" v-model="booking.name"></v-text-field>
        <v-text-field
          label="เบอร์โทรศัพท์"
          v-model="booking.phone"
        ></v-text-field>

        <v-row>
          <v-col>
            <v-text-field
              label="จำนวนที่นั่ง"
              v-model="booking.seat"
              type="number"
            />
          </v-col>
          <v-col>
            <v-select
              v-model="booking.time"
              :items="times"
              label="เวลา"
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col>
            <div class="text-center">
              <v-date-picker v-model="booking.date"></v-date-picker>
            </div>
          </v-col>
        </v-row>
      </v-form>

      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text color="primary">Save</v-btn>
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
        phone: undefined,
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
  methods: {},
}
</script>

<style></style>
