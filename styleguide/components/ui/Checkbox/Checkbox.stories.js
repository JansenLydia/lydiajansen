import { storiesOf } from '@storybook/vue';

import Checkbox from './index';
import FormError from '../FormError';

storiesOf('components.ui.Checkbox', module)
  .add('default', () => ({
    components: { Checkbox },
    data: () => ({
      enabled: true,
    }),
    template: `
        <div>
            <Checkbox id="test" label="Check it" v-model="enabled" />
            <span>Enabled: {{enabled}}</span>
        </div>
    `,
  }))
  .add('error', () => ({
    components: { Checkbox, FormError },
    data: () => ({
      enabled: true,
    }),
    template: `
        <div>
          <Checkbox id="test" label="Check it" v-model="enabled">
            <template slot="errors">
              <FormError>Verkeerd ingevuld</FormError>
            </template>
          </Checkbox>
          <span>Enabled: {{enabled}}</span>
        </div>
    `,
  }))
  .add('disabled', () => ({
    components: { Checkbox },
    data: () => ({
      enabled: true,
    }),
    template: `
        <div>
            <Checkbox id="test" label="Check it" v-model="enabled" disabled />
            <span>Enabled: {{enabled}}</span>
        </div>
    `,
  }))
  .add('group', () => ({
    components: { Checkbox },
    data: () => ({
      selectedItems: [],
    }),
    template: `
        <div>
            <Checkbox id="an" value="An" label="An" v-model="selectedItems" />
            <Checkbox id="jonas" value="Jonas" label="Jonas" v-model="selectedItems" />
            <Checkbox id="lydia" value="Lydia" label="Lydia" v-model="selectedItems" />
            <span>Checked names: {{ selectedItems }}</span>
        </div>
    `,
  }));
