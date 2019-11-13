export default {
    namespaced: true,
    state: {
        works: [],
        currentWork:{}
    },
    mutations: {
        ADD_WORKS(state, work){
            state.works.unshift(work)
        },
        SET_WORKS(state, works) {
            state.works = works
        },
        REMOVE_WORKS(state,workId){
            state.works = state.works.filter(work => work.id !== workId)
        },
        SET_CURRENT_WORK(state,currentWorkId){
            state.currentWork = state.works.filter(
                work => work.id === currentWorkId
            )[0]
        },
        UPDATE_WORKS(state,updateWork){
            state.works = state.works.map(work => work.id === updateWork.id ? updateWork : work)
        }
    },
    actions: {
        async addNewWork({commit},work) {
            try {
                const formData = new FormData();

                formData.append("title", work.title)
                formData.append("techs", work.techs)
                formData.append("photo", work.photo)
                formData.append("link", work.link)
                formData.append("description", work.description)

                const {data} = await this.$axios.post("/works", formData)
                commit("ADD_WORKS",data)
            } catch (e) {
                console.log(e)
            }


        },
        async removeWork({commit},workId){
            try {
              const {data} = await this.$axios.delete(`/works/${workId}`)
              commit("REMOVE_WORKS",workId)
            }
            catch (e) {

            }
        },
        async fetchWorks({commit}) {
            try {
                const {data} = await this.$axios.get("/works/194")
                commit("SET_WORKS", data)
                console.log(data)
            } catch (e) {
                console.log(e)
            }
        },
        async updateWorks({commit},work){
            try{
                const {data} = await this.$axios.post(`/works/${work.id}`,work)
                commit("UPDATE_WORKS", data)
            }
            catch (e) {
                console.log(e)
            }
        },
}
}