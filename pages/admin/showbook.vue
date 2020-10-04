<template>
  <v-container>
    <v-row justify="center" no-gutters>
      <v-col cols="4">
        <v-card outlined class="mx-auto" max-width="400">
          <v-card-title>
            <v-icon class="mx-2">mdi-wallet-plus-outline</v-icon>
            <span>เลือกวันที่</span>
          </v-card-title>
          <div class="text-center">
            <v-date-picker
              class="pa-2"
              year-icon="mdi-food"
              full-width
              v-model="selectedDate"
              @click:date="getBookingsByDate()"
              :events="arrayEvents"
              event-color="green lighten-1"
            ></v-date-picker>
          </div>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
              @click="getBookingsByDate()"
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
            <v-icon class="mx-2">mdi-wallet-plus-outline</v-icon>
            <span>ตารางการจอง</span>
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
    this.getAllSpecifiedBookings()
  },
  created() {
    this.initialize()
  },
  methods: {
    getAllSpecifiedBookings() {
      this.arrayEvents = this.temp.map((x) => {
        const date = new Date(x.date).console.log(
          date.toISOString().substr(0, 10)
        )
        return date
      })
    },
    getBookingsByDate() {
      //   alert(this.selectedDate)
      this.loading = true
      setTimeout(() => {
        this.initialize()
        this.loading = false
      }, 1000)
    },
    initialize() {
      this.temp = [
        {
          name: 'คุณพรเทพ ทวีทรัพย์',
          seat: 4,
          time: '10:00',
          date: '2020-10-4',
          phone: '0952931668',
          completed: false,
        },
        {
          name: 'คุณเกศติยา เมืองแก้ว',
          seat: 2,
          time: '17:00',
          date: '2020-10-4',
          phone: '0971031369',
          completed: false,
        },
        {
          name: 'คุณเจตุพนน์ ศรีภูธร',
          seat: 12,
          time: '18:00',
          date: '2020-10-7',
          phone: '0912345678',
          completed: false,
        },
      ]
    },
  },
}
</script>

<style></style>
