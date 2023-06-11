import React from 'react';
import PropTypes from 'prop-types';
import  Section  from '../Section/Section';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
          <div className={css.wrapper}>
        {options.map(type => {
          return (
            <button
              className={css.typeBtn}
              type="button"
              name={type}
              key={type}
              onClick={() => onLeaveFeedback(type)}
            >
              {type}
            </button>
          );
        })}
      </div>
    </Section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions