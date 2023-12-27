import { useState } from "react";
import "./App.css";
import { Statistics } from "./components/Statistics/Statistics";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";

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
    setCount((prevCount) => ({
      ...prevCount,
      [feedback]: prevCount[feedback] + 1,
    }));
    setTotal((prevTotal) => prevTotal + 1);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((count.good / total) * 100) || total;
  };

  const values = Object.keys(count);

  return (
    <>
      <h2>Please leave feedback</h2>
      <FeedbackOptions options={values} onLeaveFeedback={handleOnClick} />
      <Statistics
        good={count.good}
        neutral={count.neutral}
        bad={count.bad}
        total={total}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </>
  );
}

export default App;
