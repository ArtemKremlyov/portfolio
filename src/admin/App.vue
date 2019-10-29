<template lang="pug">
   .admin-about
            .login
               .login__content
                   .login__title Авторизация
                   button.login__close
                   form.form__login
                       .form__row
                           label.form__label
                                .form__text Логин
                                input(type="text").form__input
                                .form__icon
                       .form__row
                           label.form__label
                               .form__text Пароль
                               input(type="password").form__input
                               .form__icon
                       button.form__btn Отправить

            .header.header__admin
               .container.container--header__admin
                .header__left
                  .admin-info
                    .admin-info__ava
                        .admin-ava
                          img(src="").admin-ava__img
                    .admin-info__name
                        .admin-name Артем Кремлев
                    .admin-info__panel Панель администрирования
                .header__right
                  .header__right-exit
                    a(href="#").header__right-link Выйти
            .admin-about__links
                .navbar
                    ul.navbar__list
                        li.navbar__item.active
                            a(href="#").navbar__item-link Обо мне
                        li.navbar__item
                            a(href="#").navbar__item-link Работы
                        li.navbar__item
                            a(href="#").navbar__item-link Отзывы
            .ad-about
                .container.container--abou
                    .about__flex
                        .about__flex-headline Блок «Обо мне»
                        button.about__flex-adding Добавить группу
                    .about__section
                        form.group.group--skills
                            .group__title
                                input(value="Название новой группы").group__input
                                .group__tittle-controls
                                    button.ok-btn
                                    button.canselled-btn
                            hr.group__separator
                            .group__content
                            .group__adding
                                input(type="text" value="Новый навык").group__adding-input
                                input(type="number" min="0" max="100").group__adding-percent
                                button.group__adding-plus
                        form.group.group--skills
                           .group__title
                               input(value="Frontend").group__input
                               .group__tittle-controls
                                   button.ok-btn
                                   button.canselled-btn
                           hr.group__separator
                           .group__content
                              -for(i=0;i<4;i++)
                               .group__row
                                   input(type="text" value="Git").group__row-input
                                   input(type="number" min="0" max="100" placeholder="50").group__adding-percent
                                   .group__row-btns
                                       button.pencil
                                       button.trash
                           .group__adding
                               input(type="text" value="Новый навык").group__adding-input
                               input(type="number" min="0" max="100").group__adding-percent
                               button.group__adding-plus
                        form.group.group--skills
                           .group__title
                               input(value="Frontend").group__input
                               .group__tittle-controls
                                   button.ok-btn
                                   button.canselled-btn
                           hr.group__separator
                           .group__content
                              -for(i=0;i<4;i++)
                               .group__row
                                   input(type="text" value="Git").group__row-input
                                   input(type="number" min="0" max="100" placeholder="50").group__adding-percent
                                   .group__row-btns
                                       button.pencil
                                       button.trash
                           .group__adding
                               input(type="text" value="Новый навык").group__adding-input
                               input(type="number" min="0" max="100" value="100").group__adding-percent
                               button.group__adding-plus
                .container
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
                                               .group__upload-tablets
                                                   img(src="../images/content/mobile-img.png").group__upload-adaptive
                                                   button.group__upload-edit Изменить превью
                                               .group__upload-desktop
                                                     .group__upload-text Перетащите или загрузите для загрузки изображения
                                                     input(type="file").group__upload-img
                                                     button.group__btn.group__btn--upload Загрузить
                                    .group__column
                                        .group__row
                                            label.group__label
                                                .group__label-text Название
                                                input.group__input-works
                                        .group__row
                                           label.group__label
                                               .group__label-text Cсылка
                                               input.group__input-works
                                        .group__row
                                           label.group__label
                                               .group__label-text Описание
                                               textarea.group__textarea
                                        .group__row
                                            label.group__label
                                                .group__label-text Добавление тэга
                                                input.group__input-works
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
                                        img(src="../images/content/mini-prev1.png").works__img
                                    .works__content
                                        .works__content-title
                                        .works__content-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                                        a(href="#").works__content-link http://loftschool.ru
                                        .admin-btns
                                            button.admin-btns__item
                                                .admin-btns__text Править
                                                .pencil.pencil--works
                                            button.admin-btns__item
                                                .admin-btns__text Удалить
                                                .trash.trash--works
                .container.container--new
                    .new
                        .new__title Блок «Отзывы»
                        .group-works__title Редактирование работы
                        .group__separator
                        .new__section
                            form.group.group--new
                                .group__left
                                    label.group__left-upload
                                        .group__left-img
                                        input(type="file").group__left-file
                                        .group__left-text Добавить фото
                                .group__right
                                    .group__row
                                        label.group__label
                                            .group__label-text Имя автора
                                            input(type="text").group__input-new
                                        label.group__label
                                            .group__label-text Титул автора
                                            input(type="text").group__input-new
                                    .group__row
                                        label.group__label
                                            .group__label-text Отзыв
                                            textarea(type="text").group__textarea
                                    .group__controls
                                        button.group__controls-cancell Отменить
                                        button.group__btn Сохранить
                        .new__section
                            .new__item.new__item--line.new__item--adding
                                .new__item-btn
                                    .new__item-plus
                                    .new__text Добавить отзыв
                            -for(i=0;i<5;i++)
                                .new__item.new__item--line
                                    .new__personal
                                        .new__item-ava
                                            img.new__item-img
                                        .new__info
                                            .new__info-name Владимир Сабанцев
                                            .new__info-rang Преподаватель
                                    .group__separator
                                    .new__item-text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                                    .admin-btns
                                       button.admin-btns__item
                                           .admin-btns__text Править
                                           .pencil.pencil--works
                                       button.admin-btns__item
                                           .admin-btns__text Удалить
                                           .trash.trash--works
