<template lang="pug">
    .container.container--new
        .new
            .new__title Блок «Отзывы»
            .group-works__title {{(mode==='edit') ? 'Редактировать работу' : 'Добавить отзыв'}}
            .group__separator
            .new__section
                form.group.group--new(@submit.prevent="addNewReview" :class="{hide: addFormVisible}")
                    .group__left
                        label.group__left-upload(v-if="mode==='new'")
                            .group__left-img(
                                :class="{filled: photoUrl.length}"
                                :style="{backgroundImage: `url(${photoUrl})`}"
                            )
                            input(type="file" @change="loadPhoto").group__left-file
                            .group__left-text Добавить фото
                                .group__left
                        label.group__left-upload(v-else-if="mode==='edit'")
                            .group__left-img.filled(v-if="photoUrl.length"
                                :class="{filled: photoUrl.length}"
                                :style="{backgroundImage: `url(${photoUrl})`}"
                            )
                            .group__left-img.filled(v-else
                                :class="{filled: photoUrl.length}"
                                :style="{backgroundImage: `url(${image})`}"
                            )
                            input(type="file" @change="loadPhoto").group__left-file
                            .group__left-text Изменить фото
                    .group__right
                        .group__row
                            label.group__label(:class="{error: !authorValid}")
                                .group__label-text Имя автора
                                input(type="text" v-model="review.author" @input="validateAuthor").group__input-new
                                .tooltip {{authorError}}
                            label.group__label(:class="{error: !occValid}")
                                .group__label-text Титул автора
                                input(type="text" v-model="review.occ" @input="validateOcc").group__input-new
                                .tooltip {{occError}}
                        .group__row
                            label.group__label(:class="{error: !textValid}")
                                .group__label-text Отзыв
                                textarea(type="text" v-model="review.text" @input="validateText").group__textarea
                                .tooltip {{textError}}
                        .group__controls
                            button(@click.prevent="closeAddForm").group__controls-cancell Отменить
                            button(@click.prevent="mode=='new' ? addNewReview() : updateUserRev()").group__btn Сохранить
            .new__section
                .new__item.new__item--line.new__item--adding(@click="showAddForm('new')")
                    .new__item-btn
                        .new__item-plus
                        .new__text Добавить отзыв

                review-item(
                    v-for="review in reviews"
                    :key="reviews.id"
                    :review="review"
                    @editUserRev="showAddForm('edit')"
                )
</template>

