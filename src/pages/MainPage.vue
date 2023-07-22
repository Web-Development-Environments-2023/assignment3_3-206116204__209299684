<template>
  <div class="container">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
    <h1 class="title">Harmony in Flavors: A Culinary Symphony</h1>
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
        <LoginPage class="comp" style="margin-top: -775px;padding-bottom: 228px;  padding-top: 200px;"></LoginPage>
      </div>
    </div>
    <!--      לסדר את 3 המתכונים שהמשתמש צפה לאחרונה    <li>-->

    <div id="UserLoggedIn" v-else>
      <b-container fluid class="recipe-container">
        <h3 class="explore-badge">My last 3 Watched recipes</h3>
        <div class="recipe-row">
          <div class="recipe-column">
            <LastWatched :recipe_id= "this.LastWatch1"  v-if="this.LastWatch1" ></LastWatched>
          </div>
          <div class="recipe-column">
            <LastWatched :recipe_id= "this.LastWatch2"  v-if="this.LastWatch2" ></LastWatched>
          </div>
          <div class="recipe-column">
            <LastWatched :recipe_id= "this.LastWatch3"  v-if="this.LastWatch3" ></LastWatched>
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
import PreviewRecipeOnly from "../components/PreviewRecipeOnly";
import LastWatched from "@/components/LastWatched";

export default {
  components: {
    RandomRecipe,
    LoginPage,
    LastWatched,
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
          ,{ withCredentials: true });
        // await setTimeout(10000);

        const RecipeData = response.data;
        console.log("RecipeData[0].History_Watch_R1")
        console.log(RecipeData[0].History_Watch_R1)
        console.log(this.RecipeRandom1)
        this.LastWatch1 = Number(RecipeData[0].History_Watch_R1)
        this.LastWatch2 = Number(RecipeData[0].History_Watch_R2);
        this.LastWatch3 = Number(RecipeData[0].History_Watch_R3);

      } catch (error) {
        console.log(error);
      }
    },
    async getObjectRecipe(numofRec){
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/"+numofRec
          ,{ withCredentials: true });
        // await setTimeout(10000);

        this.LastWatch2 = response.data;
        console.log("this.LastWatch1")
        console.log(this.LastWatch2)
        console.log("response.data")
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.getRandom3Recipes();
    this.getUserLast3Watch();
    // this.getObjectRecipe()
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 350px;
  height: 112vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //margin-top: -600px;
  //margin-left: 800px

}

.recipe-container {
  width: 800px;
  margin-left: -290px;
  padding: 30px;
  background-color: #212529;
  border-radius: 10px;
  color: black;
  //font-family: "Agency FB", sans-serif;
  font-family: 'Russo One', sans-serif;
}

.login-container {
  //background-color: #212529;
  //border-radius: 10px;
  //color: white;
  //font-family: "Agency FB", sans-serif;
  margin-top: 100px;
  margin-left: 800px;
}

.title {
  font-size: 50px;
  //font-family: "Agency FB", serif;
  font-family: 'Russo One', sans-serif;
  //font-weight: bold;
  margin-top: 0;
  color: #001b44;
  padding-top: 200px;
}

.explore-badge {
  color: white;
  //font-family: "Agency FB", sans-serif;
  font-family: 'Russo One', sans-serif;
  font-size: 40px;
  margin-left: 150px;
  margin-top: -30px;
}

.watched-badge {
  margin-top: 30px;
  color: white;
  //font-family: "Agency FB", sans-serif;
  font-family: 'Russo One', sans-serif;
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
  margin-right: 50px;
  height: 100px;
  margin-top: 100px;
  margin-left: -100px;
}


#UserLoggedIn {
  margin-top: -675px;
  margin-left: 1200px;
  width: 500px;
  height: 800px;
}

.elemnt_row {
  padding: 20px;
}

</style>