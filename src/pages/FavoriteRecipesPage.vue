<template>
  <div class="container2" style="margin-left:140px; width: 1500px;">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
    <h1 class="title" style="color: #1b1b1b; margin-left: 500px;margin-bottom: 60px; font-size: 100px">My Favorite Recipes</h1>
    <section  class="ReturnedRecipes" v-if="this.recipes !== ''">
      <b-card-group deck>
        <PreviewRecipe v-for="recipe in this.recipes"
                       :key="recipe.id"
                       :Recipe="recipe"
        ></PreviewRecipe>
      </b-card-group>
    </section>
  </div>
</template>

<script>


import PreviewRecipe from "@/components/PreviewRecipe.vue";


export default {
  name: "FavoriteRecipesPage",
  components: {
    PreviewRecipe
  },
  data() {
    return {
      recipes: ""
    };
  },
  mounted() {
    this.getFavorites();
  },
  methods: {
    async getFavorites() {
      try {
        const recipes = await this.axios.get(this.$root.store.server_domain + "/users/favorites", { withCredentials: true });
        this.recipes = recipes.data
        console.log(this.recipes[0].id);
        console.log(typeof(this.recipes[0].id));
      } catch (error) {
        console.log(error);
      }
    },
    },

};
</script>

<style>
.title{
  font-family: "Russo One",serif;
  color: black;
}
</style>