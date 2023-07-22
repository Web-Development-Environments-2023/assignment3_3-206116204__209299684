<template>
  <div>
    <b-card no-body v-bind:title="recipe.title" img-top tag="article" style="max-width: 20rem;" class="mb-2">
      <router-link :to="{ name: 'RecipeViewPage', params:{id:recipe.recipe_id} } ">
        <b-card-img :src="recipe.image" />
      </router-link>
      <b-card-title v-bind:title="recipe.title"></b-card-title>
      <b-card-text>
          <ul class="recipe-overview" style="list-style-type: none;">
            <li>
              <b-icon-clock-history style="font-size: 2rem;"></b-icon-clock-history>
              <span> Time to prepare: </span> {{ recipe.readyInMinutes }}
            </li>
            <li>
              <b-icon-heart-fill style="font-size: 2rem;"></b-icon-heart-fill>
              <span> Likes: </span> {{ recipe.popularity }}
            </li>
            <li>
              <b-icon icon="egg" style="font-size: 2rem;"></b-icon>
              <span>Vegan: </span> {{ recipe.vegan }}
            </li>
            <li>
              <b-icon-egg-fill style="font-size: 2rem;"></b-icon-egg-fill>
              <span>Vegeterian: </span> {{ recipe.vegetarian }}
            </li>
            <li>
              <b-icon-x-circle-fill style="font-size: 2rem;"></b-icon-x-circle-fill>
              <span>Gluten-Free:</span> {{ recipe.glutenFree }}
            </li>
            <li>
              <span>Favorite:</span>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="margin-left:10px"
                     v-if="this.favorited === true" checked disabled>
              <input class="form-check-input" type="checkbox" value="" @click="Favorite()" id="flexCheckDefault"
                     style="margin-left:10px" v-else-if="this.favorited !== true">
            </li>
            <li>
              <span>Watched:</span>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="margin-left:10px"
                     v-if="this.watched === true" checked disabled>
              <input class="form-check-input" type="checkbox" value="" @click="Watch()" id="flexCheckDefault" style="margin-left:10px"
                     v-else-if="this.watched !== true" disabled>
            </li>
          </ul>
        </b-card-text>
      </b-card>
  </div>
</template>

<script>
export default {
  name: "RandomRecipe",
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      favorited:'',
      watched:'',
    };
  },
  mounted() {
    this.getFavorites();
    this.getWatched();
  },
  methods: {
    async getFavorites() {
      try {
        const recipesIDS = await this.axios.get(this.$root.store.server_domain + "/users/favoritesIDs", { withCredentials: true });
        console.log(this.Recipe.recipe_id)
        this.favorited = recipesIDS.data.includes(this.Recipe.recipe_id);
      } catch (error) {
        console.log(error);
      }
    },
    async getWatched() {
      try {
        const recipesIDS = await this.axios.get(this.$root.store.server_domain + "/users/user_last_3_watch", { withCredentials: true });
        console.log(this.Recipe.recipe_id)
        this.watched = recipesIDS.data.includes(this.Recipe.recipe_id);
      } catch (error) {
        console.log(error);
      }
    },
// Use the Axios instance to make the request
    async Favorite() {
      try {
        await this.axios.post(
          this.$root.store.server_domain + "/users/addFavoriteReciped/" + parseInt(this.recipe.recipe_id), null, { withCredentials: true }
        );
        this.favorited = true;
      } catch (error) {
        console.log(error);
      }
    },

    async Watch() {
      // this.axios.defaults.withCredentials = true;
      try {
        await this.axios.post(
          this.$root.store.server_domain + "/users/user_watched_recipe/" + parseInt(this.recipe.recipe_id), null,{ withCredentials: true }
        );
        this.watched = true;
      } catch (error) {
        console.log(error);
      }
    }
  }

};

</script>

<style lang="scss" scoped>
.recipe-preview {
  display: inline-block;
  width: 90%;
  height: 100%;
  position: relative;
  margin: 10px 10px;

}
.card-title {
  font-size: 20px;
  //font-family: "Agency FB", serif;
  font-family: "Russo One",serif;

}
.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  margin: auto;
  display: block;
  width: 98%;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;

}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;

}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0;
  list-style-type: none;

}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;

}

</style>