import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

class AlertMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="alertMobile">
        <img src={require('../img/logo-icon.svg').default} alt="" className="alertMobile__logo" />
        <p className="alertMobile__description">
          Данная страница недоступна с&nbsp;мобильного устройства
        </p>
        <div className="alertMobile__button">
          <i className="alertMobile__buttonIcon">
            <Icon name="download" />
          </i>
          Скачать приложение
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(AlertMobile);

AlertMobile.propTypes = {
  content: PropTypes.string,
};
