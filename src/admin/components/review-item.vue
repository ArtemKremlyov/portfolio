<template lang="pug">
.new__item.new__item--line
    .new__personal
        .new__item-ava(:style="{backgroundImage: `url(${review.photo})`}")
            .new__item-img
        .new__info
            .new__info-name {{review.author}}
            .new__info-rang {{review.occ}}
    .group__separator
    .new__item-text {{review.text}}
    .admin-btns
        button.admin-btns__item
            .admin-btns__text Править
            .pencil.pencil--works
        button.admin-btns__item(@click="deletedExistedReview")
            .admin-btns__text Удалить
            .trash.trash--works
</template>

<script>
    import {mapActions, mapState } from "vuex";
    import reviews from "../store/modules/reviews";
    export default {
        props: {
            review: {
                type: Object,
                default: () => ({}),
                required: true
            },
        },
        methods: {
            ...mapActions("reviews",["deleteReview"]),
            async deletedExistedReview(){
                try{
                    await this.deleteReview(this.review.id)
                    console.log("deleted")
                }
                catch (e) {

                }
            }
        }
    }
</script>

<style scoped>

</style>