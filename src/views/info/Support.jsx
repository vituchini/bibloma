import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../../components/Icon.jsx';

class InfoSupport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSectionName: 'account',
      sections: {},
    };

    this.handlerTab = this.handlerTab.bind(this);
    this.handlerQuestion = this.handlerQuestion.bind(this);
  }

  sections = [
    {
      key: 'account',
      contentLink: 'АККАУНТ',
      questions: [
        {
          title: 'Что делать если мой аккаунт заблокировали?',
          content:
            'Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что сложившаяся структура организации требуют определения и уточнения новых предложений.',
        },
        {
          title: 'Почему я не могу вывести выигрыш?',
          content:
            'Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что сложившаяся структура организации требуют определения и уточнения новых предложений.',
        },
        {
          title: 'Зачем нужна калибровка?',
          content:
            'Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что сложившаяся структура организации требуют определения и уточнения новых предложений.',
        },
        {
          title: 'Как работает античит?',
          content:
            'Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что сложившаяся структура организации требуют определения и уточнения новых предложений.',
        },
        {
          title: 'Как зарегистрироваться на турнир?',
          content:
            'Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что сложившаяся структура организации требуют определения и уточнения новых предложений.',
        },
      ],
    },
    {
      key: 'pays',
      contentLink: 'ПЛАТЕЖИ',
      questions: [
        {
          title: 'Зачем нужна калибровка?',
          content:
            'Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что сложившаяся структура организации требуют определения и уточнения новых предложений.',
        },
        {
          title: 'Как работает античит?',
          content:
            'Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что сложившаяся структура организации требуют определения и уточнения новых предложений.',
        },
        {
          title: 'Как зарегистрироваться на турнир?',
          content:
            'Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что сложившаяся структура организации требуют определения и уточнения новых предложений.',
        },
      ],
    },
    {
      key: 'tournaments',
      contentLink: 'ТУРНИРЫ',
      questions: [
        {
          title: 'Что делать если мой аккаунт заблокировали?',
          content:
            'Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что сложившаяся структура организации требуют определения и уточнения новых предложений.',
        },
        {
          title: 'Как работает античит?',
          content:
            'Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что сложившаяся структура организации требуют определения и уточнения новых предложений.',
        },
        {
          title: 'Как зарегистрироваться на турнир?',
          content:
            'Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что сложившаяся структура организации требуют определения и уточнения новых предложений.',
        },
      ],
    },
    {
      key: 'games',
      contentLink: 'МАТЧИ',
      questions: [
        {
          title: 'Что делать если мой аккаунт заблокировали?',
          content:
            'Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что сложившаяся структура организации требуют определения и уточнения новых предложений.',
        },
        {
          title: 'Почему я не могу вывести выигрыш?',
          content:
            'Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что сложившаяся структура организации требуют определения и уточнения новых предложений.',
        },
        {
          title: 'Зачем нужна калибровка?',
          content:
            'Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что сложившаяся структура организации требуют определения и уточнения новых предложений.',
        },
      ],
    },
  ];

  handlerTab(section) {
    this.setState((state) => {
      const newState = { ...state };

      newState.currentSectionName = section;

      return newState;
    });
  }

  componentDidMount() {
    this.setState((state) => {
      const newState = { ...state };

      const sections = {};

      this.sections.forEach((item) => {
        sections[item.key] = {};

        item.questions.forEach((question, key) => {
          sections[item.key][key] = {
            isShow: key === 0,
          };
        });
      });

      newState.sections = sections;

      return newState;
    });
  }

  handlerQuestion(name, key) {
    this.setState((state) => {
      const newState = { ...state };

      const sections = { ...newState.sections };

      Object.keys(sections[name]).forEach((keyItem) => {
        if (keyItem !== key) {
          sections[name][keyItem].isShow = false;
        }
      });

      sections[name][key].isShow = true;

      newState.sections = sections;

      return newState;
    });
  }

  render() {
    const { currentSectionName, sections } = this.state;
    const currentSection = this.sections.find((item) => item.key === currentSectionName);

    return (
      <div className="infoSupport">
        <div className="infoSupport__inner">
          <div className="infoSupport__head">
            <h1 className="infoSupport__title">Опишите свою проблему</h1>
            <div className="infoSupport__headSearch">
              <i className="infoSupport__headSearchIcon">
                <Icon name="search" />
              </i>
              <input type="text" className="infoSupport__headSearchInput" placeholder="Поиск" />
            </div>
          </div>
          <div className="infoSupport__content">
            <div className="infoSupport__questions">
              <h2 className="infoSupport__title">Частые вопросы</h2>
              <div className="infoSupport__tabs">
                {this.sections.map((section, key) => (
                  <div className="infoSupport__tab" key={key}>
                    <label className="checkbox">
                      <input
                        type="radio"
                        className="checkbox__input"
                        checked={currentSectionName === section.key}
                        onChange={() => this.handlerTab(section.key)}
                      />
                      <div className="checkbox__view">{section.contentLink}</div>
                    </label>
                  </div>
                ))}
              </div>
              <div className="infoSupport__questionsBox" key={currentSectionName}>
                {currentSection.questions.map((question, key) => (
                  <div
                    className={`infoSupport__question ${
                      sections[currentSectionName] &&
                      sections[currentSectionName][key].isShow === true
                        ? '_show'
                        : ''
                    }`}
                    key={key}>
                    <div
                      className="infoSupport__questionHead"
                      onClick={() => this.handlerQuestion(currentSectionName, key)}>
                      <h3 className="infoSupport__questionTitle">{question.title}</h3>
                      <i className="infoSupport__questionIcon">
                        <Icon name="close" />
                      </i>
                    </div>
                    <p className="infoSupport__questionContent">{question.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="infoSupport__form">
              <h3 className="infoSupport__title">Форма обратной связи</h3>
              <p className="infoSupport__formDescription">
                Помогите нам улучшить платформу BattleStar. Напишите нам какие игры вы хотите
                добавить и что хотите изменить.
              </p>
              <div className="infoSupport__formFields">
                <div className="infoSupport__formField _short">
                  <input
                    type="text"
                    className="infoSupport__formInput"
                    placeholder="Электронная почта *"
                  />
                </div>
                <div className="infoSupport__formField _short">
                  <input type="text" className="infoSupport__formInput" placeholder="Ваше имя *" />
                </div>
                <div className="infoSupport__formField _full _area">
                  <textarea
                    className="infoSupport__formInput"
                    placeholder="Введите текст сообщения *"
                  />
                </div>
              </div>
              <div className="infoSupport__formButton">Отправить</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps)(InfoSupport);

InfoSupport.propTypes = {
  levels: PropTypes.array,
};
