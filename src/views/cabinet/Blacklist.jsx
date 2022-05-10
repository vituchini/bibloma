import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../../components/Icon.jsx';

class Blacklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: false,
    };
  }

  users = [
    {
      avatar: 'avatar-image.jpg',
      name: 'SergioRicht',
      status: 'Играет в CS:GO',
      icon: 'game-level-1.png',
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'SergioRicht',
      status: 'ОНЛАЙН',
      icon: 'game-level-2.png',
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'SergioRicht',
      status: 'Играет в DOTA 2',
      icon: 'game-level-3.png',
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'SergioRicht',
      status: 'Играет в CS:GO',
      icon: 'game-level-1.png',
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'SergioRicht',
      status: 'ОНЛАЙН',
      icon: 'game-level-2.png',
    },
    {
      avatar: 'avatar-image.jpg',
      name: 'SergioRicht',
      status: 'Играет в DOTA 2',
      icon: 'game-level-3.png',
    },
  ];

  render() {
    const { isEmpty } = this.state;

    return (
      <div className={`cabinetBlacklist`}>
        {isEmpty !== true ? (
          <>
            <div className="cabinetBlacklist__title">
              <h3 className="title">Черный список</h3>
            </div>
            <div className="cabinetBlacklist__items">
              <div className="cabinetBlacklist__item _list">
                {this.users.map((user, key) => (
                  <div className="cabinetBlacklist__user" key={key}>
                    <div className="cabinetBlacklist__userInfo">
                      <div className="user">
                        <div className="user__avatar">
                          <div className="user__avatarBox">
                            <img
                              src={require(`../../img/${user.avatar}`).default}
                              alt=""
                              className="user__avatarImage"
                            />
                          </div>
                        </div>
                        <div className="user__info">
                          <p className="user__name">{user.name}</p>
                          <p className="user__status">{user.status}</p>
                        </div>
                      </div>
                    </div>
                    <img
                      src={require(`../../img/${user.icon}`).default}
                      alt=""
                      className="cabinetBlacklist__userIcon"
                    />
                    <div className="cabinetBlacklist__userMore">
                      <i className="cabinetBlacklist__userMoreIcon">
                        <Icon name="more" />
                      </i>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cabinetBlacklist__item _info">
                <div className="cabinetBlacklist__info">
                  <i className="cabinetBlacklist__infoIcon">
                    <Icon name="info" />
                  </i>
                  <p className="cabinetBlacklist__infoDescription">
                    Люди из черного списка не могут приглашать вас в команды, отправлять сообщения
                    или добавлять в пати
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="cabinetBlacklist__empty">
            <div className="cabinetBlacklist__emptyInner">
              <h4 className="cabinetBlacklist__emptyTitle">Черный список пуст</h4>
              <p className="cabinetBlacklist__emptyDescription">Вы еще никого не заблокировали</p>
              <p className="cabinetBlacklist__emptyDescription">
                Люди из черного списка не могут приглашать вас в команды, отправлять сообщения или
                добавлять в пати
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Blacklist);

Blacklist.propTypes = {
  levels: PropTypes.array,
};
