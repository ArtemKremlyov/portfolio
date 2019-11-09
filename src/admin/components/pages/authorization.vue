<template lang="pug">
.login
    .login__content
        .login__title Авторизация
        button.login__close
        form(@submit.prevent="login").form__login
            .form__row
                label.form__label
                    .form__text Логин
                    input(type="text" v-model="user.name").form__input
                    .form__icon
            .form__row
                label.form__label
                    .form__text Пароль
                    input(type="password" v-model="user.password").form__input
                    .form__icon
            button.form__btn Отправить
</template>

<script>
    import $axios from '@/request';
    export default {

        template: ".form__login",
        data: () => ({
            user:{
                name:'',
                password:''
            }
    }),
        methods:{
            async login(){
                try{
                    const response = await $axios.post("/login",this.user)
                    console.log(response)
                    const token = response.data.token;

                    this.$router.replace("/")

                    localStorage.setItem("token",token)
                }
                catch (error) {

                }

            }
        },
    };
</script>

<style lang="postcss">
    @import '../../../styles/mixins.pcss';
    @import '../../../styles/layout/normalize.css';
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');


    .login{
        position: relative;
        width: 100%;
        height: 100vh;
        background-image: url("../../../images/content/bck.png");
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
    .form__login{
        max-width: 100%;
    }
</style>