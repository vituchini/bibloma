import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { message } from 'antd';

import Icon from '../Icon.jsx';
import changePage from '../../functions/changePage.js';
import { createGame } from '../../redux/redux.js';
import { setItem } from '../../utils/storage.js';

class CreateGame extends React.Component {
  constructor(props) {
    super(props);
    this.hideSideBar = this.props.hideSideBar;
    this.createGameLobby = this.createGameLobby.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.state = {
      size: 'csgo.1vs1',
      price: 100,
      mode: 'de_mirage',
      name: 'Без назви',
      anticheat: true,
    };
  }

  validateForm() {
    if (this.state.name === '') {
      message.info('Поле лобби пустое!');
      return false;
    }

    return true;
  }

  async createGameLobby() {
    if (this.validateForm()) {
      const gameData = {
        name: this.state.name,
        mode: this.state.size,
        bet_amount: this.state.price.toString(),
        csgo_map: this.state.mode,
        anticheat: this.state.anticheat,
      };
      this.props.createGame(gameData).then((data) => {
        if (data.success) {
          setItem('currentLobbyId', data.lobby.id);
          changePage('matches/game');
          this.hideSideBar();
        } else {
          message.info(data.message);
        }
      });
    }
  }

  handleChange(e) {
    console.log(e);
    console.log(this.state);
    const value = e.target.value;
    const name = e.target.name;
    console.log(value, name);
    this.setState({
      [name]: value,
    });
  }

  handleCheckboxChange(e) {
    const checked = e.target.checked;
    const name = e.target.name;
    console.log(checked, name);
    this.setState({
      [name]: checked,
    });
  }

  sizes = [
    {
      content: '1х1',
      value: 'csgo.1vs1',
    },
    {
      content: '5х5',
      value: 'csgo.5vs5',
    },
  ];

  prices = [
    {
      value: 100,
    },
    {
      value: 300,
    },
    {
      value: 500,
    },
    {
      value: 1000,
    },
    {
      value: 3000,
    },
    {
      value: 5000,
    },
  ];

  modes = [
    {
      content: 'Mirage',
      value: 'de_mirage',
    },
    {
      content: 'Inferno',
      value: 'de_inferno',
    },
    {
      content: 'Lake',
      value: 'de_lake',
    },
    {
      content: 'Nuke',
      value: 'de_nuke',
    },
  ];

  render() {
    return (
      <>
        <div className="matchesSideBar__game">
          <div className="matchesSideBar__gameItem">
            <p className="matchesSideBar__gameSupport">Лоббі</p>
            <div className="matchesSideBar__gameContent">
              <div className="matchesSideBar__gameLabels">
                {this.sizes.map((size, key) => (
                  <div className="matchesSideBar__gameLabel" key={key}>
                    <label className="blockCheckbox _medium">
                      <input
                        type="radio"
                        checked={size.value === this.state.size}
                        onChange={this.handleChange}
                        value={size.value}
                        className="blockCheckbox__input"
                        name="size"
                      />
                      <div className="blockCheckbox__view">{size.content}</div>
                    </label>
                  </div>
                ))}
              </div>
              <div className="matchesSideBar__gameField _name">
                <input
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.name}
                  name="name"
                  className="matchesSideBar__gameInput"
                  placeholder="*Введите название лобби"
                />
              </div>
            </div>
          </div>
          <div className="matchesSideBar__gameItem">
            <p className="matchesSideBar__gameSupport">Ставка</p>
            <div className="matchesSideBar__gameContent">
              <div className="matchesSideBar__gameField _price">
                <input
                  type="number"
                  disabled={true}
                  value="DISABLED"
                  className="matchesSideBar__gameInput"
                  placeholder="DISABLED"
                />
                <p className="matchesSideBar__gameFieldSupport">
                  <span className="_strike">BS</span>
                </p>
              </div>
              <div className="matchesSideBar__gameLabels">
                {this.prices.map((price, key) => (
                  <div className="matchesSideBar__gameLabel _medium" key={key}>
                    <label className="blockCheckbox _medium">
                      <input
                        type="radio"
                        checked={price.value === Number(this.state.price)}
                        value={price.value}
                        onChange={this.handleChange}
                        className="blockCheckbox__input"
                        name="price"
                      />
                      <div className="blockCheckbox__view">
                        {price.value}&nbsp;<span className="_strike">BS</span>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="matchesSideBar__gameItem">
            <p className="matchesSideBar__gameSupport">Карта</p>
            <div className="matchesSideBar__gameContent">
              <div className="matchesSideBar__gameLabels">
                {this.modes.map((mode, key) => (
                  <div className="matchesSideBar__gameLabel" key={key}>
                    <label className="blockCheckbox _medium">
                      <input
                        type="checkbox"
                        checked={mode.value === this.state.mode}
                        value={mode.value}
                        onChange={this.handleChange}
                        className="blockCheckbox__input"
                        name="mode"
                      />
                      <div className="blockCheckbox__view _white">{mode.content}</div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <label className="matchesSideBar__gameCheckbox">
            <div className="matchesSideBar__gameCheckboxInner">
              <p className="matchesSideBar__gameCheckboxSupport">Античіт</p>
              <div className="matchesSideBar__gameCheckboxContent">
                <label className="fieldCheckbox">
                  <input
                    checked={this.state.anticheat}
                    name="anticheat"
                    onChange={this.handleCheckboxChange}
                    type="checkbox"
                    className="fieldCheckbox__input"
                  />
                  <div className="fieldCheckbox__view">
                    <div className="fieldCheckbox__box">
                      <i className="fieldCheckbox__icon">
                        <Icon name="done-bold" />
                      </i>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </label>
          <div className="matchesSideBar__gameButton">
            <div className="matchesSideBar__button" onClick={this.createGameLobby}>
              <i className="matchesSideBar__buttonIcon">
                <Icon name="users" />
              </i>
              Создать
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, { createGame })(CreateGame);

CreateGame.propTypes = {
  content: PropTypes.string,
  hideSideBar: PropTypes.func,
};
