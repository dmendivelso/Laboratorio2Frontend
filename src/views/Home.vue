<template>
  <div class="container-fluid mt-2">
    <h1>Bienvenido al dummy</h1>
    <div class="row">
      <div class="col-4 col-sm-4 col-md-4 ">
        <button
          class="col-sm-10 col-md-10 offset-sm-1 offset-md-2 btn btn-primary"
          type="submit"
          @click="goToCursos"
        >
          Ver cursos
        </button>
      </div>
      <div class="col-4 col-sm-4 col-md-4 mb-3">
        <button
          class="col-sm-10 col-md-10 offset-sm-1 offset-md-2 btn btn-primary"
          type="submit"
          @click="goToRoles"
        >
          Ver roles
        </button>
      </div>

      <div class="col-4 col-sm-4 col-md-4 mb-3">
        <button
          class="col-sm-10 col-md-10 offset-sm-1 offset-md-2 btn btn-primary"
          type="submit"
          @click="goToCrearCurso"
        >
          Crear Curso
        </button>
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeCreate() {
    if (!localStorage.getItem("token")) {
      this.$router.push({ name: "login" });
    }
  },
  methods: {
    goToCursos() {
      this.$router.push("/principal/cursos");
    },
    goToRoles() {
      this.$router.push("/principal/roles");
    },
    goToCrearCurso() {
      this.$router.push("/principal/crear-curso");
    },
  },
};
</script>

<style></style>
