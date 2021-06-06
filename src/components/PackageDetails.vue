<template>
  <v-dialog
    v-model="isModalOpen"
    width="unset"
  >
    <v-card class="package-details">
      <v-card-title class="text-h5 grey lighten-2">
        Package Details
      </v-card-title>

      <v-card-text class="package-details__content">
        <h2 class="package-details__title">Name: {{ currentPackage.name}}</h2>
        <h3 class="package-details__title">Author: {{ authorName }}</h3>
        <div>
          <ul>
            <li
              v-for="link in currentPackage.links"
              :key="link"
              class="package-details__link"
            >
              {{ link }}
            </li>
          </ul>
        </div>
        <h3 class="package-details__title">Version: {{ currentPackage.version }}</h3>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="$store.commit('TOGGLE_MODAL', false)"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState([ 'isModalOpen', 'currentPackage' ]),
    authorName () {
      if (!this.currentPackage.author) {
        return 'Unknown'
      }
      return this.currentPackage.author.name
    }
  }
}
</script>

<style lang="scss">
.v-dialog__container {
  display: unset !important;
}

.package-details {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__title {
    margin: 10px 0;
  }
  &__link {
    text-align: start;
  }
}
</style>