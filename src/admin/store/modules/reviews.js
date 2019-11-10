export default {
    namespaced:true,
    state: {
        reviews: [],
    },
    mutations:{
        SET_REVIEW(state,reviews){
            state.reviews = reviews
        },
        ADD_REVIEW(state,reviews){
            state.reviews.unshift(reviews)
        },
        REMOVE_REVIEW(state,deletedRev){
            state.reviews = state.reviews.filter(review => review.id !== deletedRev.id)
        }
    },
    actions:{
       async deleteReview({commit},reviewId){
           try{
               await this.$axios.delete(`/reviews/${reviewId}`)
               commit("REMOVE_REVIEW",reviewId)
               console.log("удалено")
           }
           catch (e) {

           }
       } ,
       async addReview({commit},review) {
            try {
                const formData = new FormData();

                formData.append("text",review.text)
                formData.append("author",review.autor)
                formData.append("occ",review.occ)
                formData.append("photo",review.photo)

                const {data} = await this.$axios.post("/reviews",formData)
                commit("ADD_REVIEW",data)
                console.log(data)
            }
            catch (e) {

            }
        },
        async fetchReviews({commit}) {
            try{
                const {data} = await this.$axios.get("/reviews/194")
                commit("SET_REVIEW",data)
                console.log(data)

            }
            catch (e) {

            }
        }
    }
}