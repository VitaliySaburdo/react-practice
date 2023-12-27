type FeedbackOptionsProps = {
  onLeaveFeedback: (feedback: string) => void;
  options: string[];
};

export const FeedbackOptions: React.FC<FeedbackOptionsProps> = ({
  onLeaveFeedback,
  options,
}) => {
  return (
    <>
      {" "}
      <ul style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {options.map((option) => (
          <li key={option}>
            <button
              type="button"
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
