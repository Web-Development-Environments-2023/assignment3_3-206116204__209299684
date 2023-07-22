<template>
  <div class="container">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div>Likes: {{ recipe.popularity }} likes</div>
            </div>
            Ingredients:
            <ul>
              <li
                v-for="(r, index) in recipe.extendedIngredients"
                :key="index + '_' + r.id"
              >
                {{ r.original }}
              </li>
            </ul>
          </div>
          <div class="wrapped" style="margin-top: 70px; margin-right: 200px">
            Instructions:
            <ol>
              <li v-for="(step, index) in parseInstructions(recipe.instructions)" :key="index">
                {{ step }}
              </li>
            </ol>

          </div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </div>
  </div>
</template>

<script>
export default {
  name:"RecipeViewPage",
  props:{
    id:{
      type: Number,
      required: false
    }
  },
  mounted() {
    this.indicateLastWatch();
  },

  methods: {
    async indicateLastWatch(){
      try {
        console.log(this.id)
        await this.axios.post(this.$root.store.server_domain+"/users/user_watched_recipe/" + this.id, null,{ withCredentials: true }
        );
      } catch (error) {
        console.log(error);
      }
    },
    parseInstructions(htmlString) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, 'text/html');
      const listItems = doc.querySelectorAll('ol > li');
      const steps = [];

      listItems.forEach((li) => {
        steps.push(li.textContent.trim());
      });

      return steps;
    },
  },

  data() {
    return {
      recipe: null
    };
  },
  async created() {

    try {
      let response;
      try {

        console.log("the recipe id we got from params:")
        console.log(this.id)
        response = await this.axios.get(
          this.$root.store.server_domain+"/recipes/recipeDetails/"+this.id
        );
      } catch (error) {
        console.log("error.response.status", error.response.status);
        await this.$router.replace("/NotFound");
        return;
      }
      this.recipe = response.data
      let {
        analyzedInstructions,
        instructions,
        extendedIngredients,
        popularity,
        readyInMinutes,
        image,
        title
      } = response.data;

      let _instructions = analyzedInstructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        popularity,
        readyInMinutes,
        image,
        title
      };

      this.recipe = _recipe;

    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.container{
  font-family: 'Russo One', sans-serif;
//font-weight: bold;
  color: white;
  background-color: #2c3e50;
  font-size: 20px;
}
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
/* .recipe-header{

} */
</style>