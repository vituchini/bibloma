import React from 'react';
import { connect } from 'react-redux';

import Icon from '../Icon.jsx';
import { dispatcher } from '../../redux/redux';

class Claim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  claim = [
    {
      content: 'Читы или нечестная игра',
    },
    {
      content: 'Оскорбления в текстовом чате',
    },
    {
      content: 'Оскорбления в голосовом чате ',
    },
    {
      content: 'Отсутсвие игрока',
    },
    {
      content: 'Смурфинг',
    },
    {
      content: 'Спам приглашениями',
    },
  ];

  render() {
    return (
      <div className="popup _claim">
        <div className="popup__inner">
          <i
            className="popup__close"
            onClick={() => {
              dispatcher({ type: 'isShowPopupCalibration', data: false });
            }}>
            <Icon name="close" />
          </i>
          <h3 className="popup__title _large">Подать жалобу на игрока </h3>
          <div className="popup__user">
            <div className="user">
              <div className="user__avatar">
                <div className="user__avatarBox">
                  <img
                    src={require('../../img/avatar-image.jpg').default}
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
          <div className="popup__checkboxes">
            {this.claim.map((mode, key) => (
              <div className="popup__checkbox" key={key}>
                <label className="fieldCheckbox">
                  <input type="radio" className="fieldCheckbox__input" name="claim" />
                  <div className="fieldCheckbox__view">
                    <div className="fieldCheckbox__box">
                      <i className="fieldCheckbox__icon">
                        <Icon name="done-bold" />
                      </i>
                    </div>
                    <p className="fieldCheckbox__content">{mode.content}</p>
                  </div>
                </label>
              </div>
            ))}
          </div>
          <div className="popup__buttons">
            <div
              className="popup__button _wide"
              onClick={() => {
                dispatcher({ type: 'isShowPopupCalibration', data: false });
              }}>
              Отмена
            </div>
            <div
              className="popup__button _wide _main"
              onClick={() => {
                dispatcher({ type: 'isShowPopupCalibration', data: false });
              }}>
              Подтвердить
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Claim);
