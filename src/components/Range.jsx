import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RangeSlider from '../functions/range';

class Range extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.parent = React.createRef();
  }

  componentDidMount() {
    this.range = new RangeSlider({
      range: this.parent.current,
      progress: this.parent.current.querySelector(`.range__progress`),
      points: {
        left: this.parent.current.querySelector(`.range__point[data-type="start"]`),
        right: this.parent.current.querySelector(`.range__point[data-type="end"]`),
      },
      values: {
        left: 0,
        right: 80,
        current: {
          left: 10,
          right: 60,
        },
        // selector: '.range__pointValue',
        support: ' л',
      },
    });
  }

  render() {
    return (
      <div ref={this.parent} className="range">
        <div className="range__back"></div>
        <div className="range__progress"></div>
        <div className="range__point _start" data-type="start"></div>
        <div className="range__point _end" data-type="end"></div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Range);

Range.propTypes = {
  content: PropTypes.string,
};
