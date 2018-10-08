import { storiesOf } from '@storybook/vue';

import Label from './index';

storiesOf('components.ui.Label', module)
  .add('default', () => ({
    components: { Label },
    template: `
        <Label for="fieldname">Field name</Label>
    `,
  }))
  .add('block', () => ({
    components: { Label },
    template: `
        <Label for="fieldname" is-block>Field name</Label>
    `,
  }));