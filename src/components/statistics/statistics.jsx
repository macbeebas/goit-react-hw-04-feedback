import css from './statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <ul>
      <li className={css.info}>
        Good:<span className={css.value}>{good}</span>
      </li>
      <li className={css.info}>
        Neutral:<span className={css.value}>{neutral}</span>
      </li>
      <li className={css.info}>
        Bad:<span className={css.value}>{bad}</span>
      </li>
      <li className={css.info}>
        Total:<span className={css.value}>{total}</span>
      </li>
      {percent > 0 ? (
        <li className={css.info}>
          Positive feedback:<span className={css.value}> {percent}% </span>
        </li>
      ) : (
        <li className={css.info}>No positive feedback yet</li>
      )}
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};
