import PropTypes from 'prop-types';
import { Text } from 'components/Statistics/Statistics.styled'

export const Statistics = ({good, neutral, bad, total, positiveFeedback}) => {
    return <div>
        <Text>Good: {good}</Text>
        <Text>Neutral: {neutral}</Text>
        <Text>Bad: {bad}</Text>
        <Text>Total: {total}</Text>
        <Text>Positive Feedback: {positiveFeedback} %</Text>
    </div>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
}