<template lang="pug">
   .admin-about
       .container.container--admin-about
        .header.header__admin
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
                    li.navbar__item
                        a(href="#").navbar__item-link Обо мне
                    li.navbar__item
                        a(href="#").navbar__item-link Работы
                    li.navbar__item
                        a(href="#").navbar__item-link Отзывы
</template>
<style lang="postcss">
html{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
body{
    padding:0;
    margin:0;
}
.maincontent{
    background-color: rgba(255, 255, 255, 0.9);
}
.header__admin{
    height:80px;
    background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
    display: flex;
    align-items: center;
    justify-content:space-between;
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
}
.admin-info__panel{
    opacity: 0.5;
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 400;
}
.navbar{
    height: 77px;
    background-color: #ffffff;
}
</style>