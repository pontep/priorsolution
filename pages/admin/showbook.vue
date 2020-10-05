<template>
  <v-container>
    <v-row justify="center" no-gutters>
      <v-col cols="4">
        <v-card outlined class="mx-auto" max-width="400">
          <v-card-title>
            <v-icon class="mx-2">mdi-calendar-cursor</v-icon>
            <span>เลือกวันที่</span>
          </v-card-title>
          <div class="text-center">
            <v-date-picker
              class="pa-2"
              year-icon="mdi-food"
              full-width
              v-model="selectedDate"
              @click:date="getBookingsByDate()"
              @click:month="fetchBookingDateByMonth"
              :events="arrayEvents"
              event-color="green lighten-1"
            ></v-date-picker>
          </div>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
              @click="fetchBookingDateByMonth()"
              x-large
              block
              text
              color="primary"
            >
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card outlined class="mx-auto">
          <v-card-title>
            <v-icon class="mx-2">mdi-calendar-month</v-icon>
            <span>รายการจองทั้งหมดของวันที่เลือก</span>
          </v-card-title>
          <v-data-table
            :loading="loading"
            loading-text="Loading... Please wait"
            :headers="headers"
            :items="bookings"
            :items-per-page="10"
            class="elevation-1"
          >
            <template v-slot:item.actions="{ item }">
              <div class="d-flex">
                <v-simple-checkbox
                  v-model="item.completed"
                  color="success"
                ></v-simple-checkbox>
                <div class="px-1"></div>
                <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
              </div>
            </template>
          </v-data-table>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-row justify="center">
      <pre>
            {{ bookings }}
        </pre
      >
    </v-row> -->
  </v-container>
</template>

<script>
import { fetchBookingDate } from '@/services/bookingController'
import { db } from '@/services/firebase'
const moment = require('moment') // require

export default {
  data() {
    return {
      arrayEvents: null,
      loading: false,
      selectedDate: null,
      headers: [
        {
          text: 'ชื่อผู้จอง',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'เบอร์โทรศัพท์', value: 'phone' },
        { text: 'เวลา', value: 'time' },
        { text: 'จำนวนที่นั่ง', value: 'seat' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      bookings: [],
      temp: [],
    }
  },
  mounted() {
    var month = moment().format('YYYY-MM')
    console.log(month)
    this.fetchBookingDateByMonth(month)
  },
  created() {
    this.initialize()
  },
  methods: {
    deleteItem(item) {
      //   console.log(item)
      var index = this.bookings
        .map((x) => {
          return x.name
        })
        .indexOf(item.name)
      this.bookings.splice(index, 1)
    },
    async fetchBookingDateByMonth(month) {
      // fetch event by month => this.arrayevent
      // month = 2020-10
      var monthStart = month + '-00'
      var monthEnd = month + '-31'
      await db
        .collection('bookings')
        .where('date', '>=', monthStart)
        .where('date', '<=', monthEnd)
        .get()
        .then((querySnapshot) => {
          var tmp = []
          var eventsInMonth = []
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, ' => ', doc.data())
            // get all bookings data in speicified month => this.temp
            tmp.push(doc.data())
            eventsInMonth.push(doc.data().date)
            // this.arrayEvents
            // this.arrayEvents
          })
          this.temp = tmp
          this.arrayEvents = eventsInMonth
        })
        .catch(function (error) {
          console.log('Error getting documents: ', error)
        })
      // send moment date and fetch only year-month
      // this.arrayEvents = await fetchBookingDate()
      //   .then((res) => {
      //     console.log(res)
      //     return res
      //   })
      //   .catch((e) => {
      //     console.log(e)
      //   })
      // this.arrayEvents =
      // this.temp.map((x) => {
      //   return moment(x.date).format().substr(0, 10)
      // })
    },
    async getBookingsByDate() {
      //   alert(this.selectedDate)
      this.loading = true
      await setTimeout(() => {
        var tmp = []
        this.temp.forEach((x) => {
          if (this.selectedDate === x.date) {
            tmp.push(x)
          }
        })
        this.bookings = tmp
        this.loading = false
      }, 200)
    },
    initialize() {
      this.temp = [
        {
          name: 'คุณพรเทพ ทวีทรัพย์',
          seat: 4,
          time: '10:00',
          date: '2020-10-04',
          phone: '0952931668',
          completed: false,
        },
        {
          name: 'คุณเกศติยา เมืองแก้ว',
          seat: 2,
          time: '17:00',
          date: '2020-10-04',
          phone: '0971031369',
          completed: false,
        },
        {
          name: 'คุณเจตุพนน์ ศรีภูธร',
          seat: 12,
          time: '18:00',
          date: '2020-10-07',
          phone: '0912345678',
          completed: false,
        },
      ]
      console.log('init complete')
    },
  },
}
</script>

<style></style>
