import { storiesOf } from '@storybook/vue';

import Icon from './index';

storiesOf('components.ui.Icon', module)
  .add('default', () => ({
    components: { Icon },
    template: `
        <Icon icon="heart" />
    `,
  }))
  .add('size', () => ({
    components: { Icon },
    template: `
        <Icon icon="heart" size="xxl" />
    `,
  }))
  .add('color', () => ({
    components: { Icon },
    template: `
        <Icon icon="heart" color="red" />
    `,
  }));
