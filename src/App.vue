<template>
  <div id="app">
    <div id="nav">
      <div class="nav-left" style="font-size: 16px;color:white">

        <router-link :to="{ name: 'main' }" style="color: white"> Home |  </router-link>
        <router-link :to="{ name: 'search' }" style="color: white"> Search | </router-link>
        <router-link :to="{ name: 'about' }" style="color: white">About </router-link>
      </div>
      <div class="nav-right">
        <span v-if="!$root.store.username" class="guest" style="color: white;font-size: 16px">
          hello guest |
          <router-link :to="{ name: 'register' }" style="color: white">Register | </router-link>
          <router-link :to="{ name: 'login' }" style="color: white">Login</router-link>
        </span>
        <span v-else>
          hello {{ $root.store.username }} |
          <button @click="Logout">Logout</button>
        </span>
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;

}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3b4151;
}

.nav-right {
  display: flex;
  align-items: center;
  color:white;
}

.guest {
  margin-left: auto;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
