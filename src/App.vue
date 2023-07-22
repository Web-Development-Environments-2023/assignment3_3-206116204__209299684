<template>
  <div id="app">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
    <div id="nav">
      <div class="nav-left" style="font-size: 16px;color:white">
        <router-link :to="{ name: 'main' }" style="color: white"> Home |</router-link>
        <router-link :to="{ name: 'search' }" style="color: white"> Search |</router-link>
        <router-link :to="{ name: 'about' }" style="color: white"> About</router-link>
      </div>
      <img src="@/assets/logo.png" style="height:80px; width:100px ; margin-left: 250px; " alt="">
      <div class="nav-right" style="margin-bottom:-80px;">
        <span v-if="!$root.store.username" class="guest" style="color: white;font-size: 16px">
          hello guest |
          <router-link :to="{ name: 'register' }" style="color: white">Register | </router-link>
          <router-link :to="{ name: 'login' }" style="color: white">Login</router-link>
        </span>
        <nav class="navbar navbar-expand-lg navbar-light"
             style="margin-right: 50px;" v-else>
          <ul class="navbar-nav">
            <li class="nav-item active">
              <b-nav-item class="nav-link active">
                <span class="username" >hello {{ $root.store.username }}  </span>
              </b-nav-item>
            </li>
            <li>
              <b-dropdown id="dropdown-1" text="Personal" class="m-md-2" style="padding-top: 5px;">
                <b-dropdown-item :to="{ name: 'favoriteRecipesPage' }" >My Favorite Recipes
                </b-dropdown-item>
                <b-dropdown-item :to="{ name: 'myRecipes' }">My Recipes
                </b-dropdown-item>
                <b-dropdown-item :to="{ name: 'CreateRecipe' }" v-b-modal="'modal-prevent-closing'">Create Recipe
                </b-dropdown-item>
                <b-dropdown-item :to="{ name: 'familyRecipes' }">My Family Recipe
                </b-dropdown-item>
                <b-dropdown-item @click="Logout">Logout
                </b-dropdown-item>
                <!--                  <b-dropdown-item v-b-modal="'modal-prevent-closing'">Create Recipe</b-dropdown-item>-->
              </b-dropdown>
            </li>
            <button @click="Logout"  style="color: white; background-color: #3b4151;  width: 120px; height: 40px;margin-top: 10px">Logout</button>

          </ul>
        </nav>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
@import '../src/pages/.src/assets/style.css';

html, body {
  height: 100%;
  margin: 0;
  background-image: url("../src/pages/.src/assets/pictures/background2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#app {
  //font-family: Avenir, Helvetica, sans-serif;
  font-family: 'Russo One', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3b4151;
}

.nav-right {
  display: flex;
  align-items: center;
  color: white;
  margin-top: -80px;
}

.guest {
  margin-left: auto;
}

#nav a {
  //font-weight: bold;
}

.username{
  //font-family:  'Montserrat', Arial, sans-serif;
  font-family: 'Russo One', sans-serif;
  color: #ff2525;
  font-size: 20px
}


</style>
