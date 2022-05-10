import React from 'react';
import { connect } from 'react-redux';
import {  message  } from 'antd';

import Icon from '../Icon.jsx';
import { dispatcher, getLobbies, joinLobby } from '../../redux/redux';
import { getItem, setItem } from '../../utils/storage';
import changePage from '../../functions/changePage';

class LoginGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  joinToMatchLobby(game) {
    dispatcher({ type: 'isShowPopupLoginGame', data: false });
    setItem('currentLobbyId', game.id);
    this.props.joinLobby(game.id).then((data) => {
      if (data.success) {
        changePage('matches/game');
      } else {
        if (data.message === 'You are already in lobby') {
          message.info('Вы сейчас в другом лобби, сначала выйдите с него!');
          this.props.joinLobby(getItem('currentLobbyId'));
          changePage('matches/game');
        } else if (data.message === 'Lobby not found') {
          this.props.getLobbies();
          message.info(data.message);
        }else {
          changePage('matches');
          message.info(data.message);
        }
      }
    });
  }

  render() {
    const { game } = this.props;
    return (
      <div className="popup _loginGame">
        <div className="popup__inner">
          <i
            className="popup__close"
            onClick={() => {
              dispatcher({ type: 'isShowPopupLoginGame', data: false });
            }}>
            <Icon name="close" />
          </i>
          <h3 className="popup__title _large">
            Войти в лобби на {game.info.price} <span className="_strike">BS</span>
          </h3>
          <p className="popup__description _wide">
            Если вы выйдете из лобби во время матча - ваш вклад будет утерян
            <br />
            Комиссия платформы с вашей подпиской - 10%
          </p>
          <div className="popup__game">
            <img
              src={require('../../img/cs-map-1.jpg').default}
              alt=""
              className="popup__gameMap"
            />
            <img
              src={require('../../img/lang-ru.svg').default}
              alt=""
              className="popup__gameLang"
            />
            <p className="popup__gameName">{game.name}</p>
          </div>
          <div className="popup__buttons">
            <div
              className="popup__button _wide _mainFull"
              onClick={() => {
                this.joinToMatchLobby(game);
              }}>
              Войти в комнату
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { game: state.isShowPopupLoginGame };
}

export default connect(mapStateToProps, { getLobbies, joinLobby })(LoginGame);
