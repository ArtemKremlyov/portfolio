<template lang="pug">
    .messages
        .messages__item(:class="type")
            .messages__content
                .messages__text {{text}}

</template>

<script>
    import { mapState, mapActions } from "vuex";
    export default {
        computed: {
            ...mapState('message', {
                text: state => state.text,
                type: state => state.type
            })
        },
        methods: {
            ...mapActions('message', ['closeTooltip'])
        }
    }
</script>

<style scoped>
    .messages {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        transform: translateY(100%);
        flex-direction: row;
        justify-content: center;
        transition: 0.3s;

        &.visible {
            transform: translateY(0);
            transition: 0.3s;
        }
    }
    .messages__item{
        width: 400px;
        color: #fff;
        margin: 0 auto;
        padding: 20px 30px;
        border-top-left-radius: 14px;
        border-top-right-radius: 14px;

        &.success {
            background: green;
        }

        &.warning {
            background: orange;
        }

        &.error {
            background: red;
        }

        &__content {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }


    }
    .messages__content {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .messages__text {
        font-size: 22px;
        font-weight: 600;
        text-align: center;
    }
</style>