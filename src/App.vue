<template>
  <div id="app">
    <search-field />
    <package-table />
    <package-details />
    <c-footer />
  </div>
</template>

<script>
import SearchField from "@/components/SearchField";
import PackageTable from "@/components/PackageTable";
import PackageDetails from "@/components/PackageDetails";
import CFooter from "@/components/CommonFooter";
export default {
  name: "App",
  components: {
    SearchField,
    PackageTable,
    PackageDetails,
    CFooter
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
