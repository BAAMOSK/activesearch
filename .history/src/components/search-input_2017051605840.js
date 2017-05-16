import React from 'react';

//Make sure that class is exported
//Need to make sure that each new value is rendered
export default function SearchInput(props) {
  return (
    <input type="search" name="Search" placeholder='Enter a name'
      onChange={e => props.onChange(e.target.value)} />
  );
}