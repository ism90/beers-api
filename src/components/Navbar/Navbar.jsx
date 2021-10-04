import React from "react";
import "./Navbar.scss";
import SearchBox from "../SearchBox/SearchBox";

const Navbar = (props) => {
  
  const {handleInputSearch, inputSearch} = props;
  return (
    <>
      <div className="navbar">
      <SearchBox handleInputText={handleInputSearch} inputText={inputSearch} />
      </div>
   
    </>
  );
};

export default Navbar;
