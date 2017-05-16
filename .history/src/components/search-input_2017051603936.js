import React from 'react';

//Make sure that class is exported
export default function SearchInput(props) {
  return (
    <input type="search" name="Search" placeholder='Dale Cooper'
      onChange={e => props.onChange(e.target.value)} />
  );
}