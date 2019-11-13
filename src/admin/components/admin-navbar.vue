<template lang="pug">
.container
    .admin-about__links
        .navbar
            ul.navbar__list
                li.navbar__item
                    router-link(tag="button" to="/" class="navbar__item-link") Обо мне

                li.navbar__item
                    router-link(tag="button" to="/works" class="navbar__item-link") Работы

                li.navbar__item
                    router-link(tag="button" to="/new" class="navbar__item-link") Отзывы

</template>

<script>
    export default {
        name: "admin-navbar"
    }
</script>

<style lang="postcss">
    @import '../../styles/mixins.pcss';
    @import '../../styles/layout/base.pcss';
    @import '../../styles/layout/normalize.css';
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');

    .admin-about__links{
        width: 100%;
    }
    .navbar{
        height: 77px;
        background-color: #ffffff;
        padding-left: 60px;
    }
    .navbar__list{
        display: flex;
        align-items: center;
        height: 100%;
    }
    .navbar__item{
        margin-right: 60px;

        &.active {
            .navbar__item-link{
                color: #383bcf;
                border-bottom: 3px solid #383bcf;
            }
        }
        &:hover{
            .navbar__item-link{
                color: #383bcf;
                border-bottom: 3px solid #383bcf;
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
        padding-bottom: 20px;
        padding-left: 10px;
        padding-right: 10px;

        &.router-link-exact-active{
                color: #383bcf;
                border-bottom: 3px solid #383bcf;
        }
    }
</style>