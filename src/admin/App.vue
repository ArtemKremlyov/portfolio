<template lang="pug">
    .wrapper
      template(v-if="$route.meta.public")
        router-view
        messages(:class="{visible: visible}")

      template(v-else-if="userIsLogged")
       .admin-about
                admin-header()
                admin-navbar()
                router-view


                messages(:class="{visible: visible}")

</template>
<style lang="postcss">
@import '../styles/mixins.pcss';
@import '../styles/layout/normalize.css';
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');

.tooltip{
    display: none;
    position: absolute;
    background: #b13333;
    font-size: .875rem;
    font-weight: 400;
    color: #fff;
    padding: .1875rem .9375rem;
    bottom: -23px;
    right: 30%;


    &:before{
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateY(-100%);
        content: "";
        width: 0;
        height: 0;
        border-color: transparent transparent #b13333;
        border-style: solid;
        border-width: 0 7.5px 7px;
    }
    &--skill{
        right: 51%;
    }

}

.group__label{
    position: relative;
    &.error{
        .tooltip{
            display: block;
        }
    }
}

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
            messages: () => import("components/message"),
        },
        computed:{
            ...mapGetters("user",["userIsLogged"]),
            ...mapState("message", { visible: state => state.visible })
        },
        methods: {
            ...mapActions("message", ["closeTooltip"])
        },
        watch: {
            visible(value) {
                if (value === true) {
                    let timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        this.closeTooltip();
                    }, 3000);
                }
            }
        },
    }
</script>