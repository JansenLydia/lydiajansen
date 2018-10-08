import { storiesOf } from '@storybook/vue';

import {Button, AFButton, CSButton, CTAButton, HeroButton, ButtonLink, AFButtonLink, CSButtonLink, CTAButtonLink, HeroButtonLink} from './index';

storiesOf('components.ui.Button', module)
  .add('Button', () => ({
    components: { Button },
    template: `
        <Button :onclick="function(){alert('lol')}" color="mint" is-small>Click me</Button>
    `,
  }))
  .add('Button disabled', () => ({
    components: { Button },
    template: `
        <Button :onclick="function(){alert('lol')}" color="mint" is-small disabled>Not clickable</Button>
    `,
  }))
  .add('AFButton', () => ({
    components: { AFButton },
    template: `
        <AFButton :onclick="function(){alert('lol')}">Click me</AFButton>
    `,
  }))
  .add('CSButton', () => ({
    components: { CSButton },
    template: `
        <CSButton :onclick="function(){alert('lol')}">Click me</CSButton>
    `,
  }))
  .add('CTAButton', () => ({
    components: { CTAButton },
    template: `
        <div style="background-color: #999; padding: 20px">
            <CTAButton :onclick="function(){alert('lol')}">Click me</CTAButton>
        </div>
    `,
  }))
  .add('HeroButton', () => ({
    components: { HeroButton },
    template: `
        <div style="background-color: #999; padding: 20px">
            <HeroButton :onclick="function(){alert('lol')}">Click me</HeroButton>
        </div>
    `,
  }))
  .add('ButtonLink', () => ({
    components: { ButtonLink },
    template: `
        <ButtonLink href="https://google.com" color="mint" is-small>Click me</ButtonLink>
    `,
  }))
  .add('AFButtonLink', () => ({
    components: { AFButtonLink },
    template: `
        <AFButtonLink href="https://google.com">Click me</AFButtonLink>
    `,
  }))
  .add('CSButtonLink', () => ({
    components: { CSButtonLink },
    template: `
        <CSButtonLink href="https://google.com">Click me</CSButtonLink>
    `,
  }))
  .add('CTAButtonLink', () => ({
    components: { CTAButtonLink },
    template: `
        <div style="background-color: #999; padding: 20px">
            <CTAButtonLink href="https://google.com">Click me</CTAButtonLink>
        </div>
    `,
  }))
  .add('HeroButtonLink', () => ({
    components: { HeroButtonLink },
    template: `
        <div style="background-color: #999; padding: 20px">
            <HeroButtonLink href="https://google.com">Click me</HeroButtonLink>
        </div>
    `,
  }));
