import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "/familyRecipes",
    name: "familyRecipes",
    component: () => import("./pages/FamilyRecipesPage"),
  },
  {
    path: "/favoriteRecipesPage",
    name: "favoriteRecipesPage",
    component: () => import("./pages/FavoriteRecipesPage"),
  },
  {
    path: "/myRecipes",
    name: "myRecipes",
    component: () => import("./pages/MyRecipesPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
  {
    path: "/RecipeViewPage",
    name: "RecipeViewPage",
    props: true,
    component: () => import("./pages/RecipeViewPage")
  },
  {
    path: "/CreateRecipe",
    name: "CreateRecipe",
    props: true,
    component: () => import("./components/CreateRecipe")
  },
];

export default routes;
