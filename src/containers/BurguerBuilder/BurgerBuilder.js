import React, { Component } from 'react';
import Burger from '../../components/Burger/Burguer';

import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger></Burger>
        <div>build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
