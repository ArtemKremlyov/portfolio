import { generateStdError } from "@/helpers/errorHandler";
export default {
    namespaced:true,
    actions: {
        async editSkill({commit},editedSkill){
            try {
               const response = await this.$axios.post(`/skills/${editedSkill.id}`,editedSkill)
               commit("categories/EDIT_SKILL",editedSkill,{root:true})
               return response
            }
            catch (error) {
                generateStdError(error);
            }
        },
        async addSkill({commit}, skill) {
            try {
                const response = await this.$axios.post("/skills",skill)
                commit("categories/ADD_SKILL",response.data,{root:true})
                return response
            } catch(error) {
                generateStdError(error);
            }

        },
        async removeSkill({commit},skill){
            try{
                const response = await this.$axios.delete(`/skills/${skill.id}`)
                commit("categories/REMOVE_SKILL",skill,{root:true})
                return response
            }
            catch(e){
                generateStdError(e);
            }
        }
    }
}