<template>
  <div class="col-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2">
    <div class="mt-5">
      <form
        class="border border-primary rounded form-inline"
        @submit="crearCurso"
      >
        <h2 class="col-12 text-center text-primary mt-3 mb-5">
          Cree un nuevo curso
        </h2>

        <div class="form-group col-12">
          <label for="courseName" class="custom-label col-md-3"
            >Nombre del Curso</label
          >
          <input
            id="courseName"
            class="form-control col-12 col-sm-10 col-md-7 offset-sm-1"
            type="text"
            placeholder="Nombre del curso"
            v-model="course.courseName"
            required
          />
        </div>

        <div class="form-group col-12">
          <label for="durationHours" class="custom-label col-md-3"
            >Duracion en horas del curso</label
          >
          <input
            id="durationHours"
            class="form-control col-12 col-sm-10 col-md-7 offset-sm-1"
            type="text"
            placeholder="Duracion en horas del curso"
            v-model="course.durationHours"
            required
          />
        </div>

        <div class="col-12 mb-3">
          <button
            class="col-sm-6 col-md-4 offset-sm-5 offset-md-7 btn btn-primary"
            type="submit"
          >
            Crear Curso
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddCourse",
  data() {
    return {
      course: {
        courseName: "",
        durationHours: "",
      },
    };
  },
  methods: {
    crearCurso(event) {
      axios
        .post(
          this.$store.state.backURL + "/profesor/crear-curso",
          this.course,
          {
            params: {
              access_token: localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          if (response.status == 201) {
            alert("Curso creado");
            this.$router.push("/principal");
          }
        })
        .catch((error) => {
          if (error.response.status === 403) {
            alert("Ud no tiene permisos para esta accion");
            this.$router.push("/principal");
          } else {
            alert("¡Parece que hubo un error de comunicación con el servidor!");
          }
        });
      event.preventDefault();
    },
  },
};
</script>

<style scoped>
.form-inline .form-group {
  margin-bottom: 1rem;
}
</style>
