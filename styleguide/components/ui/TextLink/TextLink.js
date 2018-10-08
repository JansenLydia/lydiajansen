import Vue from 'vue';
import VueTypes from 'vue-types';

const underlineClass = (underline) => {
  let textlinkUnderlineClass;
  switch (underline) {
    case 'default':
      textlinkUnderlineClass = 'textlink--underline';
      break;
    case 'cs':
      textlinkUnderlineClass = 'textlink--underline-theme-cs';
      break;
    case 'af':
      textlinkUnderlineClass = 'textlink--underline-theme-af';
      break;
    default:
      textlinkUnderlineClass = null;
  }

  if (textlinkUnderlineClass) {
    return {
      [textlinkUnderlineClass]: true,
    };
  }

  return null;
};

export default Vue.extend({
  template: `
    <a v-bind:href="url" class="textlink" :class="classObject"><slot /></a>
  `,
  computed: {
    computedUnderline: function() {
      return this.underline;
    },
    classObject: function() {
      return {
        ...underlineClass(this.computedUnderline),
        'textlink--big': this.isBig,
        'textlink--faded': this.isFaded,
        'textlink--red': this.isRed,
        'textlink--underline-on-hover': this.isUnderlineOnHover,
      };
    },
  },
  props: {
    url: VueTypes.string.isRequired,
    underline: VueTypes.oneOf([null, 'default', 'cs', 'af']),
    isBig: VueTypes.bool.def(false),
    isFaded: VueTypes.bool.def(false),
    isRed: VueTypes.bool.def(false),
    isUnderlineOnHover: VueTypes.bool.def(false),
  },
});
