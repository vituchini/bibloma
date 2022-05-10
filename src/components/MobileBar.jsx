import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

class MobileBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handlerSideBar } = this.props;

    return (
      <div className="mobileBar">
        <div
          className="mobileBar__icon"
          onClick={() => {
            handlerSideBar();
          }}>
          <Icon name="menu" />
        </div>
        <div className="mobileBar__button">
          <i className="mobileBar__buttonIcon">
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

export default connect(mapStateToProps)(MobileBar);

MobileBar.propTypes = {
  handlerSideBar: PropTypes.func,
};
