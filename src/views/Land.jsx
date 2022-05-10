import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './land/Header.jsx';
import About from './land/About.jsx';
import Instructions from './land/Instructions.jsx';
import Promo from './land/Promo.jsx';
import Players from './land/Players.jsx';
import Info from './land/Info.jsx';
import Teams from './land/Teams.jsx';
import App from './land/App.jsx';
import Footer from './land/Footer.jsx';

class Land extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.animateSections = this.animateSections.bind(this);

    this.parent = React.createRef();
  }

  animateSections() {
    this.parent.current.querySelectorAll('.land__section').forEach((section) => {
      const offsetTop = section.getBoundingClientRect().y + window.pageYOffset;

      if (window.pageYOffset + document.documentElement.clientHeight / 3 > offsetTop) {
        section.classList.add('_anim');
      }

      // console.log(offsetTop);
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.animateSections);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.animateSections);
  }

  render() {
    return (
      <div ref={this.parent} className="land">
        <div className="land__section _anim">
          <Header />
        </div>
        <div className="land__section">
          <About />
        </div>
        <div className="land__section">
          <Instructions />
        </div>
        <div className="land__section">
          <Promo />
        </div>
        <div className="land__section">
          <Players />
        </div>
        <div className="land__section">
          <Info />
        </div>
        <div className="land__section">
          <Teams />
        </div>
        <div className="land__section">
          <App />
        </div>
        <div className="land__section _anim">
          <Footer />
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Land);

Land.propTypes = {
  levels: PropTypes.array,
};
