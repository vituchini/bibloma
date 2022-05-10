import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import changePage from '../../functions/changePage';

import Icon from '../../components/Icon.jsx';
import TransferTable from '../../components/TransferTable.jsx';
import WalletTransfer from './wallet/Transfer.jsx';
import WalletTariffs from './wallet/Tariffs.jsx';
import { dispatcher } from '../../redux/redux';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  pages = [
    {
      hrefs: ['', undefined],
      key: 'index',
      render() {
        const { user } = this.props;
        return (
          <>
            <div className="cabinetWallet__head">
              <div className='cabinetWallet__headItem _card'>
                <img
                  src={require('../../img/wallet-card.svg').default}
                  alt=''
                  className='cabinetWallet__headCard'
                />
                <div className='cabinetWallet__headContents'>
                  <p className='cabinetWallet__headContent'>ID {user?.id}</p>
                  <p className='cabinetWallet__headContent'>{user?.name}</p>
                </div>
              </div>
              <div className='cabinetWallet__headItem _info'>
                <h3 className='cabinetWallet__headTitle'>
                  Подписка:{' '}
                  <a
                    href='/cabinet/wallet/tariffs'
                    onClick={(e) => {
                      e.preventDefault();
                      changePage(`cabinet/wallet/tariffs`);
                    }}>
                    {user?.subscription ? (user.subscription[0]?.toUpperCase() + user.subscription?.slice(1)) : '-'}
                  </a>
                </h3>
                <p className='cabinetWallet__headSupport'>Баланс</p>
                <p className='cabinetWallet__headPrice'>
                  {user?.balance} <span className='_strike'>BS</span>
                </p>
                <img
                  src={require('../../img/wallet-diagram.svg').default}
                  alt=''
                  className='cabinetWallet__headBack'
                />
              </div>
            </div>
            <div className="cabinetWallet__actions">
              <div className="cabinetWallet__actionsItems">
                {this.actions.map((action, key) => (
                  <div className={`cabinetWallet__actionsItem _${action.key}`} key={key}>
                    <div className="cabinetWallet__actionsSupport">
                      <h3 className="title">{action.support}</h3>
                    </div>
                    <div className="cabinetWallet__actionsButtons">
                      {action.buttons.map((button, keyButton) => (
                        <div
                          className="cabinetWallet__actionsButton"
                          key={keyButton}
                          onClick={() => {
                            if (button.href) {
                              changePage(button.href);
                            }
                          }}>
                          {button.icons && (
                            <div className="cabinetWallet__actionsButtonIcons">
                              {button.icons.map((icon, keyIcon) => (
                                <i className="cabinetWallet__actionsButtonIcon" key={keyIcon}>
                                  <Icon name={icon} />
                                </i>
                              ))}
                            </div>
                          )}
                          {button.content && (
                            <p
                              className="cabinetWallet__actionsButtonContent"
                              dangerouslySetInnerHTML={{ __html: button.content }}></p>
                          )}
                          {button.logo && (
                            <img
                              src={require(`../../img/${button.logo}`).default}
                              alt=""
                              className={`cabinetWallet__actionsButtonLogo _${button.key}`}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="cabinetWallet__actionsInvite"
                onClick={() => {
                  dispatcher({ type: 'isShowPopupReferal', data: true });
                }}>
                Пригласи друзей и заработай до 2000&nbsp;
                <span className="_strike">BS</span>
              </div>
            </div>
            <div className="cabinetWallet__history">
              <div className="cabinetWallet__historyTitle">
                <h3 className="title">История транзакций</h3>
              </div>
              <div className="cabinetWallet__historyContent">
                <TransferTable items={this.items} />
              </div>
            </div>
          </>
        );
      },
    },
    {
      hrefs: ['transfer'],
      key: 'transfer',
      render() {
        return <WalletTransfer />;
      },
    },
    {
      hrefs: ['tariffs'],
      key: 'tariffs',
      render() {
        return <WalletTariffs />;
      },
    },
  ];

  actions = [
    {
      key: 'transfer',
      support: 'Перевести монеты',
      buttons: [
        {
          icons: ['arrow-next', 'card'],
          content: 'Вывести на карту',
        },
        {
          icons: ['arrow-next', 'users'],
          content: 'Перевести <span class="_strike">BS</span> другу',
          href: 'cabinet/wallet/transfer',
        },
      ],
    },
    {
      key: 'balance',
      support: 'Пополнить баланс',
      buttons: [
        {
          key: 'sberbank',
          logo: 'sberbank-logo.svg',
        },
        {
          key: 'apple',
          logo: 'apple-logo.svg',
        },
        {
          key: 'google',
          logo: 'google-logo.svg',
        },
        {
          key: 'webmoney',
          logo: 'webmoney-logo.svg',
        },
      ],
    },
  ];

  items = [
    {
      name: 'CS:GO',
      date: '07.06.2021',
      time: '19:20',
      mode: '5v5',
      id: '37589023',
      isWin: true,
      price: 1200,
    },
    {
      name: 'DOTA 2',
      date: '03.06.2021',
      time: '17:34',
      mode: '1v1',
      id: '37589023',
      isWin: false,
      price: -500,
    },
    {
      type: 'transfer',
      data: {
        avatar: 'avatar-image.jpg',
        name: 'GLron',
      },
      name: 'CS:GO',
      date: '07.06.2021',
      time: '19:20',
      id: '37589023',
      price: 1200,
    },
    {
      name: 'DOTA 2',
      date: '03.06.2021',
      time: '17:34',
      mode: '1v1',
      id: '37589023',
      isWin: false,
      price: -500,
    },
    {
      type: 'withdrawal',
      data: {
        avatar: '4141 13** **** **21',
        number: '4141 13** **** **21',
      },
      name: 'CS:GO',
      date: '07.06.2021',
      time: '19:20',
      id: '37589023',
      price: 1200,
    },
    {
      name: 'DOTA 2',
      date: '03.06.2021',
      time: '17:34',
      mode: '1v1',
      id: '37589023',
      isWin: false,
      price: -500,
    },
  ];

  render() {
    const { levels } = this.props;
    const currentPage =
      this.pages.find((page) => page.hrefs.indexOf(levels[2]) !== -1) ||
      this.pages.find((page) => page.hrefs.indexOf('') !== -1);

    return <div className="cabinetWallet">{currentPage.render.call(this)}</div>;
  }
}

function mapStateToProps(state) {
  return {
    levels: state.levels,
    user: state.user,
  };
}

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  levels: PropTypes.array,
};
