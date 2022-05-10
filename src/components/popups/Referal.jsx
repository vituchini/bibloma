import React from 'react';
import { connect } from 'react-redux';

import Icon from '../Icon.jsx';
import { dispatcher } from '../../redux/redux';

class Referal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  icons = [
    {
      href: '#',
      icon: 'link-email',
    },
    {
      href: '#',
      icon: 'link-fb',
    },
    {
      href: '#',
      icon: 'link-inst',
    },
    {
      href: '#',
      icon: 'link-wa',
    },
    {
      href: '#',
      icon: 'link-viber',
    },
  ];

  render() {
    return (
      <div className="popup">
        <div className="popup__inner">
          <i
            className="popup__close"
            onClick={() => {
              dispatcher({ type: 'isShowPopupReferal', data: false });
            }}>
            <Icon name="close" />
          </i>
          <img src={require('../../img/popup-icon-1.png').default} className="popup__icon" />
          <h3 className="popup__title">Пригласите друга и получите 50 BS</h3>
          <p className="popup__description">
            После регистрации нового игрока по ссылке вы получите на свой игровой счёт 50 BS{' '}
          </p>
          <div className="popup__referal">
            www/referral/link/example.battlestar.com/|534678329327543
            <i className="popup__referalIcon">
              <Icon name="copy" />
            </i>
          </div>
          <div className="popup__socials">
            {this.icons.map((icon, key) => (
              <a href="#" className="popup__social" key={key}>
                <i className="popup__socialIcon">
                  <Icon name={icon.icon} />
                </i>
              </a>
            ))}
          </div>
          <p className="popup__text">Приглашено игроков - 3</p>
          <div
            className="popup__button"
            onClick={() => {
              dispatcher({ type: 'isShowPopupReferal', data: false });
            }}>
            Закрыть
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Referal);
