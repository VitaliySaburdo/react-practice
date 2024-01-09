interface SearchMovieProps {
  value: string;
  onChange: (name: string) => void;
}

export const SearchMovie: React.FC<SearchMovieProps> = ({
  value,
  onChange,
}) => {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};
