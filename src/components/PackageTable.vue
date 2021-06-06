<template>
  <v-data-table
    :headers="headers"
    :items="packages"
    :sort-by="['package.name', 'package.version', 'package.description']"
    :items-per-page="10"
    @click:row="setPackage"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data () {
    return {
      headers: [
        { text: 'Name', value: 'package.name' },
        { text: 'Version', value: 'package.version' },
        { text: 'Description', value: 'package.description' }
      ]
    }
  },
  computed: {
    ...mapState([ 'packages' ]),
  },
  methods: {
    setPackage(value) {
      this.$store.dispatch('openPackageDetails', { packageName: value.package.name })
    }
  }
}
</script>
