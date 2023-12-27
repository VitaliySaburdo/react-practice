import { useState } from "react";
import "./App.css";
import { Statistics } from "./components/Statistics/Statistics";

type Count = {
  good: number;
  neutral: number;
  bad: number;
};

function App() {
  const [count, setSetCount] = useState<Count>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [total, setTotal] = useState(0);

  const handleOnClick = (type: keyof Count) => {
    setSetCount((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));

    setTotal((prevTotal) => prevTotal + 1);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((count.good / total) * 100) || total;
  };

  return (
    <>
      <h2>Please leave feedback</h2>
      <ul style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <li>
          <button type="button" onClick={() => handleOnClick("good")}>
            Good
          </button>
        </li>
        <li>
          <button type="button" onClick={() => handleOnClick("neutral")}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={() => handleOnClick("bad")}>
            Bad
          </button>
        </li>
      </ul>
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
