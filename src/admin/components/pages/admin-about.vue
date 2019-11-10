<template lang="pug">
.container.container--abou
    .about__flex
        .about__flex-headline Блок «Обо мне»
        button.about__flex-adding Добавить группу
    .about__section
        form(@submit.prevent="addNewCategory").group.group--skills
            .group__title
                input(value="Название новой группы" v-model="title").group__input
                .group__tittle-controls
                    button.ok-btn
                    button.canselled-btn
            hr.group__separator
            .group__content
            .group__adding
                input(type="text" value="Новый навык").group__adding-input
                input(type="number" min="0" max="100").group__adding-percent
                button.group__adding-plus
        ul.about__list
            li(v-for="category in categories" :key="categories.id").group.group--skills
                aboutGroup(
                    :category="category"
                )
</template>

<script>
    import {mapActions, mapState } from "vuex";
    export default {
        components:{
            aboutGroup : () => import("../admin-about-group.vue")
        },
        data: () => ({
            title: ""
        }),
        created(){
            this.fetchCategories();
        },
        computed:{
            ...mapState("categories",{
                categories: state => state.categories
          })
        },
        methods: {
            ...mapActions("categories",["addCategory", "fetchCategories"]),
           async addNewCategory() {
               try {
                  await this.addCategory(this.title)
               }
               catch (error) {
                  alert(error.message)
               }
            }
        }
    }
</script>

<style lang="postcss">
    @import '../../../styles/mixins.pcss';
    @import '../../../styles/layout/base.pcss';
    @import '../../../styles/layout/normalize.css';
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');

    .group__adding-percent{
        color: black;
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
    .about__flex{
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 40px;

        @include tablets{
            justify-content: flex-start;
        }
        @include phones{
            flex-direction: column;
            align-items: flex-start;
        }
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
    }
    .group__controls{
        display: flex;
        width: 100%;
        justify-content: flex-end;

        @include tablets{
            justify-content: center;
        }
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
    .group__tags{
        display: flex;
        margin-top: 20px;
    }
    .group__tags-item{
        opacity: 0.7;
        color: #283340;
        font-family: "Open Sans";
        font-size: 13px;
        font-weight: 600;
        border-radius: 50%;
        padding: 10px 25px 10px 15px;
        position: relative;
        background-color: #f4f4f4;

        &:after{
            content: '';
            position: absolute;
            right: 8px;
            bottom: 14px;
            width: 11px;
            height: 11px;
            background: svg-load("remove.svg",fill="#414c63",width="11px",height="11px") center center no-repeat;
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
    .group__input-works{
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #414c63;;
        color: #414c63;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 600;
    }
    .group__label-text{
        opacity: 0.5;
        color: #414c63;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 600;
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
    .group__column{
        width: 50%;
        display: flex;
        flex-direction: column;

        @include tablets{
            width: 100%;
        }



        &:first-child{
            margin-right: 20px;
            @include tablets{
                margin-right: 0;
                margin-bottom: 40px;
            }
        }
    }
    .group__upload{
        border: 1px dashed #a1a1a1;
        background-color: #dee4ed;
        height: 300px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        @include tablets{
            border: none;
            height: 215px;
            margin-bottom: 30px;
        }
    }
    .group__upload-edit{
        color: #383bcf;
        font-family: "Open Sans";
        font-size: 17px;
        font-weight: 600;
        background: transparent;

        @include phones{
            margin-bottom: -45px;
        }
    }
    .group__upload-tablets{
        height: 100%;
        width: 100%;
        display: none;
        @include tablets{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    .group__upload-desktop{
        @include tablets{
            display: none;
        }
    }
    .group__upload-adaptive{
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin-bottom: 30px;
    }
    .group__upload-text{
        opacity: 0.5;
        color: #414c63;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 600;
        line-height: 33.89px;
        max-width: 235px;
        margin-bottom: 30px;
    }
    .group__upload-img{
        display: none;
    }
    .group-works__title{
        color: #414c63;
        font-family: "Open Sans";
        font-size: 18px;
        font-weight: 700;
    }
    .group__row-input{
        color: #414c63;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 400;
        flex: 0.7;
        max-width: 70%;

        @include tablets{
            flex:0.5;
            max-width: 50%;
            padding-left: 20px;
        }
    }

    .group__adding-plus{
        width: 40px;
        height: 40px;
        background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0 0 auto;

        &:before{
            content: "+";
            color: white;
        }
    }
    .group__adding{
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }
    .group__adding-input,.group__adding-percent{
        border-bottom: 1px black solid;

    }
    .group__adding-input{
        margin-right: 10px;
        opacity: 0.5;
        color: #373e42;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 400;
        padding-left: 15px;

        @include tablets{
            flex: 0.55;
            max-width: 55%;
        }

    }
    .group__adding-percent{
        margin-right: 30px;
        position: relative;

        &:after{
            content: "%";
            position: absolute;
            color: rgba(65,76,99,.7);
            font-size: 1rem;
            font-weight: 400;
            display: block;
            right: -23px;
            top: 5%;
        }
        @include tablets{
            flex: 0.1;
            max-width: 20%;
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
        }
        &--new{
            width: 100%;
            display: flex;
            @include tablets{
                justify-content: center;
            }
            @include phones{
                flex-direction: column;
            }
        }
    }
    .group__title{
        display: flex;
        justify-content: space-between;
    }
    .group__input{
        border: none;
        border-bottom: 1px black solid;
        flex: 0.7;
        color: #414c63;
        font-family: "Open Sans";
        font-size: 18px;
        font-weight: 600;
        max-width: 70%;
    }
    .group__separator{
        margin:15px 0;
        background-color: #1f232d;
        opacity: 0.15;
        height: 1px;
    }
    .group__content{
        min-height: 240px;
        display: flex;
        flex-direction: column;

        &--works{
            flex-direction: row;

            @include tablets{
                flex-direction: column;
            }
        }
    }
    .about__flex-adding{
        color: #383bcf;
        font-family: "Open Sans - Semibold";
        font-size: 16px;
        font-weight: 400;
        display: flex;
        background: transparent;

        &::before{
            content: '+';
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            width: 21px;
            height: 21px;
            border-radius: 50%;
            background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
            margin-right: 15px;
        }
    }
    .about__flex-headline{
        color: #414c63;
        font-family: "Open Sans";
        font-size: 21px;
        font-weight: 700;
        margin-right: 60px;
        @include phones{
            margin-bottom: 30px;
            margin-right: 0;
        }
    }
    .about__section{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content:space-between;
    }
</style>