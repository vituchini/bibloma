import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TeamCard from '../../components/TeamCard.jsx';
import changePage from '../../functions/changePage';

// import { dispatcher } from '../redux/redux';

class TeamsBest extends React.Component {
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
      avatar: 'logo-team-6.png',
      name: 'PlayFair Display$$$',
      rate: '2674',
      counterGames: '43',
      amount: '200 029',
      counterUsers: '9/15',
      awards: ['award-icon-1.png', 'award-icon-2.png', 'award-icon-3.png', 'award-icon-4.png'],
    },
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
      avatar: 'logo-team-6.png',
      name: 'PlayFair Display$$$',
      rate: '2674',
      counterGames: '43',
      amount: '200 029',
      counterUsers: '9/15',
      awards: ['award-icon-1.png', 'award-icon-2.png', 'award-icon-3.png', 'award-icon-4.png'],
    },
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
      avatar: 'logo-team-6.png',
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
      <>
        <div className="teams__block">
          <div className="teams__blockHead">
            <p className="teams__blockSupport">Топ команд</p>
            <div className="teams__blockSort">
              <div className="teams__blockSortView">
                <p className="teams__blockSortSupport">Сортировать</p>
                <div className="teams__blockSortSelect">По рейтингу</div>
              </div>
            </div>
          </div>
          <div className="teams__blockSearch">
            <input
              type="text"
              className="teams__blockSearchInput"
              placeholder="Поиск по командам"
            />
          </div>
          <div className="teams__blockContent">
            {this.teams.map((team, key) => (
              <div
                className="teams__card"
                onClick={() => {
                  changePage('teams/team');
                }}
                key={key}>
                <TeamCard model={team} />
              </div>
            ))}
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

export default connect(mapStateToProps)(TeamsBest);

TeamsBest.propTypes = {
  levels: PropTypes.array,
};
