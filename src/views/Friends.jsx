import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import changePage from '../functions/changePage';
import Index from './friends/Index.jsx';
import All from './friends/All.jsx';
import Orders from './friends/Orders.jsx';
import Search from './friends/Search.jsx';
import User from './friends/User.jsx';
import { userInfo } from '../redux/redux';
import { userDataConfig } from '../utils/userDataConfig';
class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount(){
    this.props.userInfo(userDataConfig);
  }

  links = ['online', 'all', 'orders', 'search'];

  pages = [
    {
      key: 'online',
      hrefs: ['', undefined, 'online'],
      contentLink: 'ОНЛАЙН',
      render() {
        return <Index />;
      },
    },
    {
      key: 'all',
      hrefs: ['all'],
      contentLink: 'ВСЕ',
      render() {
        return <All />;
      },
    },
    {
      key: 'orders',
      hrefs: ['orders'],
      contentLink: 'ЗАЯВКИ',
      render() {
        return <Orders />;
      },
    },
    {
      key: 'search',
      hrefs: ['search'],
      contentLink: 'ПОИСК',
      render() {
        return <Search />;
      },
    },
    {
      key: 'user',
      hrefs: ['user'],
      render() {
        return <User />;
      },
    },
  ];

  render() {
    const { levels } = this.props;
    const currentPage =
      this.pages.find((page) => page.hrefs.indexOf(levels[1]) !== -1) ||
      this.pages.find((page) => page.hrefs.indexOf('') !== -1);

    return (
      <div className="friends">
        <div className="friends__inner">
          {this.links.indexOf(currentPage.key) !== -1 && (
            <div className="friends__links">
              {this.links.map((link, key) => {
                const currentPageInner = this.pages.find((page) => page.key === link, key);

                return (
                  <div className="friends__link" key={key}>
                    <label className="checkbox">
                      <input
                        type="radio"
                        className="checkbox__input"
                        checked={currentPage.key === currentPageInner.key}
                        onChange={() => {
                          changePage(`friends/${currentPageInner.hrefs[0]}`);
                        }}
                      />
                      <div className="checkbox__view">{currentPageInner.contentLink}</div>
                    </label>
                  </div>
                );
              })}
            </div>
          )}
          <div className="friends__content">{currentPage.render.call(this)}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps,{userInfo})(Friends);

Friends.propTypes = {
  levels: PropTypes.array,
};
