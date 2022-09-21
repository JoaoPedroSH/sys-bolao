<template></template>

<script>
import axiosIns from '@/utils/axios'

export default {
  data() {
    return {}
  },
  components: {

  },

  methods: {
    getTabela() {
      axiosIns.get('').then((response) => {
        console.log(response);
      })
    },
  },
  created() {
    this.getTabela()
  },
}
</script>

<style>
</style>
