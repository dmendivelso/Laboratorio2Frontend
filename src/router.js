import Vue from "vue";
import Router from "vue-router";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import Home from "./views/Home";
import AddRole from "./components/AddRole";
import Cursos from "./views/Cursos";
import Roles from "./views/Roles";
import AddCourse from "./components/AddCourse";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/registro",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/",
      alias: "/iniciar-sesion",
      name: "login",
      component: Login,
    },
    {
      path: "/principal",
      name: "home",
      component: Home,
      children: [
        {
          path: "nuevo-rol",
          name: "add-role",
          component: AddRole,
        },
        {
          path: "cursos",
          name: "cursos",
          component: Cursos,
        },
        {
          path: "roles",
          name: "roles",
          component: Roles,
        },
        {
          path: "crear-curso",
          name: "crear-curso",
          component: AddCourse,
        },
      ],
    },
  ],
});
