import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Calendar from '../../components/Calendar.jsx';
import Switcher from '../../components/Switcher.jsx';

class TournamentsCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegion: false,
    };
  }

  counterTeams = [
    {
      value: 4,
    },
    {
      value: 8,
    },
    {
      value: 16,
    },
    {
      value: 32,
    },
  ];

  prices = [
    {
      value: `1000 BS`,
    },
    {
      value: `5000 BS`,
    },
    {
      value: `10000 BS`,
    },
  ];

  modes = [
    {
      content: 'All Pick',
    },
    {
      content: 'Single Draft',
    },
    {
      content: 'Random Draft',
    },
    {
      content: 'Turbo',
    },
    {
      content: 'All Random',
    },
    {
      content: 'Captains Mode',
    },
    {
      content: 'Captains Draft',
    },
    {
      content: 'Least Played',
    },
    {
      content: 'Limited Heroes',
    },
    {
      content: 'Ability Draft',
    },
    {
      content: 'All Random Deathmatch',
    },
  ];

  times = [
    {
      value: '7:00 AM',
    },
    {
      value: '12:00 PM',
    },
    {
      value: '5:00 PM',
    },
    {
      value: '10:00 PM',
    },
    {
      value: '8:00 AM',
    },
    {
      value: '1:00 PM',
    },
    {
      value: '6:00 PM',
    },
    {
      value: '10:30 PM',
    },
    {
      value: '7:00 AM',
    },
    {
      value: '7:00 AM',
    },
    {
      value: '7:00 AM',
    },
    {
      value: '7:00 AM',
    },
    {
      value: '7:00 AM',
    },
    {
      value: '7:00 AM',
    },
    {
      value: '7:00 AM',
    },
    {
      value: '7:00 AM',
    },
    {
      value: '7:00 AM',
    },
    {
      value: '7:00 AM',
    },
    {
      value: '7:00 AM',
    },
    {
      value: '7:00 AM',
    },
  ];

  render() {
    const { isRegion } = this.state;

    return (
      <div className="tournamentsCreate">
        <div className="tournamentsCreate__items">
          <div className="tournamentsCreate__item _content">
            <div className="tournamentsCreate__preview">
              <img
                src={require('../../img/tournaments-dota-image.png').default}
                alt=""
                className="tournamentsCreate__previewImage"
              />
            </div>
            <div className="tournamentsCreate__fields">
              <div className="tournamentsCreate__field">
                <input
                  type="text"
                  className="tournamentsCreate__input"
                  placeholder="Введите название Турніра*"
                />
              </div>
              <div className="tournamentsCreate__field">
                <input
                  type="text"
                  className="tournamentsCreate__input"
                  placeholder="Добавьте описание"
                />
              </div>
            </div>
            <div className="tournamentsCreate__block _rang">
              <div className="tournamentsCreate__blockHead">
                <p className="tournamentsCreate__support">Минимальный ранг:</p>
              </div>
              <div className="tournamentsCreate__blockContent">
                <div className="tournamentsCreate__range">
                  <div className="tournamentsCreate__rangeContent">
                    <div className="tournamentsCreate__rangeLine"></div>
                    <div className="tournamentsCreate__rangePoint"></div>
                    <div className="tournamentsCreate__rangeItem">
                      <p className="tournamentsCreate__rangeItemContent">1300+</p>
                    </div>
                    <div className="tournamentsCreate__rangeItem">
                      <p className="tournamentsCreate__rangeItemContent">1800+</p>
                    </div>
                    <div className="tournamentsCreate__rangeItem">
                      <p className="tournamentsCreate__rangeItemContent">2000+</p>
                    </div>
                    <div className="tournamentsCreate__rangeItem">
                      <p className="tournamentsCreate__rangeItemContent">5000+</p>
                    </div>
                    <div className="tournamentsCreate__rangeItem">
                      <p className="tournamentsCreate__rangeItemContent">8000+</p>
                    </div>
                  </div>
                  <div className="tournamentsCreate__rangeAction">
                    <div className="tournamentsCreate__rangeButton">Без ограничений</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tournamentsCreate__block _counterTeams">
              <div className="tournamentsCreate__blockHead">
                <p className="tournamentsCreate__support">Количество команд</p>
                <p className="tournamentsCreate__description">
                  Равным образом реали зация нам еченных плановых зад аний спос обствует подгот овки
                  и реали зации соотв етствующий усло вий акт ивизации. Не следу ет, одна ко забыв
                  ать, что консул ьтация с ш ироким ак тивом
                </p>
              </div>
              <div className="tournamentsCreate__blockContent">
                <div className="tournamentsCreate__blockItems">
                  {this.counterTeams.map((item, key) => (
                    <div className="tournamentsCreate__blockItem" key={key}>
                      <label className="tournamentsCreate__checkbox">
                        <input
                          type="radio"
                          className="tournamentsCreate__checkboxInput"
                          name="team"
                        />
                        <div className="tournamentsCreate__checkboxView">{item.value}</div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tournamentsCreate__block _prices">
              <div className="tournamentsCreate__blockHead">
                <p className="tournamentsCreate__support">Ставка входа</p>
                <p className="tournamentsCreate__description">
                  Равным образом реали зация нам еченных плановых зад аний спос обствует подгот овки
                  и реали зации соотв етствующий усло вий акт ивизации. Не следу ет, одна ко забыв
                  ать, что консул ьтация с ш ироким ак тивом
                </p>
              </div>
              <div className="tournamentsCreate__blockContent">
                <div className="tournamentsCreate__blockItems">
                  {this.prices.map((item, key) => (
                    <div className="tournamentsCreate__blockItem" key={key}>
                      <label className="tournamentsCreate__checkbox">
                        <input
                          type="radio"
                          className="tournamentsCreate__checkboxInput"
                          name="prices"
                        />
                        <div className="tournamentsCreate__checkboxView">{item.value}</div>
                      </label>
                    </div>
                  ))}
                </div>
                <div className="tournamentsCreate__blockField">
                  <input
                    type="text"
                    className="tournamentsCreate__input _border"
                    placeholder="Введите свое значение.."
                  />
                </div>
              </div>
            </div>
            <div className="tournamentsCreate__block _mode">
              <div className="tournamentsCreate__blockHead">
                <p className="tournamentsCreate__support">Режим:</p>
              </div>
              <div className="tournamentsCreate__blockContent">
                <div className="tournamentsCreate__blockItems">
                  {this.modes.map((item, key) => (
                    <div className="tournamentsCreate__blockItem" key={key}>
                      <label className="tournamentsCreate__checkbox">
                        <input
                          type="radio"
                          className="tournamentsCreate__checkboxInput"
                          name="modes"
                        />
                        <div className="tournamentsCreate__checkboxView">{item.content}</div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tournamentsCreate__block _time">
              <div className="tournamentsCreate__blockHead">
                <p className="tournamentsCreate__support">
                  Выберите дату и время проведения матчей
                </p>
                <p className="tournamentsCreate__description">
                  Равным образом реали зация нам еченных плановых зад аний спос обствует подгот овки
                  и реали зации соотв етствующий усло вий акт ивизации. Не следу ет, одна ко забыв
                  ать, что консул ьтация с ш ироким ак тивом
                </p>
              </div>
              <div className="tournamentsCreate__blockContent">
                <div className="tournamentsCreate__blockCalendar">
                  <Calendar />
                </div>
                <div className="tournamentsCreate__blockTimes">
                  <div className="tournamentsCreate__blockTimesBox">
                    {this.times.map((time, key) => (
                      <div className="tournamentsCreate__blockTime" key={key}>
                        <label className="tournamentsCreate__checkbox">
                          <input
                            type="radio"
                            className="tournamentsCreate__checkboxInput"
                            name="time"
                          />
                          <div className="tournamentsCreate__checkboxView">{time.value}</div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="tournamentsCreate__block _time">
              <div className="tournamentsCreate__blockHead">
                <div className="tournamentsCreate__support">
                  <div className="tournamentsCreate__supportSwitcher">
                    <Switcher
                      name="region"
                      value={isRegion}
                      callback={(data) => {
                        this.setState((state) => {
                          const newState = { ...state };

                          newState.isRegion = data.value;

                          return newState;
                        });
                      }}
                    />
                  </div>
                  Ограничить участие вашим регионом
                </div>
                <p className="tournamentsCreate__description">
                  Равным образом реали зация нам еченных плановых зад аний спос обствует подгот овки
                  и реали зации соотв етствующий усло вий акт ивизации. Не следу ет, одна ко забыв
                  ать, что консул ьтация с ш ироким ак тивом
                </p>
              </div>
            </div>
          </div>
          <div className="tournamentsCreate__item _info">
            <div className="tournamentsCreate__info">
              <h3 className="tournamentsCreate__infoTitle">Создание Турніра</h3>
              <p className="tournamentsCreate__infoDescription">
                Равным образом реали зация нам еченных плановых зад аний спос обствует подгот овки и
                реали зации соотв етствующий усло вий акт ивизации. Не следу ет, одна ко забыв ать,
                что консул ьтация с ш ироким ак тивом
              </p>
              <div className="tournamentsCreate__infoButton">
                <div className="tournamentsCreate__button">Узнать больше</div>
              </div>
            </div>
          </div>
        </div>
        <div className="tournamentsCreate__action">
          <div className="tournamentsCreate__button">Опубликовать</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels, currentGame: state.currentGame };
}

export default connect(mapStateToProps)(TournamentsCreate);

TournamentsCreate.propTypes = {
  levels: PropTypes.array,
  currentGame: PropTypes.string,
};
