<template>
    <div id="curso">
        <h2 id="title">Cursos</h2>
            <ViewCourse v-for="assoc in listAssociation"
            v-bind:key="assoc.id"
            v-bind:courseName="assoc.course.courseName"
            v-bind:durationHours="assoc.course.durationHours"
            v-bind:periodName="assoc.period.periodName"
            v-bind:roleName="assoc.role.roleName"
            />
    </div>
</template>

<script>
import ViewCourse from "@/components/ViewCourse"
import axios from "axios"

export default {
    name: "Cursos",
    data() {
        return{
            listAssociation: null,
        }
    },
    components: {
        ViewCourse
    },
    beforeMount(){
        if(!localStorage.getItem("token")){
            this.$router.push("/");
        }
    },
    mounted(){
        axios.get(this.$store.state.backURL + "/usuario/cursos",{
            params: {
              access_token: localStorage.getItem("token")
            }
        }).then((response) => {
             this.listAssociation = response.data
        }, (error) => {
            console.log(error)
        })
    }
}
</script>

<style scoped>
#curso{
    padding-left: 20px;
}

#title{
    align-content: center;
    justify-content: center;
    text-align: center;
}

</style>