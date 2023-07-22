<template>
  <div class="container">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
    <h1 class="title">Search Recipes</h1>
    <section class="search-bar">
      <div class="container1" style="margin-left:200px">
        <div class="row">
          <form>
            <div>
              <div class="input-group">
                <input type="search" v-model="query" placeholder="Search for recipes" class="form-control">
                <div class="mx-auto">
                  <b-dropdown id="dropdown-1"
                              split-variant="outline-primary"
                              variant="primary"
                              class="m-2"
                              :text="num">
                    <b-dropdown-item @click="changeTextNum('5')">5</b-dropdown-item>
                    <b-dropdown-item @click="changeTextNum('10')">10</b-dropdown-item>
                    <b-dropdown-item @click="changeTextNum('15')">15</b-dropdown-item>
                  </b-dropdown>
                  <!--                <b-form-input></b-form-input>-->
                  <b-dropdown id="dropdown-2"
                              split-variant="outline-primary"
                              variant="primary"
                              :text="cuisine"
                              class="m-2">
                    <b-dropdown-item @click="changeTextCuisine('Cuisine')">No Cuisine Filter</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('African')">African</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('American')">American</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('British')">British</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Cajun')">Cajun</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Caribbean')">Caribbean</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Chinese')">Chinese</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Eastern European')">Eastern European</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('European')">European</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('German')">German</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Greek')">Greek</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Indian')">Indian</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Irish')">Irish</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Italian')">Italian</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Japanese')">Japanese</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Jewish')">Jewish</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Korean')">Korean</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Latin American')">Latin American</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Mediterranean')">Mediterranean</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Mexican')">Mexican</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Middle Eastern')">Middle Eastern</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Nordic')">Nordic</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Southern')">Southern</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Spanish')">Spanish</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Thai')">Thai</b-dropdown-item>
                    <b-dropdown-item @click="changeTextCuisine('Vietnamese')">Vietnamese</b-dropdown-item>
                  </b-dropdown>
                  <b-dropdown id="dropdown-3"
                              split-variant="outline-primary"
                              variant="primary"
                              :text="diet"
                              class="m-2">
                    <b-dropdown-item @click="changeTextDiet('Diet')">No Diet Filter</b-dropdown-item>
                    <b-dropdown-item @click="changeTextDiet('Gluten Free')">Gluten Free</b-dropdown-item>
                    <b-dropdown-item @click="changeTextDiet('Ketogenic')">Ketogenic</b-dropdown-item>
                    <b-dropdown-item @click="changeTextDiet('Vegetarian')">Vegetarian</b-dropdown-item>
                    <b-dropdown-item @click="changeTextDiet('Lacto-Vegetarian')">Lacto-Vegetarian</b-dropdown-item>
                    <b-dropdown-item @click="changeTextDiet('Ovo-Vegetarian')">Ovo-Vegetarian</b-dropdown-item>
                    <b-dropdown-item @click="changeTextDiet('Vegan')">Vegan</b-dropdown-item>
                    <b-dropdown-item @click="changeTextDiet('Pescetarian')">Pescetarian</b-dropdown-item>
                    <b-dropdown-item @click="changeTextDiet('Paleo')">Paleo</b-dropdown-item>
                    <b-dropdown-item @click="changeTextDiet('Primal')">Primal</b-dropdown-item>
                    <b-dropdown-item @click="changeTextDiet('Low FODMAP')">Low FODMAP</b-dropdown-item>
                    <b-dropdown-item @click="changeTextDiet('Whole30')">Whole30</b-dropdown-item>
                  </b-dropdown>
                  <b-dropdown id="dropdown-4"
                              split-variant="outline-primary"
                              variant="primary"
                              :text="intolerance"
                              class="m-2">
                    <b-dropdown-item @click="changeTextIntolerance('Intolerance')">No Intolerance Filter
                    </b-dropdown-item>
                    <b-dropdown-item @click="changeTextIntolerance('Dairy')">Dairy</b-dropdown-item>
                    <b-dropdown-item @click="changeTextIntolerance('Egg')">Egg</b-dropdown-item>
                    <b-dropdown-item @click="changeTextIntolerance('Gluten')">Gluten</b-dropdown-item>
                    <b-dropdown-item @click="changeTextIntolerance('Grain')">Grain</b-dropdown-item>
                    <b-dropdown-item @click="changeTextIntolerance('Peanut')">Peanut</b-dropdown-item>
                    <b-dropdown-item @click="changeTextIntolerance('Seafood')">Seafood</b-dropdown-item>
                    <b-dropdown-item @click="changeTextIntolerance('Sesame')">Sesame</b-dropdown-item>
                    <b-dropdown-item @click="changeTextIntolerance('Shellfish')">Shellfish</b-dropdown-item>
                    <b-dropdown-item @click="changeTextIntolerance('Soy')">Soy</b-dropdown-item>
                    <b-dropdown-item @click="changeTextIntolerance('Sulfite')">Sulfite</b-dropdown-item>
                    <b-dropdown-item @click="changeTextIntolerance('Tree Nut')">Tree Nut</b-dropdown-item>
                    <b-dropdown-item @click="changeTextIntolerance('Wheat')">Wheat</b-dropdown-item>
                  </b-dropdown>
                </div>
                <br>
                <br>
                <br>
                <div class="input-group-append" style="margin-left: 50px">
                  <!--                 <button type="sumbit" @click="searchRecipe()" class="btn btn-link">-->
                  <b-button type="sumbit" @click="searchRecipe()" variant="primary">Search</b-button>
                  <!--                    -->
                  <!--                    <b-icon-search></b-icon-search>-->
                  <!--                  </button>-->
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    <div>
      <b-dropdown id="dropdown-2"
                  split-variant="outline-primary"
                  variant="primary"
                  text="Sort By"
                  v-if="this.recipes !== ''"
                  class="dd-sortBy"
      style="margin-left: 10px; margin-bottom: 50px; padding-top: 10px;">
        <b-dropdown-item @click="sortByTime()">Time</b-dropdown-item>
        <b-dropdown-item @click="sortByLikes()">Likes</b-dropdown-item>
      </b-dropdown>
    </div>
    <!--    <h1 class="subtitle" style="margin-left:300px" v-if="this.recipes.length == 0" >0 Search results for the given query</h1>-->
    <!--    <h1 class="subtitle" style="margin-left:200px" v-if="this.recipes.length == 0" >0 Search results</h1>-->
    <section class="ReturnedRecipes" v-if="this.recipes !== ''">
      <b-card-group deck style="margin-left: 70px;">
        <PreviewRecipeOnly v-for="recipe in this.recipes"
                           :key="recipe.recipe_id"
                           :Recipe="recipe"
                           @toggle-favorite="toggleFavorite(recipe)"
        ></PreviewRecipeOnly>
      </b-card-group>
    </section>
  </div>
