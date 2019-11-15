<template lang="pug">
label.group__label(for="tags" :class="{error: !techsValid}")
    .group__label-text Добавление тэга
    input.group__input-works(v-model="tagsString" name="tags" @input="buildTagsArray")
    .tooltip {{techsError}}
    ul.group__tags
        li(v-for="(tag, index) in tagsArray"  :key="index" ).group__tags-item
            .group__tags-text {{tag}}
            .group__tags-button(@click.prevent="removeTag(index)")

</template>

<script>
    import {mapActions} from "vuex"
    export default {
        props:{
            tags:{
                type:String,
                default: () => ({}),
                required:true
            }
        },
        data() {
            return {
                tagsString:"",
                tagsArray:[],
                techsValid : "false",
                techsError : "",
            }
        },
        watch:{
            tags(){
                this.tagsString = this.tags;
                this.buildTagsArray();
            },
            tagsString() {
                this.$emit('defineTagsString',this.tagsString)
            }
        },
        methods:{
            validateTechs(){
                if (this.tagsString.length < 1){
                    this.techsValid = false
                    this.techsError = "Минимум 1 тэг!"
                }
                else{
                    this.techsValid = true;
                    this.techsError = ""
                }
                return this.techsValid;
            },
            buildTagsArray(){
                this.tagsArray = (this.tagsString.length === 0) ? [] : this.tagsString.split(',');
                this.validateTechs()
            },
            removeTag(index) {
                this.tagsArray.splice(index,1);
                this.tagsString = this.tagsArray.join(',');
            }
        },
        mounted() {
            this.tagsString = this.tags;
            this.buildTagsArray()
        }
    }
</script>

<style scoped>

</style>