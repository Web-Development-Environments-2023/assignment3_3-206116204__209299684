<template id="templateDec">
  <div id="primaryDiv">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
    <!--    <b-modal id="modal-prevent-closing" ref="modal" title="Create Your Recipe" @show="resetModal" @hidden="resetModal" @ok="onCreateRecipe">-->
    <h1 class="title">Create Recipes</h1>
    <form ref="form" @submit.prevent="CreateRecipe">
      <b-form-group id="input-group-recipeId" label="Recipe ID:" label-for="recipeId"
                    content-cols-lg="1">
        <b-form-input id="input-group-recipeId" v-model="$v.form.recipeId.$model" type="text"
                      :state="validateState('recipeId')"></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.recipeId.required">
          RecipeID is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.recipeId.length">
          RecipeID length should be between 1-9 characters long
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.recipeId.numeric">
          RecipeID has to be numeric
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-title" label="Title:" label-for="title">
        <b-form-input id="title" v-model="$v.form.title.$model" type="text"
                      :state="validateState('title')"></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.title.required">
          Title is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.title.length">
          Title length should be between 1-69 characters long
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-readyInMinutes" label="Time To Make:" label-for="readyInMinutes">
        <b-form-input id="readyInMinutes" v-model="$v.form.readyInMinutes.$model" type="text"
                      :state="validateState('readyInMinutes')"></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.readyInMinutes.required">
          Time To Make is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.readyInMinutes.numeric">
          Time To Make has to be numeric
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-image" label="Image URL:" label-for="image">
        <b-form-input id="image" v-model="$v.form.image.$model" type="text"
                      :state="validateState('image')"></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.image.required">
          Image URL is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.image.length">
          Image URL length should be between 1-499 characters long
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.image.url">
          Image URL has to be an URL
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-popularity" label="Popularity (Num of likes):" label-for="popularity">
        <b-form-input id="popularity" v-model="$v.form.popularity.$model" type="text"
                      :state="validateState('popularity')"></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.popularity.required">
          Popularity is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.popularity.numeric">
          Popularity has to be numeric
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-vegan" label-cols-sm="3" label="Vegan:" label-for="vegan">
        <b-form-select id="vegan" v-model="$v.form.vegan.$model" :options="booleanoptions"
                       :state="validateState('vegan')"></b-form-select>
        <b-form-invalid-feedback>
          Vegan indicator is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-vegetarian" label-cols-sm="3" label="Vegetarian:" label-for="vegetarian">
        <b-form-select id="vegetarian" v-model="$v.form.vegetarian.$model" :options="booleanoptions"
                       :state="validateState('vegetarian')"></b-form-select>
        <b-form-invalid-feedback>
          Vegetarian indicator is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-glutenFree" label-cols-sm="3" label="Gluten Free:" label-for="glutenFree">
        <b-form-select id="glutenFree" v-model="$v.form.glutenFree.$model" :options="booleanoptions"
                       :state="validateState('glutenFree')"></b-form-select>
        <b-form-invalid-feedback>
          Gluten Free indicator is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-ingredients" label="Ingredients:" label-for="ingredients">
        <b-form-input id="ingredients" v-model="$v.form.ingredients.$model" type="text"
                      :state="validateState('ingredients')"></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.ingredients.required">
          Ingredients is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.ingredients.length">
          Ingredients length should be between 1-149 characters long
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-instructions" label="Instructions:" label-for="instructions">
        <b-form-input id="instructions" v-model="$v.form.instructions.$model" type="text"
                      :state="validateState('instructions')"></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.instructions.required">
          Instructions is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.instructions.length">
          Instructions length should be between 1-149 characters long
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-numOfDishes" label="Number Of Dishes:" label-for="numOfDishes">
        <b-form-input id="numOfDishes" v-model="$v.form.numOfDishes.$model" type="text"
                      :state="validateState('numOfDishes')"></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.numOfDishes.required">
          Number Of Dishes is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.numOfDishes.numeric">
          Number Of Dishes has to be numeric
        </b-form-invalid-feedback>
      </b-form-group>
      <b-button type="sumbit" @click="CreateRecipe()" variant="primary">Create Recipe</b-button>
    </form>
    <!--    </b-modal>-->
  </div>

