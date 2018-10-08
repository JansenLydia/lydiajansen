import Vue from 'vue';
import VueTypes from 'vue-types';

const ButtonBase = Vue.extend({
  computed: {
    classObject: function() {
      return {
        button: true,
        [`button--color-${this.color}`]: true,
        'button--fill': this.isFilled,
        'button--rounded': !this.isNotRounded,
        'button--block': this.isBlock,
        'button--small': this.isSmall,
      };
    },
  },
  render: function(createElement) {
    return createElement(
      this.tag,
      {
        class: this.classObject,
      },
      this.$slots.default,
    );
  },
  props: {
    isFilled: VueTypes.bool.def(false),
    isNotRounded: VueTypes.bool.def(false),
    isBlock: VueTypes.bool.def(false),
    isSmall: VueTypes.bool.def(false),
    color: VueTypes.oneOf(['red', 'mint', 'white', 'dark']).isRequired,
    tag: VueTypes.oneOf(['button', 'a']).isRequired,
  },
});

export const Button = ButtonBase.extend({
  props: {
    tag: {
      default: 'button',
    },
  },
});

export const ButtonLink = ButtonBase.extend({
  props: {
    tag: {
      default: 'a',
    },
  },
});
