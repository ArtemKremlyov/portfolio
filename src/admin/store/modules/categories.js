import { generateStdError } from "@/helpers/errorHandler";
export default {
    namespaced:true,
    state: {
        categories: [],
    },
    mutations:{
        SET_CATEGORIES(state, categories){
           state.categories = categories;
        },
        ADD_CATEGORY(state,category){
            state.categories.unshift(category)
        },
        REMOVE_CATEGORY(state,removedCategory){
            state.categories = state.categories.filter(category => category.id !== removedCategory)
        },
        ADD_SKILL(state,newSkill){
            state.categories = state.categories.map(category => {
                if (category.id === newSkill.category) {
                    category.skills.push(newSkill)
                }
                return category;
            })
        },
        REMOVE_SKILL(state,deletedSkill){
            state.categories = state.categories.map(category => {
                if(category.id === deletedSkill.category){
                    category.skills = category.skills.filter(skill => skill.id !== deletedSkill.id)
                }
                return category
            })
        },
        EDIT_SKILL(state,editedSkill){
            const editSkill = category => {
                category.skills = category.skills.map(skill => skill.id === editedSkill.id ? editedSkill : skill )
            }
            const findRequiredCategory = category => {
                if (category.id === editedSkill.category) {
                    editSkill(category);
                }

                return category;
            }
            state.categories = state.categories.map(findRequiredCategory)

        }
    },
    actions:{
       async addCategory({commit},title) {
                try {
                   const {data} = await this.$axios.post("/categories",{title})
                    commit("ADD_CATEGORY",data)
                }
                catch (error) {
                    throw new Error(error.response.data.message || error.response.data.error)
                };

        },
        async fetchCategories({commit,rootGetters}){
                try{
                    const userId = rootGetters["user/userId"]
                    const {data} = await this.$axios.get(`/categories/${userId}`,)
                    commit("SET_CATEGORIES",data)
                    console.log(data)
                }
                catch (error) {
                    
                }

        },
        async removeCategory({commit},categoryId){
           try{
               const {data} = await this.$axios.delete(`/categories/${categoryId}`)
               commit("REMOVE_CATEGORY",categoryId)
               console.log("dadaw")
               console.log(data)
           }
           catch (error) {

           }
        },
        async updateThisTitle({commit},{editedTitle:title}){
           try{
               const {data} = await  this.$axios.post(`/categories/${editedTitle.id}`,editedTitle)
               console.log(data)
           }
           catch (e) {

           }
        }
    }
}