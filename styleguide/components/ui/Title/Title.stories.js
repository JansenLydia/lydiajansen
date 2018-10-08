import { storiesOf } from '@storybook/vue';

import Title, { HeroTitle, FooterTitle, PanelTitle, SpotlightTitle, SubTitle, TextTitle } from './index';

storiesOf('components.ui.Title', module)
  .add('HeroTitle', () => ({
    components: { HeroTitle },
    template: '<div style="background-color: var(--color-brand-red); padding: 20px;"><HeroTitle>Herotitle</HeroTitle></div>',
  }))
  .add('FooterTitle', () => ({
    components: { FooterTitle },
    template: '<div style="background-color: #333; padding: 20px;"><FooterTitle>FooterTitle</FooterTitle></div>',
  }))
  .add('PanelTitle', () => ({
    components: { PanelTitle },
    template: '<PanelTitle>PanelTitle</PanelTitle>',
  }))
  .add('SpotlightTitle', () => ({
    components: { SpotlightTitle },
    template: '<div style="background-color: var(--color-brand-red); padding: 20px;"><SpotlightTitle>SpotlightTitle</SpotlightTitle></div>',
  }))
  .add('SubTitle', () => ({
    components: { SubTitle },
    template: '<SubTitle>SubTitle</SubTitle>',
  }))
  .add('TextTitle', () => ({
    components: { TextTitle },
    template: '<TextTitle>TextTitle</TextTitle>',
  }))
  .add('levels', () => ({
    components: { Title },
    template: '<div>' +
    '<Title level="1">De titel level 1</Title>' +
    '<Title level="2">De titel level 2</Title>' +
    '<Title level="3">De titel level 3</Title>' +
    '<Title level="4">De titel level 4</Title>' +
    '</div>',
  }))
  .add('alternative', () => ({
    components: { Title },
    template: '<Title level="1" type="alternative" >De titel alternative</Title>',
  }))
  .add('negative', () => ({
    components: { Title },
    template: '<div style="background-color: #333; padding: 20px;"><Title level="1" color="negative">De titel negatief</Title></div>',
  }))
  .add('negative alternative', () => ({
    components: { Title },
    template: '<div style="background-color: #333; padding: 20px;"><Title level="1" color="negative" type="alternative">De titel alternatief negatief</Title></div>',
  }));