<template>
  <div class="container">
    <h1 class="title" style="color: #1b1b1b; padding-bottom: 30px">Recipes</h1>
    <b-container fluid class="recipe-container">
      <h3 class="explore-badge">Explore these recipes</h3>
      <div class="recipe-row">
        <div class="recipe-column">
          <RandomRecipe :recipe="RecipeRandom1"></RandomRecipe>
        </div>
        <div class="recipe-column">
          <RandomRecipe :recipe="RecipeRandom2"></RandomRecipe>
        </div>
        <div class="recipe-column">
          <RandomRecipe :recipe="RecipeRandom3"></RandomRecipe>
        </div>
      </div>
      <b-button variant="info" @click="reloadPage">
        <b-spinner type="grow" label="Loading..."></b-spinner>
        Refresh
      </b-button>
    </b-container>
    <div id="Guest" v-if="!$root.store.username">
    <div class="login-container">
        <LoginPage class="comp" style="margin-top: -170px;"></LoginPage>
      </div>
    </div>
      <div id="UserLoggedIn" v-else>
        <b-container fluid class="recipe-container">
          <h3 class="explore-badge">My last 3 Watched recipes</h3>
          <div class="recipe-row">
            <div class="recipe-column">
              <PreviewRecipe :recipe="LastWatch1" v-if="LastWatch1"></PreviewRecipe>
              <PreviewRecipe :recipe="LastWatch2" v-if="LastWatch2"></PreviewRecipe>
              <PreviewRecipe :recipe="LastWatch3" v-if="LastWatch3"></PreviewRecipe>
            </div>
          </div>
        </b-container>
      </div>
    </div>
</template>

<script>
import RandomRecipe from "../components/RandomRecipe";
import LoginPage from "../pages/LoginPage";
import PreviewRecipe from "../components/PreviewRecipe";

export default {
  components: {
    RandomRecipe,
    LoginPage,
    PreviewRecipe
  },
  data() {
    return {
      RecipeRandom1: {},
      RecipeRandom2: {},
      RecipeRandom3: {},
      LastWatch1: "",
      LastWatch2: "",
      LastWatch3: ""
    };
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
    async getRandom3Recipes() {
      console.log(this.$root.store.server_domain);
      console.log(this.$root.store.server_domain + "/recipes/random3recipes");
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/random3recipes"
        );
        const RecipeData = response.data;
        this.RecipeRandom1 = RecipeData[0];
        this.RecipeRandom2 = RecipeData[1];
        this.RecipeRandom3 = RecipeData[2];
      } catch (error) {
        console.log(error);
      }
    },
    async getUserLast3Watch() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/user_last_3_watch"
        );
        await setTimeout(10000);
        const RecipeData = response.data;
        this.LastWatch1 = RecipeData[0].History_Watch_R1;
        this.LastWatch2 = RecipeData[0].History_Watch_R2;
        this.LastWatch3 = RecipeData[0].History_Watch_R3;
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.getRandom3Recipes();
    this.getUserLast3Watch();
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 250px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.recipe-container {
  width: 800px;
  margin-left: -200px;
  padding: 30px;
  background-color: #212529;
  border-radius: 10px;
  color: black;
  font-family: "Agency FB", sans-serif;
}

.login-container {
  width: 400px;
  height: 500px;
  background-color: #212529;
  border-radius: 10px;
  color: white;
  font-family: "Agency FB", sans-serif;
  margin-top: -600px;
  margin-left: 800px;
}

.title {
  font-size: 80px;
  font-family: "Agency FB", serif;
  font-weight: bold;
  margin-top: 0;
  color: #fff;
}

.explore-badge {
  color: white;
  font-family: "Agency FB", sans-serif;
  font-size: 60px;
  margin-left: 150px;
  margin-top: -30px;
}

.watched-badge {
  margin-top: 30px;
  color: white;
  font-family: "Agency FB", sans-serif;
  font-size: 60px;

}

.recipe-row {
  display: flex;
  width: 750px;
  justify-content: space-between;
}

.recipe-column {
  width: 48%;
  font-size: 20px;
}

.RandomRecipes {
  margin: 10px 0 10px;
}

.b-button {
  margin-top: 30px;
}

.comp {
  margin-top: -1000px;
  margin-right: 50px;
  height: 100px;
}

#UserLoggedIn {
  margin-top: -700px;
  margin-left: 1100px;
  width: 500px;
}

.elemnt_row {
  padding: 20px;
}


</style>
