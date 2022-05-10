import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../../components/Icon.jsx';
import handlerAbsBlock from '../../functions/handlerAbsBlock';
import ChatUser from '../../components/ChatUser.jsx';

class FriendsAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  users = [
    {
      avatar: 'avatar-image.jpg',
      name: 'SergioRicht',
      status: 'Играет в CS:GO',
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'SergioRicht',
      status: 'Играет в CS:GO',
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'SergioRicht',
      status: 'Играет в CS:GO',
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'SergioRicht',
      status: 'Играет в CS:GO',
    },
  ];

  render() {
    return (
      <div className="friendsChat">
        <div className="friendsChat__item _bar">
          <div className="friendsChat__search">
            <input
              type="text"
              className="friendsChat__searchInput"
              placeholder="Пошук по друзьям"
            />
          </div>
          <div
            className="friendsChat__users"
            onScroll={() => {
              handlerAbsBlock('hide');
            }}>
            {this.users.map((user, key) => (
              <div className="friendsChat__user" key={key}>
                <ChatUser
                  model={user}
                  settings={{
                    actionsList: ['show-profile', 'share-profile', 'delete-friend', 'claim', 'ban'],
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="friendsChat__item _content">
          <div className="friendsChat__chat">
            <div className="friendsChat__chatContent">
              <div className="friendsChat__chatMessages">
                {this.messages.map((message, key) => (
                  <div className="friendsChat__chatMessage" key={key}>
                    <div
                      className={`chatBarMessage _friends ${message.isMe === true ? '_me' : ''}`}>
                      <div className="chatBarMessage__items">
                        <div className="chatBarMessage__item _avatar">
                          <div className="chatBarMessage__avatar">
                            <img
                              src={require(`../../img/${message.avatar}`).default}
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
            <div className="friendsChat__chatActions">
              <input
                type="text"
                className="friendsChat__chatActionsInput"
                placeholder="Введите текст сообщения..."
              />
              <div className="friendsChat__chatActionsSend">
                <i className="friendsChat__chatActionsSendIcon">
                  <Icon name="arrow-up" />
                </i>
              </div>
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

export default connect(mapStateToProps)(FriendsAll);

FriendsAll.propTypes = {
  levels: PropTypes.array,
};
