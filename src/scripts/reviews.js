import Vue from 'vue';
import Flickity from 'vue-flickity';
 
new Vue({
  el: ".reviews",
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells:true,
        freeScroll:false,
        contain:true
        
        // any options from Flickity can be used
      }
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
      this.checkArrows()
    },
    
    previous() {
      this.$refs.flickity.previous();
      this.checkArrows()
    },
    checkArrows() {
      if  (this.$refs.flickity.selectedIndex() === 0){
          this.$el.querySelector('.circle-btns__item--left').disabled = true;
      }
      else if (this.$refs.flickity.selectedIndex() === this.$refs.flickity.slides().lenght - 1){
          this.$el.querySelector('.circle-btns__item--right').disabled = true;
      }
      else{
        this.$el.querySelector('.circle-btns__item--right').disabled = false;
        this.$el.querySelector('.circle-btns__item--left').disabled = false;
      }
    }
  }
});