import React from 'react';
import { connect } from 'react-redux';

class LandAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGame: 'dota',
    };
  }

  items = [
    {
      icon: 'header-about-icon-1.png',
      title: 'Турниры BattleStar',
      description: 'Профессиональные и любительские турниры с большими призовыми фондами',
    },
    {
      icon: 'header-about-icon-2.png',
      title: 'Более 200 000 игроков',
      description: 'Играйте с друзьями и собирайте команды в огромном комьюнити игроков',
    },
    {
      icon: 'header-about-icon-3.png',
      title: 'Быстрые сервера',
      description: 'Играйте с низким пингом на оффициальных серверах Steam',
    },
    {
      icon: 'header-about-icon-4.png',
      title: 'Античит',
      description: 'Античит BattleStar нового поколения обеспечит честную игру',
    },
  ];

  games = [
    {
      image: 'game-dota-preview.png',
      imageMobile: 'game-dota-preview-mobile.png',
      back: 'game-dota-back.svg',
      name: 'DOTA 2',
      key: 'dota',
    },
    {
      image: 'game-cs-preview.png',
      imageMobile: 'game-cs-preview-mobile.png',
      back: 'game-cs-back.svg',
      name: 'CS:GO',
      key: 'cs',
    },
  ];

  render() {
    const { currentGame } = this.state;

    return (
      <div className="landAbout">
        <div className="landAbout__inner">
          <div className="landAbout__items">
            {this.items.map((item, key) => (
              <div className="landAbout__item" key={key}>
                <img
                  src={require(`../../img/${item.icon}`).default}
                  alt=""
                  className="landAbout__itemIcon"
                />
                <h3 className="landAbout__itemTitle">{item.title}</h3>
                <p className="landAbout__itemDescription">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="landAbout__games">
            {this.games.map((game, key) => (
              <label className={`landAbout__game _${game.key}`} key={key}>
                <input
                  type="radio"
                  className="landAbout__gameInput"
                  checked={currentGame === game.key}
                  onChange={() => {
                    this.setState((state) => {
                      const newState = { ...state };

                      newState.currentGame = game.key;

                      return newState;
                    });
                  }}
                />
                <div className="landAbout__gameView">
                  <div className="landAbout__gamePreview">
                    <img
                      src={require(`../../img/${game.image}`).default}
                      alt=""
                      className="landAbout__gameImage _desktop"
                    />
                    <img
                      src={require(`../../img/${game.imageMobile}`).default}
                      alt=""
                      className="landAbout__gameImage _mob"
                    />
                    <img
                      src={require(`../../img/${game.back}`).default}
                      alt=""
                      className="landAbout__gameBack"
                    />
                    <a href="#" className="landAbout__gameLink">
                      Создать аккаунт
                    </a>
                  </div>
                  <p className="landAbout__gameName">{game.name}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LandAbout);
