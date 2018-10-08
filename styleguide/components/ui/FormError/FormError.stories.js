import { storiesOf } from '@storybook/vue';

import FormError from './index';

storiesOf('components.ui.FormError', module)
  .add('default', () => ({
    components: { FormError },
    template: `
        <FormError>You entered the wrong input</FormError>
    `,
  }));
