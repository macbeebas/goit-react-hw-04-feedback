import React, { Component } from 'react';

import { FeedbackOptions } from '../feedback_options/feedback_options'; // feedback_options.jsx
import { Notification } from '../notification/notification'; // notification.jsx
import { Section } from '../section/section'; // section.jsx
import { Statistics } from '../statistics/statistics'; // statistics.jsx

import css from './feedback.module.css';

const fbOptions = ['good', 'neutral', 'bad'];

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = stateName => {
    this.setState(prevState => {
      return { [stateName]: prevState[stateName] + 1 };
    });
  };

  countTotalFeedback = () => {
    const totalArr = Object.values(this.state);
    const total = totalArr.reduce((acc, val) => acc + val, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const goodFeed = this.state.good;
    if (!goodFeed) return 0;
    const percent = Math.round((goodFeed * 100) / total);
    return percent;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <ul className={css.btn_wrap}>
            <FeedbackOptions
              options={fbOptions}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </ul>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percent={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
