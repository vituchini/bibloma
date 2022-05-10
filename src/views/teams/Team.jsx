import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import getWidthText from '../../functions/getWidthText';
import Icon from '../../components/Icon.jsx';

class TeamsTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="teams__team">
          <div className="team">
            <div className="team__preview">
              <img
                src={require('../../img/logo-team-1-big.png').default}
                alt=""
                className="team__previewImage"
              />
              <div className="team__previewChange">
                <i className="team__previewChangeIcon">
                  <Icon name="change-image" />
                </i>
                Изменить
              </div>
              <img
                src={require('../../img/logo-team-1-big.png').default}
                alt=""
                className="team__previewImage _back"
              />
            </div>
            <div className="team__content">
              <div className="team__name">
                <input
                  type="text"
                  className="team__nameItem"
                  defaultValue="GREEN Dragon"
                  readOnly
                  style={{
                    width: `${getWidthText('GREEN Dragon', { size: '36', family: 'Regular' })}px`,
                  }}
                />
                <i className="team__nameIcon">
                  <Icon name="edit" />
                </i>
              </div>
              <div className="team__awards">
                <img
                  src={require('../../img/award-icon-1.png').default}
                  alt=""
                  className="team__awardsItem"
                />
                <img
                  src={require('../../img/award-icon-2.png').default}
                  alt=""
                  className="team__awardsItem"
                />
                <img
                  src={require('../../img/award-icon-3.png').default}
                  alt=""
                  className="team__awardsItem"
                />
                <img
                  src={require('../../img/award-icon-4.png').default}
                  alt=""
                  className="team__awardsItem"
                />
              </div>
              <p className="team__description">
                Значення проблем настільки очевидна що... с широким активом способствует подготовки
                и&nbsp;реализации позиций, занимаемых участниками в отношении поставленных задач
              </p>
              <div className="team__info">
                <div className="team__infoItem">
                  <img
                    src={require('../../img/team-info-icon-1.svg').default}
                    alt=""
                    className="team__infoItemIcon"
                  />
                  <div className="team__infoItemContent">
                    <h3 className="team__infoItemTitle">2 победы</h3>
                    <p className="team__infoItemDescription">в Турнірах</p>
                  </div>
                </div>
                <div className="team__infoItem">
                  <img
                    src={require('../../img/team-info-icon-2.svg').default}
                    alt=""
                    className="team__infoItemIcon"
                  />
                  <div className="team__infoItemContent">
                    <h3 className="team__infoItemTitle">
                      238 900 <span className="_strike">BS</span>
                    </h3>
                    <p className="team__infoItemDescription">Заработано</p>
                  </div>
                </div>
                <div className="team__infoItem">
                  <img
                    src={require('../../img/team-info-icon-3.svg').default}
                    alt=""
                    className="team__infoItemIcon"
                  />
                  <div className="team__infoItemContent">
                    <h3 className="team__infoItemTitle">245 матчей</h3>
                    <p className="team__infoItemDescription">Сыграно</p>
                  </div>
                </div>
                <div className="team__infoItem">
                  <img
                    src={require('../../img/team-info-icon-4.svg').default}
                    alt=""
                    className="team__infoItemIcon"
                  />
                  <div className="team__infoItemContent">
                    <h3 className="team__infoItemTitle">13/15</h3>
                    <p className="team__infoItemDescription">Учасників</p>
                  </div>
                </div>
              </div>
              <div className="team__users">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((key) => (
                  <div className="team__user" key={key}>
                    <img
                      src={require('../../img/avatar-image.jpg').default}
                      alt=""
                      className="team__userImage"
                    />
                  </div>
                ))}
                <div className="team__user _add">+</div>
                <div className="team__user _counter">9</div>
                <div className="team__usersInfo">Ранг: 1320</div>
              </div>
              <div className="team__actions">
                <div className="team__action">
                  <i className="team__actionIcon">
                    <Icon name="share" />
                  </i>
                  Поделиться
                </div>
                <div className="team__action _disable">
                  <i className="team__actionIcon">
                    <Icon name="chat-2" />
                  </i>
                  Чат команды
                </div>
                <div className="team__action _full _vote">
                  <i className="team__actionIcon">
                    <Icon name="statistic" />
                  </i>
                  Предложить голосование
                </div>
                <div className="team__action _fullMed _capitan">
                  <i className="team__actionIcon">
                    <Icon name="capitan" />
                  </i>
                  Стать капитаном
                </div>
                <div className="team__action _fullMed _delete">
                  <i className="team__actionIcon">
                    <Icon name="delete-user" />
                  </i>
                  Удалить участника
                </div>
                <div className="team__action _leave">
                  <i className="team__actionIcon">
                    <Icon name="leave-team" />
                  </i>
                  Покинуть команду
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    levels: state.levels,
  };
}

export default connect(mapStateToProps)(TeamsTeam);

TeamsTeam.propTypes = {
  levels: PropTypes.array,
};
