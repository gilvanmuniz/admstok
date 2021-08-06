<template>
  <div class="main">
    <h1>Novos Produtos</h1>
    <div class="form">
      <form>
        <div class="row">
          <label for="">Descrição</label>
          <input v-model="form.name" class="ml-3" type="text" />
        </div>
        <div class="row">
          <label for="">Quantidade</label>
          <input v-model="form.amount" class="ml-3" type="text" />
        </div>
        <div class="row">
          <label for="">Preço</label>
          <input v-model="price" v-money="money" class="ml-3" type="text" />
        </div>
        <div class="botao">
          <button v-on:click="addProdutos" class="btn btn-primary">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {VMoney} from 'v-money'

export default {
  directives: {money: VMoney},
  data() {
    return {
      form: {
        name: "",
        amount: "",       
      },
          price: 0,
          money: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          suffix: '',
          precision: 2,
          masked: false /* doesn't work with directive */
        }
    };
  },
  methods: {
    ...mapActions("products", ["addProducts"]),

    addProdutos(add) {
      this.price = this.price.replace(/\./g, '')
      this.price = this.price.slice(3).replace(',', '.')      

      add = {
        name: this.form.name,
        amount: this.form.amount,
        price: this.price        
      };
      //console.log(add)
      this.addProducts(add);
      this.form.name = "";
      this.form.amount = "";
      this.form.price = "";        
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    .row {
      padding: 1.4%;
      display: flex;
      align-items: center;
      input {
        border: none;
        border-bottom: 1px solid grey;
      }
      input:focus {
        outline: none;
      }
    }
  }
}
</style>