import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../components/Icon.jsx';
import changePage from '../functions/changePage';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  list = [
    {
      key: 'index',
      href: 'index',
      contentLink: 'Главная',
      icon: 'sidebar-index',
    },
    {
      key: 'matches',
      href: 'matches',
      contentLink: 'Матчи',
      icon: 'sidebar-games',
    },
    {
      key: 'tournaments',
      href: 'tournaments',
      contentLink: 'Турниры',
      icon: 'sidebar-tournaments',
    },
    {
      key: 'teams',
      href: 'teams',
      contentLink: 'Команды',
      icon: 'sidebar-teams',
    },
    {
      key: 'friends',
      href: 'friends',
      contentLink: 'Друзья',
      icon: 'sidebar-friends',
    },
  ];

  render() {
    const { levels, inCabinet } = this.props;

    return (
      <div className="sideBar">
        <a href="#" className="sideBar__logo"></a>
        {inCabinet === true && (
          <ul className="sideBar__list">
            {this.list.map((item, key) => (
              <a
                href={item.href || `#`}
                className={`sideBar__item ${levels[0] === item.key ? '_current' : ''}`}
                key={key}
                onClick={(e) => {
                  if (item.href) {
                    e.preventDefault();
                    changePage(item.href);
                  }
                }}>
                <i className="sideBar__itemIcon">
                  <Icon name={item.icon} />
                </i>
                <p className="sideBar__itemDescription">{item.contentLink}</p>
              </a>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    levels: state.levels,
  };
}

export default connect(mapStateToProps)(SideBar);

SideBar.propTypes = {
  levels: PropTypes.array,
  inCabinet: PropTypes.bool,
};
