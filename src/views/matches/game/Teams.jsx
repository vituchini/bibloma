import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { message } from 'antd';

import Icon from '../../../components/Icon.jsx';
import { changeTeam, leaveGame, setReady, setUnReady, startGame } from '../../../redux/redux.js';
import changePage from '../../../functions/changePage.js';

const langs = require('../../../info/langs.json');

class MatchesTeams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAllowIn: false,
      gameLink: `steam://connect/80.78.244.35:27015`,
    };
    // this.lobbyInfo = this.getLobbyInfo();
    this.renderCol = this.renderCol.bind(this);
    this.findUserAmoungPlayers = this.findUserAmoungPlayers.bind(this);
    this.isThisUser = this.isThisUser.bind(this);
    this.getPlayerInfo = this.getPlayerInfo.bind(this);
  }

  changeTeamGame(currentTeamId, wantedTeamId) {
    console.log(currentTeamId, wantedTeamId);
    if (currentTeamId === wantedTeamId) {
      message.info({ content: 'Вы уже ввошли за эту команду!', className: 'message' });
    } else {
      this.props.changeTeam(wantedTeamId);
      console.log('Team changed');
    }
  }

  findUserAmoungPlayers(players) {
    return players.find((player) => {
      return player.user_id === this.props.user.id;
    });
  }

  isThisUser(id) {
    return this.props.user.id === id;
  }

  filterTeam(players, teamId) {
    return players.filter((player) => {
      return player.team_id === teamId;
    });
  }

  getTeams(players) {
    const team_A_users = this.filterTeam(players, 1);
    const team_B_users = this.filterTeam(players, 2);
    const teams = [
      {
        name: 'Команда А',
        counter: '-',
        users: this.getPlayerInfo(team_A_users),
      },
      {
        name: 'Команда Б',
        counter: '-',
        users: this.getPlayerInfo(team_B_users),
      },
    ];
    return teams;
  }

  getPlayerInfo(players) {
    return players.map((player) => {
      const avatar = this.isThisUser(player.user_id)
        ? 'user-me-without-avatar.jpg'
        : 'user-without-avatar.jpg';
      return {
        avatar: avatar,
        lang: 'ru',
        name: player.user.name,
        ub: '-',
        sm: '-',
        as: '-',
      };
    });
  }

  getGameInfo(map, price, mode, counterUsers, id) {
    return {
      info: {
        map,
        price: price + ' BS',
        mode,
        counterUsers,
        id,
      },
    };
  }

  getPlayersPlaces(game, mode) {
    const modePrefix = `${game}.`;
    const places = mode.slice(modePrefix.length);
    console.log(places);
    const placesVariants = {
      '1vs1': 1,
      '5vs5': 5,
      '10vs10': 10,
    };
    return placesVariants[`${places}`] || placesVariants['5vs5'];
  }

  teams = [
    {
      name: 'Команда А',
      counter: '1320',
      users: [
        {
          avatar: 'user-without-avatar.jpg',
          lang: 'ru',
          name: 'JohnTrawolta_4',
          ub: '70',
          sm: '35',
          as: '46',
        },
        {
          avatar: 'user-without-avatar.jpg',
          lang: 'ru',
          name: 'JohnTrawolta_4wefwefwefwef',
          ub: '70',
          sm: '35',
          as: '46',
        },
        {
          avatar: 'user-without-avatar.jpg',
          lang: 'ru',
          name: 'JohnTrawolta_4',
          ub: '70',
          sm: '35',
          as: '46',
        },
      ],
    },
    {
      name: 'Команда Б',
      counter: '1256',
      users: [
        {
          avatar: 'user-without-avatar.jpg',
          lang: 'ru',
          name: 'JohnTrawolta_4',
          ub: '70',
          sm: '35',
          as: '46',
        },
        {
          avatar: 'user-without-avatar.jpg',
          lang: 'ru',
          name: 'JohnTrawolta_4',
          ub: '70',
          sm: '35',
          as: '46',
        },
        {
          avatar: 'user-without-avatar.jpg',
          lang: 'ru',
          name: 'JohnTrawolta_4',
          ub: '70',
          sm: '35',
          as: '46',
        },
        {
          avatar: 'user-without-avatar.jpg',
          lang: 'ru',
          name: 'JohnTrawolta_4',
          ub: '70',
          sm: '35',
          as: '46',
        },
      ],
    },
  ];

  cols = {
    user: 'Игрок',
    ub: 'Уб',
    sm: 'См',
    as: 'Ас',
  };

  orderCols = ['user', 'ub', 'sm', 'as'];

  supports = {
    map: 'Карта',
    price: 'Ставка',
    mode: 'Режим',
    counterUsers: 'Учасників',
    id: 'ID',
  };

  orderInfo = ['map', 'price', 'mode', 'counterUsers', 'id'];

  renderCol(name, user, team_id, meUser) {
    let inner;

    switch (name) {
      case 'user':
        inner = (
          <>
            <div className="matchesTeams__tableUser">
              {user.isWait !== true ? (
                <>
                  <div className="matchesTeams__tableUserAvatar">
                    <img
                      src={require(`../../../img/${user.avatar}`).default}
                      alt=""
                      className="matchesTeams__tableUserAvatarImage"
                    />
                  </div>
                  <img
                    src={require(`../../../img/${langs[user.lang].image}`).default}
                    alt=""
                    className="matchesTeams__tableUserLang"
                  />
                  <p className="matchesTeams__tableUserName">{user.name}</p>
                </>
              ) : (
                <>
                  <div
                    className="matchesTeams__tableUserAdd"
                    onClick={() => {
                      this.changeTeamGame(meUser.team_id, team_id);
                    }}>
                    <i className="matchesTeams__tableUserAddIcon">
                      <Icon name="plus" />
                    </i>
                  </div>
                </>
              )}
            </div>
          </>
        );
        break;
      default:
        inner = user[name];
        break;
    }

    return <div className={`matchesTeams__tableCol _${name}`}>{inner}</div>;
  }

  get isUserReady() {
    return this.props.currentMatch?.players?.find((player) => player.user_id === this.props.user.id)
      .is_ready;
  }

  get timeDiff() {
    const started_at = '2021-09-21T19:15:30.000000Z';
    // let started_at = this.props.currentMatch?.started_at;
    if (!started_at) return null;

    const parsed = new Date(started_at);
    const now = new Date();
    const secondsDiff = (parsed.getTime() - now.getTime()) / 1000;
    const minutes = Math.trunc(secondsDiff / 60);
    const seconds = Math.trunc(secondsDiff - Math.trunc(secondsDiff / 60) * 60);

    return {
      view: `${minutes}:${seconds.toString().length === 1 ? `0${seconds}` : seconds}`,
      minutes,
      seconds,
    };
  }

  render() {
    console.log('teams state', this.state);
    console.log('teams props', this.props);
    const currentLobby = this.props.currentMatch;
    const started_at = '2021-09-17T12:00:00.000000Z';
    const {
      name,
      game,
      mode,
      bet_amount,
      csgo_map,
      id,
      players,
      created_at,
      // , started_at
    } = currentLobby || {
      name: 'TEST GAME WRONG',
      game: 'csgo',
      mode: 'csgo.1vs1',
      password: null,
      bet_amount: '100',
      team1_id: null,
      team2_id: null,
      csgo_map: 'Mirage',
      status: 'Awaiting',
      is_locked: false,
      updated_at: '',
      created_at: '',
      id: 'nullID',
      players: [],
    };
    const gameInfo = this.getGameInfo(csgo_map, bet_amount, mode, players.length, id);

    const teams = this.getTeams(players);
    const meUser = this.findUserAmoungPlayers(players);
    const playersPlaces = this.getPlayersPlaces(game, mode);
    // if (name === 'TEST GAME WRONG') return <Loader type="Puff" color={'white'} />;
    return (
      <>
        <div className="matchesGame__info">
          <div className="matchesGame__infoUser">
            <img
              src={require('../../../img/lang-avstral.svg').default}
              alt=""
              className="matchesGame__infoUserLang"
            />
            <p className="matchesGame__infoUserName">{name || 'TEST GAME'}</p>
          </div>
          <div className="matchesGame__infoItems">
            {this.orderInfo.map((key) => (
              <div className="matchesGame__infoItem" key={key}>
                <p className="matchesGame__infoItemSupport">{this.supports[key]}</p>
                <p className="matchesGame__infoItemContent">
                  {gameInfo.info[key]}
                  {key === 'id' && (
                    <i className="matchesGame__infoItemCopy">
                      <Icon name="copy" />
                    </i>
                  )}
                </p>
              </div>
            ))}
          </div>
          <div className="matchesGame__infoButtons">
            <div className="matchesGame__infoButton">
              <i className="matchesGame__infoButtonIcon">
                <Icon name="download" />
              </i>
              Скачати Демо
            </div>
            <div className="matchesGame__infoButton _watch">
              <i className="matchesGame__infoButtonIcon">
                <Icon name="watch" />
              </i>
              Дивитись
            </div>
          </div>
        </div>
        <div className="matchesGame__content">
          <div className="matchesTeams _empty">
            <div className="matchesTeams__head">
              {teams.map((team, key) => {
                const dir = key === 0 ? '_left' : '_right';

                return (
                  <div className={`matchesTeams__headItem ${dir}`} key={key}>
                    <h3 className="matchesTeams__headName">{team.name}</h3>
                    <p className="matchesTeams__headCounter">({team.counter})</p>
                  </div>
                );
              })}
              <div className="matchesTeams__headInfo">
                <i className="matchesTeams__headInfoBack">
                  <Icon name="teams-info-back" />
                </i>
                {/*<h4 className="matchesTeams__headInfoValue">-:-</h4>*/}
                {started_at && (
                  <>
                    {/*<h4 className="matchesTeams__headInfoValue">{this.timeDiff?.view}</h4>*/}
                    <h4 className="matchesTeams__headInfoValue">12:10</h4>
                    <p className="matchesTeams__headInfoDescription">до початку</p>
                  </>
                )}
              </div>
            </div>
            <div className="matchesTeams__items">
              {teams.map((team, key) => {
                const emptyUsers = [];
                const dir = key === 0 ? '_left' : '_right';

                // eslint-disable-next-line
                for (let i = team.users.length; i < playersPlaces; i++) {
                  emptyUsers.push({ isWait: true });
                }

                return (
                  <div className={`matchesTeams__item ${dir}`} key={key}>
                    <div className="matchesTeams__table">
                      <div className="matchesTeams__tableRow _head">
                        {this.orderCols.map((col) => (
                          <div className={`matchesTeams__tableCol _${col}`} key={col}>
                            {this.cols[col]}
                          </div>
                        ))}
                      </div>
                      {team.users.concat(...emptyUsers).map((user, keyUser) => (
                        <div className="matchesTeams__tableRow" key={keyUser}>
                          {this.orderCols.map((col) => this.renderCol(col, user, key + 1, meUser))}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            {started_at && (
              <div
                className="matchesTeams__button"
                onClick={() => {
                  this.isUserReady ? this.props.setUnReady() : this.props.setReady();
                }}>
                <div>{this.isUserReady ? 'Готовий' : 'Не готовий'}</div>
              </div>
            )}
            {!started_at && (
              <div
                className="matchesTeams__button"
                onClick={() => {
                  this.props.startGame();
                }}>
                <div>Начать матч</div>
              </div>
            )}
            <div
              className="matchesTeams__button"
              onClick={() => {
                this.props.leaveGame();
                changePage('matches');
              }}>
              Вийти з лоббі
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentGame: state.currentGame,
    currentMatch: state.currentMatch,
    loading: state.loading,
    user: state.user,
    isLobbyLoading: state.isLobbyLoading,
  };
}

export default connect(mapStateToProps, { startGame, changeTeam, leaveGame, setReady, setUnReady })(
  MatchesTeams,
);

MatchesTeams.propTypes = {
  currentGame: PropTypes.string,
  currentMatch: PropTypes.object,
};
