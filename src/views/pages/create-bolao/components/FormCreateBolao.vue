<template>
  <v-form class="multi-col-validation" @submit="createBolao" >
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field v-model="bolao.nomeBolao" label="Nome do Bolão" outlined dense hide-details requered></v-text-field>
      </v-col>

      <v-col cols="12" md="2">
        <v-text-field
          v-model="bolao.quantidadePessoas"
          type="number"
          min="3"
          max="20"
          label="Nº Participantes"
          outlined
          dense
          hide-details
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field v-model="bolao.descricao" label="Descrição do Bolão" outlined dense hide-details requered></v-text-field>
      </v-col>

      <v-col cols="12">
<<<<<<< Updated upstream
        <v-checkbox v-model="bolao.bolaoPrivado" label="Privado" class="mt-0" hide-details></v-checkbox>
=======
        <v-checkbox
          v-model="bolaoPrivate"
          label="Privado"
          class="mt-0"
          hide-details
        ></v-checkbox>
>>>>>>> Stashed changes
      </v-col>
      <br />
      <v-col cols="12" md="6">
        <v-text-field
          v-if="bolao.bolaoPrivado == true"
          v-model="bolao.senha"
          label="Senha"
          type="password"
          outlined
          dense
          hide-details
          requered
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-if="bolao.bolaoPrivado == true"
          v-model="bolao.confirmacaoSenha"
          label="Confirmar Senha"
          type="password"
          outlined
          dense
          hide-details
          requered
        ></v-text-field>
      </v-col>


      <v-col cols="12">
<<<<<<< Updated upstream
        <v-btn type="button" color="primary" @click.prevent="passwordVerify()"> Criar </v-btn>
        <v-btn type="reset" outlined class="mx-2" @click="resertForm()"> Redefinir </v-btn>
=======
        <v-btn  value="criar" color="primary" @click.prevent="passwordVerify()">
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
>>>>>>> Stashed changes
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      bolao: {
        nomeBolao: '',
        quantidadePessoas: 3,
        descricao: '',
        bolaoPrivado: false,
        senha: '',
        confirmacaoSenha: '',
      },
    }
  },
  methods: {
    resertForm() {
      this.bolao.nomeBolao = '',
      this.bolao.quantidadePessoas = 3,
      this.bolao.descricao = '',
      this.bolao.bolaoPrivado = false,
      this.bolao.senha = '',
      this.bolao.confirmacaoSenha = ''
    },
    passwordVerify() {
      if (this.bolaoPrivado == true) {
        if (this.senha == this.confirmacaoSenha) {
          this.createBolao()
        }
      }
      this.createBolao()
    },
    createBolao() {
<<<<<<< Updated upstream
      axios.post(process.env.VUE_APP_URL_API + '/boloes', this.bolao).then(response => {
        this.resertForm();
        this.$swal('Bolão Cadastrado!');
        //console.log(response)
      },
      (error) => {
        this.$swal('Não foi possível Cadastrar!');
      })
    },
=======
      axios.post('http://localhost/ServeSysBolao/services/create_bolao.php', {
        nameBolao: this.nameBolao,
        qtdUsers: this.qtdUsers,
        description: this.description,
        password: this.password,
        confirmPassword: this.confirmPassword,
        bolaoPrivate: this.bolaoPrivate
      }).then((response) => {
        console.log(response);
      })
      e.preventeDefault();
    },
    
>>>>>>> Stashed changes
  },
}
</script>
