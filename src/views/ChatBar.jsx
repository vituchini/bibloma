import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../components/Icon.jsx';

class ChatBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      currentLink: 'main',
    };

    this.handlerLink = this.handlerLink.bind(this);
    this.handlerShow = this.handlerShow.bind(this);
  }

  links = [
    {
      key: 'main',
      contentLink: 'ОБЩИЙ ЧАТ',
    },
    {
      key: 'team',
      contentLink: 'КОМАНДА',
    },
  ];

  messages = [
    {
      avatar: 'avatar-image.jpg',
      name: 'JohnTrawolta_4',
      text: 'Good game!',
      date: '12:15',
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'JohnTrawolta_4',
      text: 'С другой стороны реализация намеченных плановых заданий обеспе чивает широкому кругу (специалистов) участие в форми ровании систем массового участия.',
      date: '12:15',
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'JohnTrawolta_4',
      text: 'С другой стороны реализация намеченных плановых заданий обеспе чивает широкому кругу (специалистов) участие в форми ровании систем массового участия.',
      date: '12:15',
      isMe: true,
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'JohnTrawolta_4',
      text: 'С другой стороны реализация намеченных плановых заданий обеспе чивает широкому кругу (специалистов) участие в форми ровании систем массового участия.',
      date: '12:15',
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'JohnTrawolta_4',
      text: 'С другой стороны реализация намеченных плановых заданий обеспе чивает широкому кругу (специалистов) участие в форми ровании систем массового участия.',
      date: '12:15',
      isMe: true,
    },
  ];

  handlerLink(key) {
    this.setState((state) => {
      const newState = { ...state };

      newState.currentLink = key;

      return newState;
    });
  }

  handlerShow(isShow) {
    this.setState((state) => {
      const newState = { ...state };

      newState.isShow = isShow;

      return newState;
    });
  }

  render() {
    const { isShow, currentLink } = this.state;

    return (
      <div className={`chatBar ${isShow === true ? '_show' : ''}`}>
        {isShow === false ? (
          <>
            <div
              className="chatBar__show"
              onClick={() => {
                this.handlerShow(true);
              }}>
              <i className="chatBar__showIcon">
                <Icon name="arrow-prev-short" />
              </i>
            </div>
            <div className="chatBar__preview">
              <div className="chatBar__previewHead">
                <p className="chatBar__previewName">
                  <i className="chatBar__previewNameIcon">
                    <Icon name="chat" />
                  </i>
                  Чат
                </p>
              </div>
              <div className="chatBar__previewUsers">
                <div className="chatBar__previewUser">
                  <img
                    src={require('../img/avatar-image.jpg').default}
                    alt=""
                    className="chatBar__previewUserImage"
                  />
                </div>
                <div className="chatBar__previewUser">
                  <img
                    src={require('../img/avatar-image.jpg').default}
                    alt=""
                    className="chatBar__previewUserImage"
                  />
                </div>
                <div className="chatBar__previewUser">
                  <img
                    src={require('../img/avatar-image.jpg').default}
                    alt=""
                    className="chatBar__previewUserImage"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="chatBar__inner">
              <div className="chatBar__innerHead">
                <div className="chatBar__innerHeadTop">
                  <p className="chatBar__innerHeadName">
                    <i className="chatBar__innerHeadNameIcon">
                      <Icon name="chat" />
                    </i>
                    Чат команды
                  </p>
                  <i
                    className="chatBar__innerHeadPin"
                    onClick={() => {
                      this.handlerShow(false);
                    }}>
                    <Icon name="pin" />
                  </i>
                </div>
                <div className="chatBar__innerHeadLinks">
                  {this.links.map((link, key) => (
                    <div className="chatBar__innerHeadLink" key={key}>
                      <label className="checkbox _medium">
                        <input
                          type="radio"
                          className="checkbox__input"
                          checked={currentLink === link.key}
                          onChange={() => this.handlerLink(link.key)}
                        />
                        <div className="checkbox__view">{link.contentLink}</div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="chatBar__innerContent">
                <div className="chatBar__innerMessages">
                  {this.messages.map((message, key) => (
                    <div className="chatBar__innerMessage" key={key}>
                      <div className={`chatBarMessage ${message.isMe === true ? '_me' : ''}`}>
                        <div className="chatBarMessage__items">
                          <div className="chatBarMessage__item _avatar">
                            <div className="chatBarMessage__avatar">
                              <img
                                src={require(`../img/${message.avatar}`).default}
                                alt=""
                                className="chatBarMessage__avatarImage"
                              />
                            </div>
                          </div>
                          <div className="chatBarMessage__item _content">
                            <div className="chatBarMessage__message">
                              <p className="chatBarMessage__messageName">{message.name}</p>
                              <p className="chatBarMessage__messageText">{message.text}</p>
                            </div>
                            {message.date && <p className="chatBarMessage__date">{message.date}</p>}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="chatBar__innerFoot">
                <div className="chatBar__innerFootAvatar">
                  <img
                    src={require('../img/avatar-image.jpg').default}
                    alt=""
                    className="chatBar__innerFootAvatarImage"
                  />
                </div>
                <input
                  type="text"
                  className="chatBar__innerFootInput"
                  placeholder="Введите текст сообщения..."
                />
                <div className="chatBar__innerFootSend">
                  <i className="chatBar__innerFootSendIcon">
                    <Icon name="arrow-up" />
                  </i>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentGame: state.currentGame };
}

export default connect(mapStateToProps)(ChatBar);

ChatBar.propTypes = {
  currentGame: PropTypes.string,
};
