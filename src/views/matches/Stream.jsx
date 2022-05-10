import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../../components/Icon.jsx';
import StreamChat from '../../components/StreamChat.jsx';

// const langs = require('../../info/langs.json');

class MatchesStream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  user = {
    lang: 'ru',
    name: 'PlayFair Display$$$',
    info: {
      map: 'Mirage',
      price: '5000 ₽ ',
      mode: '5x5',
      usersCounter: '8/10',
      id: '54692725',
    },
  };

  infoNames = {
    map: 'Карта',
    price: 'Ставка',
    mode: 'Режим',
    usersCounter: 'Участников',
    id: 'ID',
  };

  orderInfo = ['map', 'price', 'mode', 'usersCounter', 'id'];

  render() {
    return (
      <div className={`matchesStream`}>
        <div className="matchesStream__head">
          <div className="matchesStream__teams">
            <div className="matchesStream__teamsInner">
              <div className="matchesStream__teamsItem">
                <img
                  src={require('../../img/logo-team-1.png').default}
                  alt=""
                  className="matchesStream__teamsLogo"
                />
                <p className="matchesStream__teamsName">ApacheLeader</p>
              </div>
              <div className="matchesStream__teamsDel">VS</div>
              <div className="matchesStream__teamsItem">
                <img
                  src={require('../../img/logo-team-2.png').default}
                  alt=""
                  className="matchesStream__teamsLogo"
                />
                <p className="matchesStream__teamsName">DeJaVU</p>
              </div>
            </div>
            <div className="matchesStream__share">
              <i className="matchesStream__shareIcon">
                <Icon name="share" />
              </i>
            </div>
          </div>
          {/* <div className="matchesStream__user">
            <img
              src={require(`../../img/${langs[this.user.lang].image}`).default}
              alt=""
              className="matchesStream__userLang"
            />
            <p className="matchesStream__userName">{this.user.name}</p>
            <div className="matchesStream__share">
            <i className="matchesStream__shareIcon">
                <Icon name="share" />
              </i>
            </div>
          </div> */}
          <div className="matchesStream__info">
            {this.orderInfo.map((prop) => (
              <div className="matchesStream__infoItem" key={prop}>
                <p className="matchesStream__infoSupport">{this.infoNames[prop]}</p>
                <p className="matchesStream__infoValue">
                  {this.user.info[prop]}

                  {prop === 'id' && (
                    <i className="matchesStream__infoCopy">
                      <Icon name="copy" />
                    </i>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="matchesStream__items">
          <div className="matchesStream__item _video">
            <img
              src={require('../../img/stream.jpg').default}
              alt=""
              className="matchesStream__video"
            />
          </div>
          <div className="matchesStream__item _chat">
            <StreamChat />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentGame: state.currentGame };
}

export default connect(mapStateToProps)(MatchesStream);

MatchesStream.propTypes = {
  currentGame: PropTypes.string,
};
