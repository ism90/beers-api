import React from "react";
import "./Navbar.scss";
import SearchBox from "../SearchBox/SearchBox";

const Navbar = (props) => {
  
  const {handleInputSearch, inputSearch} = props;
  return (
    <>
    <section className= "title">
        <h1>Brewdog</h1>
      </section>
      <section className="abv-filter">


      </section>
      <div className="navbar">
      <SearchBox handleInputText={handleInputSearch} inputText={inputSearch} />
      </div>
   
    </>
  );
};

export default Navbar;
