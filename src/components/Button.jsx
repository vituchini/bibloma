import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = props.clickFunc;
    this.state = {};
  }

  render() {
    const { content } = this.props;

    return (
      <div className="button" onClick={this.handleClick}>
        <i className="button__back">
          <Icon name="button-back" />
        </i>
        {content}
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Button);

Button.propTypes = {
  content: PropTypes.string,
  clickFunc: PropTypes.func,
};
