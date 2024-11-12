import React, { useState } from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

function SearchInput(props: Props) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: any) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="search_input">
      <div className="parent">
        <input type="text" onChange={handleChange} />
        <button></button>
      </div>
      {inputValue.length > 0 && (
        <ul>
          <li>
            <a href="">검색내용 입니다.</a>
          </li>
          <li>
            <a href="">검색내용 입니다.</a>
          </li>
          <li>
            <a href="">검색내용 입니다.</a>
          </li>
          <li>
            <a href="">검색내용 입니다.</a>
          </li>
          <li>
            <a href="">검색내용 입니다.</a>
          </li>
          <li>
            <a href="">검색내용 입니다.</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default SearchInput;
