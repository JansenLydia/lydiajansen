import { storiesOf } from '@storybook/vue';

import DropDown from './DropDown';
import FormError from '../FormError';

storiesOf('components.ui.DropDown', module)
  .add('default', () => ({
    components: { DropDown },
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
            <DropDown id="test" label="Select it" v-model="value" :options="options" />
            <span>Selected: {{value}}</span>
        </div>
    `,
  }))
  .add('error', () => ({
    components: { DropDown, FormError },
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
            <DropDown id="test" label="Select it" v-model="value" :options="options">
              <template slot="errors">
                <FormError>Verkeerd ingevuld</FormError>
              </template>
            </DropDown>
        </div>
    `,
  }))
  .add('disabled', () => ({
    components: { DropDown },
    data: () => ({
      value: null,
      options: [
        {
          value: '1',
          description: "1st value",
        },
      ],
    }),
    template: `
        <div>
            <DropDown id="test" label="Select it" v-model="value" :options="options" disabled />
            <span>Selected: {{value}}</span>
        </div>
    `,
  }));
