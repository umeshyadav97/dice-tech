import TextField from "@mui/material/TextField";
const SearchInput = ({ handleSearch }) => {
 const handleChange = (e) => {
    const searchQuery = e.target.value;
    handleSearch(searchQuery);
    e.persist();
  };


  return (
    <div>
      <div>
        {/* <img src={SearchIcon} style={{ marginLeft: 10, marginRight: 10 }} alt="search" /> */}
        <TextField
          style={{ margin: "10px 10px 10px auto" }}
          label="Search"
          // value={query}
          onChange={(e) => handleChange(e)}
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default SearchInput;
