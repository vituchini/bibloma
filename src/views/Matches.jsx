import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import changePage from '../functions/changePage';

import Index from './matches/Index.jsx';
import MatchesSideBar from '../components/MatchesSideBar.jsx';
import Calibration from './matches/Calibration.jsx';
import Game from './matches/Game.jsx';
import Streams from './matches/Streams.jsx';
import Stream from './matches/Stream.jsx';
import Icon from '../components/Icon.jsx';
import { getStats, userInfo } from '../redux/redux';
import { userDataConfig } from '../utils/userDataConfig';

// import { dispatcher } from '../redux/redux';

class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowSideBar: false,
    };

    this.getCondHideBar = this.getCondHideBar.bind(this);
    this.getCondCalibration = this.getCondCalibration.bind(this);
    this.handlerBar = this.handlerBar.bind(this);
    this.hideSideBar = this.hideSideBar.bind(this);
  }


  componentDidMount(){
    this.props.userInfo(userDataConfig);
  }

  head = ['index', 'streams', 'complete'];

  pages = [
    {
      hrefs: ['', undefined],
      key: 'index',
      contentLink: 'ОТКРЫТЫЕ МАТЧИ',
      render() {
        return <Index />;
      },
    },
    {
      hrefs: ['streams'],
      key: 'streams',
      contentLink: 'ТРАНСЛЯЦИИ',
      render() {
        return <Streams />;
      },
    },
    {
      hrefs: ['complete'],
      key: 'complete',
      contentLink: 'ЗАВЕРШЁННЫЕ',
      render() {
        return <Index />;
      },
    },
    {
      hrefs: ['calibration'],
      key: 'calibration',
      render() {
        return <Calibration />;
      },
    },
    {
      hrefs: ['game'],
      key: 'game',
      render() {
        return <Game />;
      },
    },
    {
      hrefs: ['stream'],
      key: 'stream',
      render() {
        return <Stream />;
      },
    },
  ];

  backs = {
    cs: 'cs-back.jpg',
    dota: 'dota-back.jpg',
  };

  getCondHideBar() {
    const { levels } = this.props;

    return ['calibration', 'game', 'stream'].indexOf(levels[1]) !== -1;
  }

  getCondCalibration() {
    const { levels } = this.props;

    return levels[1] === 'calibration';
  }

  handlerBar(isShow = !this.state.isShowSideBar) {
    this.setState((state) => {
      const newState = { ...state };

      newState.isShowSideBar = isShow;

      return newState;
    });
  }

  hideSideBar(){
    this.setState((state) => {
      const newState = { ...state };
      newState.isShowSideBar = false;
      return newState;
    });
  }

  componentDidMount() {
    this.props.getStats();
    if (this.getCondCalibration() === true) {
      // dispatcher({ type: 'isShowPopupCalibration', data: true });
    }
  }

  render() {
    const stats = [
      {
        counter: this.props.status?.online || '0',
        description: 'игроков онлайн',
      },
      {
        counter: this.props.status?.matches || '0',
        description: 'матчей сыграно',
      },
      {
        counter: this.props.status?.total_bank || '0',
        description: 'суммарный банк',
      },
    ];

    const { isShowSideBar } = this.state;
    const { levels, currentGame } = this.props;
    const currentPage =
      this.pages.find((page) => page.hrefs.indexOf(levels[1]) !== -1) ||
      this.pages.find((page) => page.hrefs.indexOf('') !== -1);

    return (
      <div
        className={`matches ${this.getCondHideBar() === true ? '_fullPage' : ''} _${
          currentPage.key
        } ${isShowSideBar === true ? '_showBar' : ''}`}>
        <img
          src={require(`../img/${this.backs[currentGame]}`).default}
          alt=""
          className="matches__back"
        />
        {this.getCondHideBar() !== true && (
          <div
            className="matches__btnBar"
            onClick={() => {
              this.handlerBar();
            }}>
            <i className="matches__btnBarIcon">
              <Icon name="arrow-prev-short" />
            </i>
          </div>
        )}

        <div className="matches__items">
          {this.getCondHideBar() !== true && (
            <div className="matches__item _sideBar">
              <MatchesSideBar hideSideBar={this.hideSideBar} />
            </div>
          )}
          <div className="matches__item _content">
            {this.getCondHideBar() !== true && (
              <div className="matches__head">
                <div className="matches__headItems">
                  {this.head.map((key) => {
                    const currentPageInner = this.pages.find((page) => page.key === key);

                    return (
                      <div className="matches__headItem" key={key}>
                        <label className="checkbox">
                          <input
                            type="radio"
                            className="checkbox__input"
                            checked={currentPage.key === currentPageInner.key}
                            onChange={() => {
                              changePage(`matches/${currentPageInner.hrefs[0]}`);
                            }}
                          />
                          <div className="checkbox__view">{currentPageInner.contentLink}</div>
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="matches__stat">
                  {stats.map((stat, key) => (
                    <div className="matches__statItem" key={key}>
                      <p className="matches__statItemCounter">{stat.counter}</p>
                      <p className="matches__statItemDescription">{stat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {this.getCondCalibration() === true && (
              <div className="matches__calibration">
                <h4 className="matches__calibrationTitle">Калибровка</h4>
                <p className="matches__calibrationDescription">
                  Сыграйте пять матчей на разных картах чтобы пройти калибровку
                </p>
              </div>
            )}
            <div className="matches__content" key={currentGame}>
              {currentPage.render.call(this)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    levels: state.levels,
    currentGame: state.currentGame,
    status: state.status,
  };
}

export default connect(mapStateToProps, { userInfo, getStats })(Matches);

Matches.propTypes = {
  levels: PropTypes.array,
  currentGame: PropTypes.string,
};
