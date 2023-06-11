import PropTypes from 'prop-types';
import css from './Statistics.module.css';


function Statistics({good, neutral, bad, total, positivePercentage }) {
    return (
        <ul className={css.statUl}>
            <li className={css.statLi} >Good:{good}</li>
            <li className={css.statLi} >Neutral:{neutral}</li>
            <li className={css.statLi} >Bad:{bad}</li>
            <li className={css.statLi} >Total: {total}</li>
            <li className={css.statLi} >Positive feedback: {positivePercentage}%</li>
        </ul>
    );
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;