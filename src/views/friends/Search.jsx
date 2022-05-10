import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ChatUser from '../../components/ChatUser.jsx';

class FriendsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  users = [
    {
      avatar: 'avatar-image.jpg',
      name: 'SergioRicht',
      status: 'Играет в CS:GO',
      award: 'game-level-1.png',
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'SergioRicht',
      status: 'Играет в CS:GO',
      award: 'game-level-2.png',
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'SergioRicht',
      status: 'Играет в CS:GO',
      award: 'game-level-3.png',
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'SergioRicht',
      status: 'Играет в CS:GO',
      award: 'game-level-1.png',
    },
  ];

  render() {
    return (
      <div className="friendsChat">
        <div className="friendsChat__content">
          <div className="friendsChat__search">
            <input
              type="text"
              className="friendsChat__searchInput"
              placeholder="Пошук по никнейму"
            />
          </div>
          <div className="friendsChat__searchUsers">
            {this.users.map((user, key) => (
              <div className="friendsChat__searchUser" key={key}>
                <ChatUser
                  model={user}
                  settings={{
                    actions: ['add-friend'],
                    actionsList: ['show-profile', 'accept-friend', 'share-profile', 'claim', 'ban'],
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps)(FriendsSearch);

FriendsSearch.propTypes = {
  levels: PropTypes.array,
};
