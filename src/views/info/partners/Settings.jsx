import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Switcher from '../../../components/Switcher.jsx';
import Select from '../../../components/Select.jsx';
import Icon from '../../../components/Icon.jsx';

class InfoPartnersSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchers: {},
      language: 'russian',
      region: 'russia',
    };

    this.handlerSwitcher = this.handlerSwitcher.bind(this);
  }

  notifications = [
    {
      key: 'news',
      content: 'Новини платформы',
    },
    {
      key: 'levels',
      content: 'Достижение нового уровня',
    },
    {
      key: 'referal',
      content: 'Переход по реферальной ссылке',
    },
  ];

  selectLanguage = {
    drop: [
      {
        value: 'russian',
        content: 'Русский',
      },
      {
        value: 'english',
        content: 'Английский',
      },
      {
        value: 'spanish',
        content: 'Испанский',
      },
      {
        value: 'avstr',
        content: 'Австрийский',
      },
      {
        value: 'german',
        content: 'Немецкий',
      },
      {
        value: 'italian',
        content: 'Итальянский',
      },
    ],
  };

  selectRegions = {
    type: 'regions',
    isSearch: true,
    drop: [
      {
        value: 'russia',
        content: 'Россия',
        icon: 'lang-avstral.svg',
      },
      {
        value: 'avstr',
        content: 'Австрия',
        icon: 'lang-avstr.svg',
      },
      {
        value: 'avstral',
        content: 'Австралия',
        icon: 'lang-avstral.svg',
      },
      {
        value: 'aruba',
        content: 'Аруба',
        icon: 'lang-aruba.svg',
      },
      {
        value: 'avstr',
        content: 'Австрия',
        icon: 'lang-avstr.svg',
      },
      {
        value: 'avstral',
        content: 'Австралия',
        icon: 'lang-avstral.svg',
      },
      {
        value: 'aruba',
        content: 'Аруба',
        icon: 'lang-aruba.svg',
      },
      {
        value: 'avstr',
        content: 'Австрия',
        icon: 'lang-avstr.svg',
      },
      {
        value: 'avstral',
        content: 'Австралия',
        icon: 'lang-avstral.svg',
      },
      {
        value: 'aruba',
        content: 'Аруба',
        icon: 'lang-aruba.svg',
      },
    ],
  };

  handlerSwitcher(data) {
    const { name, value } = data;

    this.setState((state) => {
      const newState = { ...state };
      const switchers = { ...newState.switchers };

      switchers[name] = value;

      newState.switchers = switchers;

      return newState;
    });
  }

  componentDidMount() {
    this.setState((state) => {
      const newState = { ...state };

      this.notifications.forEach((item) => {
        newState.switchers[item.key] = false;
      });

      return newState;
    });
  }

  render() {
    const { switchers, language, region } = this.state;

    return (
      <div className="cabinetSettings">
        <div className="cabinetSettings__block">
          <div className="cabinetSettings__blockTitle _head">
            <h3 className="title">Уведомления</h3>
          </div>
          <div className="cabinetSettings__blockContent">
            {this.notifications.map((item, key) => {
              const value = switchers[item.key];

              return (
                <div className="cabinetSettings__blockItems" key={key}>
                  <div className="cabinetSettings__blockItem _action">
                    <div className="cabinetSettings__blockSwitcher">
                      <Switcher name={item.key} value={value} callback={this.handlerSwitcher} />
                    </div>
                  </div>
                  <div className="cabinetSettings__blockItem _content">
                    <label
                      htmlFor={item.key}
                      className={`cabinetSettings__blockDescription ${
                        value === true ? '_active' : ''
                      }`}>
                      {item.content}
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="cabinetSettings__block _wide">
          <div className="cabinetSettings__blockTitle">
            <h3 className="title">Язык интерфейса</h3>
          </div>
          <div className="cabinetSettings__blockContent">
            <div className="cabinetSettings__blockItems">
              <div className="cabinetSettings__blockItem _action">
                <p className="cabinetSettings__blockDescription">Язык</p>
              </div>
              <div className="cabinetSettings__blockItem _content">
                <div className="cabinetSettings__blockSelect">
                  <Select config={{ value: language, ...this.selectLanguage }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cabinetSettings__block _wide">
          <div className="cabinetSettings__blockTitle">
            <h3 className="title">Регіон</h3>
          </div>
          <div className="cabinetSettings__blockContent">
            <div className="cabinetSettings__blockItems">
              <div className="cabinetSettings__blockItem _action">
                <p className="cabinetSettings__blockDescription">Регіон</p>
              </div>
              <div className="cabinetSettings__blockItem _content">
                <div className="cabinetSettings__blockSelect">
                  <Select config={{ value: region, ...this.selectRegions }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cabinetSettings__block _wide">
          <div className="cabinetSettings__blockTitle">
            <h3 className="title">Привязать аккаунт</h3>
          </div>
          <div className="cabinetSettings__blockContent">
            <div className="cabinetSettings__blockItems">
              <div className="cabinetSettings__blockItem _action">
                <p className="cabinetSettings__blockDescription">Steam</p>
              </div>
              <div className="cabinetSettings__blockItem _content">
                <div className="cabinetSettings__blockAccount">
                  <i className="cabinetSettings__blockAccountIcon">
                    <Icon name="unpin" />
                  </i>
                  VERITA_Luts
                </div>
              </div>
            </div>
            <div className="cabinetSettings__blockItems">
              <div className="cabinetSettings__blockItem _action">
                <p className="cabinetSettings__blockDescription">Google </p>
              </div>
              <div className="cabinetSettings__blockItem _content">
                <div className="cabinetSettings__blockAccount">
                  <i className="cabinetSettings__blockAccountIcon">
                    <Icon name="unpin" />
                  </i>
                  Example@mail.com
                </div>
              </div>
            </div>
            <div className="cabinetSettings__blockItems">
              <div className="cabinetSettings__blockItem _action">
                <p className="cabinetSettings__blockDescription">Facebook</p>
              </div>
              <div className="cabinetSettings__blockItem _content">
                <div className="cabinetSettings__blockAccount">
                  <a href="#" className="edit">
                    Привязать
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cabinetSettings__block _wide">
          <div className="cabinetSettings__blockTitle">
            <h3 className="title">Изменить пароль</h3>
          </div>
          <div className="cabinetSettings__blockContent">
            <div className="cabinetSettings__blockItems">
              <div className="cabinetSettings__blockItem _action">
                <a href="#" className="edit">
                  Изменить
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cabinetSettings__block">
          <div className="cabinetSettings__exit">
            <i className="cabinetSettings__exitIcon">
              <Icon name="exit" />
            </i>
            Вийти з акаунту
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(InfoPartnersSettings);

InfoPartnersSettings.propTypes = {
  levels: PropTypes.array,
};
