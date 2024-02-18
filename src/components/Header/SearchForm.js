import React, { useEffect } from "react";
import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSearch = () => {
    onSearch(input);
  };
  // };

  return (
    <form className="container d-flex flex-row justify-content-center align-items-center">
      <input type="text" name="input" value={input} onChange={handleChange} />
      <button className="btn btn-outline-primary" onClick={handleSearch}>
        {" "}
        search
      </button>
    </form>
  );
};

export default SearchForm;
