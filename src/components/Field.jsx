import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = props.handleChange;
    this.state = {
      showPassword: false,
    };
  }

  handlerStatePassword() {
    this.setState((state) => {
      const newState = { ...state };

      newState.showPassword = !newState.showPassword;

      return newState;
    });
  }

  render() {
    const { showPassword } = this.state;
    const { model, value } = this.props;

    return (
      <div className="field">
        <div className="field__box">
          <input
            type={(showPassword === false && model.type) || 'text'}
            className="field__input"
            placeholder={model.placeholder}
            value={value}
            name={model.name}
            onChange={this.handleChange}
          />
          {model.type === 'password' && (
            <i
              className="field__icon"
              onClick={() => {
                this.handlerStatePassword();
              }}>
              <Icon name={`password-${showPassword === true ? 'show' : 'hide'}`} />
            </i>
          )}
        </div>
        {model.withForget === true && (
          <p className="field__forget">
            <a href="#" className="field__forgetLink"></a>
          </p>
        )}
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Field);

Field.propTypes = {
  model: PropTypes.object,
  handleChange: PropTypes.func,
  value: PropTypes.string,
};
