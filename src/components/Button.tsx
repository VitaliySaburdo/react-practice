type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  ...props
}) => {
  return (
    <>
      <button className="Button" onClick={onClick} {...props}>
        {children}
      </button>
    </>
  );
};
