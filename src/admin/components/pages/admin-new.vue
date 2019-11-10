<template lang="pug">
    .container.container--new
        .new
            .new__title Блок «Отзывы»
            .group-works__title Добавить отзыв
            .group__separator
            .new__section
                form.group.group--new(@submit.prevent="addNewReview" :class="{hide: hiddenForm}")
                    .group__left
                        label.group__left-upload
                            .group__left-img(
                                :class="{filled: renderedPhoto.length}"
                                :style="{backgroundImage: `url(${renderedPhoto})`}"
                                )
                            input(type="file" @change="appendFileRenderPhoto").group__left-file
                            .group__left-text Добавить фото
                    .group__right
                        .group__row
                            label.group__label
                                .group__label-text Имя автора
                                input(type="text" v-model="review.autor").group__input-new
                            label.group__label
                                .group__label-text Титул автора
                                input(type="text" v-model="review.occ").group__input-new
                        .group__row
                            label.group__label
                                .group__label-text Отзыв
                                textarea(type="text" v-model="review.text").group__textarea
                        .group__controls
                            button.group__controls-cancell(@click.prevent="hideThisForm('hide')") Отменить
                            button.group__btn Сохранить
            .new__section
                .new__item.new__item--line.new__item--adding(@click="hideThisForm('unhide')")
                    .new__item-btn
                        .new__item-plus
                        .new__text Добавить отзыв

                review-item(
                    v-for="review in reviews"
                    :key="reviews.id"
                    :review="review"
                )
</template>

<script>
    import {mapActions, mapState } from "vuex";
    export default {
        components: {reviewItem : () => import("../review-item.vue")},
        data:() => ({
            renderedPhoto: '',
            hiddenForm:true,
            review:{
                photo:'',
                autor:'',
                text:'',
                occ:''
            },
            test:"true"
        }),
        created() {
            this.fetchReviews()
        },
        computed:{
            ...mapState("reviews",{
                reviews:state => state.reviews
            })
        },
        methods:{
            ...mapActions("reviews",["addReview","fetchReviews"]),
            async addNewReview(){
               try{
                await this.addReview(this.review)
                console.log("Ok")
                this.review.photo = ""
                this.review.occ = ""
                this.review.text = ""
                this.review.author = ""
               }
                catch {e} {

                }
            },
            appendFileRenderPhoto(e){
                const file = e.target.files[0]
                this.review.photo = file

                const reader = new FileReader();

                try{
                    reader.readAsDataURL(file);
                    reader.onload = () =>{
                        this.renderedPhoto = reader.result
                    }
                }
                catch (error) {

                }
            },
            hideThisForm(type){
                console.log("true")
                if (type = "unhide"){
                    this.hiddenForm = false;
                }
                else if (type = "hide") {
                    this.hiddenForm = true;
                    console.log(this.hiddenForm)
                }
            },
            cancellWrite(){
                    this.review.photo='';
                    this.review.autor='';
                    this.review.text='';
                    this.review.occ='';
            }
        }
    }
</script>

<style lang="postcss">
    @import '../../../styles/mixins.pcss';
    @import '../../../styles/layout/base.pcss';
    @import '../../../styles/layout/normalize.css';
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');

    .new__personal{
        display: flex;
    }
    .group__input-new{
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #414c63;;
        color: #414c63;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 600;
    }
    .group__left-file{
        display: none;
    }
    .group__left{
        margin-right: 20px;
        flex:0.3;

        @include phones{
            margin-right: 0;
            @include phones{
                margin-bottom: 30px;
            }
        }
    }
    .group__right{
        flex: 1;
        @include tablets{
            flex: none;
            width: 50%;
        }
        @include phones{
            margin-bottom: 30px;
            width: 100%;
        }
    }
    .group__left-upload{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .group__left-text{
        color: #383bcf;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    }
    .new{
        width: 100%;
    }
    .group__left-img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: #dee4ed;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 25px;

        &:before{
            content: "";
            width: 85px;
            height: 113px;
            background: svg-load("user.svg", fill="white", width="85px", height="113px") center center no-repeat;
        }
        &.filled {
            background: center center no-repeat / cover;
            &:before {
                display: none;
            }
        }

    }

    .pencil{
        width: 16px;
        height: 16px;
        background: svg-load("pencil.svg",fill="#414c63",width="16px",height="16px") center center no-repeat;
        margin-right: 20px;

        &--works{
            background: svg-load("pencil.svg",fill="#383bcf",width="16px",height="16px") center center no-repeat;
        }
    }

    .trash{
        width: 16px;
        height: 16px;
        background: svg-load("trash.svg",fill="#414c63",width="16px",height="16px") center center no-repeat;

        &--works{
            background: svg-load("trash.svg",fill="#c92e2e",width="16px",height="16px") center center no-repeat;
        }
    }




    .ok-btn{
        width: 30px;
        height: 30px;
        background: svg-load("tick.svg",fill="green",width="15px",height="15px") center center no-repeat;
    }
    .canselled-btn{
        width: 30px;
        height: 30px;
        background: svg-load("remove.svg",fill="#bf2929",width="15px",height="15px") center center no-repeat;
    }
    .new__info-name{
        color: #414c63;
        font-family: "Open Sans";
        font-size: 18px;
        font-weight: 700;
    }
    .new__info-rang{
        opacity: 0.5;
        color: #414c63;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 400;
    }
    .new__item-text{
        opacity: 0.7;
        color: #414c63;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 600;
        line-height: 30px;
        margin-bottom: 55px;
    }
    .new__item-ava{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        object-fit: cover;
        background-position: center center;
        background: red;
        margin-right: 12px;
    }
    .new__section{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;
        flex-direction: row;
        margin-bottom: 30px;
    }
    .new__item{
        box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        padding: 25px 20px;

        &--line{
            width: calc(100%/3 - 2 * 10px);


            @include tablets{
                width: calc(100%/2 - 2 * 7px);
            }
            @include phones{
                width: calc(100%/1);
            }

        }
        &--adding{
            background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
            align-items: center;
            justify-content: center;
            padding: 30px 0px;
        }
    }
    .new__title{
        color: #414c63;
        font-family: "Open Sans";
        font-size: 21px;
        font-weight: 700;
        margin-bottom: 60px;
    }
</style>