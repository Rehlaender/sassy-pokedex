import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import { Button, Glyphicon } from 'react-bootstrap';

import './SearchPokemon.css';

class SearchPokemon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.returnNameToParent = this.returnNameToParent.bind(this);
  }

  returnNameToParent() {
    const answer = this.state.searchValue;
    this.props.searchPokemon(answer);
    this.setState({searchValue: ''});
    setTimeout(() =>{
      this.props.toggleSearchBar();
    }, 200);
  }

  handleChange(event) {
    this.setState({searchValue: event.target.value});
  }

  componentDidMount(){
    this.nameInput.focus();
  }

  render() {
    return (
      <div className={this.props.showSearch ? "SearchPokemon willShow" : "SearchPokemon"}>
        <input
          ref={(input) => { this.nameInput = input; }}
          onChange={this.handleChange}
          value={this.state.searchValue}
          placeholder="pokemon name or id" type="text" />
        <Button bsStyle="success" onClick={this.returnNameToParent} className="submitButton" bsSize="small">
          <Glyphicon glyph="check"  />
        </Button>
      </div>
    );
  }
}

export default SearchPokemon;
