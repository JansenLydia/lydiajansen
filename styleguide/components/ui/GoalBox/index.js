import GoalBox from './GoalBox';

const composeTheme = (theme) => {
  return GoalBox.extend({
    props: {
      theme: {
        default: theme,
      },
    },
  });
};

export const GoalBoxAdvice = composeTheme('theme-cs');
export const GoalBoxInspiration = composeTheme('theme-af');
export const GoalBoxActivity = composeTheme('theme-ocher');

export default GoalBox;


