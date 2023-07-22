<template>
  <div id = "primaryDiv">
    <b-card :title="recipe.title" :img-src="recipe.image" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
      <b-card no-body v-bind:title="recipe.title" img-top tag="article" style="max-width: 20rem;" class="mb-2">
        <router-link :to="{ name: 'RecipeViewPage', params:{id:recipe.id} } ">
        </router-link>
        <b-card-text>
          <ul class="recipe-overview" style="list-style-type: none;">
            <li> <b-icon-clock-history style="font-size: 2rem;"></b-icon-clock-history><span> Time to prepare: </span> {{recipe.readyInMinutes}} </li>
            <li><b-icon-heart-fill style="font-size: 2rem;"></b-icon-heart-fill><span> Likes: </span> {{ recipe.popularity}}</li>
            <li><b-icon icon="egg" style="font-size: 2rem;"></b-icon><span>Vegan: </span> {{recipe.vegan}}</li>
            <li><b-icon-egg-fill style="font-size: 2rem;"></b-icon-egg-fill><span>Vegeterian: </span> {{recipe.vegetarian}}</li>
            <li><b-icon-x-circle-fill style="font-size: 2rem;"></b-icon-x-circle-fill><span>Gluten-Free:</span> {{recipe.glutenFree}}</li>

          </ul>
        </b-card-text>
      </b-card>
    </b-card>
  </div>
</template>
<script>
export default {
  name: 'LastWatched',
  props: {
    recipe_id: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      recipe:'',
      favortied:'',
      watched:''
    };
  },
  mounted() {
    this.getRecipe_Object();
    this.getFavorites();
    this.getWatched();

  },
  methods: {
    async getRecipe_Object(){
      let recipe_id_String=JSON.stringify(this.recipe_id);
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain+"/recipes/"+recipe_id_String
        );
        const RecipeData = response.data;
        this.recipe=RecipeData;


      } catch (error) {
        console.log(error);
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.recipe-preview {
  display: inline-block;
  width: 90%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
}
.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}
.primaryDiv{
  font-size: 20px;
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
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

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