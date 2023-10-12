import Select from "react-select";

const MultiSelect = ({
  searchResults,
  selectedUsers,
  setselectedUsers,
  handleSearch,
}) => {
  return (
    <div className="mt-4">
      <Select
        options={searchResults}
        onChange={setselectedUsers}
        onKeyDown={(e) => handleSearch(e)}
        placeholder="Search user"
        isMulti
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: "none",
            borderColor: "transparent",
            background: "transparent",
          }),
        }}
      />
    </div>
  );
};

export default MultiSelect;
