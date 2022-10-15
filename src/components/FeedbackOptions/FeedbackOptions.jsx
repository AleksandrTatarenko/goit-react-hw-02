import PropTypes from 'prop-types';
import { List, Item, Button } from 'components/FeedbackOotions/FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options}) => {
    return <List>
        <Item><Button onClick={onLeaveFeedback}>{options[0]}</Button></Item>
        <Item><Button onClick={onLeaveFeedback}>{options[1]}</Button></Item>
        <Item><Button onClick={onLeaveFeedback}>{options[2]}</Button></Item>
    </List>;
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
}