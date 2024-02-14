import React, { useState } from 'react';
import { FeedbackOptions } from '../feedback_options/feedback_options'; // feedback_options.jsx
import { Notification } from '../notification/notification'; // notification.jsx
import { Section } from '../section/section'; // section.jsx
import { Statistics } from '../statistics/statistics'; // statistics.jsx

import css from './feedback.module.css';

const fbOptions = ['good', 'neutral', 'bad'];

export default function Feedback() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = stateName => {
    setState(prevState => ({
      ...prevState,
      [stateName]: prevState[stateName] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const totalArr = Object.values(state);
    const total = totalArr.reduce((acc, val) => acc + val, 0);
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const goodFeed = state.good;
    if (!goodFeed) return 0;
    const percent = Math.round((goodFeed * 100) / total);
    return percent;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <ul className={css.btn_wrap}>
          <FeedbackOptions
            options={fbOptions}
            onLeaveFeedback={onLeaveFeedback}
          />
        </ul>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            percent={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
