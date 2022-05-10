import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';
import changePage from '../functions/changePage';
import { setItem } from '../utils/storage';

class DropList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.renderPreview = this.renderPreview.bind(this);
    this.handlerMissClick = this.handlerMissClick.bind(this);

    this.parent = React.createRef();
  }

  renderPreview(item) {
    switch (item.preview.type) {
      case 'image':
        return (
          <div className="dropList__itemImage">
            <img
              src={require(`../img/${item.preview.url}`).default}
              alt=""
              className="dropList__itemImageItem"
            />
          </div>
        );
      case 'icon':
        return (
          <i className="dropList__itemImage">
            <Icon name={item.preview.url} />
          </i>
        );
      default:
        return null;
    }
  }

  handlerMissClick(e) {
    const { callback, config } = this.props;

    if (e.target !== this.parent.current && !this.parent.current.contains(e.target)) {
      callback(config.key, false);
    }
  }

  componentDidMount() {
    setTimeout(() => {
      document.addEventListener('click', this.handlerMissClick);
    }, 0);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handlerMissClick);
  }

  render() {
    const { config, handler } = this.props;
    const { items, key: name, withSearch } = config;
    console.log('config', config);
    return (
      <div
        ref={this.parent}
        className={`dropList _${name} ${withSearch === true ? '_withSearch' : ''}`}>
        {withSearch === true && (
          <div className="dropList__head">
            <div className="dropList__search">
              <i className="dropList__searchIcon">
                <Icon name="search" />
              </i>
              <input type="text" className="dropList__searchInput" placeholder="Пошук" />
            </div>
          </div>
        )}
        <div className="dropList__items">
          {items?.map((item, key) => (
            <div
              className={`dropList__item`}
              key={key}
              onClick={() => {
                if (typeof handler === 'function') {
                  handler({ key: name, value: item.key, handler: item.handler });
                }
                changePage(item?.preview?.link);
                if (config.key === 'games') setItem('game', item.key);
              }}>
              {item.preview && this.renderPreview(item)}
              <div className="dropList__itemInfo">
                <p className="dropList__itemName">{item.name}</p>
                {item.description && (
                  <div
                    className="dropList__itemDescription"
                    dangerouslySetInnerHTML={{ __html: item.description }}></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(DropList);

DropList.propTypes = {
  config: PropTypes.object,
  callback: PropTypes.func,
  handler: PropTypes.func,
};
