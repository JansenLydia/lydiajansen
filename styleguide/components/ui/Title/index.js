import Title from './Title';

const composeDesignatedTitle = (level, color = 'default', type = 'default') => {
  return Title.extend({
    props: {
      level: {
        default: level,
      },
      color: {
        default: color,
      },
      type: {
        default: type,
      },
    }
  });
};

export const HeroTitle = composeDesignatedTitle(1, 'negative', 'default');
export const SubTitle = composeDesignatedTitle(2);
export const SpotlightTitle = composeDesignatedTitle(2, 'negative', 'alternative');
export const TextTitle = composeDesignatedTitle(2, 'default', 'alternative');
export const FooterTitle = composeDesignatedTitle(3, 'negative');
export const PanelTitle = composeDesignatedTitle(4);

export default Title;
