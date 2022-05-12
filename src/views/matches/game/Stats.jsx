import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../../../components/Icon.jsx';

const langs = require('../../../info/langs.json');

class MatchesStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matchNotComplete: false,
    };

    this.renderColHead = this.renderColHead.bind(this);
    this.renderColHeadInner = this.renderColHeadInner.bind(this);
    this.renderCol = this.renderCol.bind(this);
  }

  cols = {
    user: ['user'],
    info: ['ub', 'sm', 'as'],
    exp: ['om', 'gm'],
    damage: ['heroes', 'builds', 'final'],
    kills: ['kills', 'kills', 'kills', 'kills', 'kills'],
  };

  orderCols = ['user', 'info', 'exp', 'damage', 'kills'];

  namesCols = {
    user: 'Гравець',
    exp: 'Досвід',
    damage: 'Шкода',
    kills: 'Вбивства',
    ub: 'Вб',
    sm: 'См',
    as: 'Ас',
    om: 'О/М',
    gm: 'Г/М',
    heroes: 'Герої',
    builds: 'Башні',
    final: 'Повний',
  };

  teams = [
    {
      name: 'Команда А',
      counter: '1320',
      users: [
        {
          avatar: 'avatar-image.jpg',
          lang: 'ru',
          name: 'JohnTrawolta_4',
          ub: '70',
          sm: '35',
          as: '46',
          om: '35',
          gm: '46',
          heroes: '70',
          builds: '35',
          final: '46',
          kills: [2, 3, 1, 3, 6],
        },
        {
          avatar: 'avatar-image.jpg',
          lang: 'ru',
          name: 'StrawberryFieldsForevewefreg',
          ub: '70',
          sm: '35',
          as: '46',
          om: '35',
          gm: '46',
          heroes: '70',
          builds: '35',
          final: '46',
          kills: [2, 3, 1, 3, 6],
        },
        {
          avatar: 'avatar-image.jpg',
          lang: 'ru',
          name: 'JohnTrawolta_4',
          ub: '70',
          sm: '35',
          as: '46',
          om: '35',
          gm: '46',
          heroes: '70',
          builds: '35',
          final: '46',
          kills: [2, 3, 1, 3, 6],
        },
        {
          avatar: 'avatar-image.jpg',
          lang: 'ru',
          name: 'JohnTrawolta_4',
          ub: '70',
          sm: '35',
          as: '46',
          om: '35',
          gm: '46',
          heroes: '70',
          builds: '35',
          final: '46',
          kills: [2, 3, 1, 3, 6],
        },
        {
          avatar: 'avatar-image.jpg',
          lang: 'ru',
          name: 'JohnTrawolta_4',
          ub: '70',
          sm: '35',
          as: '46',
          om: '35',
          gm: '46',
          heroes: '70',
          builds: '35',
          final: '46',
          kills: [2, 3, 1, 3, 6],
        },
      ],
    },
    {
      name: 'Команда Б',
      counter: '1999',
      users: [
        {
          avatar: 'avatar-image.jpg',
          lang: 'ru',
          name: 'JohnTrawolta_4',
          ub: '70',
          sm: '35',
          as: '46',
          om: '35',
          gm: '46',
          heroes: '70',
          builds: '35',
          final: '46',
          kills: [2, 3, 1, 3, 6],
        },
        {
          avatar: 'avatar-image.jpg',
          lang: 'ru',
          name: 'JohnTrawolta_4',
          ub: '70',
          sm: '35',
          as: '46',
          om: '35',
          gm: '46',
          heroes: '70',
          builds: '35',
          final: '46',
          kills: [2, 3, 1, 3, 6],
        },
        {
          avatar: 'avatar-image.jpg',
          lang: 'ru',
          name: 'JohnTrawolta_4',
          ub: '70',
          sm: '35',
          as: '46',
          om: '35',
          gm: '46',
          heroes: '70',
          builds: '35',
          final: '46',
          kills: [2, 3, 1, 3, 6],
        },
        {
          avatar: 'avatar-image.jpg',
          lang: 'ru',
          name: 'JohnTrawolta_4',
          ub: '70',
          sm: '35',
          as: '46',
          om: '35',
          gm: '46',
          heroes: '70',
          builds: '35',
          final: '46',
          kills: [2, 3, 1, 3, 6],
        },
        {
          avatar: 'avatar-image.jpg',
          lang: 'ru',
          name: 'JohnTrawolta_4',
          ub: '70',
          sm: '35',
          as: '46',
          om: '35',
          gm: '46',
          heroes: '70',
          builds: '35',
          final: '46',
          kills: [2, 3, 1, 3, 6],
        },
      ],
    },
  ];

  renderColHead(key, team) {
    let inner;

    switch (key) {
      case 'user':
        inner = (
          <>
            <div className="matchesStats__tableTeam">
              <h4 className="matchesStats__tableTeamName">{team.name}</h4>
              <p className="matchesStats__tableTeamCounter">({team.counter})</p>
            </div>
          </>
        );
        break;
      default:
        inner = this.namesCols[key];
        break;
    }

    return (
      <div className={`matchesStats__tableCol _${key}`} key={key}>
        {inner}
      </div>
    );
  }

  renderColHeadInner(key, keyItem) {
    let inner;

    switch (key) {
      case 'kills':
        inner = (
          <>
            <div className="matchesStats__tableAvatar">
              <img
                src={require('../../../img/avatar-image.jpg').default}
                alt=""
                className="matchesStats__tableAvatarImage"
              />
            </div>
          </>
        );
        break;
      default:
        inner = this.namesCols[key];
        break;
    }

    return (
      <div className="matchesStats__tableColInner" key={keyItem}>
        {inner}
      </div>
    );
  }

  renderCol(key, keyItem, item, value = null) {
    let inner;

    switch (key) {
      case 'user':
        inner = (
          <>
            <div className="matchesStats__tableUser">
              <div className="matchesStats__tableUserAvatar">
                <img
                  src={require(`../../../img/${item.avatar}`).default}
                  alt=""
                  className="matchesStats__tableUserAvatarImage"
                />
              </div>
              <img
                src={require(`../../../img/${langs[item.lang].image}`).default}
                alt=""
                className="matchesStats__tableUserLang"
              />
              <p className="matchesStats__tableUserName">{item.name}</p>
            </div>
          </>
        );
        break;
      case 'kill':
        inner = value;
        break;
      default:
        inner = item[key];
        break;
    }

    return (
      <div className="matchesStats__tableColInner" key={keyItem}>
        {inner}
      </div>
    );
  }

  render() {
    const { matchNotComplete } = this.state;

    return (
      <>
        <div className="matchesGame__info _stats">
          <div className="matchesGame__infoUser">
            <img
              src={require('../../../img/lang-avstral.svg').default}
              alt=""
              className="matchesGame__infoUserLang"
            />
            <p className="matchesGame__infoUserName">PlayFair Display$$$</p>
          </div>
        </div>
        <div className="matchesGame__content _stats">
          <div className="matchesStats">
            <div className="matchesStats__inner">
              {(matchNotComplete === true && (
                <div className="matchesStats__empty">
                  Статистика будет доступна после окончания матча
                </div>
              )) || (
                <>
                  <div className="matchesStats__counter">
                    <i className="matchesStats__counterBack">
                      <Icon name="counter-stats-back" />
                    </i>
                    <div className="matchesStats__counterItem">3</div>
                    <div className="matchesStats__counterItem _center">:</div>
                    <div className="matchesStats__counterItem">1</div>
                  </div>
                  {this.teams.map((team, keyTeam) => {
                    const dir = keyTeam === 0 ? '_start' : '_end';

                    return (
                      <div className={`matchesStats__table ${dir}`} key={keyTeam}>
                        <div className="matchesStats__tableRow _head">
                          <div className="matchesStats__tableRowInner _main">
                            {this.orderCols.map((key) => this.renderColHead(key, team))}
                          </div>
                          <div className="matchesStats__tableRowInner">
                            {this.orderCols.map((key) => (
                              <div className={`matchesStats__tableCol _${key}`} key={key}>
                                {this.cols[key].map((item, keyItem) =>
                                  this.renderColHeadInner(item, keyItem),
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                        {team.users.map((user, keyUser) => (
                          <div className="matchesStats__tableRow" key={keyUser}>
                            <div className="matchesStats__tableRowInner">
                              {this.orderCols.map((key) => (
                                <div className={`matchesStats__tableCol _${key}`} key={key}>
                                  {(key !== 'kills' &&
                                    this.cols[key].map((item, keyItem) =>
                                      this.renderCol(item, keyItem, user),
                                    )) ||
                                    user.kills.map((item, keyItem) =>
                                      this.renderCol('kill', keyItem, user, item),
                                    )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { currentGame: state.currentGame };
}

export default connect(mapStateToProps)(MatchesStats);

MatchesStats.propTypes = {
  currentGame: PropTypes.string,
};
