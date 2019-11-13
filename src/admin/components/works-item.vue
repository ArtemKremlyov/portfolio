<template lang="pug">
.works__item.works__item--line
    .works__pic
        ul.works__tags
            li.works__tags-item(v-for="tags in tagsArray" :key="tags.id") {{tags}}

        .works__img(:style="{backgroundImage: `url(${image})`}")
    .works__content
        .works__content-title {{work.title}}
        .works__content-text {{work.description}}
        a(href="#").works__content-link {{work.link}}
        .admin-btns
            button.admin-btns__item
                .admin-btns__text(@click="editUserWork") Править
                .pencil.pencil--works
            button.admin-btns__item(@click.prevent="removeThisWork()")
                .admin-btns__text Удалить
                .trash.trash--works()
</template>

<script>
    import {mapActions,mapState,mapMutations} from "vuex"
    export default {
        props:{
            work: {
                type: Object,
                default: () => ({}),
                required: true
            },
            mode:String
        },
        data() {
            return {
                tagsArray: this.work.techs.split(",")
            }
        },
        computed:{
           image:function () {
               return `https://webdev-api.loftschool.com/${this.work.photo}`
           }
        },
        methods:{
            ...mapMutations("works",["SET_CURRENT_WORK"]),
            ...mapActions("works",["removeWork"]),
            async removeThisWork(){
                try{
                    await this.removeWork(this.work.id)
                }
                catch (e) {

                }
            },
            editUserWork(){
                this.SET_CURRENT_WORK(this.work.id)
                this.$emit("editUserWork")
            }
        }

    }
</script>

<style scoped>

</style>