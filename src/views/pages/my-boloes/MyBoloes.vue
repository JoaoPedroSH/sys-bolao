<template>
    <v-row>
      <!-- basic -->
      <v-col cols="12">
        <v-card>
          <v-card-title>Meus Bolões</v-card-title>
          <table-list-boloes></table-list-boloes>
        </v-card>
      </v-col>
    </v-row>
  </template>

  <script>
  import TableListBoloes from './components/TableListBoloes.vue'

  export default {
    components: {
        TableListBoloes
    },
    setup() {
      return {}
    },
  }
  </script>
