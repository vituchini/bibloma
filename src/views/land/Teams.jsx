import React from 'react';
import { connect } from 'react-redux';

import TeamCard from '../../components/TeamCard.jsx';

class LandInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  teams = [
    {
      avatar: 'logo-team-5.png',
      name: 'PlayFair Display$$$',
      rate: '2674',
      counterGames: '43',
      amount: '200 029',
      counterUsers: '9/15',
      awards: ['award-icon-1.png', 'award-icon-2.png', 'award-icon-3.png', 'award-icon-4.png'],
    },
    {
      avatar: 'logo-team-6.png',
      name: 'PlayFair Display$$$',
      rate: '2674',
      counterGames: '43',
      amount: '200 029',
      counterUsers: '9/15',
      awards: ['award-icon-1.png', 'award-icon-2.png', 'award-icon-3.png', 'award-icon-4.png'],
    },
    {
      avatar: 'logo-team-7.png',
      name: 'PlayFair Display$$$',
      rate: '2674',
      counterGames: '43',
      amount: '200 029',
      counterUsers: '9/15',
      awards: ['award-icon-1.png', 'award-icon-2.png', 'award-icon-3.png', 'award-icon-4.png'],
    },
    {
      avatar: 'logo-team-6.png',
      name: 'PlayFair Display$$$',
      rate: '2674',
      counterGames: '43',
      amount: '200 029',
      counterUsers: '9/15',
      awards: ['award-icon-1.png', 'award-icon-2.png', 'award-icon-3.png', 'award-icon-4.png'],
    },
    {
      avatar: 'logo-team-7.png',
      name: 'PlayFair Display$$$',
      rate: '2674',
      counterGames: '43',
      amount: '200 029',
      counterUsers: '9/15',
      awards: ['award-icon-1.png', 'award-icon-2.png', 'award-icon-3.png', 'award-icon-4.png'],
    },
  ];

  render() {
    return (
      <div className="landTeams">
        <div className="landTeams__inner">
          <div className="landTeams__head">
            <div className="landTeams__title">
              <h4 className="landTitle">Звёзды BattleStar</h4>
            </div>
            <p className="landTeams__description">
              Лучшие игроки платформы, завоевавшие самые престижные награды в чемпионатах
            </p>
          </div>
          <div className="landTeams__items">
            {this.teams.map((team, key) => (
              <div className="landTeams__item" key={key}>
                <TeamCard model={team} settings={{ class: '_light' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LandInfo);
