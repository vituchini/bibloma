import React from 'react';
import { connect } from 'react-redux';

import Icon from '../../components/Icon.jsx';

class LandPlayers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 0,
    };

    this.handlerSlider = this.handlerSlider.bind(this);
    this.getWidthItem = this.getWidthItem.bind(this);

    this.parent = React.createRef();
  }

  players = [
    {
      image: 'player-1.png',
      nik: 'Deamond',
      name: 'Иван Смирнов',
      team: 'NAVI',
      description:
        'Я знаком с проектом BattleStar уже несколько месяцев и остаюсь доволен высоким уровнем профессионализма команды, которая совершенствует свой продукт каждый день.',
    },
    {
      image: 'player-2.png',
      nik: 'Killmonger',
      name: 'Никита Ильин',
      team: 'NAVI',
      description:
        'Проект "BattleStar" подарил нам один из самых удобных игровых сервисов. Вспоминая начало своей карьеры, могу сказать с увереностью, что подобного ресурса очень не хватало.',
    },
    {
      image: 'player-3.png',
      nik: '4gamer',
      name: 'Сергей Харитонов',
      team: 'NAVI',
      description:
        'Хочу отметить прекрасную логику и прозрачность ресурса - четкая система ранжирования уровней игроков, позволяет соперничать с опонентами соответсвующего уровня.',
    },
    {
      image: 'player-4.png',
      nik: 'PlayDogger',
      name: 'Александр Блуд',
      team: 'NAVI',
      description:
        'Очень доволен предоставленной свободой действий в платформе: гибкое создание Турніра, формирование команды, общение и стриминг - все это дает гибкость и вариативность принимаемых решений.',
    },
    {
      image: 'player-5.png',
      nik: 'GoodKiller',
      name: 'Никита Кожевников',
      team: 'NAVI',
      description:
        'Прозрачная партнерская система и функционал стриминга помогает мне транслировать свои ігри и общаться с аудиторией и за рамками профессиональной деятельности.',
    },
  ];

  handlerSlider(dir) {
    this.setState((state) => {
      const newState = { ...state };
      let { currentPlayer } = newState;

      switch (dir) {
        case 'prev':
          if (currentPlayer !== 0) {
            currentPlayer -= 1;
          }
          break;
        case 'next':
          if (currentPlayer !== this.players.length - 1) {
            currentPlayer += 1;
          }
          break;
        default:
          break;
      }

      newState.currentPlayer = currentPlayer;

      return newState;
    });
  }

  getWidthItem() {
    let widthItem;

    if (this.parent.current) {
      const widthItems = this.parent.current.querySelector('.landPlayers__sliderItems').offsetWidth;
      widthItem = widthItems / this.players.length;
    }

    return widthItem;
  }

  render() {
    const { currentPlayer } = this.state;

    return (
      <div ref={this.parent} className="landPlayers">
        <div className="landPlayers__inner">
          <div className="landPlayers__head">
            <div className="landPlayers__title">
              <h4 className="landTitle">Профессиональные игроки</h4>
            </div>
            <p className="landPlayers__description">
              Мы гордимся тем, что профессиональные игроки доверяют нам и готовы рекомендовать
              платформу BattleStar
            </p>
            <div className="landPlayers__previews">
              <div
                className={`landPlayers__arrow _prev ${currentPlayer === 0 ? '_dis' : ''}`}
                onClick={() => {
                  this.handlerSlider('prev');
                }}>
                <i className="landPlayers__arrowIcon">
                  <Icon name="slider-prev-icon" />
                </i>
              </div>
              <div
                className={`landPlayers__arrow _next ${
                  currentPlayer === this.players.length - 1 ? '_dis' : ''
                }`}
                onClick={() => {
                  this.handlerSlider('next');
                }}>
                <i className="landPlayers__arrowIcon">
                  <Icon name="slider-next-icon" />
                </i>
              </div>
              {this.players.map((player, key) => (
                <label className="landPlayers__preview" key={key}>
                  <input
                    type="radio"
                    className="landPlayers__previewInput"
                    checked={currentPlayer === key}
                    onChange={() => {
                      this.setState((state) => {
                        const newState = { ...state };

                        newState.currentPlayer = key;

                        return newState;
                      });
                    }}
                  />
                  <div className="landPlayers__previewView">
                    <div className="landPlayers__previewAvatar">
                      <img
                        src={require(`../../img/${player.image}`).default}
                        alt=""
                        className="landPlayers__previewImage"
                      />
                    </div>
                    <p className="landPlayers__previewName">{player.nik}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className="landPlayers__slider">
            <div
              className="landPlayers__sliderItems"
              style={{ transform: `translate(${-currentPlayer * this.getWidthItem()}px,0)` }}>
              {this.players.map((player, key) => (
                <div
                  className={`landPlayers__sliderItem ${currentPlayer === key ? '_current' : ''}`}
                  key={key}>
                  <img
                    src={require(`../../img/${player.image}`).default}
                    alt=""
                    className="landPlayers__sliderItemImage"
                  />
                  <div className="landPlayers__sliderItemContent">
                    <h3 className="landPlayers__sliderItemNik">{player.nik}</h3>
                    <h4 className="landPlayers__sliderItemName">{player.name}</h4>
                    <p className="landPlayers__sliderItemTeam">Team: {player.team}</p>
                    <p className="landPlayers__sliderItemDescription">{player.description}</p>
                  </div>
                </div>
              ))}
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

export default connect(mapStateToProps)(LandPlayers);
