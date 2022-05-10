import React from 'react';
import { connect } from 'react-redux';

import Icon from '../Icon.jsx';
import { dispatcher } from '../../redux/redux';

class Calibration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="popup _calibration">
        <div className="popup__inner">
          <i
            className="popup__close"
            onClick={() => {
              dispatcher({ type: 'isShowPopupCalibration', data: false });
            }}>
            <Icon name="close" />
          </i>
          <h3 className="popup__title _large">Калибровка</h3>
          <p className="popup__description _wide">
            Повседневная практика показывает, что сложившаяся структура организации способствует
            подготовки и реализации соответствующий условий активизации. Повседневная практика
            показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности
            представляет собой интересный эксперимент проверки соответствующий условий активизации.
            Товарищи! начало повседневной работы по формированию позиции обеспечивает широкому кругу
            (специалистов) участие в формировании позиций.
          </p>
          <div className="popup__buttons">
            <div
              className="popup__button _wide"
              onClick={() => {
                dispatcher({ type: 'isShowPopupCalibration', data: false });
              }}>
              Не сейчас
            </div>
            <div
              className="popup__button _wide _main"
              onClick={() => {
                dispatcher({ type: 'isShowPopupCalibration', data: false });
              }}>
              Начать калибровку
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

export default connect(mapStateToProps)(Calibration);
