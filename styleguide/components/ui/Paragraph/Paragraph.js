import Vue from 'vue';

export default Vue.extend({
  template: `
    <p>
        <slot />
    </p>
  `,
});
