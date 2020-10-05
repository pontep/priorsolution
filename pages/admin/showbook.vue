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
              :picker-date.sync="pickerDate"
              :disabled="datepickerLoading"
              class="pa-2"
              year-icon="mdi-food"
              full-width
              v-model="selectedDate"
              @click:date="getBookingsByDate()"
              :events="arrayEvents"
              event-color="green lighten-1"
            >
              <v-progress-linear
                v-if="datepickerLoading"
                :indeterminate="datepickerLoading"
              ></v-progress-linear>
            </v-date-picker>
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
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              clearable
            ></v-text-field>
          </v-card-title>
          <v-data-table
            sort-by="completed"
            :search="search"
            :loading="loading"
            loading-text="Loading... Please wait"
            :headers="headers"
            :items="bookings"
            :items-per-page="10"
            class="elevation-1"
          >
            <template v-slot:item.completed="{ item }">
              <div v-if="item.completed">
                <v-chip outlined color="green lighten-1">
                  <v-avatar>
                    <v-icon>mdi-checkbox-marked-circle</v-icon>
                  </v-avatar>
                  <!-- Confirmed -->
                </v-chip>
              </div>
              <div v-else>
                <v-chip outlined color="">
                  <v-avatar left>
                    <v-icon color="green lighten-1" @click="updateItem(item)"
                      >mdi-checkbox-marked-circle</v-icon
                    >
                  </v-avatar>
                  <v-divider vertical class="mx-2"></v-divider>
                  <v-avatar right>
                    <v-icon color="red lighten-2" @click="deleteItem(item)"
                      >mdi-delete</v-icon
                    >
                  </v-avatar>
                </v-chip>
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
const moment = require('moment')

export default {
  data() {
    return {
      search: '',
      datepickerLoading: false,
      pickerDate: null,

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
        { text: 'สถานะ', value: 'completed', sortable: true },
      ],
      bookings: [],
    }
  },
  watch: {
    pickerDate(val) {
      this.fetchBookingDateByMonth(val)
    },
  },
  mounted() {
    this.fetchBookingDateByMonth(moment().format('YYYY-MM'))
  },
  methods: {
    async updateItem(item) {
      await db
        .collection('bookings')
        .doc(item.id)
        .update({
          completed: !item.completed,
        })
        .then(() => {
          this.$notify({
            group: 'foo',
            title: 'Successfully',
            text: 'Update data successfully',
          })
        })
        .catch(function (error) {
          console.error('Error updating document: ', error)
          this.$notify({
            group: 'foo',
            title: 'Error',
            text: error,
            type: 'warn',
          })
        })
        .finally(() => {
          this.getBookingsByDate()
        })
    },
    async deleteItem(item) {
      this.loading = true
      if (confirm('Are you sure?')) {
        await db
          .collection('bookings')
          .doc(item.id)
          .delete()
          .then(() => {
            this.$notify({
              group: 'foo',
              title: 'Successfully',
              text: 'Delete data successfully',
            })
          })
          .catch(function (error) {
            console.log('Error deleting documents: ', error)
          })
          .finally(() => {
            this.loading = false
            this.getBookingsByDate()
            this.fetchBookingDateByMonth()
          })
      } else {
        this.loading = false
      }
    },
    async fetchBookingDateByMonth(month) {
      // check if month = undefind
      if (month == undefined) {
        month = this.pickerDate
      }

      this.datepickerLoading = true
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
          var eventsInMonth = []
          querySnapshot.forEach(function (doc) {
            eventsInMonth.push(doc.data().date)
          })
          this.arrayEvents = eventsInMonth
        })
        .catch(function (error) {
          console.log('Error getting documents: ', error)
        })
        .finally(() => {
          this.datepickerLoading = false
        })
    },
    async getBookingsByDate() {
      this.loading = true
      await db
        .collection('bookings')
        .where('date', '==', this.selectedDate)
        .get()
        .then((querySnapshot) => {
          var datas = []
          querySnapshot.forEach(function (doc) {
            var data = doc.data()
            data.id = doc.id
            datas.push(data)
          })
          this.bookings = datas
        })
        .catch(function (error) {
          console.log('Error getting documents: ', error)
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style></style>
