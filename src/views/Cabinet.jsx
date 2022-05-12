import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import changePage from '../functions/changePage';

import Icon from '../components/Icon.jsx';
import Stat from './cabinet/Stat.jsx';
import History from './cabinet/History.jsx';
import Personal from './cabinet/Personal.jsx';
import Wallet from './cabinet/Wallet.jsx';
import Settings from './cabinet/Settings.jsx';
import Blacklist from './cabinet/Blacklist.jsx';
import { userInfo } from '../redux/redux';
import { userDataConfig } from '../utils/userDataConfig';
import Preloader from '../components/Preloader';

class Cabinet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  async componentDidMount() {
    await this.props.userInfo(userDataConfig);
    this.setState({
      isLoaded: true,
    });
  }

  pages = [
    {
      hrefs: ['stat', '', undefined],
      key: 'stat',
      contentLink: 'Статистика',
      icon: 'cabinet-list-stat',
      render() {
        return <Stat />;
      },
    },
    {
      hrefs: ['history'],
      key: 'history',
      contentLink: 'Історія матчів',
      icon: 'cabinet-list-history',
      render() {
        return <History />;
      },
    },
    {
      hrefs: ['personal'],
      key: 'personal',
      contentLink: 'Особисті дані',
      icon: 'cabinet-list-personal',
      render() {
        return <Personal />;
      },
    },
    {
      hrefs: ['wallet'],
      key: 'wallet',
      contentLink: 'Гаманець',
      icon: 'cabinet-list-wallet',
      render() {
        return <Wallet />;
      },
    },
    {
      hrefs: ['settings'],
      key: 'settings',
      contentLink: 'Параметри',
      icon: 'cabinet-list-settings',
      render() {
        return <Settings />;
      },
    },
    {
      hrefs: ['blacklist'],
      key: 'blacklist',
      contentLink: 'Черный список',
      icon: 'cabinet-list-blacklist',
      render() {
        return <Blacklist />;
      },
    },
  ];

  render() {
    const { levels } = this.props;
    const currentPage =
      this.pages.find((page) => page.hrefs.indexOf(levels[1]) !== -1) ||
      this.pages.find((page) => page.hrefs.indexOf('') !== -1);

    if (!this.state.isLoaded) {
      return (
        <div className="cabinet">
          <div className="cabinet__inner">
            <div className="cabinet__items">
              <div className="cabinet__item _nav">
                <ul className="cabinet__list">
                  {this.pages.map((page, key) => (
                    <a
                      href={page.hrefs[0]}
                      className={`cabinet__link ${
                        currentPage.key === page.key ? '_current' : ''
                      } _${page.key}`}
                      key={key}
                      onClick={(e) => {
                        e.preventDefault();
                        changePage(`cabinet/${page.hrefs[0]}`);
                      }}>
                      {page.contentLink}
                      <i className="cabinet__linkIcon">
                        <Icon name={page.icon} />
                      </i>
                    </a>
                  ))}
                </ul>
              </div>
              <div className="cabinet__item _content">{currentPage.render.call(this)}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Preloader />;
    }
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps, { userInfo })(Cabinet);

Cabinet.propTypes = {
  levels: PropTypes.array,
};
