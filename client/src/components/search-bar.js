import React from 'react';

const SearchBar = ({ input: keyword, onChange: setKeyword }) => {
  const BarStyling = {
    width: '20rem',
    background: '#F2F1F9',
    border: 'none',
    padding: '0.5rem',
  };
  return (
    <>
      <p>Serach for item</p>
      <input
        style={BarStyling}
        key='random1'
        value={keyword}
        placeholder={'search garment'}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
