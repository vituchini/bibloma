import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class GridGamePair extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { model } = this.props;

    return (
      <div className="gridGamePair">
        {model.players.map((player, key) => (
          <div className={`gridGamePair__info ${player.isWin === true ? '_win' : ''}`} key={key}>
            <p className="gridGamePair__infoNumber">{player.number}</p>
            <div className="gridGamePair__infoPlayer">
              <div className="gridGamePair__infoPlayerAvatar">
                <img
                  src={require(`../img/${player.avatar}`).default}
                  alt=""
                  className="gridGamePair__infoPlayerAvatarImage"
                />
              </div>
              <p className="gridGamePair__infoPlayerName">{player.name}</p>
              <p className="gridGamePair__infoPlayerResult">{player.result}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(GridGamePair);

GridGamePair.propTypes = {
  model: PropTypes.object,
};
