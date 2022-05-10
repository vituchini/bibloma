import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../../../components/Icon.jsx';
import TransferTable from '../../../components/TransferTable.jsx';

class InfoPartnersWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  items = [
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
  ];

  socials = [
    {
      key: 'mail',
      icon: 'referal-mail',
    },
    {
      key: 'fb',
      icon: 'referal-fb',
    },
    {
      key: 'inst',
      icon: 'referal-inst',
    },
    {
      key: 'wa',
      icon: 'referal-wa',
    },
  ];

  render() {
    return (
      <div className="cabinetWallet _partners">
        <div className="cabinetWallet__head">
          <div className="cabinetWallet__headItem _card">
            <img
              src={require('../../../img/wallet-card.svg').default}
              alt=""
              className="cabinetWallet__headCard"
            />
            <div className="cabinetWallet__headContents">
              <p className="cabinetWallet__headContent">ID 4758 8745</p>
              <p className="cabinetWallet__headContent">Max Richter</p>
            </div>
          </div>
          <div className="cabinetWallet__headItem _info">
            <h3 className="cabinetWallet__headTitle">Аккаунт партнёра</h3>
            <p className="cabinetWallet__headSupport">Баланс</p>
            <p className="cabinetWallet__headPrice">
              15600 <span className="_strike">BS</span>
            </p>
            <img
              src={require('../../../img/wallet-diagram.svg').default}
              alt=""
              className="cabinetWallet__headBack"
            />
          </div>
        </div>
        <div className="cabinetWallet__actions">
          <div className="cabinetWallet__actionsItems">
            <div className="cabinetWallet__actionsItem _transfer">
              <div className="cabinetWallet__actionsSupport">
                <h3 className="title _medium">Вывести заработок</h3>
              </div>
              <div className="cabinetWallet__actionsButtons">
                <div className="cabinetWallet__actionsButton">
                  <div className="cabinetWallet__actionsButtonIcons">
                    <i className="cabinetWallet__actionsButtonIcon">
                      <Icon name="arrow-next" />
                    </i>
                    <i className="cabinetWallet__actionsButtonIcon">
                      <Icon name="card" />
                    </i>
                  </div>
                  <p className="cabinetWallet__actionsButtonContent">Вывести на карту</p>
                </div>
              </div>
            </div>
            <div className="cabinetWallet__actionsItem _referal">
              <div className="cabinetWallet__actionsSupports">
                <div className="cabinetWallet__actionsSupport">
                  <h3 className="title _medium">Реферальная ссылка</h3>
                </div>
                <div className="cabinetWallet__actionsSupport">
                  <h3 className="title _medium">Приглашено игроков - 3</h3>
                </div>
              </div>
              <div className="cabinetWallet__actionsButtons">
                <div className="cabinetWallet__referal">
                  <div className="cabinetWallet__referalBox">
                    <p className="cabinetWallet__referalLink">
                      www/referral/link/example.battlestar.com/|534678329327543
                    </p>
                    <i className="cabinetWallet__referalCopy">
                      <Icon name="copy" />
                    </i>
                  </div>
                  <div className="cabinetWallet__referalSocials">
                    {this.socials.map((social, key) => (
                      <a
                        href="#"
                        target="_blank"
                        className={`cabinetWallet__referalSocial _${social.key}`}
                        key={key}>
                        <Icon name={social.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps)(InfoPartnersWallet);

InfoPartnersWallet.propTypes = {
  levels: PropTypes.array,
};