</template>

<script>
import {
  required,
  minLength,
  maxLength,
  alpha,
  numeric,
  url
} from "vuelidate/lib/validators";

export default {
  name: "CreateRecipe",
  data() {
    return {
      form: {
        recipeId: "",
        title: "",
        readyInMinutes: "",
        image: "",
        popularity: "",
        vegan: "",
        vegetarian: "",
        glutenFree: "",
        ingredients: "",
        instructions: "",
        numOfDishes: ""
      },
      validated: false,
      booleanoptions: [{ value: null, text: "", disabled: true }]
    };
  },
  validations: {
    form: {
      recipeId: {
        required,
        length: (u) => minLength(1)(u) && maxLength(9)(u),
        numeric
      },
      title: {
        required,
        length: (t) => minLength(1)(t) && maxLength(69)(t)
      },
      readyInMinutes: {
        required,
        numeric
      },
      image: {
        required,
        length: (i) => minLength(3)(i) && maxLength(499)(i),
        url
      },
      popularity: {
        required,
        numeric
      },
      vegan: {
        required,
        alpha
      },
      vegetarian: {
        required,
        alpha
      },
      glutenFree: {
        required,
        alpha
      },
      ingredients: {
        required,
        length: (i) => minLength(1)(i) && maxLength(149)(i)
      },
      instructions: {
        required,
        length: (i) => minLength(1)(i) && maxLength(149)(i)
      },
      numOfDishes: {
        required,
        numeric
      }
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    resetModal() {
      this.form = {
        recipeId: "",
        title: "",
        readyInMinutes: "",
        image: "",
        popularity: "",
        vegan: "",
        vegetarian: "",
        glutenFree: "",
        ingredients: "",
        instructions: "",
        numOfDishes: ""
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    async CreateRecipe() {
      console.log(this.form.recipeId);
      try {
        const response = await this.axios.post(
          // "https://test-for-3-2.herokuapp.com/user/Register",
          this.$root.store.server_domain + "/users/createRecipe",
          {
            recipe_id: this.form.recipeId,
            title: this.form.title,
            readyInMinutes: this.form.readyInMinutes,
            image: this.form.image,
            popularity: this.form.popularity,
            vegan: this.form.vegan,
            vegetarian: this.form.vegetarian,
            glutenFree: this.form.glutenFree,
            ingredients: this.form.ingredients,
            instructions: this.form.instructions,
            numOfDishes: this.form.numOfDishes
          }, { withCredentials: true }
        );

        // console.log(response);
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
      window.alert("Created ! you can watch the recipe in My Recipe page =-)");
      await this.$router.push("/");
    },
    onCreateRecipe() {
      // console.log("register method called");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("register method go");
      this.CreateRecipe();
    }
  },
  mounted() {
    this.booleanoptions.push(true);
    this.booleanoptions.push(false);
  }
};
</script>

<style>
form {
  height: 900px;
  width: 600px;
  margin-left: 37%;
  font-family: cursive;
  font-weight: bold;
}
b-form-input{
  /*max-width: 500px;*/
  /*max-block-size: 500px;*/
}
.title{
  font-family: "Russo One",serif;
  color: black;
}
.warpform {
  /*width: 800px;*/
  /*margin-left: -300px;*/
  /*padding: 30px;*/
  /*background-color: #212529;*/
  /*border-radius: 10px;*/
  /*color: black;*/
  /*font-family: "Agency FB", sans-serif;*/
}

.primaryDiv {
  /*width: 800px;*/
  /*height: 800px;*/
/*  margin-left: -300px;*/
/*  !*padding: 30px;*!*/
/*  background-color: #212529;*/
/*  !*border-radius: 10px;*!*/
/*  color: black;*/
/*  font-family: "Agency FB", sans-serif;*/
}
</style>