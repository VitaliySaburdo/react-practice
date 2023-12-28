import { useState } from "react";
import "./App.css";
import { Statistics } from "./components/Statistics/Statistics";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Notification } from "./components/Notification/Notification";
import { Section } from "./components/Section/Section";

type Count = {
  good: number;
  neutral: number;
  bad: number;
};

function App() {
  const [count, setCount] = useState<Count>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [total, setTotal] = useState(0);

  const handleOnClick = (feedback: string) => {
    setCount((prevCount: Count) => ({
      ...prevCount,
      [feedback as keyof Count]: prevCount[feedback as keyof Count] + 1,
    }));
    setTotal((prevTotal: number) => prevTotal + 1);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((count.good / total) * 100) || 0;
  };

  const values = Object.keys(count);

  return (
    <>
      <Section title={"Please leave feedback"}>
      <FeedbackOptions options={values} onLeaveFeedback={handleOnClick} />
      </Section>
      <Section>
      {total ? (
        <Statistics
          good={count.good}
          neutral={count.neutral}
          bad={count.bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
      </Section>
    </>
  );
}

export default App;
