<template>
  <div>
    <div class="categories">
      <h1>Categories</h1>
      <div class="list" v-for="category in categories" :key="category.id">
        <div class="dados">{{ category.id }}</div>
        <div class="dados">{{ category.name }}</div>        
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      categories:{}
    }
  },
  methods:{
    getCategories(){
      axios.get('http://localhost:8081/categories').then(resp => {
        this.categories = resp.data
      })
    }
  },
  created(){
    this.getCategories()
  }
}

</script>
<style lang="scss" scoped>

.categories{  
  align-items: center;
  text-align: center;
  .list{
    width: 50%;
    margin-left: 22.5%;
    align-items: center;
    padding: 1%;
    display: flex;
    justify-content: center;
    border: 1px solid grey;
    .dados{
      padding: 0.7%;
    }
  }
}

</style>
