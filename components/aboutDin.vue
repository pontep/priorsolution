<template>
  <div>
    <v-list-item
      link
      color="grey lighten-4"
      v-for="(item, i) in pontep"
      :key="i"
      :href="item.to"
      target="_blank"
    >
      <v-list-item-icon>
        <v-icon v-text="item.icon"></v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pontep: [
        {
          title: 'GitHub repository',
          to: 'https://github.com/pontep/priorsolution/',
          icon: 'mdi-github',
        },
        {
          title: 'Facebook',
          to: 'https://www.facebook.com/pontepthaweesup/',
          icon: 'mdi-facebook',
        },
      ],
    }
  },
}
</script>

<style></style>
