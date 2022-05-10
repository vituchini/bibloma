import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

class Calibration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calibration">
        <i className="calibration__icon">
          <Icon name="alert" />
        </i>
        <p className="calibration__description">До принудительной калибровки осталось 26 дней</p>
        <div className="calibration__button">Перейти к калибровке</div>
        <i className="calibration__close">
          <Icon name="close" />
        </i>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Calibration);

Calibration.propTypes = {
  content: PropTypes.string,
};
