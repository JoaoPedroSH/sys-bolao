<template>
  <div>
    <div>
      <h1>Crie seu Bolão</h1>
    </div>
     
    <FormCreateBolao />
  </div>
</template>
<script>
import FormCreateBolao from './components/FormCreateBolao.vue'
export default {
  components: {
    FormCreateBolao,
  },
}
</script>