<template>
  <ul class="list-unstyled">
    <li>
      <div class="font-weight-bold">Nombre del curso:</div>
      {{ courseName }}
    </li>
    <li>
      <div class="font-weight-bold">Duracion del curso:</div>
      {{ durationHours }}
    </li>
    <li>
      <div class="font-weight-bold">Periodo del curso:</div>
      {{ periodName }}
    </li>
    <li>
      <div class="font-weight-bold">Rol en el curso:</div>
      {{ roleName }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "viewCourse",
  props: {
    courseName: String,
    durationHours: Number,
    periodName: String,
    roleName: String,
  },
};
</script>
