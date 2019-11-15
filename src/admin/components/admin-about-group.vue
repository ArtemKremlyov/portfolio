<template lang="pug">
li.group.group--skills
    form.group.group--skill
        .group__line
            .group__title(v-if="editMode === 'false'")
                .group__input {{category.category}}
                .group__tittle-controls
                    button(@click.prevent="editTitle").pencil
                    button(@click.prevent="removeSkillCategory").trash
            .group__title(v-else)(:class="{error: !titleValid}")
                input(v-model="editedTitle.category" @input="validateTitle").group__input
                .tooltip.tooltip--skill {{titleError}}
                .group__tittle-controls
                    button(@click.prevent="updateTitle").ok-btn
                    button(@click.prevent="cancellEdit").canselled-btn
        hr.group__separator
        .group__content
            group-content(
                 :key="skill.id"
                 v-for= "skill in category.skills"
                 :skill="skill"
            )
        .group__adding(:class="{error: !inputValid || !percentValid}")
            input(type="text" placeholder="Новый навык" v-model="skill.title" @input="validateInput").group__adding-input
            .tooltip.tooltip--skill {{inputError}}
            input(type="number" min="0" max="100" v-model="skill.percent" @input="validatePercent").group__adding-percent
            .tooltip.tooltip--skill--percent {{percentError}}
            button(@click.prevent="addNewSkill").group__adding-plus

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
            title:{
                type:String,
                default:() => ({}),
                required: true
            }


        },
        data(){
            return{
                skill:{
                    title:'',
                    percent:0,
                    category:this.category.id
                },
                inputValid : "false",
                inputError : "",
                percentValid : "false",
                percentError : "",
                titleValid:  "false",
                titleError: "",
                editMode: "false",
                editedTitle : {...this.category}
            }
        },
        methods:{
            ...mapActions("message", ["showTooltip"]),
            ...mapActions("skills",["addSkill", "removeCategory"]),
            ...mapActions("categories",["updateThisTitle"]),
            async updateTitle(){
                try{
                    if(this.titleValid){
                    this.editMode="false"
                    await this.updateThisTitle(this.editedTitle)
                    console.log(this.category.id)
                    this.showTooltip({
                        type: "success",
                        text: "Запись обновлена!"
                    })}
                }
                catch (e) {

                }
            },
            async addNewSkill(){
                try{
                   if(this.percentValid && this.inputValid ){
                    const response = await this.addSkill(this.skill)
                    this.skill.title = ""
                    this.skill.percent = ""

                    console.log(response)
                    this.showTooltip({
                        type: "success",
                        text: "Скилл успешно добавлен"
                    });}
                }
                catch (e) {
                    console.log(e)
                    this.showTooltip({
                        type: "error",
                        text: e
                    });
                }
            },
            editTitle(){
                this.editMode = 'true'
            },
            cancellEdit(){
                this.editMode = 'false'
                console.log("edit mode is false")
            },
            ...mapActions("categories",["removeCategory"]),
            async removeSkillCategory(){
                try{
                    console.log("deleted")
                    await this.removeCategory(this.category.id)
                    this.showTooltip({
                        type: "success",
                        text: "Категория успешно удалена!"
                    });
                }
                catch (e) {
                    this.showTooltip({
                        type: "error",
                        text: e
                    });
                }
            },
            validateInput(){
                if (this.skill.title.length < 3){
                    this.inputValid = false
                    this.inputError = "Короткое имя скилла"
                }
                else{
                    this.inputValid = true;
                    this.inputError = ""
                }
                return this.inputValid;
            },
            validateTitle(){
                if (this.editedTitle.category.length < 3){
                    this.titleValid = false
                    this.titleError = "Короткое имя категории"
                }
                else{
                    this.titleValid = true;
                    this.titleError = ""
                }
                return this.titleValid;
            },
            validatePercent(){
                if (this.skill.percent <= 0){
                    this.percentValid = false
                    this.percentError = "Скилл не может быть равен 0!"
                }
                else if (this.skill.percent >=100){
                    this.percentValid = false
                    this.percentError = "Скилл не может превышать 100%"
                }
                else{
                    this.percentValid = true;
                    this.percentError = ""
                }
                return this.percentValid;
            },
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