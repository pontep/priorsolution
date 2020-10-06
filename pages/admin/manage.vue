<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col cols="4">
        <booking />
      </v-col>
      <v-divider vertical></v-divider>
      <v-col>
        <showbooking />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import booking from '@/components/booking'
import showbooking from '@/components/showbooking'
export default {
  head() {
    return {
      title: 'จัดการการจอง',
      meta: [
        {
          hid: 'manage',
          name: 'manage booking',
          content: 'หน้าจัดการการจอง',
        },
      ],
    }
  },
  components: {
    booking,
    showbooking,
  },
}
</script>

<style></style>
