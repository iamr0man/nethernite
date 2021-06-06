<template>
  <v-text-field
    v-model="text"
    label="Search for all of NPM..."
    @keydown.enter="doSearch"
  />
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    doSearch() {
      this.$store.dispatch('doSearch', { packageName: this.text })
    }
  }
};
</script>

<style lang="scss"></style>
