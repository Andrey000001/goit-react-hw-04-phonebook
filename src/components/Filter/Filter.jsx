export const Filter = ({ getNameOrNumber, value }) => {
  const handleKeyDown = ({ target }) => {
    const { value } = target;
    getNameOrNumber(value.toLowerCase().trim());
  };

  return (
    <label>
      Find contacts by name
      <br />
      <input
        name="findName"
        type="text"
        value={value}
        onChange={handleKeyDown}
      />
    </label>
  );
};
