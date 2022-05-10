import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };

    this.renderView = this.renderView.bind(this);
    this.renderDropItem = this.renderDropItem.bind(this);
    this.handlerShow = this.handlerShow.bind(this);
    this.handlerMissClick = this.handlerMissClick.bind(this);

    this.parent = React.createRef();
  }

  handlerShow(isShow = !this.state.isShow) {
    this.setState((state) => {
      const newState = { ...state };

      newState.isShow = isShow;

      return newState;
    });
  }

  renderView() {
    const { config } = this.props;
    const { type, value, drop } = config;
    const current = drop.find((item) => item.value === value);

    switch (type) {
      case 'regions':
        return (
          <>
            <img src={require(`../img/${current.icon}`).default} alt="" className="select__lang" />
            {current.content}
          </>
        );
      default:
        return current.content;
    }
  }

  renderDropItem(item, key) {
    const { config } = this.props;
    const { type, value } = config;
    let inner;

    switch (type) {
      case 'regions':
        inner = (
          <>
            <img src={require(`../img/${item.icon}`).default} alt="" className="select__lang" />
            {item.content}
          </>
        );
        break;
      default:
        inner = item.content;
        break;
    }

    return (
      <div className="select__dropItem" key={key}>
        {inner}
        {value === item.value && (
          <i className="select__dropDone">
            <Icon name="done" />
          </i>
        )}
      </div>
    );
  }

  handlerMissClick(e) {
    const { isShow } = this.state;

    if (
      isShow === true &&
      e.target !== this.parent.current &&
      !this.parent.current.contains(e.target)
    ) {
      this.handlerShow(false);
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handlerMissClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handlerMissClick);
  }

  render() {
    const { isShow } = this.state;
    const { config } = this.props;
    const { isSearch } = config;

    return (
      <div ref={this.parent} className={`select ${isShow === true ? '_show' : ''}`}>
        <div
          className="select__view"
          onClick={() => {
            this.handlerShow();
          }}>
          {this.renderView()}
        </div>

        {isShow === true && (
          <div className="select__drop">
            {isSearch === true && (
              <div className="select__dropSearch">
                <i className="select__dropSearchIcon">
                  <Icon name="search" />
                </i>
                <input type="text" className="select__dropSearchInput" placeholder="Пошук" />
              </div>
            )}
            <div className="select__dropItems">
              {config.drop.map((item, key) => this.renderDropItem(item, key))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Select);

Select.propTypes = {
  config: PropTypes.object,
};
