type StaticsProps = {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
};

export const Statistics: React.FC<StaticsProps> = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {" "}
      <h3>Statistic</h3>
      <p>
        Good <span>{good}</span>
      </p>
      <p>
        Neutral <span>{neutral}</span>
      </p>
      <p>
        Bad <span>{bad}</span>
      </p>
      <p>
        Total <span>{total}</span>
      </p>
      <p>
        Positive feedback: <span>{positivePercentage}</span>
      </p>
    </>
  );
};
