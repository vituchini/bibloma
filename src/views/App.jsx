import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Auth from './Auth.jsx';
import TopBar from './TopBar.jsx';
import Cabinet from './Cabinet.jsx';
import SideBar from './SideBar.jsx';
import Matches from './Matches.jsx';
import MiddleWareApp from './MiddleWareApp.jsx';
import Info from './Info.jsx';
import Index from './Index.jsx';
import Teams from './Teams.jsx';
import Friends from './Friends.jsx';
import Land from './Land.jsx';
import Tournaments from './Tournaments.jsx';
import MobileBar from '../components/MobileBar.jsx';
import AlertMobile from '../components/AlertMobile.jsx';
import { isUserAuth } from '../utils/authRedirect.js';
import { userInfo } from '../redux/redux';
import { userDataConfig } from '../utils/userDataConfig';
import { getItem, setItem } from '../utils/storage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowSideBar: false,
    };

    this.getCondInCabinet = this.getCondInCabinet.bind(this);
    this.getCondShowChat = this.getCondShowChat.bind(this);
    this.getCondShowChatSupport = this.getCondShowChatSupport.bind(this);
    this.handlerSideBar = this.handlerSideBar.bind(this);
  }

  notAuthPages = [
    {
      hrefs: ['auth'],
      key: 'auth',
      render() {
        return (
          <div className="body__section">
            <Auth />
          </div>
        );
      },
    },
    {
      hrefs: ['', undefined],
      key: 'land',
      render() {
        return (
          <div className="body__section">
            <Land />
          </div>
        );
      },
    },
  ];

  pages = [
    {
      hrefs: ['cabinet'],
      key: 'cabinet',
      inCabinet: true,
      onlyDesktop: true,
      render() {
        return (
          <div className="body__section">
            <Cabinet />
          </div>
        );
      },
    },
    {
      hrefs: ['matches'],
      key: 'matches',
      inCabinet: true,
      onlyDesktop: true,
      render() {
        return (
          <div className="body__section">
            <Matches />
          </div>
        );
      },
    },
    {
      hrefs: ['info'],
      key: 'info',
      inCabinet: true,
      render() {
        return (
          <div className="body__section">
            <Info />
          </div>
        );
      },
    },
    {
      hrefs: ['index'],
      key: 'index',
      inCabinet: true,
      render() {
        return (
          <div className="body__section">
            <Index />
          </div>
        );
      },
    },
    {
      hrefs: ['teams'],
      key: 'teams',
      inCabinet: true,
      onlyDesktop: true,
      render() {
        return (
          <div className="body__section">
            <Teams />
          </div>
        );
      },
    },
    {
      hrefs: ['tournaments'],
      key: 'tournaments',
      inCabinet: true,
      onlyDesktop: true,
      render() {
        return (
          <div className="body__section">
            <Tournaments />
          </div>
        );
      },
    },
    {
      hrefs: ['friends'],
      key: 'friends',
      inCabinet: true,
      onlyDesktop: true,
      render() {
        return (
          <div className='body__section'>
            <Friends />
          </div>
        );
      },
    },
  ];

  getCondInCabinet() {
    const { levels } = this.props;
    const pages = isUserAuth() ? this.pages : this.notAuthPages;
    const currentPage =
      pages.find((page) => page.hrefs.indexOf(levels[0]) !== -1) ||
      (isUserAuth() ? pages.find((page) => page.hrefs.indexOf('index') !== -1) : pages.find((page) => page.hrefs.indexOf('') !== -1));
    return currentPage.inCabinet === true;
  }

  getCondShowChat() {
    const { levels } = this.props;
    let cond = false;

    cond =
      cond ||
      (levels[0] === 'matches' && levels[1] === 'game') ||
      (levels[0] === 'teams' && levels[1] === 'team');

    return cond;
  }

  getCondShowChatSupport() {
    const { levels } = this.props;
    let cond = false;

    cond = cond || (levels[0] === 'info' && [undefined, '', 'about'].indexOf(levels[1]) !== -1);

    return cond;
  }

  handlerSideBar(isShow = !this.state.isShowSideBar) {
    this.setState((state) => {
      const newState = { ...state };

      newState.isShowSideBar = isShow;

      return newState;
    });
  }

  componentDidMount() {
    if (!getItem('game')) {
      setItem('game', 'cs');
    }
    this.props.userInfo(userDataConfig);
    document.addEventListener('changePage', () => {
      this.handlerSideBar(false);
    });
  }

  render() {
    const { isShowSideBar } = this.state;
    const { levels, isShowCalibration } = this.props;
    const pages = isUserAuth() ? this.pages : this.notAuthPages;
    const currentPage =
      pages.find((page) => page.hrefs.indexOf(levels[0]) !== -1) ||
      (isUserAuth()?pages.find((page) => page.hrefs.indexOf('index') !== -1):pages.find((page) => page.hrefs.indexOf('') !== -1));

    return (
      <div
        className={`body__inner ${currentPage.inCabinet === true ? '_cabinet' : ''} ${
          isShowCalibration === true ? '_withCalibration' : ''
        } ${this.getCondShowChat() === true ? '_withChat' : ''} _${currentPage.key}`}>
        {currentPage.key !== 'land' && (
          <>
            <div className="body__topBar">
              <TopBar inCabinet={this.getCondInCabinet()} />
            </div>
            <div className={`body__sideBar ${isShowSideBar === true ? '_show' : ''}`}>
              <SideBar inCabinet={this.getCondInCabinet()} />
            </div>
            <div className={`body__mobileBar ${isShowSideBar === true ? '_show' : ''}`}>
              <MobileBar handlerSideBar={this.handlerSideBar} />
            </div>
          </>
        )}
        <MiddleWareApp
          isShowChat={this.getCondShowChat()}
          isShowChatSupport={this.getCondShowChatSupport()}
        />
        <div className={`body__content`}>
          {currentPage
            ? (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
                navigator.userAgent,
              ) &&
                currentPage.onlyDesktop === true && <AlertMobile />) ||
              currentPage.render.call(this)
            : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    levels: state.levels,
    isShowCalibration: state.isShowCalibration,
  };
}

export default connect(mapStateToProps,{userInfo})(App);

App.propTypes = {
  levels: PropTypes.array,
  isShowCalibration: PropTypes.bool,
};
