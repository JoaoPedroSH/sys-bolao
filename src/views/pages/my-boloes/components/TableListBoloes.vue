<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-uppercase">#</th>
          <th class="text-center text-uppercase">Nome do Bolão</th>
          <th class="text-center text-uppercase">Participantes</th>
          <th class="text-center text-uppercase">Descrição</th>
          <th class="text-center text-uppercase">Acesso</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bolao in boloes" :key="bolao.id">
          <td>{{ bolao.id }}</td>
          <td class="text-center">
            {{ bolao.nomeBolao }}
          </td>
          <td class="text-center">
            {{ bolao.quantidadePessoas }}
          </td>
          <td class="text-center">
            {{ bolao.descricao }}
          </td>
          <td class="text-center">
            <span v-if="bolao.bolaoPrivado == true"> Privado <lonk-icon size="14"/> </span>
            <span v-else> Público <globe-icon size="14"/> </span>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import axios from 'axios'
import { GlobeIcon, LockIcon } from 'vue-feather-icons'
export default {
  components: {
    GlobeIcon,
    LockIcon
  },
  data() {
    return {
      boloes: [],
    }
  },
  created() {
    this.listBoloes()
  },
  methods: {
    listBoloes() {
      axios.get(process.env.VUE_APP_URL_API + '/boloes').then(
        response => {
          //console.log(response)
          this.boloes = response.data
        },
        error => {},
      )
    },
  },
}
</script>
