<template lang="pug">
.new__item.new__item--line
    .new__personal
        .new__item-ava(:style="{backgroundImage: `url(${image})`}")
            .new__item-img
        .new__info
            .new__info-name {{review.author}}
            .new__info-rang {{review.occ}}
    .group__separator
    .new__item-text {{review.text}}
    .admin-btns
        button.admin-btns__item
            .admin-btns__text(@click="editUserRev") Править
            .pencil.pencil--works
        button.admin-btns__item(@click="deletedExistedReview")
            .admin-btns__text Удалить
            .trash.trash--works
</template>

<script>
    import {mapActions, mapState, mapMutations } from "vuex";
    import reviews from "../store/modules/reviews";
    export default {

        props: {
            review: {
                type: Object,
                default: () => ({}),
                required: true
            },
            mode:String,
        },
        watch:{

        },
        computed:{
            image: function() {
                return `https://webdev-api.loftschool.com/${this.review.photo}`
            },
        },

        methods: {
            ...mapActions("message", ["showTooltip"]),
            ...mapActions("reviews",["deleteReview"]),
            ...mapMutations("reviews",["SET_CURRENT_REV"]),
            async deletedExistedReview(){
                try{
                    await this.deleteReview(this.review.id)
                    console.log("deleted")
                    this.showTooltip({
                        type: "success",
                        text: "Отзыв успешно удален!"
                    });
                }
                catch (e) {
                    this.showTooltip({
                        type: "error",
                        text: e
                    });
                }
            },
            editUserRev(){
                this.SET_CURRENT_REV(this.review.id)
                this.$emit("editUserRev")
            }
        }
    }
</script>

<style scoped>

</style>