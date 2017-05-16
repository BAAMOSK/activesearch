import React from 'react';
//This is top level -- this component uses the other ones
import SearchInput from './search-input';
import CharacterList from './character-list';

export default function LiveSearch(props) {
  return (
    <div className='live-search'>
      <SearchInput />
      <CharacterList characters={props.characters} />
    </div>
  );
}