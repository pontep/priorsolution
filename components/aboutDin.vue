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
        <v-icon :color="item.color" v-text="item.icon"></v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title
          :color="item.color"
          v-text="item.title"
        ></v-list-item-title>
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
          color: 'black',
        },

        {
          title: 'Facebook',
          to: 'https://www.facebook.com/pontepthaweesup/',
          icon: 'mdi-facebook',
          color: 'blue',
        },
        {
          title: 'Youtube',
          to:
            'https://www.youtube.com/channel/UCGInPeIu27sokWZFs240Oyw?view_as=subscriber',
          icon: 'mdi-youtube',
          color: 'red',
        },
        {
          title: 'Instagram',
          to: 'https://www.instagram.com/pontep.thaweesup/',
          icon: 'mdi-instagram',
          color: 'brown',
        },
      ],
    }
  },
}
</script>

<style></style>
