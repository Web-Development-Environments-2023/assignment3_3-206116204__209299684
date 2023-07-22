<template>
  <div class="container">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
    <h1 class="title" style="color: white;">Login</h1>
    <b-form @submit.prevent="onLogin">
      <b-form-group
        id="input-group-Username"
        label-cols-sm="3"
        label="Username:"
        label-for="Username"
      >
        <b-form-input
          id="Username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"
        ></b-form-input>
        <b-form-invalid-feedback>
          Username is required
        </b-form-invalid-feedback>

      </b-form-group>

      <b-form-group
        id="input-group-Password"
        label-cols-sm="3"
        label="Password:"
        label-for="Password"
      >
        <b-form-input
          id="Password"
          type="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback>
          Password is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
        style="width:100px;display:block;font-size: 25px"
        class="mx-auto w-100"
      >Login
      </b-button
      >
      <div class="mt-2">
        Do not have an account yet?
        <router-link to="register"> Register in here</router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Login failed: {{ form.submitError }}
    </b-alert>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  alpha,
  sameAs,
  email
} from "vuelidate/lib/validators";

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        submitError: undefined
      }
    };
  },
  validations: {
    form: {
      username: {
        required
        //length: (u) => minLength(3)(u) && maxLength(8)(u),
        //alpha
      },
      password: {
        required
        //containsUppercase: (p)=> /[A-Z]/.test(p),
        //containsNumber : (p)=> /[0-9]/.test(p),
        //length: (p) => minLength(5)(p) && maxLength(10)(p)
      }
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },

    async Login() {
      try {
        const response = await this.axios.post(
          this.$root.store.server_domain + "/Login",
          {
            username: this.form.username,
            password: this.form.password
          }
        ,{withCredentials: true});


        console.log(this.$root.store.login);
        this.$root.store.login(this.form.username);
        try {
          const response = await this.axios.get(
            this.$root.store.server_domain + "/users/user_last_3_watch"
          );
          const RecipeData = response.data;
          this.$root.store.setQuery1(RecipeData[0].History_Watch_R1);
          this.$root.store.setQuery2(RecipeData[0].History_Watch_R2);
          this.$root.store.setQuery3(RecipeData[0].History_Watch_R3);
          //this.LastWatch2=RecipeData[0].History_Watch_R2;
          //this.LastWatch3=RecipeData[0].History_Watch_R3;

        } catch (error) {
          console.log(error);
        }
        console.log();

        await this.$router.push("/");
      } catch (err) {
        window.alert(err.response.data.message);
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onLogin() {

      //console.log("login method called");
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      //console.log("login method go");

      this.Login();
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 500px;
  width: 800px;
  margin-top: 30px;
  padding-top: 24px;
  background-color: #212529;
  border-radius: 10px;
  color: white;
  //font-family: "Agency FB", sans-serif;
  font-family: 'Russo One', sans-serif;
  font-size: 20px;
}
.title{
  font-size: 65px;
  font-family: 'Russo One', sans-serif;
}
</style>