import React, { Component } from 'react';
import Burger from '../../components/Burger/Burguer';

class BurgerBuilder extends Component {
  render() {
    return (
      <>
        <Burger></Burger>
        <div>build Controls</div>
      </>
    );
  }
}

export default BurgerBuilder;
