import { storiesOf } from '@storybook/vue';

import TextInput from './index';
import FormError from '../FormError';

storiesOf('components.ui.TextInput', module)
  .add('default', () => ({
    data: () => ({
      field: '',
    }),
    components: { TextInput, FormError },
    template: `
        <TextInput id="field" label="Invulveld:" placeholder="Vul iets in..." v-model="field" />
    `,
  }))
  .add('error', () => ({
    data: () => ({
      field: 'Foute waarde',
    }),
    components: { TextInput, FormError },
    template: `
        <TextInput id="field" label="Invulveld:" placeholder="Vul iets in..." v-model="field">
            <template slot="errors">
                <FormError>Verkeerd ingevuld</FormError>
            </template>
        </TextInput>
    `,
  }))
  .add('disabled', () => ({
    data: () => ({
      field: '',
    }),
    components: { TextInput, FormError },
    template: `
        <TextInput id="field" label="Invulveld:" placeholder="Vul iets in..." v-model="field" disabled />
    `,
  }))
  .add('multiline', () => ({
    data: () => ({
      field: '',
    }),
    components: { TextInput },
    template: `
        <TextInput id="field" label="Invulveld:" placeholder="Vul iets in..." v-model="field" is-multiline />
    `,
  }));
