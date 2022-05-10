import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import handlerAbsBlock from '../functions/handlerAbsBlock';
import DropList from './DropList.jsx';
import getOffsetPosition from '../functions/getOffsetPosition';
import Icon from './Icon.jsx';

class ChatUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  actionsBtn = {
    accept: {
      icon: 'done',
    },
    'add-friend': {
      icon: 'actions-accept',
    },
  };

  actions = {
    'show-profile': {
      preview: {
        type: 'icon',
        url: 'actions-profile',
      },
      name: 'Открыть профиль',
    },
    'add-friend': {
      preview: {
        type: 'icon',
        url: 'actions-accept',
      },
      name: 'Принять в друзья',
    },
    'accept-friend': {
      preview: {
        type: 'icon',
        url: 'actions-accept',
      },
      name: 'Добавить в друзья',
    },
    'share-profile': {
      preview: {
        type: 'icon',
        url: 'actions-share',
      },
      name: 'Поделиться профилем',
    },
    claim: {
      preview: {
        type: 'icon',
        url: 'actions-claim',
      },
      name: 'Пожаловаться',
    },
    ban: {
      preview: {
        type: 'icon',
        url: 'actions-ban',
      },
      name: 'Заблокировать',
    },
    decline: {
      preview: {
        type: 'icon',
        url: 'actions-decline',
      },
      name: 'Отклонить',
    },
    'delete-friend': {
      preview: {
        type: 'icon',
        url: 'actions-delete',
      },
      name: 'Удалить из друзей',
    },
  };

  render() {
    const { model, settings } = this.props;

    return (
      <div className={`chatUser _online ${(settings && settings.class) || ``}`}>
        <div className="chatUser__avatar">
          <div className="chatUser__avatarInner">
            <img
              src={require(`../img/${model.avatar}`).default}
              alt=""
              className="chatUser__avatarImage"
            />
          </div>
        </div>
        <div className="chatUser__info">
          <p className="chatUser__name">{model.name}</p>
          <p className="chatUser__status">{model.status}</p>
        </div>
        {model.award && (
          <img src={require(`../img/${model.award}`).default} alt="" className="chatUser__award" />
        )}
        <div className="chatUser__actions">
          {settings &&
            settings.actions &&
            settings.actions.map((action, key) => (
              <div className={`chatUser__btn _${action}`} key={key}>
                <i className="chatUser__btnIcon">
                  <Icon name={this.actionsBtn[action] && this.actionsBtn[action].icon} />
                </i>
              </div>
            ))}

          <div
            className="chatUser__more"
            onClick={(e) => {
              handlerAbsBlock('toggle', {
                children: (
                  <DropList
                    config={{
                      key: 'actions',
                      items: settings.actionsList.map((item) => this.actions[item]),
                    }}
                    callback={() => {
                      handlerAbsBlock('hide');
                    }}
                    handler={this.handlerUser}
                  />
                ),
                coords: getOffsetPosition(e.target.closest('.chatUser__more'), [10, 38]),
              });
            }}>
            <i className="chatUser__moreIcon">
              <Icon name="more" />
            </i>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ChatUser);

ChatUser.propTypes = {
  model: PropTypes.object,
  settings: PropTypes.object,
};
