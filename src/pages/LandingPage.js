/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

import Header from 'parts/Header';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
      </>
    )
  }
}

export default LandingPage;
