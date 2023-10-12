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
        formatOptionLabel={(user) => (
          <div className="flex items-center gap-1">
            <img
              alt=""
              src={user.picture}
              className="w-8 h-8 object-cover rounded-full"
            />
            <span className="text-[#222]">{user.label}</span>
          </div>
        )}
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
