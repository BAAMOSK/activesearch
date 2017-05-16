import React from 'react';
//This is top level -- this component uses the other ones
import SearchInput from './search-input';
import CharacterList from './character-list';

//This should set state and then render
export default class LiveSearch extends React.Component {
  constructor(props) {
    super(props);
    //STATE
    //set the state to nothing -- empty string
    this.state = {
      searchTerm: ''
    }
  }

  //RENDER
  render() {
    //need to use the filter function to get specific chars
    const characters = this.props.characters.filter(character =>
      //make it case insensitive
      character.name.toLowerCase().includes(
        this.state.searchTerm.toLowerCase()
      )
    );
    return (
      <div className='live-search'>
        <SearchInput />
        <CharacterList characters={characters} />
      </div>
    );
  }//end of render function
}//end of class