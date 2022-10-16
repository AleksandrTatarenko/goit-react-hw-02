import PropTypes from 'prop-types';
import { List, Item, Button } from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options}) => {
    return <List>
        {options.map(option => {
            return (<Item key={options.indexOf(option)}>
                <Button onClick={onLeaveFeedback}>{option}</Button>
            </Item>)
        })}
    </List>;
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
}