import Vue from 'vue';
import VueTypes from 'vue-types';

import Label from '../Label';

export default Vue.extend({
  components: { Label },
  template: `
    <div>
      <div v-for="option in options">
        <input
          class="radio"
          :id="id.concat(option.value)"
          type="radio" v-on:change="onChange"
          :value="option.value"
          :checked="option.value === value"
          :disabled="disabled"
        />
        <Label :for="id.concat(option.value)">{{option.description}}</Label>
      </div>
      <slot name="errors" />
    </div>
  `,
  methods: {
    onChange: function(event) {
      if (event.target.checked) {
        this.$emit('input', event.target.value);
      }
    },
  },
  props: {
    id: VueTypes.string.isRequired,
    options: VueTypes.arrayOf(
      VueTypes.shape({
        value: String,
        description: String,
      }),
    ).isRequired,
    value: VueTypes.string,
    disabled: VueTypes.bool.def(false),
  },
});
