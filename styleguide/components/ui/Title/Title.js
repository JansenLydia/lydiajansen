import Vue from 'vue';
import VueTypes from 'vue-types';

export default Vue.extend({
  render: function(createElement) {
    return createElement(
      'h' + this.level,
      {
        'class': {
          'title--negative': this.color === 'negative',
          'title-alternative-1': this.type === 'alternative',
        },
      },
      this.$slots.default,
    );
  },
  props: {
    level: VueTypes.number.isRequired,
    color: VueTypes.oneOf(['default', 'negative']).def('default'),
    type: VueTypes.oneOf(['default', 'alternative']).def('default'),
  },
});
