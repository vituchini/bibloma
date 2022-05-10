import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../components/Icon.jsx';
import DropList from '../components/DropList.jsx';
import { dispatcher, exit } from '../redux/redux';
import changePage from '../functions/changePage';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowGames: false,
      isShowMessages: false,
      isShowNotifications: false,
      isShowMenu: false,
    };

    this.handlerDrop = this.handlerDrop.bind(this);
    this.getCondForInfo = this.getCondForInfo.bind(this);

    this.parent = React.createRef();
  }

  games = {
    key: 'games',
    items: [
      {
        key: 'cs',
        preview: {
          type: 'image',
          url: 'game-cs-go.png',
        },
        name: 'Counter Strike: Global Offensive',
        shortName: 'CS:GO',
      },
      {
        key: 'dota',
        preview: {
          type: 'image',
          url: 'game-dota2.png',
        },
        name: 'DOTA 2',
        shortName: 'DOTA2',
      },
    ],
  };

  messages = {
    key: 'messages',
    items: [
      {
        preview: {
          type: 'image',
          url: 'avatar-image.jpg',
        },
        name: 'JoshuaN7',
        description: 'Good game, bro. Lets play another couple games? Invite Keira too',
      },
      {
        preview: {
          type: 'image',
          url: 'avatar-image.jpg',
        },
        name: 'Keita_Noir',
        description: 'Привет. Когда идем в КС?',
      },
      {
        preview: {
          type: 'image',
          url: 'avatar-image.jpg',
        },
        name: 'Mescal001',
        description: 'Слушай, хотел давно спросит...',
      },
    ],
  };

  notifications = {
    key: 'notifications',
    items: [
      {
        preview: {
          type: 'icon',
          url: 'tribble-up',
        },
        name: 'BattleStar',
        description:
          'Вы вступили в новую лигу! Играйте на профессиональных турнирах и побеждайте в выс...',
      },
      {
        preview: {
          type: 'icon',
          url: 'users',
        },
        name: 'Keita_Noir',
        description: 'Вас пригласили вступить в команду <a href="#">CS:GO TEAM 1</a>',
      },
      {
        preview: {
          type: 'icon',
          url: 'user-add',
        },
        name: 'Mescal001',
        description: 'Отправляет вам запрос в друзья',
      },
    ],
  };

  actions = [
    {
      key: 'messages',
      keyOfState: 'isShowMessages',
      // counter: this.getUser().settings.notify_messages,
      counter: 0,
    },
    {
      key: 'notifications',
      keyOfState: 'isShowNotifications',
      // counter: this.getUser().settings.notify_news,
      counter: 0,
    },
  ];

  menu = {
    key: 'menu',
    items: [
      {
        key: 'stat',
        name: 'Статистика',
        preview: {
          type: 'icon',
          link: 'cabinet/stat',
          url: 'cabinet-list-stat',
        },
      },
      {
        key: 'history',
        name: 'История матчей',
        preview: {
          type: 'icon',
          link: 'cabinet/history',
          url: 'cabinet-list-history',
        },
      },
      {
        key: 'personal',
        name: 'Личные данные',
        preview: {
          type: 'icon',
          link: 'cabinet/personal',
          url: 'cabinet-list-personal',
        },
      },
      {
        key: 'wallet',
        name: 'Кошелёк',
        preview: {
          type: 'icon',
          link: 'cabinet/wallet',
          url: 'cabinet-list-wallet',
        },
      },
      {
        key: 'settings',
        name: 'Параметры',
        preview: {
          type: 'icon',
          link: 'cabinet/settings',
          url: 'cabinet-list-settings',
        },
      },
      {
        key: 'blacklist',
        name: 'Черный список',
        preview: {
          type: 'icon',
          link: 'cabinet/blacklist',
          url: 'cabinet-list-blacklist',
        },
      },
      {
        key: 'exit',
        name: 'Выйти из аккаунта',
        preview: {
          type: 'icon',
          url: 'exit',
        },
        handler: function () {
          changePage("");
          exit();
        }
      },
    ],
  };

  infoLinks = [
    {
      key: 'about',
      hrefs: ['', undefined, 'about'],
      contentLink: 'О BattleStar',
    },
    {
      key: 'partners',
      hrefs: ['partners'],
      contentLink: 'Для партнёров',
    },
    {
      key: 'support',
      hrefs: ['support'],
      contentLink: 'Поддержка',
    },
  ];

  handlerDrop(name, isShow = !this.state[name]) {
    const allDrops = ['isShowGames', 'isShowMessages', 'isShowNotifications', 'isShowMenu'];

    this.setState((state) => {
      const newState = { ...state };

      allDrops
        .filter((item) => item !== name)
        .forEach((prop) => {
          newState[prop] = false;
        });

      newState[name] = isShow;

      return newState;
    });
  }

  getCondForInfo() {
    const { levels } = this.props;

    return levels[0] === 'info' || levels[0] === 'partners';
  }

  render() {
    const { isShowGames, isShowMenu } = this.state;
    const { currentGame, inCabinet, levels, user } = this.props;

    return (
      <div ref={this.parent} className="topBar">
        <div className="topBar__inner">
          <div className="topBar__item _left">
            {this.getCondForInfo() !== true && (
              <div className="topBar__navigation">
                <div className="topBar__navigationButton">
                  <i className="topBar__navigationButtonIcon">
                    <Icon name="arrow-prev" />
                  </i>
                </div>
                <div className="topBar__navigationButton">
                  <i className="topBar__navigationButtonIcon">
                    <Icon name="arrow-next" />
                  </i>
                </div>
              </div>
            )}
            {inCabinet === true && (
              <div className={`topBar__game ${isShowGames === true ? '_show' : ''}`}>
                <div
                  className="topBar__gameView"
                  onClick={() => {
                    this.handlerDrop('isShowGames');
                  }}>
                  <img
                    src={
                      require(`../img/${
                        this.games.items.find((item) => item.key === currentGame).preview.url
                      }`).default
                    }
                    alt=""
                    className="topBar__gameLogo"
                  />
                  {this.games.items.find((item) => item.key === currentGame).shortName}
                </div>
                {isShowGames === true && (
                  <div className="topBar__gameDrop">
                    <DropList
                      name={'games'}
                      config={this.games}
                      callback={this.handlerDrop}
                      handler={(data) => {
                        dispatcher({ type: 'currentGame', data: data.value });
                        this.handlerDrop('isShowGames');
                      }}
                    />
                  </div>
                )}
              </div>
            )}
            {this.getCondForInfo() === true && (
              <div className="topBar__info">
                {this.infoLinks.map((link, key) => (
                  <a
                    href={link.hrefs[0]}
                    className={`topBar__infoLink ${
                      link.hrefs.indexOf(levels[1]) !== -1 ? '_current' : ''
                    }`}
                    key={key}
                    onClick={(e) => {
                      e.preventDefault();
                      changePage(`info/${link.hrefs[0]}`);
                    }}>
                    {link.contentLink}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="topBar__item _right">
            <div className="topBar__search">
              <i className="topBar__searchIcon">
                <Icon name="search" />
              </i>
              <input type="text" className="topBar__searchInput" placeholder="Поиск" />
            </div>
            {inCabinet === true && (
              <>
                <div className="topBar__balance">
                  <p className="topBar__balanceSupport">Баланс</p>
                  <i className="topBar__balanceAdd">
                    <Icon name="balance-add" />
                  </i>
                  <p className="topBar__balanceValue">
                    {user?.balance} <span className="_strike">BS</span>
                  </p>
                </div>
                <div className="topBar__actions">
                  {this.actions.map((action, key) => (
                    <div
                      className={`topBar__action _${action.key} ${
                        this.state[action.keyOfState] === true ? '_show' : ''
                      }`}
                      data-counter={action.counter}
                      key={key}>
                      <div
                        className="topBar__actionInner"
                        onClick={() => {
                          this.handlerDrop(action.keyOfState);
                        }}>
                        <i className="topBar__actionIcon">
                          <Icon name={action.key} />
                        </i>
                      </div>
                      {this.state[action.keyOfState] === true && (
                        <div className="topBar__actionDrop">
                          <DropList config={this[action.key]} callback={this.handlerDrop} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className={`topBar__user ${isShowMenu === true ? '_show' : ''}`}>
                  <div
                    className="topBar__userInner"
                    onClick={() => {
                      this.handlerDrop('isShowMenu');
                    }}>
                    {user?.name}
                  </div>
                  {isShowMenu === true && (
                    <div className="topBar__userDrop">
                      <DropList config={this.menu} handler={(data) => {
                        if (data.hasOwnProperty('handler') && data.handler){
                          data.handler();
                        }
                      }} callback={this.handlerDrop} />
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user:state.user,
    levels: state.levels,
    currentGame: state.currentGame,
  };
}

export default connect(mapStateToProps)(TopBar);

TopBar.propTypes = {
  levels: PropTypes.array,
  currentGame: PropTypes.string,
  inCabinet: PropTypes.bool,
};
