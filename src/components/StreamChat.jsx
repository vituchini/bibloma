import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

class StreamChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  messages = [
    {
      avatar: 'avatar-image.jpg',
      name: 'JohnTrawolta_4',
      text: 'Good game!',
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'JohnTrawolta_4',
      text: 'С другой стороны реализация намеченных плановых заданий обеспе чивает широкому кругу (специалистов) участие в форми ровании систем массового участия.',
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'JohnTrawolta_4',
      text: 'С другой стороны реализация намеченных плановых заданий обеспе чивает широкому кругу (специалистов) участие в форми ровании систем массового участия.',
      isMe: true,
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'JohnTrawolta_4',
      text: 'С другой стороны реализация намеченных плановых заданий обеспе чивает широкому кругу (специалистов) участие в форми ровании систем массового участия.',
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'JohnTrawolta_4',
      text: 'С другой стороны реализация намеченных плановых заданий обеспе чивает широкому кругу (специалистов) участие в форми ровании систем массового участия.',
      isMe: true,
    },
  ];

  render() {
    return (
      <div className={`chatBar _show _stream`}>
        <div className="chatBar__inner">
          <div className="chatBar__innerHead">
            <div className="chatBar__innerHeadTop">
              <p className="chatBar__innerHeadName">
                <i className="chatBar__innerHeadNameIcon">
                  <Icon name="chat" />
                </i>
                Онлайн чат
              </p>
              <p className="chatBar__innerHeadDescription">1340 участников</p>
            </div>
          </div>
          <div className="chatBar__innerContent">
            <div className="chatBar__innerMessages">
              {this.messages.map((message, key) => (
                <div className="chatBar__innerMessage" key={key}>
                  <div className={`chatBarMessage _stream ${message.isMe === true ? '_me' : ''}`}>
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentGame: state.currentGame };
}

export default connect(mapStateToProps)(StreamChat);

StreamChat.propTypes = {
  currentGame: PropTypes.string,
};
