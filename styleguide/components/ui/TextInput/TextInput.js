import Vue from 'vue';
import VueTypes from 'vue-types';

import Label from '../Label';

const buildInput = (vm, createElement) => {
  const element = vm.isMultiline ? 'textarea' : 'input';

  const attrs = {
    placeholder: vm.placeholder,
    id: vm.id,
    class: 'textinput',
    disabled: vm.disabled,
    value: vm.value,
  };

  if (!vm.isMultiline) {
    attrs.type = vm.type;
  }

  return createElement(
    element,
    {
      attrs,
      on: {
        input: function(event) {
          vm.$emit('input', event.target.value);
        },
      },
    },
  );
};

const buildLabel = (vm, createElement) => {
  return createElement(
    Label,
    {
      attrs: {
        'for': vm.id,
      },
      props: {
        isBlock: true,
      },
    },
    vm.label,
  );
};

export default Vue.extend({
  render: function(createElement) {
    const vm = this;

    return createElement(
      'div',
      {
        class: {
          'formrow': true,
        },
      },
      [
        buildLabel(vm, createElement),
        buildInput(vm, createElement),
        vm.$slots.errors,
      ],
    );
  },
  props: {
    isMultiline: VueTypes.bool.def(false),
    type: VueTypes.string.def('text'),
    value: VueTypes.string.isRequired,
    placeholder: VueTypes.string,
    label: VueTypes.string.isRequired,
    id: VueTypes.string.isRequired,
    disabled: VueTypes.bool.def(false),
  },
});
