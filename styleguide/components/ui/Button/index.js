import { Button, ButtonLink } from './Button';

const composeButton = (component, color, isFilled = false) => {
  return component.extend({
    props: {
      color: {
        default: color,
      },
      isFilled: {
        default: isFilled,
      },
    },
  });
};

export const AFButtonLink = composeButton(ButtonLink, 'mint', true);
export const CSButtonLink = composeButton(ButtonLink, 'red', true);
export const HeroButtonLink = composeButton(ButtonLink, 'white');
export const CTAButtonLink = composeButton(ButtonLink, 'white');

export const AFButton = composeButton(Button, 'mint', true);
export const CSButton = composeButton(Button, 'red', true);
export const HeroButton = composeButton(Button, 'white');
export const CTAButton = composeButton(Button, 'white');

export { Button, ButtonLink };
