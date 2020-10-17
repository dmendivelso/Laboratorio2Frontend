<template>
  <div id="Roles">
        <h2 id="title">Roles</h2>
            <ul id="example-1">
             <li v-for="rol in listRoles" :key="rol.id">
                {{ rol.roleName }}
             </li>
            </ul>
   </div>
</template>

<script>
import axios from "axios"
export default {
    name: "Roles",
    data() {
        return{
            listRoles: null,
        }
    },
    beforeMount(){
        if(!localStorage.getItem("token")){
            this.$router.push("/");
        }
    },
    mounted(){
        axios.get(this.$store.state.backURL + "/usuario/roles",{
            params: {
              access_token: localStorage.getItem("token")
            }
        }).then((response) => {
             this.listRoles = response.data
        }, (error) => {
            console.log(error)
        })
    }
}
</script>

<style>
#curso{
    padding-left: 20px;
}

#title{
    align-content: center;
    justify-content: center;
    text-align: center;
}
</style>