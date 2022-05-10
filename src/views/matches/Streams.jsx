import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import changePage from '../../functions/changePage';

import Icon from '../../components/Icon.jsx';
import GameCard from '../../components/GameCard.jsx';

class MatchesStreams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'block',
    };

    this.handlerView = this.handlerView.bind(this);
  }

  views = [
    {
      key: 'block',
      icon: 'view-block',
    },
    {
      key: 'list',
      icon: 'view-list',
    },
  ];

  games = {
    cs: [
      {
        image: 'cs-map-1.jpg',
        lang: 'ru',
        name: 'PlayFair Display$$$',
        info: {
          map: 'Mirage',
          price: '5000',
          mode: '5x5',
        },
        views: 1024,
        isOnline: true,
      },
      {
        image: 'cs-map-2.jpg',
        lang: 'uk',
        name: 'HEll_YES_FRANCE',
        info: {
          map: 'Inferno',
          price: '5000',
          mode: '5x5',
        },
        views: 1024,
        isOnline: true,
      },
      {
        image: 'cs-map-3.jpg',
        lang: 'ru',
        name: 'LAke__Joinsdh12',
        info: {
          map: 'Lake',
          price: '10000',
          mode: '5x5',
        },
        views: 1024,
        isOnline: true,
      },
      {
        image: 'cs-map-4.jpg',
        lang: 'ru',
        name: 'PlayFair Display$$$',
        info: {
          map: 'Mirage',
          price: '5000',
          mode: '5x5',
        },
        views: 1024,
        isOnline: true,
      },
      {
        image: 'cs-map-5.jpg',
        lang: 'uk',
        name: 'HEll_YES_FRANCE',
        info: {
          map: 'Inferno',
          price: '5000',
          mode: '5x5',
        },
        views: 1024,
        isOnline: true,
      },
      {
        image: 'cs-map-6.jpg',
        lang: 'ru',
        name: 'LAke__Joinsdh12',
        info: {
          map: 'Lake',
          price: '10000',
          mode: '5x5',
        },
        views: 1024,
        isOnline: true,
      },
    ],
    dota: [
      {
        lang: 'ru',
        name: 'PlayFair Display$$$',
        info: {
          lobbi: '1x1',
          price: '5000',
          mode: 'All Pick',
        },
        views: 1024,
        isOnline: true,
      },
      {
        lang: 'uk',
        name: 'HEll_YES_FRANCE',
        info: {
          lobbi: '1x1',
          price: '5000',
          mode: 'Deathmatch',
        },
        views: 1024,
        isOnline: true,
      },
      {
        lang: 'ru',
        name: 'LAke__Joinsdh12',
        info: {
          lobbi: '1x1',
          price: '10000',
          mode: 'Captains Mode',
        },
        views: 1024,
        isOnline: true,
      },
      {
        lang: 'ru',
        name: 'PlayFair Display$$$',
        info: {
          lobbi: '5x5',
          price: '5000',
          mode: 'Deathmatch',
        },
        views: 1024,
        isOnline: true,
      },
      {
        lang: 'uk',
        name: 'HEll_YES_FRANCE',
        info: {
          lobbi: '1x1',
          price: '5000',
          mode: 'All Pick',
        },
        views: 1024,
        isOnline: true,
      },
      {
        lang: 'ru',
        name: 'LAke__Joinsdh12',
        info: {
          lobbi: '5x5',
          price: '10000',
          mode: 'All Pick',
        },
        views: 1024,
        isOnline: true,
      },
    ],
  };

  handlerView(view) {
    this.setState((state) => {
      const newState = { ...state };

      newState.currentView = view;

      return newState;
    });
  }

  render() {
    const { currentView } = this.state;
    const { currentGame } = this.props;

    return (
      <div className={`matches__games _${currentView}`}>
        <div className="matches__gamesHead">
          <div className="matches__gamesHeadItem">
            <p className="matches__gamesHeadName">Открытые лобби</p>
          </div>
          {currentGame === 'cs' && (
            <div className="matches__gamesHeadItem _views">
              <div className="matches__gamesHeadView">
                Отобразить
                {this.views.map((view, key) => (
                  <i
                    className={`matches__gamesHeadIcon ${
                      view.key === currentView ? '_current' : ''
                    }`}
                    key={key}
                    onClick={() => {
                      this.handlerView(view.key);
                    }}>
                    <Icon name={view.icon} />
                  </i>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="matches__gamesCards">
          {this.games[currentGame].map((item, key) => (
            <a
              href={`/matches/stream`}
              className="matches__gamesCard"
              key={key}
              onClick={(e) => {
                e.preventDefault();
                changePage(`matches/stream`);
              }}>
              <GameCard model={item} type={currentView} nameOfGame={currentGame} />
            </a>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentGame: state.currentGame };
}

export default connect(mapStateToProps)(MatchesStreams);

MatchesStreams.propTypes = {
  currentGame: PropTypes.string,
};
