import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../components/Icon.jsx';

class ChatSupport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      isFull: false,
    };

    this.handlerState = this.handlerState.bind(this);
  }

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
      text: 'Cool!!!',
      date: '12:15',
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'JohnTrawolta_4',
      text: 'Cool!!!',
      date: '12:15',
      isMe: true,
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'JohnTrawolta_4',
      text: 'Cool!!!',
      date: '12:15',
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'JohnTrawolta_4',
      text: 'Cool!!!',
      date: '12:15',
      isMe: true,
    },
  ];

  handlerState(name, value) {
    this.setState((state) => {
      const newState = { ...state };

      if (name === 'isShow' && value === false) {
        newState.isFull = false;
      }

      if (name === 'isFull') {
        newState[name] = !newState[name];
      } else {
        newState[name] = value;
      }

      return newState;
    });
  }

  render() {
    const { isShow, isFull } = this.state;

    return (
      <div className={`body__chatSupport ${isFull === true ? '_fullSize' : ''}`}>
        <div
          className={`chatSupport ${isShow === true ? '_show' : ''} ${
            isFull === true ? '_fullSize' : ''
          }`}>
          {isFull !== true && (
            <div
              className="chatSupport__btn"
              onClick={() => {
                this.handlerState('isShow', true);
              }}>
              <i className="chatSupport__btnIcon">
                <Icon name="chat-support" />
              </i>
            </div>
          )}
          <div className="chatSupport__window">
            {isShow === true ? (
              <>
                <div className="chatSupport__chat">
                  <div className="chatSupport__chatHead">
                    Чат поддержки
                    <div className="chatSupport__chatHeadIcons">
                      <i
                        className="chatSupport__chatHeadIcon"
                        onClick={() => {
                          this.handlerState('isFull', true);
                        }}>
                        <Icon name="full-size" />
                      </i>
                      <i
                        className="chatSupport__chatHeadIcon"
                        onClick={() => {
                          this.handlerState('isShow', false);
                        }}>
                        <Icon name="arrow-down" />
                      </i>
                    </div>
                  </div>
                  <div className="chatSupport__chatContent">
                    <div className="chatSupport__chatMessages">
                      {this.messages.map((message, key) => (
                        <div className="chatSupport__chatMessage" key={key}>
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
                                {message.date && (
                                  <p className="chatBarMessage__date">{message.date}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="chatSupport__chatFoot">
                    <div className="chatSupport__chatFootEmodzi">
                      <i className="chatSupport__chatFootEmodziIcon">
                        <Icon name="emodzi" />
                      </i>
                    </div>
                    <input
                      type="text"
                      className="chatSupport__chatFootInput"
                      placeholder="Введите сообщение"
                    />
                    <i className="chatSupport__chatFootSend">
                      <Icon name="send-message" />
                    </i>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className="chatSupport__windowHide"
                  onClick={() => {
                    this.handlerState('isShow', true);
                  }}>
                  Онлайн чат
                  <i className="chatSupport__windowHideIcon">
                    <Icon name="arrow-down" />
                  </i>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentGame: state.currentGame };
}

export default connect(mapStateToProps)(ChatSupport);

ChatSupport.propTypes = {
  currentGame: PropTypes.string,
};
