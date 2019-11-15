<template lang="pug">
.group__row(v-if="editMode === false")
    .group__row-input {{skill.title}}
    .group__adding-percent {{skill.percent}}
    .group__row-btns
        button(@click.prevent="editMode = true").pencil
        button(@click.prevent="removeExistedSkill").trash
.group__row(:class="{error: !inputValid || !percenValid}")(v-else)
    input(type="text" v-model="editedSkill.title" @input="validateInput").group__row-input
    .tooltip.tooltip--skill {{inputError}}
    input(type="number" v-model="editedSkill.percent" @input="validatePercen" min="0" max="100").group__adding-percent
    .tooltip.tooltip--skill--percent {{percenError}}
    .group__row-btns
        button(@click.prevent="editExistedSkill").ok-btn
        button(@click.prevent="editMode = false").canselled-btn

</template>

<script>
    import {mapActions} from "vuex"
    export default {
        props: {
            skill: {
                type: Object,
                default: () => ({}),
                required: true
            },
        },
        data(){
            return{
                editMode : false,
                editedSkill : {...this.skill},
                inputValid : "false",
                inputError : "",
                percenValid : "false",
                percenError : "",
            }
        },
        methods:{
            ...mapActions("message", ["showTooltip"]),
            ...mapActions("skills",["removeSkill","editSkill"]),
            async editExistedSkill(){
                try{
                   if(this.percenValid && this.inputValid){
                    await this.editSkill(this.editedSkill)
                    this.editMode = false;
                    this.showTooltip({
                        type: "success",
                        text: "Запись обновлена!"
                    });}
                }
                catch (error) {
                    this.showTooltip({
                        type: "error",
                        text: error
                    });
                }
            },
            async removeExistedSkill(){
                try{
                    await this.removeSkill({
                        id:this.skill.id,
                        category:this.skill.category
                    })
                    this.showTooltip({
                        type: "success",
                        text: "Скилл успешно удалена!"
                    });
                }
                catch (error){
                    this.showTooltip({
                        type: "error",
                        text: error
                    });
                }
            },
            validatePercen(){
                if (this.editedSkill.percent <= 0){
                    this.percenValid = false
                    this.percenError = "Скилл не может быть равен 0!"
                }
                else if (this.editedSkill.percent >100){
                    this.percenValid = false
                    this.percenError = "Скилл не должен превышать 100%"
                }
                else{
                    this.percenValid = true;
                    this.percenError = ""
                }
                return this.percenValid;
            },
            validateInput(){
                if (this.editedSkill.title.length < 3){
                    this.inputValid = false
                    this.inputError = "Короткое имя скилла"
                }
                else{
                    this.inputValid = true;
                    this.inputError = ""
                }
                return this.inputValid;
            },
        }
    }
</script>

<style scoped>

</style>