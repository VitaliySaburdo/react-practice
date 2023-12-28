type ContactsFilterProps = {
  handleOnInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ContactsFilter: React.FC<ContactsFilterProps> = ({handleOnInput}) => {
  return (
    <>
      <input type="text" name="filter" onChange={handleOnInput} />
    </>
  );
};
