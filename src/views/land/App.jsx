import React from 'react';
import { connect } from 'react-redux';

import Icon from '../../components/Icon.jsx';

class LandApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="landApp">
        <div className="landApp__inner">
          <div className="landApp__content">
            <img
              src={require(`../../img/app-preview-1.png`).default}
              alt=""
              className="landApp__contentImage"
            />
            <div className="landApp__contentItem">
              <div className="landApp__contentTitle">
                <h4 className="landTitle">Подробная статистика</h4>
              </div>
              <p className="landApp__contentDescription">
                Подробная расширенная статистика позволит вам отслеживать свой прогресс по мере
                повышения рейтинга. Гибкая система оценок позволит Вам ставить новые цели и
                достигать их каждый день, а отбор экспертами BattleStar будет основываться на ваших
                рейтинговых достижениях.
              </p>
              <div className="landApp__contentButton">Создать аккаунт</div>
            </div>
          </div>
          <div className="landApp__content">
            <img
              src={require(`../../img/app-preview-2.png`).default}
              alt=""
              className="landApp__contentImage"
            />
            <div className="landApp__contentItem">
              <div className="landApp__contentTitle">
                <h4 className="landTitle">Удобное приложение BattleStar</h4>
              </div>
              <p className="landApp__contentDescription">
                Создавайте Турніры, соревнуйтесь командами, общайтесь с друзьями, открывайте новые
                достижения, организовуйте ігри следите за самыми последними новостями, а также
                трансляциями ваших любимых игроков в одном месте и зарабатывайте в современном
                приложении BattleStar.
              </p>
              <div className="landApp__contentDevices">
                <div className="landApp__contentDevice">
                  <img
                    src={require('../../img/pk-icon.svg').default}
                    alt=""
                    className="landApp__contentDeviceIcon"
                  />
                  <p className="landApp__contentDeviceDescription">ПК</p>
                </div>
                <div className="landApp__contentDevice _browser">
                  <img
                    src={require('../../img/browser-icon.svg').default}
                    alt=""
                    className="landApp__contentDeviceIcon"
                  />
                  <p className="landApp__contentDeviceDescription">Браузер</p>
                </div>
                <div className="landApp__contentDevice _phone">
                  <img
                    src={require('../../img/phone-icon.svg').default}
                    alt=""
                    className="landApp__contentDeviceIcon"
                  />
                  <p className="landApp__contentDeviceDescription">Телефоны</p>
                </div>
              </div>
              <div className="landApp__contentDownloads">
                <div className="landApp__contentDownload">
                  <div className="downloadBtn">
                    Скачать на Mac
                    <i className="downloadBtn__icon">
                      <Icon name="logo-apple" />
                    </i>
                  </div>
                </div>
                <div className="landApp__contentDownload">
                  <div className="downloadBtn">
                    Скачать на Windows
                    <i className="downloadBtn__icon">
                      <Icon name="logo-windows" />
                    </i>
                  </div>
                </div>
              </div>
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

export default connect(mapStateToProps)(LandApp);
