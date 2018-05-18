import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './SearchButton.css';

class SearchButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSearching: false
    }

    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState({isSearching: !this.state.isSearching});
    this.props.showSearch();
  }

  returnNameToParent() {
    this.props.printName(this.state.isSearching);
  }

  render() {
    let icon = this.state.isSearching ? (
      <Glyphicon glyph="check" />
    ) : (
      <Glyphicon glyph="search"  />
    );
    return (
      <Button onClick={this.toggleState} className="SearchButton" bsSize="large">
      {icon}
      </Button>
    );
  }
}

export default SearchButton;
