<template lang="pug">
.login
    .login__content
        .login__title Авторизация
        button.login__close
        form(@submit.prevent="login").form__login
            .form__row
                label.form__label(:class="{error: !nameValid}")
                    .form__text Логин
                    input(type="text" v-model="user.name" @input="validateName").form__input
                    .form__icon
                    .error-toltip {{nameError}}
            .form__row
                label.form__label(:class="{error: !passwordValid}")
                    .form__text Пароль
                    input(type="password" v-model="user.password" @input="validatePassword").form__input
                    .form__icon
                    .error-toltip {{passwordError}}
            button.form__btn() Отправить
</template>

<script>
    import $axios from '@/request';
    import {mapActions} from "vuex"
    export default {

        template: ".form__login",
        data: () => ({
            user:{
                name:'',
                password:''
            },
            disabled : "false",
            nameValid : "false",
            nameError : "",
            passwordError : "",
            passwordValid : "false",
    }),
        methods:{
            ...mapActions("message", ["showTooltip"]),
            async login(){
                try{
                   if(this.nameValid && this.passwordValid){
                    const response = await $axios.post("/login",this.user)
                    console.log(response)
                    const token = response.data.token;
                    localStorage.setItem("token",token)
                    this.$router.replace("/")

                       this.showTooltip({
                           type: "success",
                           text: "Успешный логин!"
                       });
                   }

                }
                catch (response) {
                    console.log(response),
                    this.showTooltip({
                        type: "error",
                        text: "Неуспешный логин!",
                    });
                }

            },
            validateName(){
                if (this.user.name.length < 3){
                    this.nameValid = false
                    this.nameError = "Короткое имя пользователя"
                }
                else{
                    this.nameValid = true;
                    this.nameError = ""
                }
                return this.nameValid;
            },
            validatePassword(){
                if (this.user.password.length < 5){
                    this.passwordValid = false
                    this.passwordError = "Короткий пароль"
                }
                else{
                    this.passwordValid = true;
                    this.passwordError = ""
                }
                return this.passwordValid;
            },
        },
    };
</script>

<style lang="postcss">
    @import '../../../styles/mixins.pcss';
    @import '../../../styles/layout/normalize.css';
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');

    .error-toltip{
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

    }
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
        position: relative;

        &.error{
            .error-toltip{
                display: block;
            }
        }
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