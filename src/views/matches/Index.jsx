import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../../components/Icon.jsx';
import GameCard from '../../components/GameCard.jsx';
import { dispatcher, getLobbies } from '../../redux/redux';
import { setItem } from '../../utils/storage';

class MatchesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'list',
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
          counterUsers: '8/10',
        },
        ping: 23,
      },
      {
        image: 'cs-map-2.jpg',
        lang: 'uk',
        name: 'HEll_YES_FRANCE',
        info: {
          map: 'Inferno',
          price: '5000',
          mode: '5x5',
          counterUsers: '4/10',
        },
        ping: 2,
      },
      {
        image: 'cs-map-3.jpg',
        lang: 'ru',
        name: 'LAke__Joinsdh12',
        info: {
          map: 'Lake',
          price: '10000',
          mode: '5x5',
          counterUsers: '8/10',
        },
        ping: 123,
      },
      {
        image: 'cs-map-4.jpg',
        lang: 'ru',
        name: 'PlayFair Display$$$',
        info: {
          map: 'Mirage',
          price: '5000',
          mode: '5x5',
          counterUsers: '8/10',
        },
        ping: 523,
      },
      {
        image: 'cs-map-5.jpg',
        lang: 'uk',
        name: 'HEll_YES_FRANCE',
        info: {
          map: 'Inferno',
          price: '5000',
          mode: '5x5',
          counterUsers: '4/10',
        },
        ping: 422,
      },
      {
        image: 'cs-map-6.jpg',
        lang: 'ru',
        name: 'LAke__Joinsdh12',
        info: {
          map: 'Lake',
          price: '10000',
          mode: '5x5',
          counterUsers: '8/10',
        },
        ping: 523,
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
          counterUsers: '8/10',
        },
        ping: 23,
      },
      {
        lang: 'uk',
        name: 'HEll_YES_FRANCE',
        info: {
          lobbi: '1x1',
          price: '5000',
          mode: 'Deathmatch',
          counterUsers: '4/10',
        },
        ping: 2,
      },
      {
        lang: 'ru',
        name: 'LAke__Joinsdh12',
        info: {
          lobbi: '1x1',
          price: '10000',
          mode: 'Captains Mode',
          counterUsers: '8/10',
        },
        ping: 123,
      },
      {
        lang: 'ru',
        name: 'PlayFair Display$$$',
        info: {
          lobbi: '5x5',
          price: '5000',
          mode: 'Deathmatch',
          counterUsers: '8/10',
        },
        ping: 523,
      },
      {
        lang: 'uk',
        name: 'HEll_YES_FRANCE',
        info: {
          lobbi: '1x1',
          price: '5000',
          mode: 'All Pick',
          counterUsers: '4/10',
        },
        ping: 422,
      },
      {
        lang: 'ru',
        name: 'LAke__Joinsdh12',
        info: {
          lobbi: '5x5',
          price: '10000',
          mode: 'All Pick',
          counterUsers: '8/10',
        },
        ping: 523,
      },
    ],
  };
  async componentDidMount() {
    console.log('getLobbies', this.props.getLobbies());
  }

  getGames = () => {
    const games = this.props.lobbies;
    console.log('games', games);
    let CSGOGames;
    if (games)
      CSGOGames = games
        .filter((el) => el.game === 'csgo')
        .map((el) => {
          console.log('EL', el);
          return {
            ...el,
            name: el.name ? el.name : `Без назви id:${el.id}`,
            image: `${el.csgo_map}.jpg`,
            lang: 'ru',
            info: {
              map: el.csgo_map,
              price: el.bet_amount,
              mode: el.mode?.replace('csgo.', '').replace('vs', 'x'),
              counterUsers: `${el.count_players}/10`,
            },
          };
        });

    return {
      cs: CSGOGames || [],
      dota: this.games.dota,
    };
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
            <p className="matches__gamesHeadName">Відкриті лоббі</p>
          </div>
          {currentGame === 'cs' && (
            <div className="matches__gamesHeadItem _views">
              <div className="matches__gamesHeadView">
                Відобразити
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
          {this.getGames()[currentGame].map((item, key) => (
            <div
              className="matches__gamesCard"
              key={key}
              onClick={() => {
                dispatcher({ type: 'isShowPopupLoginGame', data: item });
                setItem('currentLobbyId', item.id);
              }}>
              <GameCard model={item} type={currentView} nameOfGame={currentGame} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentGame: state.currentGame,
    lobbies: state.lobbies,
  };
}

export default connect(mapStateToProps, { getLobbies })(MatchesIndex);

MatchesIndex.propTypes = {
  currentGame: PropTypes.string,
};
