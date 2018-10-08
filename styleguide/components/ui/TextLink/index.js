import TextLink from './TextLink';

const composeDesignatedTextLink = (isBig, isFaded, isRed, isUnderlineOnHover, underline) => {
  return TextLink.extend(
    {
      props: {
        isBig: {
          default: isBig,
        },
        isFaded: {
          default: isFaded,
        },
        isRed: {
          default: isRed,
        },
        isUnderlineOnHover: {
          default: isUnderlineOnHover,
        },
        underline: {
          default: underline,
        },
      },
    },
  );
};

const composeMainNavLink = () => {
  const TextLinkWithDefaultProps = composeDesignatedTextLink(false, false, false, true);
  return TextLinkWithDefaultProps.extend({
    computed: {
      computedUnderline: function(){
        return this.isActive ? 'default' : null;
      },
    },
    props: {
      isActive: {
        type: Boolean,
        default: false,
      },
    },
  });
};

export const SpotlightCSLink = composeDesignatedTextLink(true, false, false, true, 'cs');
export const SpotlightAfLink = composeDesignatedTextLink(true, false, false, true, 'af');
export const GlobalNavLink = composeDesignatedTextLink(false, true, false, false);
export const GlobalNavAuthLink = composeDesignatedTextLink(false, false, true, false);
export const MainNavLink = composeMainNavLink();

export default TextLink;
