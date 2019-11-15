import { generateStdError } from "@/helpers/errorHandler";
export default {
    namespaced:true,
    state: {
        reviews: [],
        currentRev:{}
    },
    mutations:{
        SET_REVIEW(state,reviews){
            state.reviews = reviews
        },
        ADD_REVIEW(state,reviews){
            state.reviews.unshift(reviews)
        },
        SET_CURRENT_REV(state,currentRevId){
            state.currentRev = state.reviews.filter(
                review => review.id === currentRevId
            )[0]
        },
        REMOVE_REVIEW(state,deletedRev){
            state.reviews = state.reviews.filter(review => review.id !== deletedRev)
            console.log("mutation calling")
        },
        UPDATE_REVIEW(state,updateRev){
            state.reviews = state.reviews.map(review => review.id === updateRev.id ? updateRev : review)
        }
    },
    actions:{
       async deleteReview({commit},reviewId){
           try{
               const {data} = await this.$axios.delete(`/reviews/${reviewId}`)
               commit("REMOVE_REVIEW",reviewId)
               console.log("удалено")
               console.log(data)
           }
           catch (error) {
               generateStdError(error);
           }
       } ,
       async addReview({commit},review) {
            try {
                const formData = new FormData();

                formData.append("text",review.text)
                formData.append("author",review.author)
                formData.append("occ",review.occ)
                formData.append("photo",review.photo)

                const {data} = await this.$axios.post("/reviews",formData)
                commit("ADD_REVIEW",data)
                console.log(data)
            }
            catch (error) {
                generateStdError(error);
            }
        },
        async fetchReviews({commit,rootGetters}) {
            try{
                const userId = rootGetters["user/userId"]
                const {data} = await this.$axios.get(`/reviews/${userId}`)
                commit("SET_REVIEW",data)
                console.log(data)

            }
            catch (error) {
                generateStdError(error);
            }
        },
        async updateReviews({commit},review,newPhoto){
           try{
               const formData = new FormData();

               formData.append("text",review.text)
               formData.append("author",review.author)
               formData.append("occ",review.occ)
               formData.append("photo",review.photo)

               const {data} = await this.$axios.post(`/reviews/${review.id}`,review)
               commit("UPDATE_REVIEW", review)
           }
           catch (e) {
                console.log(e)
           }
        },

    }
}