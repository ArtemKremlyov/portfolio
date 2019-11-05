import Vue from "vue";
import authorization from "./components/authorization";

new Vue({
    el:".login",
    data:() =>({
        user:{
            name:"",
            password:""
        }
    })
})