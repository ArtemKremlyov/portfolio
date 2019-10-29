
import Vue from 'vue';
new Vue({
    el: ".form",
    data: {
        name: '',
        email: '',
        message: '',
        nameValid: true,
        emailValid: true,
        messageValid: true,
        nameError: '',
        emailError: '',
        messageError: '',
        overlayHidden: true,
        resultMessage: ''
    },
    methods: {
        validateEmail() {
            var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.email = this.$el.querySelector('.form__input--email').value
            if (this.email.length < 8) {
                this.emailValid = false;
                this.emailError = "Короткий email адрес!"
            }
            else if (!regex.test(this.email)) {
                this.emailValid = false;
                this.emailError = "Не правильный email!"
                }
            else {
                this.emailValid = true;
                this.emailError = "";
                }
            return this.emailValid;
        },
        validateName() {
            this.name = this.$el.querySelector(".form__input--name").value
            if (this.name.length < 3) {
                this.nameValid = false;
                this.nameError = 'Короткое имя!'
            }
            else{
                this.nameValid = true;
                this.nameError = '';
            }
            return this.nameValid;
        },
        validateComment() {
            this.comment = this.$el.querySelector(".form__textarea").value
            if (this.comment.length < 10) {
                this.messageValid = false;
                this.messageError = 'Короткий комментарий!'
            }
            else {
                this.messageError = '';
                this.messageValid = true;
            }
            return this.messageValid;
        },
        submitForm() {
            var nameValid = this.validateName(),
                emailValid = this.validateEmail(),
                messageValid = this.validateComment();
            if (nameValid && emailValid && messageValid) {
                var userData = {
                    username: this.name,
                    email: this.email,
                    message: this.message
                }
                fetch('src/data/success.txt', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(userData)
                }).then((response) => {
                    //console.log(response);
                    this.resultMessage = "Сообщение отправлено!";
                    this.overlayHidden = false;
                    setTimeout(this.hideOverlay, 5000);
                });
            }
        },
        hideOverlay() {
            this.overlayHidden = true;
        }
    },
})