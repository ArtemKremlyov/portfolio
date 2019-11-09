<template lang="pug">
   .admin-about
            admin-header()
            admin-navbar()
            router-view


            .ad-about

</template>
<style lang="postcss">
@import '../styles/mixins.pcss';
@import '../styles/layout/normalize.css';
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');



input{
    border: none;
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

.admin-btns__text{
    opacity: 0.5;
    color: #414c63;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 600;
    margin-right: 7px;
}
.maincontent{
    background-color: rgba(255, 255, 255, 0.9);
}
body{
    background-color:#f8fafe;
}

</style>
<script>
    import { mapState, mapActions, mapGetters } from "vuex";
    export default {
        components: {
            adminHeader: () => import("components/admin-header"),
            adminNavbar: () => import("components/admin-navbar"),
        },

    }
</script>