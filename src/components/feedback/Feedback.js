import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

const FeedbackOpt = ({ options, onLeaveFeedback }) => {
  return options.map((option, id) => (
    <button
      className={styles.button}
      key={id}
      data-feedback={option}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
};

FeedbackOpt.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOpt;