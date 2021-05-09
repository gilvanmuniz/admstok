<template>
  <div class="main">
    <h1>Novos Produtos</h1>
    <div class="form">
      <form>
        <div class="row">
          <label for="">Descrição</label>
          <input  class="ml-3" type="text" />
        </div>
        <div class="row">
          <label for="">Quantidade</label>
          <input class="ml-3" type="text" />
        </div>
        <div class="row">
          <label for="">Preço</label>
          <input  class="ml-3" type="text" />
        </div>
        <div class="botao">
          <button class="btn btn-primary">Cadastrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main{
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        .row{
            padding: 1.4%;
            display: flex;
            align-items: center;
            input{
                border: none;
                border-bottom: 1px solid grey;
            }
            input:focus{
                outline: none;
            }
        }
    }
}
</style>