</template>
<style lang="postcss">
@import '../styles/mixins.pcss';
@import '../styles/layout/base.pcss';
@import '../styles/layout/normalize.css';
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');

input{
    border: none;
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
.new__personal{
    display: flex;
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
    background: red;
    margin-right: 12px;
}
.new__section{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
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
.admin-btns__item{
    display: flex;
    align-items: center;
    background: transparent;
}
.admin-btns{
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
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
.admin-btns__text{
    opacity: 0.5;
    color: #414c63;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 600;
    margin-right: 7px;
}
.works__pic{
    position: relative;
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
.group__row{
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    width: 100%;
    @include tablets{
       // flex-direction: column;
    }
}
.group__row-btns{
    display: flex;
    margin-left: 20px;

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
.about__section{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
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
.form__login{
    max-width: 100%;
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

    &:after{
        content: "%";
        position: absolute;
        color: rgba(65,76,99,.7);
        font-size: 1rem;
        font-weight: 400;
        display: block;
        right: 0;
        top: 50%;
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
        width: calc(50%);
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
.container--header__admin{
    flex-direction: row;
    justify-content: space-between;
}

.form__input{
    height: 50px;
    border: none;
    border-bottom: black 1px solid;
    padding-left: 33px;
    color: #414c63;
    font-family: "Open Sans";
    font-size: 18px;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    font-weight: 700;

}
.form__btn{
    width: 21.6875rem;
    height: 5rem;
    background-image: linear-gradient(90deg,#d0731b 0,#dc9322);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    transform: .4s;

    @include phones{}
    width: 19rem;
    height: 4rem;
}
.form__icon{
    position: absolute;
    top: 50px;
    width: 30px;
    height: 30px;
    opacity: 0.4;
    background: svg-load("user.svg",fill="#414c63",width="26px",height="30px") center center no-repeat;
}
.form__row{
    margin-bottom: 25px;

    &:nth-child(2){
        margin-bottom: 35px;
    }
}
.form__label{
    position: relative;
    display: flex;
    flex-direction: column;
}
.form__text{
    opacity: 0.4;
    color: #414c63;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
}
.login__close{
    position: absolute;
    top: 10px;
    right: 23px;
    width: 30px;
    height: 30px;
    background: svg-load("remove.svg",fill="#414c63",width="15px",height="15px") center center no-repeat;
}
.login__title{
    color: #414c63;
    font-family: "Open Sans";
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 40px;
}
.login__content{
    padding: 65px 80px;
    background: white;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @include phones{
        width: 100%;
        height: 100vh;
    }
}
.form__login{
}
.login{
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url("../images/content/bck.png");
    background-size:cover;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before{
        content: '';
        background: rgba(0,0,0,0.45);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
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
    justify-content: center;

    @include tablets{
        justify-content: flex-start;
    }
    @include phones{
        flex-direction: column;
        align-items: flex-start;
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
.navbar__list{
    display: flex;
    align-items: center;
    height: 100%;
}
.navbar__item{
    margin-right: 60px;
    padding: 0 25px;
    padding-bottom: 20px;

    &.active {
        border-bottom: 3px solid #383bcf;
        .navbar__item-link{
            color: #383bcf
        }
    }
    &:hover{
        border-bottom: 3px solid #383bcf;
        .navbar__item-link{
            color: #383bcf
        }
    }
    @include phones{
        margin: 0;

    }
}
.navbar__item-link{
    color: #414c63;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
}

.maincontent{
    background-color: rgba(255, 255, 255, 0.9);
}
body{
    background-color:#f8fafe;
}
.header__admin{
    height:80px;
    width: 100%;
    background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
    display: flex;
    align-items: center;
    justify-content:space-between;
}
.header__right-link{
    opacity: 0.7;
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    text-decoration: underline;
}
.container--admin-about{
    width: 100%;
}
.admin-ava{
    width: 44px;
    height: 45px;
    border-radius:50%;
    overflow:hidden;
    background-color:red;
}
.admin-info{
    display:flex;
    align-items:center;
}
.admin-name{
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 400;
    margin-left: 20px;
}
.admin-info__panel{
    opacity: 0.5;
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 400;
    margin-left: 28px;

    @include phones{
        display: none;
    }
}
.admin-about__links{
    width: 100%;
}
.navbar{
    height: 77px;
    background-color: #ffffff;
    padding-left: 60px;
}
</style>