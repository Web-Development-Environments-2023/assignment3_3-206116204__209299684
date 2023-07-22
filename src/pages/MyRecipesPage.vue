<template>
  <div class="container2" style="margin-left:140px; width: 1500px;">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
    <h1 class="title" style="color: #1b1b1b; margin-bottom: -60px;margin-left: 550px; font-size: 100px">My Recipes</h1>
    <section class="ReturnedRecipes" v-if="this.recipes !== ''">
      <b-container fluid class="recipe-container">
      <b-card-group  style="padding-top: 50px">
        <PreviewRecipe v-for="recipe in this.recipes"
                       :key="recipe.id"
                       :Recipe="recipe"
        ></PreviewRecipe>
      </b-card-group>
      </b-container>
    </section>
  </div>
</template>

<script>


import PreviewRecipe from "@/components/PreviewRecipe.vue";


export default {
  name: "MyRecipesPage",
  components: {
    PreviewRecipe
  },
  data() {
    return {
      recipes: ""
    };
  },
  mounted() {
    this.getMyRecipes();
  },
  methods: {
    async getMyRecipes() {
      try {
        const response = await this.axios.get(this.$root.store.server_domain + "/users/allUserRecipes", {withCredentials: true});
        this.recipes = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
.recipe-container {
  width: 800px;
  margin-left: -100px;
  padding: 30px;
  border-radius: 10px;
  color: black;
  font-family: 'Russo One', sans-serif;
  font-size: 25px;
}
.title{
  font-family: "Russo One",serif;
  color: black;
  margin-right: 350px;
}
.card-group {
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  flex-wrap: wrap;
  width: 2000px;
}
</style>