<script>
    import {mapActions, mapState } from "vuex";
    export default {
        components: {reviewItem : () => import("../review-item.vue")},
        data:() => ({
            photoUrl: '',
            hiddenForm:true,
            review:{
                photo:'',
                author:'',
                text:'',
                occ:''
            },
            test:"true",
            mode:"",
            addFormVisible:true,
            authorValid: "false",
            authorError: "",
            occValid: "false",
            occError:"",
            textValid:"false",
            textError:"",
            photoValid:'false',
            photoError:""
        }),
        created() {
            this.fetchReviews()

            if (this.mode === "edit"){
                this.getCurrentRev()
            }

        },
        watch:{
            currentRev(){
                if(this.mode === "edit") this.getCurrentRev()
            },
            mode(){
                if(this.mode === "edit") {
                    this.getCurrentRev()
                    this.photoUrl = ""
                }
                else{
                    this.review = {}
                    this.photoUrl = ""
                }
            },
        },
        computed:{
            ...mapState("reviews",{
                reviews:state => state.reviews
            }),
            ...mapState("reviews",{
                currentRev:state => state.currentRev
            }),
            image: function() {
                return `https://webdev-api.loftschool.com/${this.currentRev.photo}`
            },

        },

        methods:{
            ...mapActions("message", ["showTooltip"]),
            ...mapActions("reviews",["addReview","fetchReviews","updateReviews"]),
            async addNewReview(){
               try{
                if(this.photoValid && this.textValid && this.occValid && this.authorValid){
                const response = await this.addReview(this.review)
                console.log("Ok")
                this.review.photo = ""
                this.review.occ = ""
                this.review.text = ""
                this.review.author = ""
                 this.photoUrl = ""
                   console.log("wdwdwd")

                   this.showTooltip({
                       type: "success",
                       text: "Отзыв успешно добавлен!"
                   });}
                else{

                }
               }
                catch (error) {
                    this.showTooltip({
                        type: "error",
                        text: error
                    });
                }
            },
            async updateUserRev(){
                try{
                    if(this.photoUrl.length && this.textValid && this.occValid && this.authorValid && this.review.author.length){
                    console.log('dwdw')
                    await this.updateReviews(this.review,this.photoUrl)
                    this.showTooltip({
                        type: "success",
                        text: "Запись обновлена!"
                    })}
                }
                catch (e) {

                }
            },
            loadPhoto(e){
                const file = e.target.files[0]
                this.review.photo = file
                this.getPhoto(file)

            },
            getPhoto(file){
                const reader = new FileReader();
                try{
                    reader.readAsDataURL(file)
                    reader.onload = () =>{
                        this.photoUrl = reader.result;
                    }
                }
                catch (e) {

                }
            },
            validateAuthor(){
                if (this.review.author.length < 3){
                    this.authorValid = false
                    this.authorError = "Короткое имя пользователя"
                }
                else{
                    this.authorValid = true;
                    this.authorError = ""
                }
                return this.authorValid;
            },
            validateOcc(){
                if (this.review.occ.length < 3){
                    this.occValid = false
                    this.occError = "Короткое имя пользователя"
                }
                else{
                    this.occValid = true;
                    this.occError = ""
                }
                return this.occValid;
            },
            validateText(){
                if (this.review.text.length < 10){
                    this.textValid = false
                    this.textError = "Короткое имя пользователя"
                }
                else{
                    this.textValid = true;
                    this.textError = ""
                }
                return this.textValid;
            },
            validatePhoto(){
               if (this.photo.length){
                   this.photoValid = true
                   this.textError = ""
               }
               else{
                   this.photoValid = "Фотография должна быть загружена!"
                   this.photoValid = false
               }
               return this.photoValid
            },
            hideThisForm(){
                this.addFormVisible = !this.addFormVisible
                },

            showAddForm(mode){
                this.mode = mode
                this.addFormVisible = false;
            },
            getCurrentRev(){
              this.review = {...this.currentRev}
            },
            closeAddForm(){
                this.addFormVisible = true

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
    .group__row-btns{
        display: flex;
        margin-left: 20px;
    }
    .group__row{
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
        width: 100%;
        @include tablets{
        // flex-direction: column;
        }
        &.edit{
            flex-direction: column;
            margin-right: 15px;
            align-items: center;

            .group__uploaded{
                display: block;
            }
        }
    }
    .group__label-text{
        opacity: 0.5;
        color: #414c63;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 600;
    }
    .group__controls{
        display: flex;
        width: 100%;
        justify-content: flex-end;

        @include tablets{
            justify-content: center;
        }
    }
    .group__btn{
        border-radius: 25px;
        color: white;
        background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        padding: 20px 40px;

        @include phones{
            padding: 17px 28px;
        }

        &--upload {
            padding: 15px 50px;

        }


    }
    .group__textarea{
        border: 1px solid #414c63;
        min-height: 150px;
        padding: 20px 20px;
        color: #414c63;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 400;
    }
    .group__separator{
        margin:15px 0;
        background-color: #1f232d;
        opacity: 0.15;
        height: 1px;
    }
    .group-works__title{
        color: #414c63;
        font-family: "Open Sans";
        font-size: 18px;
        font-weight: 700;
    }
    .group__controls-cancell{
        color: #383bcf;
        font-family: "Open Sans";
        font-size: 16px;
        background: transparent;
        font-weight: 600;
        margin-right: 60px;

        @include phones{
            margin-right: 10px;
        }
    }
    .group__label{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-right: 30px;

        @include tablets{
            margin-right: 0;
            margin-bottom: 20px;
        }
    }
    .group{
        padding: 30px;
        box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);

        &--skills{
            width: calc(100%/2 - 2*10px);
            margin-bottom: 25px;
            @include phones{
                width: 100%;
            }
        }
        &--works{
            width: 100%;
            &.hide{
                display: none;
            }
        }
        &--new{
            width: 100%;
            display: flex;
            &.hide{
                display: none;
            }
            @include tablets{
                justify-content: center;
            }
            @include phones{
                flex-direction: column;
            }
        }
    }
    .works__item-btn,.new__item-btn{
        width: 100%;
        height: 100%;
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        @include phones{
            flex-direction: row;
        }
    }
    .works__item-text,.new__text{
        color: #ffffff;
        font-family: "Open Sans";
        font-size: 18px;
        font-weight: 700;
    }
    .works__item-plus,.new__item-plus{
        width: 150px;
        height: 150px;
        border: 2px solid #ffffff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 25px;

        &:before{
            content: "+";
            color: #ffffff;
            font-family: "Open Sans";
            font-size: 72px;
            font-weight: 300;
            @include phones{
                font-size: 24px;
            }
        }
        @include phones{
            width: 70px;
            height: 70px;
            margin-bottom: 0;
            margin-right: 25px;
        }
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
        background-position: center center;
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