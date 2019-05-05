import React, { Component } from "react";
import PropTypes from "prop-types";

class Hero extends Component {
  render() {
    return (
      <>
        <header className={this.props.hero}>{this.props.children}</header>
      </>
    );
  }
}

Hero.propTypes = {
  hero: PropTypes.string.isRequired
};

Hero.defaultProps = {
  hero: "defaultHero"
};

export default Hero;
