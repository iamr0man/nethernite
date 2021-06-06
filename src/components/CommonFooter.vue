<template>
  <v-footer
    :padless="true"
    :absolute="true"
  >
    <v-card
      flat
      tile
      width="100%"
      class="yellow lighten-1 text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          class="mx-4"
          icon
          @click="doRedirect(icon.link)"
        >
          <v-icon size="24px">
            {{ icon.name }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Roman Korniienko</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      icons: [
        { name: 'mdi-github', link: 'https://github.com/iamr0man' }
      ]
    }
  },
  methods: {
    doRedirect (link) {
      window.location.href = link
    }
  }
}
</script>

<style lang="scss">

</style>