<template lang="pug">
li.group.group--skills
    form.group.group--skill
        .group__title
            input(v-model="category.category").group__input
            .group__tittle-controls
                button.ok-btn
                button(@click.prevent="removeSkillCategory").canselled-btn
        hr.group__separator
        .group__content
            group-content(
                 :key="skill.id"
                 v-for= "skill in category.skills"
                 :skill="skill"
            )
        .group__adding
            input(type="text" placeholder="Новый навык" v-model="skill.title").group__adding-input
            input(type="number" min="0" max="100" v-model="skill.percent").group__adding-percent
            button(@click="addNewSkill").group__adding-plus

</template>

<script>
    import {mapActions} from "vuex"
    export default {
        components:{
            groupContent:() => import("./group-content.vue")
        },
        props: {
            category: {
                type: Object,
                default: () => ({}),
                required: true,
            },


        },
        data(){
            return{
                skill:{
                    title:'',
                    percent:0,
                    category:this.category.id
                }
            }
        },
        methods:{
            ...mapActions("skills",["addSkill", "removeCategory"]),
            async addNewSkill(){
                try{
                    await this.addSkill(this.skill)
                    this.skill.title = ""
                    this.skill.percent = ""
                }
                catch (error) {

                }
            },
            ...mapActions("categories",["removeCategory"]),
            async removeSkillCategory(){
                try{
                    console.log("deleted")
                    await this.removeCategory(this.category.id)
                }
                catch (e) {

                }
            }
        },
    }
</script>

<style>
.about__list
{   display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap:wrap}
</style>