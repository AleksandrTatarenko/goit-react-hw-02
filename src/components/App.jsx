import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from './Notification/Notification';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    isOpen: false,
  };

  onLeaveFeedback = (name) => {
    this.setState((prevState) => {
      return {
        [name.target.textContent]: prevState[name.target.textContent] + 1,
      }
    }, this.addStatisctic)
  };

  countTotalFeedback = () => {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    return (good + neutral + bad);
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    if (this.countTotalFeedback() > 0) {
      return (Math.round(good / this.countTotalFeedback() * 100));
    }
  }

  addStatisctic = () => {
    this.setState({
      isOpen: true,
    })
  }

  render() {
    const { isOpen } = this.state;
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (<>
      <Section title={'Please leave feedback'}
        children={<FeedbackOptions
          onLeaveFeedback={this.onLeaveFeedback}
          options={Object.keys(this.state)}
        />}
      />
      
      <Section title={'Statistics'}
        children={isOpen?<Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positiveFeedback={this.countPositiveFeedbackPercentage()?this.countPositiveFeedbackPercentage():0}
         />:<Notification message={'No feedback given'}/>}
      />
    </>)
    } 
};
