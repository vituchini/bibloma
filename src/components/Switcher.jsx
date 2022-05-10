import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Switcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, value, callback } = this.props;

    return (
      <label className="switcher">
        <input
          id={name}
          type="checkbox"
          className="switcher__input"
          checked={value}
          onChange={() => {
            callback({ name, value: !value });
          }}
        />
        <div className="switcher__view">
          <div className="switcher__viewPoint"></div>
        </div>
      </label>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Switcher);

Switcher.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  callback: PropTypes.func,
};
