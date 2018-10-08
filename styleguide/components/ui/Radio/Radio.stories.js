import { storiesOf } from '@storybook/vue';

import Radio from './Radio';
import FormError from '../FormError';

storiesOf('components.ui.Radio', module)
  .add('default', () => ({
    components: { Radio },
    data: () => ({
      value: null,
      options: [
        {
          value: '1',
          description: "1st value",
        },
        {
          value: '2',
          description: "2nd value",
        },
      ],
    }),
    template: `
        <div>
            <Radio id="test" v-model="value" :options="options" />
            <span>Selected: {{value}}</span>
        </div>
    `,
  }))
  .add('error', () => ({
    components: { Radio, FormError },
    data: () => ({
      value: null,
      options: [
        {
          value: '1',
          description: "1st value",
        },
        {
          value: '2',
          description: "2nd value",
        },
      ],
    }),
    template: `
        <div>
            <Radio id="test" v-model="value" :options="options">
              <template slot="errors">
                <FormError>Verkeerd ingevuld</FormError>
              </template>
            </Radio>
        </div>
    `,
  }))
  .add('disabled', () => ({
    components: { Radio },
    data: () => ({
      value: null,
      options: [
        {
          value: '1',
          description: "1st value",
        },
        {
          value: '2',
          description: "2nd value",
        },
      ],
    }),
    template: `
        <div>
            <Radio id="test" v-model="value" :options="options" disabled />
            <span>Selected: {{value}}</span>
        </div>
    `,
  }));
