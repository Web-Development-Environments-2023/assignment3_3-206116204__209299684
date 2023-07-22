<template>
  <div>
    <b-card no-body v-bind:title="Recipe.title" img-top tag="article" style="max-width: 30rem;" class="mb-2">
      <router-link :to="{ name: 'RecipeViewPage', params:{id:Recipe.id} } ">
        <b-card-img :src="Recipe.image" />
      </router-link>
      <b-card-title v-bind:title="Recipe.title" style="font-size: 30px;color: #1f69c0"></b-card-title>
      <b-card-text>
        <ul class="recipe-overview" style="list-style-type: none;">
          <li>
            <span>Time:</span> {{ Recipe.readyInMinutes }}
          </li>
          <li>
            <span>Likes:</span> {{ Recipe.popularity }}
          </li>
          <li>
            <span>Vegan:</span> {{ Recipe.vegan }}
          </li>
          <li>
            <span>Vegeterian:</span> {{ Recipe.vegetarian }}
          </li>
          <li>
            <span>Gluten-Free:</span> {{ Recipe.glutenFree }}
          </li>
          <li>
            <span>Favorite:</span>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="margin-left:10px"
                   v-if="favortied === true" checked disabled>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="margin-left:10px" v-else-if="favortied !== true" @click="favorite()">
          </li>
          <li>
            <span>Watched:</span>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="margin-left:10px"
                   v-if="watched === true" checked disabled>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="margin-left:10px" v-else-if="watched !== true" disabled>
          </li>
        </ul>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'PreviewRecipe',
  props: {
    recipe_id: {
      type: Number,
      required: false
    },
    Recipe: {
      type: Object,
      required: false,
      default() {
        return undefined;
      }
    }
  },
  data() {
    return {
      favortied: '',
      watched: ''
    };
  },
  mounted() {
    this.getFavorites();
    //this.getWatched();
  },
  methods: {
    async getFavorites() {
      try {

        const recipesIDS = await this.axios.get(this.$root.store.server_domain + "/users/favoritesIDs", { withCredentials: true });
        for (let i = 0; i < recipesIDS.data.length; i++) {
          if (recipesIDS.data[0][i] === this.Recipe.recipe_id) {
            this.favortied = true;
            return;
          }
        }
        this.favortied = '';
      } catch (error) {
        console.log(error);
      }
    },
    async favorite() {
      try {
        if (!this.favortied) {
          const response = await this.axios.post(this.$root.store.server_domain + "/users/addFavoriteReciped/" + this.Recipe.recipe_id,
            null,{ withCredentials: true }
          );
          this.favortied = true;
        } else {
          this.favortied = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
    // async getWatched() {
    //   try {
    //     const response = await this.axios.get(this.$root.store.server_domain + "/users/user_indication_recipe_NEW", { withCredentials: true });
    //     const RecipesData = response.data;
    //     for (let i = 0; i < RecipesData.length; i++) {
    //       if (RecipesData[i] === this.Recipe.recipe_id) {
    //         this.watched = true;
    //         return;
    //       }
    //     }
    //     this.watched = '';
    //   } catch
    //     (error)
    //   {
    //     console.log(error);
    //   }
    // }
  },
};
</script>

<style lang="scss" scoped>
b-card.title {
  color: blue;
}

div {
  font-size: 25px;
  margin-top: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 310px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>
