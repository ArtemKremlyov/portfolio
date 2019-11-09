<template lang="pug">
.group__row(v-if="editMode === false")
    .group__row-input {{skill.title}}
    .group__adding-percent {{skill.percent}}
    .group__row-btns
        button(@click="editMode = true").pencil
        button(@click="removeExistedSkill").trash
.group__row(v-else)
    input(type="text" v-model="editedSkill.title").group__row-input
    input(type="number" v-model="editedSkill.percent").group__adding-percent
    .group__row-btns
        button(@click="editExistedSkill").ok-btn
        button(@click="editMode = false").canselled-btn

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
                editedSkill : {...this.skill}
            }
        },
        methods:{
            ...mapActions("skills",["removeSkill","editSkill"]),
            async editExistedSkill(){
                try{
                    await this.editSkill(this.editedSkill)
                    this.editMode = false;
                }
                catch (error) {
                    
                }
            },
            async removeExistedSkill(){
                try{
                    await this.removeSkill({
                        id:this.skill.id,
                        category:this.skill.category
                    })
                }
                catch (error){

                }
            }
        }
    }
</script>

<style scoped>

</style>