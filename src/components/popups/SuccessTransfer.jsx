import React from 'react';
import { connect } from 'react-redux';

import Icon from '../Icon.jsx';
import { dispatcher } from '../../redux/redux';

class Referal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="popup">
        <div className="popup__inner">
          <i
            className="popup__close"
            onClick={() => {
              dispatcher({ type: 'isShowPopupSuccessTransfer', data: false });
            }}>
            <Icon name="close" />
          </i>
          <img src={require('../../img/popup-icon-2.png').default} className="popup__icon" />
          <h3 className="popup__title">Перевод прошёл успешно</h3>
          <div className="popup__transfer">
            <div className="popup__transferInfo">
              500 BS
              <i className="popup__transferIcon">
                <Icon name="arrow-next" />
              </i>
              <i className="popup__transferIcon">
                <Icon name="users" />
              </i>
            </div>
            <div className="popup__transferUser">
              <div className="user _medium">
                <div className="user__avatar">
                  <div className="user__avatarBox">
                    <img
                      src={require(`../../img/avatar-image.jpg`).default}
                      alt=""
                      className="user__avatarImage"
                    />
                  </div>
                </div>
                <div className="user__info">
                  <p className="user__name _white">GLron</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="popup__button"
            onClick={() => {
              dispatcher({ type: 'isShowPopupSuccessTransfer', data: false });
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
