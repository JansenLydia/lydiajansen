import { storiesOf } from '@storybook/vue';

import Paragraph from './index';

storiesOf('components.ui.Paragraph', module)
  .add('default', () => ({
    components: { Paragraph },
    template: `
        <Paragraph>Ze vogelen. Het zijn <a href="#">konijnen</a> in het gras met dauw. Het nevelt en de ochtend zweet.<br/>
        Stil mag het niet zijn. Ik hoor de nijd, het wrochten van motoren. De echte beesten met voituren, ze sleuren zich, naar werk, fabriek of een klavier.</Paragraph>
    `,
  }));
