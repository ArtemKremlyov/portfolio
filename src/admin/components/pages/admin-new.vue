<template lang="pug">
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

<script>
    export default {
        name: "admin-new"
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