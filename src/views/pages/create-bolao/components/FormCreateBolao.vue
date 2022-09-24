<template>
  <v-form class="multi-col-validation">
    <v-row>
      <v-col
        cols="12"
        md="4"
      >
        <v-text-field
          v-model="nameBolao"
          label="Nome do Bolão"
          outlined
          dense
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="2"
      >
        <v-text-field
          v-model="qtdUsers"
          type="number"
          min="3"
          max="20"
          label="Nº Participantes"
          outlined
          dense
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="description"
          label="Descrição do Bolão"
          outlined
          dense
          hide-details
        ></v-text-field>
      </v-col>

      <v-col cols="2">
        <v-checkbox
          v-model="bolaoPrivate"
          label="Privado"
          class="mt-0"
          hide-details
        ></v-checkbox>
      </v-col>
      <br />
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-if="bolaoPrivate == true"
          v-model="password"
          label="Senha"
          type="password"
          outlined
          dense
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-if="bolaoPrivate == true"
          v-model="confirmPassword"
          label="Confirmar Senha"
          type="password"
          outlined
          dense
          hide-details
        ></v-text-field>
      </v-col>

      

      <v-col cols="12">
        <v-btn color="primary">
          Criar
        </v-btn>
        <v-btn
          type="reset"
          outlined
          class="mx-2"
          @click="resertForm()"
        >
          Redefinir
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>


export default {
  data() {
    return {
      nameBolao: '',
      qtdUsers: 3,
      description: '',
      password: '',
      bolaoPrivate: false,
      confirmPassword: ''
    }
  },
  methods: {
    resertForm() {
      this.nameBolao = "",
      this.qtdUsers = 3,
      this.description = "",
      this.password = "";
      this.bolaoPrivate = false,
      this.confirmPassword = ""
    },
    passwordVerify() {
      if(this.bolaoPrivate == true) {
        if(this.password == this.confirmPassword) {
          this.createBolao()
        }
      }
      this.createBolao()
    },
    createBolao() {
    
    }
  },
  
}
</script>
