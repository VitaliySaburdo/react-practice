import { useState } from "react";
import "./App.css";

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
      <h3>Statistic</h3>
      <p>
        Good <span>{count.good}</span>
      </p>
      <p>
        Neutral <span>{count.neutral}</span>
      </p>
      <p>
        Bad <span>{count.bad}</span>
      </p>
      <p>
        Total <span>{total}</span>
      </p>
      <p>
        Positive feedback: <span>{countPositiveFeedbackPercentage()}</span>
      </p>
    </>
  );
}

export default App;
