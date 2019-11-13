import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import categories from "./modules/categories";
import user from "./modules/user";
import skills from "./modules/skills"
import reviews from "./modules/reviews"
import works from "./modules/works"
import message from "./modules/message"

export default new Vuex.Store({
    modules: {
        categories,
        user,
        skills,
        reviews,
        works,
        message
    }
})