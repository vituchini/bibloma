import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TournamentsTournamentPlayers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  players = [
    {
      logo: 'logo-team-3.png',
      name: 'Stealth Dragons',
      rate: '1774',
    },
    {
      logo: 'logo-team-4.png',
      name: 'Stealth Dragons',
      rate: '1774',
    },
    {
      logo: 'logo-team-3.png',
      name: 'Stealth Dragons',
      rate: '1774',
    },
    {
      logo: 'logo-team-4.png',
      name: 'Stealth Dragons',
      rate: '1774',
    },
    {
      logo: 'logo-team-3.png',
      name: 'Stealth Dragons',
      rate: '1774',
    },
    {
      logo: 'logo-team-4.png',
      name: 'Stealth Dragons',
      rate: '1774',
    },
    {
      logo: 'logo-team-3.png',
      name: 'Stealth Dragons',
      rate: '1774',
    },
    {
      logo: 'logo-team-4.png',
      name: 'Stealth Dragons',
      rate: '1774',
    },
    {
      logo: 'logo-team-3.png',
      name: 'Stealth Dragons',
      rate: '1774',
    },
    {
      logo: 'logo-team-4.png',
      name: 'Stealth Dragons',
      rate: '1774',
    },
    {
      logo: 'logo-team-3.png',
      name: 'Stealth Dragons',
      rate: '1774',
    },
    {
      logo: 'logo-team-4.png',
      name: 'Stealth Dragons',
      rate: '1774',
    },
    {
      logo: 'logo-team-3.png',
      name: 'Stealth Dragons',
      rate: '1774',
    },
    {
      logo: 'logo-team-4.png',
      name: 'Stealth Dragons',
      rate: '1774',
    },
    {
      logo: 'logo-team-3.png',
      name: 'Stealth Dragons',
      rate: '1774',
    },
    {
      logo: 'logo-team-4.png',
      name: 'Stealth Dragons',
      rate: '1774',
    },
  ];

  render() {
    return (
      <div className="tournamentsTournament__players">
        {this.players.map((player, key) => (
          <div className="tournamentsTournament__player" key={key}>
            <div className="playerCard">
              <p className="playerCard__number">{key + 1}</p>
              <img
                src={require(`../../../img/${player.logo}`).default}
                alt=""
                className="playerCard__logo"
              />
              <p className="playerCard__name">{player.name}</p>
              <p className="playerCard__rate">{player.rate}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps)(TournamentsTournamentPlayers);

TournamentsTournamentPlayers.propTypes = {
  levels: PropTypes.array,
};
