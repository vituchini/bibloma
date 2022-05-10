import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';
import Range from './Range.jsx';

class MatchesFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.state = {
      anticheat: true,
      maps: {
        de_mirage: true,
        de_inferno: false,
        de_lake: true,
        de_nuke: true,
      },
      prices: {
        '100': false,
        '300': false,
        '500': false,
        '1000': false,
        '3000': false,
        '5000': false,
      },
      sizes: {
        'csgo.1vs1': false,
        'csgo.5vs5': false,
      },
    };

    this.parent = React.createRef();
  }

  handleChange(e, groupName) {
    console.log(e);
    console.log(this.state);
    const value = e.target.checked;
    const name = e.target.name;
    console.log(value, name);
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState[groupName][name] = value;
      return newState;
    });
  }

  handleCheckboxChange(e, groupName) {
    console.log(e);
    console.log(this.state);
    const value = e.target.checked;
    const name = e.target.name;
    console.log(value, name);

    if (groupName) {
      this.setState((prevState) => {
        const newState = { ...prevState };
        newState[groupName][name] = value;
        return newState;
      });
    } else {
      this.setState((prevState) => {
        const newState = { ...prevState };
        newState[name] = value;
        return newState;
      });
    }
  }

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

  // modes = [
  //   {
  //     content: 'All Pick',
  //   },
  //   {
  //     content: 'Single Draft',
  //   },
  //   {
  //     content: 'Random Draft',
  //   },
  //   {
  //     content: 'Turbo',
  //   },
  //   {
  //     content: 'All Random',
  //   },
  //   {
  //     content: 'Captains Mode',
  //   },
  //   {
  //     content: 'Captains Draft',
  //   },
  //   {
  //     content: 'Least Played',
  //   },
  //   {
  //     content: 'Limited Heroes',
  //   },
  //   {
  //     content: 'Ability Draft',
  //   },
  //   {
  //     content: 'All Random Deathmatch',
  //   },
  // ];

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

  handlerDrop() {
    this.parent.current.querySelectorAll('.matchesFilter__item').forEach((item) => {
      item.querySelector('.matchesFilter__itemHead').onclick = () => {
        item.classList.toggle('_active');
      };
    });
  }

  componentDidMount() {
    this.handlerDrop();
  }

  render() {
    return (
      <div ref={this.parent} className="matchesFilter">
        <div className="matchesFilter__items">
          <div className="matchesFilter__item _active">
            <div className="matchesFilter__itemHead">Ставка</div>
            <div className="matchesFilter__itemContent">
              <div className="matchesFilter__prices">
                <div className="matchesFilter__pricesHead">
                  {/* <input type="number" className="matchesFilter__pricesHeadItem"/>
                  <input type="number" className="matchesFilter__pricesHeadItem"/> */}
                </div>
                {/* <div className="matchesFilter__pricesRange">
                  <Range />
                </div> */}
                <div className="matchesFilter__pricesItems">
                  {this.prices.map((price, key) => (
                    <div className="matchesFilter__pricesItem" key={key}>
                      <label className="fieldCheckbox">
                        <input
                          type="checkbox"
                          className="fieldCheckbox__input"
                          name={price.value}
                          checked={this.state.prices[price.value]}
                          onChange={(e) => {
                            this.handleCheckboxChange(e, 'prices');
                          }}
                        />
                        <div className="fieldCheckbox__view">
                          <div className="fieldCheckbox__box">
                            <i className="fieldCheckbox__icon">
                              <Icon name="done-bold" />
                            </i>
                          </div>
                          <p className="fieldCheckbox__content">{price.value}$</p>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
                <div className="matchesFilter__pricesButton">
                  <div className="matchesSideBar__button">
                    <i className="matchesSideBar__buttonIcon">
                      <Icon name="users-done-bold" />
                    </i>
                    Автопідбір матча
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="matchesFilter__item">
            <div className="matchesFilter__itemHead">Карти</div>
            <div className="matchesFilter__itemContent">
              <div className="matchesFilter__modes">
                {this.modes.map((mode, key) => (
                  <div className="matchesFilter__modesItem" key={key}>
                    <label className="fieldCheckbox">
                      <input
                        type="checkbox"
                        className="fieldCheckbox__input"
                        checked={this.state.maps[mode.value]}
                        value={mode.value}
                        name={mode.value}
                        onChange={(e) => {
                          this.handleCheckboxChange(e, 'maps');
                        }}
                      />
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
            </div>
          </div>
          <div className="matchesFilter__item">
            <div className="matchesFilter__itemHead">Режим ігри</div>
            <div className="matchesFilter__itemContent">
              <div className="matchesFilter__modes">
                {this.sizes.map((size, key) => (
                  <div className="matchesFilter__modesItem" key={key}>
                    <label className="fieldCheckbox">
                      <input
                        type="checkbox"
                        className="fieldCheckbox__input"
                        checked={this.state.sizes[size.value]}
                        value={size.value}
                        name={size.value}
                        onChange={(e) => {
                          this.handleCheckboxChange(e, 'sizes');
                        }}
                      />
                      <div className="fieldCheckbox__view">
                        <div className="fieldCheckbox__box">
                          <i className="fieldCheckbox__icon">
                            <Icon name="done-bold" />
                          </i>
                        </div>
                        <p className="fieldCheckbox__content">{size.content}</p>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="matchesFilter__item">
            <div className="matchesFilter__itemHead">Регіон</div>
            <div className="matchesFilter__itemContent"></div>
          </div>
        </div>
        <label className="matchesFilter__checkbox">
          <div className="matchesFilter__checkboxInner">
            <p className="matchesFilter__checkboxSupport">Античіт</p>
            <div className="matchesFilter__checkboxContent">
              <label className="fieldCheckbox">
                <input
                  type="checkbox"
                  className="fieldCheckbox__input"
                  checked={this.state.anticheat}
                  name="anticheat"
                  onChange={(e) => {
                    this.handleCheckboxChange(e);
                  }}
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
        <div className="matchesFilter__filterButton">
          <div className="matchesSideBar__button">Фильтровать</div>
        </div>
        <div className="matchesFilter__filterButton">
          <div className="matchesSideBar__button matchesSideBar__button_warn">Сбросить фильтры</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(MatchesFilter);

MatchesFilter.propTypes = {
  content: PropTypes.string,
};
