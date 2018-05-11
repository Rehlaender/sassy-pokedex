import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PokemonImageClicker.css';

class PokemonImageClicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeImage: 'front_default',
      pastImage: 'front_default',
      gender: 'male'
    };

    this.toggleActiveImage = this.toggleActiveImage.bind(this);
    this.returnFirstWordOfImage = this.returnFirstWordOfImage.bind(this);
  }

  returnFirstWordOfImage(actualImage) {
    const imageState = actualImage.substring(0, actualImage.indexOf('_'));
    return imageState === 'front' ? 'back' : 'front';
  }

  toggleActiveImage() {
    const activeImage = this.state.activeImage;
    this.setState({pastImage: activeImage});
    const willToggle = this.returnFirstWordOfImage(activeImage);
    console.log(this.returnFirstWordOfImage(activeImage));
    switch (this.state.gender) {
      case 'male':
        this.setState({activeImage: `${willToggle}_default` })
        break;
      case 'female':
        this.setState({activeImage: `${willToggle}_female` })
        break;
      default:
    }
  }

  componentWillMount() {
    this.setState({pastImage: this.state.activeImage});
  }
  render() {
    let activeImage = this.state.activeImage;
    let pastImage = this.state.pastImage;

    return (
      <div className="flip-container">
        <div className="flipper">
          <img className="front" onClick={this.toggleActiveImage} src={this.props.sprites[pastImage]} />
          <img className="back" onClick={this.toggleActiveImage} src={this.props.sprites[activeImage]} />
        </div>
      </div>

    );
  }
}

export default PokemonImageClicker;

PokemonImageClicker.propTypes = {
  sprites: PropTypes.object,
  gender: PropTypes.string
};

PokemonImageClicker.defaultProps = {
  sprites: {
    "back_female": "https://pokeapi.co/media/sprites/pokemon/back/female/12.png",
    "back_shiny_female": "https://pokeapi.co/media/sprites/pokemon/back/shiny/female/12.png",
    "back_default": "https://pokeapi.co/media/sprites/pokemon/back/12.png",
    "front_female": "https://pokeapi.co/media/sprites/pokemon/female/12.png",
    "front_shiny_female": "https://pokeapi.co/media/sprites/pokemon/shiny/female/12.png",
    "back_shiny": "https://pokeapi.co/media/sprites/pokemon/back/shiny/12.png",
    "front_default": "https://pokeapi.co/media/sprites/pokemon/12.png",
    "front_shiny": "https://pokeapi.co/media/sprites/pokemon/shiny/12.png"
  },
  gender: 'male'
};
