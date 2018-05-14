import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CardContainer.css';

class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageIsLoaded: false
    };

    this.returnImageProp = this.returnImageProp.bind(this);
  }

  returnImageProp() {
    return this.props.foundPokemon.sprites.front_default;
  }

  componentDidUpdate(nextProps) {
    if(!this.state.imageIsLoaded) {
      this.setState({imageIsLoaded: true});
    }
  }

  render() {
    return (
      <div className="cardContainer">
        <div className="cardContent">
          <div>{this.props.foundPokemon.id}</div>
          <div>{this.props.foundPokemon.name}</div>
          <img src={
            (this.state.imageIsLoaded) ? this.returnImageProp() : ''
          }
          />
        </div>
      </div>
    );
  }
}

export default CardContainer;
