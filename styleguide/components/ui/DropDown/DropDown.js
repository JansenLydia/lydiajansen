import Vue from 'vue';
import VueTypes from 'vue-types';

import Label from '../Label';

export default Vue.extend({
  components: { Label },
  template: `
    <div>
        <Label :for="id" is-block>{{label}}</Label>
        <select class="dropdown" :value="value" :id="id" v-on:input="$emit('input', $event.target.value)" :disabled="disabled">
            <option v-for="option in options" :value="option.value" :selected="option.value === value">{{option.description}}</option>
        </select>
        <slot name="errors" />
    </div>
  `,
  props: {
    id: VueTypes.string.isRequired,
    label: VueTypes.string.isRequired,
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
