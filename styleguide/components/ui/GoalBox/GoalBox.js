import Vue from 'vue';

export default Vue.extend({
  template: `
    <a class="goalbox" :class='classObject'><slot /></a>
  `,
  computed: {
    classObject: function(){
      return {
        [`goalbox--${this.theme}`]: true,
      }
    },
  },
  props: {
    theme: {
      validate: (val) => ['theme-cs', 'theme-af', 'theme-ocher'].includes(val),
      required: true,
    },
  }
});

