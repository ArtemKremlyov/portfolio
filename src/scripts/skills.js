import Vue from 'vue';


const skill ={
    template:'#skill'
}

const skillsRow ={
    template:'#skills-row',
    component:{skill}
}

new Vue({
  el:'#skills-component',
  template:'#skills-list',
  component:{skillsRow},
  data:() => ({
      skills: []
  }),
  created() {
    this.skills = require('../data/skills.json');
  }
})