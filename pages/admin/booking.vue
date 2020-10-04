<template>
  <v-container>
    <v-card outlined class="mx-auto" max-width="400">
      <v-card-title>
        <v-icon class="mx-2">mdi-wallet-plus-outline</v-icon>
        <span>เพิ่มการจอง</span>
      </v-card-title>
      <v-form class="px-10" ref="form" v-model="valid" lazy-validation>
        <v-text-field
          :rules="nameRules"
          label="ชื่อผู้จอง"
          v-model="booking.name"
          prepend-inner-icon="mdi-account"
        ></v-text-field>
        <v-text-field
          :rules="phoneRules"
          label="เบอร์โทรศัพท์"
          prepend-inner-icon="mdi-phone"
          v-model="booking.phone"
        >
        </v-text-field>

        <v-row>
          <v-col>
            <v-text-field
              :rules="seatRules"
              outlined
              prepend-inner-icon="mdi-seat"
              label="จำนวนที่นั่ง"
              v-model="booking.seat"
              type="number"
            />
          </v-col>
          <v-col>
            <v-select
              :rules="[(v) => !!v || 'Item is required']"
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
        <v-btn
          :loading="loading"
          :disabled="loading"
          @click="save()"
          x-large
          block
          text
          color="primary"
          >Save</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { db } from '@/services/firebase'
export default {
  data() {
    return {
      valid: true,
      nameRules: [
        (v) => !!v || 'Name is required',
        // (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],

      phoneRules: [
        (v) => !!v || 'Phone is required',
        (v) => (v && v.length == 10) || 'Phone must be 10 characters',
      ],
      seatRules: [
        (v) => !!v || 'Seat is required',
        (v) => (v && v >= 1) || 'Seat must be greater equal 1 seat',
      ],

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
    validate() {
      return this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
      this.booking.date = undefined
    },
    async save() {
      if (this.validate()) {
        if (this.booking.date == undefined) {
          alert('Please select date')
        } else {
          this.loading = true
          await db
            .collection('bookings')
            .add(this.booking)
            .then(function (docRef) {
              console.log('Document written with ID: ', docRef.id)
              alert('Save booking successfully.')
              // booking.vue?8d2a:141 Error adding document:  TypeError: Cannot read property 'reset' of undefined
              this.reset()
            })
            .catch(function (error) {
              console.error('Error adding document: ', error)
            })
            .finally(() => {
              this.loading = false
            })
        }
      }
    },
  },
}
</script>

<style></style>
