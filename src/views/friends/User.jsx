import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../../components/Icon.jsx';
import ChatUser from '../../components/ChatUser.jsx';
import handlerAbsBlock from '../../functions/handlerAbsBlock';
import changePage from '../../functions/changePage';
import TeamCard from '../../components/TeamCard.jsx';

class FriendsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  pages = [
    {
      hrefs: ['cs-go', '', undefined],
      key: 'cs-go',
      contentLink: 'CS:GO',
      render() {
        return (
          <>
            <div className="cabinetStat__block">
              <div className="cabinetStat__blockItem _support">
                <h3 className="cabinetStat__title">
                  Ранг: 1682
                  <img
                    src={require('../../img/game-level-1.png').default}
                    alt=""
                    className="cabinetStat__blockRang"
                  />
                </h3>
              </div>
              <div className="cabinetStat__blockItem _content">
                <div className="cabinetStat__cards">
                  {this.cards.map((card, key) => (
                    <div className="cabinetStat__card" key={key}>
                      <i className="cabinetStat__cardIcon">
                        <Icon name={card.icon} />
                      </i>
                      <div className="cabinetStat__cardInfo">
                        <p className="cabinetStat__cardValue">{card.value}</p>
                        <p className="cabinetStat__cardDescription">{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="cabinetStat__block">
              <div className="cabinetStat__blockItem _support">
                <h3 className="cabinetStat__title">Статистика</h3>
                <div className="cabinetStat__infos">
                  {this.infos.map((info, key) => (
                    <div className="cabinetStat__info" key={key}>
                      {info.map((item, keyItem) => (
                        <div className="cabinetStat__infoItems" key={keyItem}>
                          <div className="cabinetStat__infoItem _support">{item.support}</div>
                          <div className="cabinetStat__infoItem _value">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="cabinetStat__blockItem _content">
                <h3 className="cabinetStat__title">Статистика</h3>
                <img
                  src={require('../../img/stat-diagram-2.svg').default}
                  alt=""
                  className="cabinetStat__diagram _full"
                />
              </div>
            </div>
          </>
        );
      },
    },
    {
      hrefs: ['dota2'],
      key: 'dota2',
      contentLink: 'DOTA 2',

      render() {
        return (
          <>
            <div className="cabinetStat__block">
              <div className="cabinetStat__blockItem _support">
                <h3 className="cabinetStat__title">Ранг: 1682</h3>
              </div>
              <div className="cabinetStat__blockItem _content">
                <div className="cabinetStat__cards">
                  {this.cards.map((card, key) => (
                    <div className="cabinetStat__card" key={key}>
                      <i className="cabinetStat__cardIcon">
                        <Icon name={card.icon} />
                      </i>
                      <div className="cabinetStat__cardInfo">
                        <p className="cabinetStat__cardValue">{card.value}</p>
                        <p className="cabinetStat__cardDescription">{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="cabinetStat__block">
              <div className="cabinetStat__blockItem _support">
                <h3 className="cabinetStat__title">Стиль игры</h3>
                <div className="cabinetStat__infos">
                  {this.infos.map((info, key) => (
                    <div className="cabinetStat__info" key={key}>
                      {info.map((item, keyItem) => (
                        <div className="cabinetStat__infoItems" key={keyItem}>
                          <div className="cabinetStat__infoItem _support">{item.support}</div>
                          <div className="cabinetStat__infoItem _value">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="cabinetStat__blockItem _content">
                <img
                  src={require('../../img/stat-diagram-1.svg').default}
                  alt=""
                  className="cabinetStat__diagram"
                />
              </div>
            </div>
          </>
        );
      },
    },
  ];

  cards = [
    {
      icon: 'tournaments',
      value: '4',
      description: 'Турнира',
    },
    {
      icon: 'rate',
      value: '76%',
      description: 'Винрейт',
    },
    {
      icon: 'hours',
      value: '214',
      description: 'Часов в игре',
    },
  ];

  infos = [
    [
      {
        support: 'Матчей сыграно:',
        value: '1023',
      },
      {
        support: 'Карт сыграно:',
        value: '23',
      },
    ],
    [
      {
        support: 'Побед:',
        value: '798',
      },
      {
        support: 'Поражений:',
        value: '225',
      },
    ],
    [
      {
        support: 'Убийств:',
        value: '2304',
      },
      {
        support: 'Смертей:',
        value: '1389',
      },
    ],
  ];

  users = [
    {
      name: 'Друзья онлайн',
      items: [
        {
          avatar: 'avatar-image.jpg',
          name: 'SergioRicht',
          status: 'Играет в CS:GO',
          award: 'game-level-1.png',
        },
        {
          avatar: 'avatar-image.jpg',
          name: 'SergioRicht',
          status: 'Играет в CS:GO',
          award: 'game-level-2.png',
        },
      ],
    },
    {
      name: 'Все друзья',
      items: [
        {
          avatar: 'avatar-image.jpg',
          name: 'SergioRicht',
          status: 'Играет в CS:GO',
          award: 'game-level-1.png',
        },
        {
          avatar: 'avatar-image.jpg',
          name: 'SergioRicht',
          status: 'Играет в CS:GO',
          award: 'game-level-2.png',
        },
        {
          avatar: 'avatar-image.jpg',
          name: 'SergioRicht',
          status: 'Играет в CS:GO',
          award: 'game-level-1.png',
        },
        {
          avatar: 'avatar-image.jpg',
          name: 'SergioRicht',
          status: 'Играет в CS:GO',
          award: 'game-level-2.png',
        },
        {
          avatar: 'avatar-image.jpg',
          name: 'SergioRicht',
          status: 'Играет в CS:GO',
          award: 'game-level-1.png',
        },
        {
          avatar: 'avatar-image.jpg',
          name: 'SergioRicht',
          status: 'Играет в CS:GO',
          award: 'game-level-2.png',
        },
      ],
    },
  ];

  teams = [
    {
      avatar: 'logo-team-5.png',
      name: 'PlayFair Display$$$',
      rate: '2674',
      counterGames: '43',
      amount: '200 029',
      counterUsers: '9/15',
      awards: ['award-icon-1.png', 'award-icon-2.png', 'award-icon-3.png', 'award-icon-4.png'],
    },
    {
      avatar: 'logo-team-6.png',
      name: 'PlayFair Display$$$',
      rate: '2674',
      counterGames: '43',
      amount: '200 029',
      counterUsers: '9/15',
      awards: ['award-icon-1.png', 'award-icon-2.png', 'award-icon-3.png', 'award-icon-4.png'],
    },
    {
      avatar: 'logo-team-7.png',
      name: 'PlayFair Display$$$',
      rate: '2674',
      counterGames: '43',
      amount: '200 029',
      counterUsers: '9/15',
      awards: ['award-icon-1.png', 'award-icon-2.png'],
    },
  ];

  render() {
    const { levels } = this.props;
    const currentPage =
      this.pages.find((page) => page.hrefs.indexOf(levels[2]) !== -1) ||
      this.pages.find((page) => page.hrefs.indexOf('') !== -1);

    return (
      <div className="friendsUser">
        <div className="friendsUser__head">
          <div className="friendsUser__headItem">
            <div className="friendsUser__user">
              <div className="friendsUser__userAvatar">
                <img
                  src={require(`../../img/avatar-image.jpg`).default}
                  alt=""
                  className="friendsUser__userAvatarImage"
                />
              </div>
              <div className="friendsUser__userInfo">
                <h4 className="friendsUser__userName">Kirill Richter</h4>
                <p className="friendsUser__userStatus">в игре с 9 Окт 2018</p>
                <p className="friendsUser__userDescription">
                  Значимость этих проблем настолько очевидна, что консультация с широким активом
                  способствует подготовки и реализации позиций, занимаемых участниками в отношении
                  поставленных задач
                </p>
              </div>
            </div>
          </div>
          <div className="friendsUser__headItem">
            <div className="friendsUser__actions">
              <div className="friendsUser__action _add-friend">
                <i className="friendsUser__actionIcon">
                  <Icon name="actions-accept" />
                </i>
                Добавить в друзья
              </div>
              <div className="friendsUser__action _chat">
                <i className="friendsUser__actionIcon">
                  <Icon name="chat-2" />
                </i>
              </div>
              <div className="friendsUser__action _more">
                <i className="friendsUser__actionIcon">
                  <Icon name="more" />
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="friendsUser__content">
          <div className="friendsUser__contentItem _users">
            <div
              className="friendsUser__contentUsers"
              onScroll={() => {
                handlerAbsBlock('hide');
              }}>
              {this.users.map((block, key) => (
                <div className="friendsUser__contentBlock" key={key}>
                  <div className="friendsUser__contentBlockHead">
                    <p className="friendsUser__contentBlockName">{block.name}</p>
                    <div className="friendsUser__contentBlockLine"></div>
                    <p className="friendsUser__contentBlockCounter">({block.items.length})</p>
                  </div>
                  <div className="friendsUser__contentBlockUsers">
                    {block.items.map((user, keyUser) => (
                      <div className="friendsUser__contentBlockUser" key={keyUser}>
                        <ChatUser
                          model={user}
                          settings={{
                            class: '_medium',
                            actionsList: [
                              'show-profile',
                              'accept-friend',
                              'share-profile',
                              'claim',
                              'ban',
                            ],
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="friendsUser__contentItem _info">
            <div className="cabinetStat">
              <div className="cabinetStat__head">
                {this.pages.map((page, key) => (
                  <div className="cabinetStat__headItem" key={key}>
                    <label className="checkbox">
                      <input
                        type="radio"
                        className="checkbox__input"
                        checked={currentPage.key === page.key}
                        onChange={() => {
                          changePage(`friends/user/${page.hrefs[0]}`);
                        }}
                      />
                      <div className="checkbox__view">{page.contentLink}</div>
                    </label>
                  </div>
                ))}
              </div>
              <div className="cabinetStat__content">{currentPage.render.call(this)}</div>
            </div>
          </div>
        </div>
        <div className="friendsUser__teams">
          <div className="friendsUser__teamsHead">
            <p className="friendsUser__teamsName">Команды ({this.teams.length})</p>
            <div className="friendsUser__teamsSearch">
              <input
                type="text"
                className="friendsUser__teamsSearchInput"
                placeholder="Поиск по командам..."
              />
            </div>
          </div>
          <div className="friendsUser__teamsItems">
            {this.teams.map((team, key) => (
              <div
                className="friendsUser__teamsItem"
                onClick={() => {
                  changePage('teams/team');
                }}
                key={key}>
                <TeamCard model={team} settings={{ class: '_light' }} />
              </div>
            ))}
          </div>
          <div className="friendsUser__teamsShow">Развернуть</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps)(FriendsSearch);

FriendsSearch.propTypes = {
  levels: PropTypes.array,
};
