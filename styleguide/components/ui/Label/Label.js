import Vue from 'vue';
import VueTypes from 'vue-types';

export default Vue.extend({
  template: `
    <label class="label" :class="classObject"><slot /></label>
  `,
  computed: {
    classObject: function(){
      return {
        'label--block': this.isBlock,
      }
    },
  },
  props: {
    isBlock: VueTypes.bool.def(false),
  },
})
