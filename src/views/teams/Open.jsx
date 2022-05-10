import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TeamCard from '../../components/TeamCard.jsx';
import Icon from '../../components/Icon.jsx';
import changePage from '../../functions/changePage';

// import { dispatcher } from '../redux/redux';

class TeamsOpen extends React.Component {
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
  ];

  render() {
    return (
      <>
        <div className="teams__block">
          <div className="teams__blockHead">
            <p className="teams__blockSupport">Открытые команды</p>
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
                key={key}
                onClick={() => {
                  changePage('teams/team');
                }}>
                <TeamCard model={team} />
              </div>
            ))}
          </div>
        </div>
        <div className="teams__pagenation">
          <div className="pagenation">
            <i className="pagenation__btn">
              <Icon name="pag-arrow-prev" />
            </i>
            <div className="pagenation__list">
              <div className="pagenation__listItem">1</div>
              <div className="pagenation__listItem _current">2</div>
              <div className="pagenation__listItem">3</div>
              <div className="pagenation__listItem">4</div>
            </div>
            <i className="pagenation__btn">
              <Icon name="pag-arrow-next" />
            </i>
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

export default connect(mapStateToProps)(TeamsOpen);

TeamsOpen.propTypes = {
  levels: PropTypes.array,
};
