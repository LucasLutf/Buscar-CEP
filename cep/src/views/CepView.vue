<script>
import axios from "axios";
export default {
  data() {
    return {
      cep: "",
      endereco: {},
    };
  },
  methods: {
    async buscar() {
      const url = `https://viacep.com.br/ws/${this.cep}/json/`;
      const res = await axios.get(url);
      this.endereco = res.data;
    },
  },
};
</script>
<template>
  <header class="corpo">
    <h1>Buscar CEP</h1>
    <form @submit.prevent="buscar">
      <input
        type="text"
        class="pesq"
        v-model="cep"
        placeholder="Digite o CEP"
      />
      <button type="submit" class="btn">Buscar</button>
    </form>
    <form class="end">
      <label for="rua">Rua</label>
      <input type="text" v-model="endereco.logradouro" />
      <label for="num">Cidade</label>
      <input type="text" v-model="endereco.localidade" />
      <label for="bairro">Bairro</label>
      <input type="text" v-model="endereco.bairro" />
    </form>
  </header>
</template>

<style>
.corpo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
}
.end {
  display: flex;
  flex-direction: column;
  width: 15%;
}
h1 {
  font-size: 30px;
  font-style: oblique;
}
.btn {
  background-color: #18a818;
  color: #fafafa;
  border: #44b934;
  border-radius: 5px;
  height: 30px;
  width: 80px;
  font-weight: bold;
  cursor: pointer;
  margin: 0 0 0 10px;
}
.btn:hover {
  background-color: #23cf23;
}
.pesq {
  width: 60%;
  height: 25px;
  border: 2px solid #ccc;
  border-radius: 5px;
}
</style>
