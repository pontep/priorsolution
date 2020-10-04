<template>
  <v-container>
    <div>
      <pre> {{ weather }} </pre>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      weather: null,
    }
  },
  mounted() {
    this.getWeatherFromUTONIYOM()
  },
  methods: {
    getWeatherFromUTONIYOM() {
      this.$axios
        .get(
          'https://data.tmd.go.th/api/WeatherWarningNews/v1/?uid=demo&ukey=demokey'
        )
        .then((res) => {
          console.log(res.data)
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
}
</script>

<style></style>
