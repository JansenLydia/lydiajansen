import Vue from 'vue';
import VueTypes from 'vue-types';

import Label from '../Label';

export default Vue.extend({
  components: { Label },
  template: `
    <div>
        <input type="checkbox" class="checkbox" :id="id" :checked="checkedState" v-on:change="onChange" :disabled="disabled" /><Label :for="id">{{label}}</Label>
        <slot name="errors" />
    </div>
  `,
  model: {
    prop: 'checked',
    event: 'change',
  },
  computed: {
    checkedState: function() {
      if (typeof this.checked === 'boolean') {
        return this.checked;
      } else {
        return this.checked.includes(this.value);
      }
    },
  },
  methods: {
    onChange: function(event) {
      let eventValue = event.target.checked;
      if (!(typeof this.checked === 'boolean')) {
        if (event.target.checked) {
          eventValue = this.checked.concat(this.value);
        } else {
          eventValue = this.checked.filter((val) => val !== this.value);
        }
      }
      this.$emit('change', eventValue);
    },
  },
  props: {
    checked: VueTypes.oneOfType([VueTypes.bool, VueTypes.array]).isRequired,
    value: VueTypes.string,
    label: VueTypes.string.isRequired,
    id: VueTypes.string.isRequired,
    disabled: VueTypes.bool.def(false),
  },
});
