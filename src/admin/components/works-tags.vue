<template lang="pug">
label.group__label(for="tags")
    .group__label-text Добавление тэга
    input.group__input-works(v-model="tagsString" name="tags" @input="buildTagsArray")
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
                tagsArray:[]
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
            buildTagsArray(){
                this.tagsArray = (this.tagsString.length === 0) ? [] : this.tagsString.split(',');
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