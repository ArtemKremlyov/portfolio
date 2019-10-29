import Vue from 'vue';

const thumbs = {
    template:"#slider-previews",
    props:["works","currentWork"]
}

const buttons = {
    template:"#slider-btns",
}

const tags = {
    template:"#slider-tags",
    props:["tags"]
}

const display = {
    template:"#slider-display",
    components:{ thumbs , buttons },
    props:["works","currentWork","currentIndex"]
}

const info = {
    template:"#slider-info",
    components:{ tags },
    props:["currentWork"],
    computed:{
        tagsArray() {
            return this.currentWork.skills.split(', ');
        }
    }
}

new Vue({
    el:'#slider-component',
    template:"#slider-container",
    components:{ display,info },
    data:() => ({
        works:[],
        currentIndex:0
    }),
    computed:{
        currentWork() {
            return this.works[this.currentIndex];
        }
    },
    watch:{
        currentIndex(value) {
            if (value<0){
                this.currentIndex = this.works.length - 1
            }
            else if (value > this.works.length - 1){
                this.currentIndex = 0
            }
        }
    },
    methods:{
        makeArrWithRequiredImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/content/${item.photo}`);
                item.photo = requiredPic;
                return item;
            })
        },
        handleSlide(direction) {
            switch(direction) {
                case "next" :
                    this.currentIndex++;
                    break;
                case "prev" :
                    this.currentIndex--;
                    break;
            }
        }
    },
    created() {
        const data = require("../data/portfolio.json");
        this.works = this.makeArrWithRequiredImages(data);


    }

})