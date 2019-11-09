<template lang="pug">
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
</template>

<script>
    export default {
        name: "admin-header"
    }
</script>

<style lang="postcss">
    @import '../../styles/mixins.pcss';
    @import '../../styles/layout/base.pcss';
    @import '../../styles/layout/normalize.css';
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');


    .container--header__admin {
        flex-direction: row;
        justify-content: space-between;
    }
    button{
        background: transparent;
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

</style>