</template>


<script>
import PreviewRecipeOnly from "../components/PreviewRecipeOnly";

export default {
  name: "SearchPage",
  components: {
    PreviewRecipeOnly
  },
  data() {
    return {
      cuisine: "Cuisine",
      diet: "Diet",
      intolerance: "Intolerance",
      num: "Number Of Recipe",

      query: "",
      recipes: ""
    };
  },
  mounted() {
    console.log(localStorage.getItem("searchResults"));
    if (localStorage.getItem("searchResults") && localStorage.getItem("username")) {
      try {
        this.recipes = JSON.parse(localStorage.getItem("searchResults"));
      } catch (e) {
        localStorage.removeItem("searchResults");
      }
    } else {
      this.recipes = "";
    }
  },
  methods: {
    toggleFavorite(recipe) {
      recipe.favorite = !recipe.favorite;
    },
    changeTextCuisine(x) {
      this.cuisine = x;
    },
    changeTextDiet(x) {
      this.diet = x;
    },
    changeTextIntolerance(x) {
      this.intolerance = x;
    },
    changeTextNum(x) {
      this.num = x;
    },
    async searchRecipe() {
      // this.num = 5;
      // let query=JSON.stringify(this.query);
      // let num = JSON.stringify(this.num);
      let cuisineFixed = "";
      let dietFixed = "";
      let intoleranceFixed = "";

      if (this.num === "Number Of Recipe") {
        this.num = "5";
      }
      if (this.cuisine !== "Cuisine") {
        cuisineFixed = this.cuisine;
      }
      if (this.diet !== "Diet") {
        dietFixed = this.diet;
      }
      if (this.intolerance !== "Intolerance") {
        intoleranceFixed = this.intolerance;
      }
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/search/query/" + this.query + "/amount/" + this.num,
          {
            params: {
              cuisine: cuisineFixed,
              diet: dietFixed,
              intolerances: intoleranceFixed
            }
          }
        );
        const RecipesData = response.data;
        this.recipes = RecipesData;
        const parsed = JSON.stringify(this.recipes);
        this.$root.store.setSearchResults(parsed);

        // console.log(this.$root.store.searchResults)
        // console.log(localStorage.searchResults[0])
        //await previewRecipeOnly.methods.userWatched();
      } catch (error) {
        console.log(error);
      }
    },
    sortByTime() {
      this.recipes.sort(this.compare_Time);
    },
    sortByLikes() {
      this.recipes.sort(this.compare_Likes);
      this.recipes.reverse();
    },
    compare_Time(a, b) {
      if (a.readyInMinutes < b.readyInMinutes) {
        return -1;
      }
      if (a.readyInMinutes > b.readyInMinutes) {
        return 1;
      }
      return 0;
    },
    compare_Likes(a, b) {
      if (a.popularity < b.popularity) {
        return -1;
      }
      if (a.popularity > b.popularity) {
        return 1;
      }
      return 0;
    }
  }
};
</script>


<style>


/*div[data-v-1d823742] {*/
/*  width: 360px;*/
/*  margin-left: 20px;*/
/*  margin-right: -9px;*/
/*}*/

.title {
  color: black;
  font-family: "Russo One",serif;
  //font-family: Roboto,serif;
  //font-weight: bold;
  font-size: 80px;
}


.input-group {
  /*  position: relative;*/
  /*  flex: 1 1 auto;*/
  width: 80%;
  /*  min-width: 0;*/
  /*  margin-bottom: 0;*/
}

.form-control {
  font-family: "Russo One",serif;

}

.dd-sortBy {
  margin-left: 160px;
}

.m-2 {
  navbutton_background_color: #42b983;

}

.input-group > .form-control {
  position: relative;
  flex: 1 1 auto;
  width: 160%;
  height: 50px;
  min-width: 100px;
}



.input-group > .input-group-append > .btn {
  width: 674px;
  height: 40px;
}

.card-text {
  /*height: 80px; !* Adjust text height as needed *!*/
  overflow: hidden;
}

.card-title {
  font-size: 50px;
  font-family: "Russo One",serif;
}

.card {
  font-size: 20px;
}

</style>