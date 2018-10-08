import { storiesOf } from '@storybook/vue';

import GoalBox, {GoalBoxAdvice, GoalBoxInspiration, GoalBoxActivity} from './index';

storiesOf('components.ui.GoalBox', module)
    .add('GoalboxAdvice', () => ({
        components: { GoalBoxAdvice },
        template: `
            <GoalBoxAdvice href="https://google.com">Advies & Feedback</GoalboxAdvice>
        `,
    }))
    .add('GoalBoxInspiration', () => ({
    components: { GoalBoxInspiration },
    template: `
        <GoalBoxInspiration href="https://google.com">Advies & Feedback</GoalBoxInspiration>
    `,
    }))  
    .add('GoalBoxActivity', () => ({
    components: { GoalBoxActivity },
    template: `
        <GoalBoxActivity href="https://google.com">Advies & Feedback</GGoalBoxActivity>
    `,
}))
