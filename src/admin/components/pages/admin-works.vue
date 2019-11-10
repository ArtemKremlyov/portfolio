<template lang="pug">
.container.container--works
    .works
        .works__title Блок «Работы»
        .works__section
            form.group.group--works
                .group-works__title Редактирование работы
                .group__separator
                .group__content.group__content--works
                    .group__column
                        .group__row
                            label.group__upload
                                .group__uploaded(
                                    :class="{filled: renderedPhoto.length}"
                                    :style="{backgroundImage: `url(${renderedPhoto})`}"
                                )
                                .group__upload-tablets
                                    img(src="../../../images/content/mobile-img.png").group__upload-adaptive
                                    button.group__upload-edit Изменить превью
                                .group__upload-desktop(:class="{none: renderedPhoto.length}")
                                    .group__upload-text Перетащите или загрузите для загрузки изображения
                                    input(type="file" @change="appendFileRenderPhoto").group__upload-img
                                    button.group__btn.group__btn--upload Загрузить
                    .group__column
                        .group__row
                            label.group__label
                                .group__label-text Название
                                input.group__input-works(v-model="works.title")
                        .group__row
                            label.group__label
                                .group__label-text Cсылка
                                input.group__input-works(v-model="works.link")
                        .group__row
                            label.group__label
                                .group__label-text Описание
                                textarea.group__textarea(v-model="works.description")
                        .group__row
                            label.group__label
                                .group__label-text Добавление тэга
                                input.group__input-works(v-model="works.techs")
                                ul.group__tags
                                    li.group__tags-item HTML
                                    li.group__tags-item CSS
                                    li.group__tags-item JavaScript
                .group__controls
                    button.group__controls-cancell Отменить
                    button.group__btn Сохранить
        .works__section
            .works__item.works__item--adding.works__item--line
                button.works__item-btn
                    .works__item-plus
                    .works__item-text Добавить работу
            -for(i=0;i<5;i++)
                .works__item.works__item--line
                    .works__pic
                        ul.works__tags
                            li.works__tags-item html
                            li.works__tags-item css
                            li.works__tags-item js
                        img(src="../../../images/content/mini-prev1.png").works__img
                    .works__content
                        .works__content-title {{works.title}}
                        .works__content-text {{works.description}}
                        a(href="#").works__content-link {{works.link}}
                        .admin-btns
                            button.admin-btns__item
                                .admin-btns__text Править
                                .pencil.pencil--works
                            button.admin-btns__item
                                .admin-btns__text Удалить
                                .trash.trash--works
</template>

<script>
    export default {
        data: () =>({
          renderedPhoto:"",
          works:{
              title:"",
              techs:"",
              photo:"",
              link:"",
              description:""
          },

        }),
        methods:{
            appendFileRenderPhoto(e){
                const file = e.target.files[0]
                this.works.photo = file

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
        }
    }
</script>

<style lang="postcss">
    @import '../../../styles/mixins.pcss';
    @import '../../../styles/layout/base.pcss';
    @import '../../../styles/layout/normalize.css';
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
    .works__content-title{
        color: #414c63;
        font-family: "Open Sans";
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 26px;
    }
    .works__pic{
        position: relative;
    }
    .group__separator{
        margin:15px 0;
        background-color: #1f232d;
        opacity: 0.15;
        height: 1px;
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
    .group__uploaded{
        display: none;
        width: 100%;
        height: 100%;
        position: absolute;
        &.filled{
            display: block;
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
        position: relative;

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
        &.none{
            display: none;
        }
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
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
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
    .works__tags-item{
        border-radius: 15px;
        background: white;
        opacity: 0.7;
        color: #283340;
        font-family: "Open Sans";
        font-size: 13px;
        font-weight: 600;
        padding: 10px 20px;
        margin-right: 8px;

        &:last-child{
            margin-right: 0;
        }
    }
    .works__tags{
        display: flex;
        position: absolute;
        bottom: 25px;
        right: 15px;
    }
    .works__section{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;
        flex-direction: row;
        margin-bottom: 30px;

    }
    .works__img{
        width: 100%;
    }
    .works__item{
        box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;

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

    .works{
        width: 100%;
    }
    .works__title{
        color: #414c63;
        font-family: "Open Sans";
        font-size: 21px;
        font-weight: 700;
        margin-bottom: 60px;
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

    .works__content-text{
        opacity: 0.7;
        color: #414c63;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 600;
        line-height: 30px;
        margin-bottom: 20px;
    }
    .works__content-link{
        color: #383bcf;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 600;
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
    .works__content{
        padding: 40px;
    }
    .container--works{
        padding-top: 75px;
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
        position: relative;
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
    }
</style>