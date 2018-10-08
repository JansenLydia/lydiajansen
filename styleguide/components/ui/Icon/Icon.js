import Vue from 'vue';
import VueTypes from 'vue-types';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import icons, { iconTypes } from './icons';

export default Vue.extend({
  components: { FontAwesomeIcon },
  template: `<FontAwesomeIcon :icon="faIcon" :class="classObject" />`,
  computed: {
    faIcon: function() {
      const iconProperties = icons[this.icon];
      return [iconProperties.style, iconProperties.name];
    },
    classObject: function() {
      const classProps = {
        [`text-size-${this.size}`]: true,
      };
      if (this.color !== 'none') {
        classProps[`text-color-${this.color}`] = true;
      }
      return classProps;
    },
  },
  props: {
    icon: VueTypes.oneOf(iconTypes).isRequired,
    color: VueTypes.oneOf(['red', 'white', 'mint', 'dark', 'none']).def('dark'),
    size: VueTypes.oneOf(['xs', 'sm', 'default', 'md', 'lg', 'xl', 'xxl']).def('default'),
  },
});
