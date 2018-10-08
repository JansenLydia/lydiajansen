import { storiesOf } from '@storybook/vue';

import TextLink, {GlobalNavAuthLink, GlobalNavLink, MainNavLink, SpotlightAfLink, SpotlightCSLink} from './index';

storiesOf('components.ui.TextLink', module)
  .add('SpotlightCSLink', () => ({
    components: { SpotlightCSLink },
    template: `
        <div style="background-color: #333; padding: 20px;">
            <SpotlightCSLink url="https://google.com" active>Link Text</SpotlightCSLink>
        </div>
    `,
  }))
  .add('SpotlightAfLink', () => ({
    components: { SpotlightAfLink },
    template: `
        <div style="background-color: #333; padding: 20px;">
            <SpotlightAfLink url="https://google.com" active>Link Text</SpotlightAfLink>
        </div>
    `,
  }))
  .add('MainNavLink', () => ({
    components: { MainNavLink },
    template: `
        <div style="background-color: #333; padding: 20px;">
            <MainNavLink url="https://google.com" is-active>Link Text</MainNavLink>
        </div>
    `,
  }))
  .add('GlobalNavLink', () => ({
    components: { GlobalNavLink },
    template: `
        <div style="background-color: #333; padding: 20px;">
            <GlobalNavLink url="https://google.com">Link Text</GlobalNavLink>
        </div>
    `,
  }))
  .add('GlobalNavAuthLink', () => ({
    components: { GlobalNavAuthLink },
    template: `
        <div style="background-color: #333; padding: 20px;">
            <GlobalNavAuthLink url="https://google.com">Link Text</GlobalNavAuthLink>
        </div>
    `,
  }));
