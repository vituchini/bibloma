import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TournamentsTournamentSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  blocks = [
    {
      date: '15 Окт',
      items: [
        {
          time: '13:00',
          stage: '1/16 финала',
          teams: [
            {
              rate: '1778',
              name: 'Joint17',
              avatar: 'logo-team-1.png',
              result: 3,
            },
            {
              rate: '1774',
              name: 'WEAK_Sincerely',
              avatar: 'logo-team-1.png',
              result: 1,
            },
          ],
        },
        {
          time: '13:00',
          stage: '1/16 финала',
          teams: [
            {
              rate: '1778',
              name: 'Joint17',
              avatar: 'logo-team-1.png',
              result: 3,
            },
            {
              rate: '1774',
              name: 'WEAK_Sincerely',
              avatar: 'logo-team-1.png',
              result: 1,
            },
          ],
        },
        {
          time: '13:00',
          stage: '1/16 финала',
          teams: [
            {
              rate: '1778',
              name: 'Joint17',
              avatar: 'logo-team-1.png',
              result: 3,
            },
            {
              rate: '1774',
              name: 'WEAK_Sincerely',
              avatar: 'logo-team-1.png',
              result: 1,
            },
          ],
        },
        {
          time: '13:00',
          stage: '1/16 финала',
          teams: [
            {
              rate: '1778',
              name: 'Joint17',
              avatar: 'logo-team-1.png',
              result: 3,
            },
            {
              rate: '1774',
              name: 'WEAK_Sincerely',
              avatar: 'logo-team-1.png',
              result: 1,
            },
          ],
        },
        {
          time: '13:00',
          stage: '1/16 финала',
          teams: [
            {
              rate: '1778',
              name: 'Joint17',
              avatar: 'logo-team-1.png',
              result: 3,
            },
            {
              rate: '1774',
              name: 'WEAK_Sincerely',
              avatar: 'logo-team-1.png',
              result: 1,
            },
          ],
        },
      ],
    },
    {
      date: '16 Окт',
      items: [
        {
          time: '13:00',
          stage: '1/8 финала',
          teams: [
            {
              rate: '1778',
              name: 'Joint17',
              avatar: 'logo-team-1.png',
              result: 3,
            },
            {
              rate: '1774',
              name: 'WEAK_Sincerely',
              avatar: 'logo-team-1.png',
              result: 1,
            },
          ],
        },
        {
          time: '13:00',
          stage: '1/8 финала',
          teams: [
            {
              rate: '1778',
              name: 'Joint17',
              avatar: 'logo-team-1.png',
              result: 3,
            },
            {
              rate: '1774',
              name: 'WEAK_Sincerely',
              avatar: 'logo-team-1.png',
              result: 1,
            },
          ],
        },
        {
          time: '13:00',
          stage: '1/8 финала',
          teams: [
            {
              rate: '1778',
              name: 'Joint17',
              avatar: 'logo-team-1.png',
              result: 3,
            },
            {
              rate: '1774',
              name: 'WEAK_Sincerely',
              avatar: 'logo-team-1.png',
              result: 1,
            },
          ],
        },
        {
          time: '13:00',
          stage: '1/8 финала',
          teams: [
            {
              rate: '1778',
              name: 'Joint17',
              avatar: 'logo-team-1.png',
              result: 3,
            },
            {
              rate: '1774',
              name: 'WEAK_Sincerely',
              avatar: 'logo-team-1.png',
              result: 1,
            },
          ],
        },
      ],
    },
    {
      date: '17 Окт',
      items: [
        {
          time: '13:00',
          stage: '1/4 финала',
          isOnline: true,
          teams: [
            {
              rate: '1778',
              name: 'Joint17',
              avatar: 'logo-team-1.png',
            },
            {
              rate: '1774',
              name: 'WEAK_Sincerely',
              avatar: 'logo-team-1.png',
            },
          ],
        },
        {
          time: '13:00',
          stage: '1/4 финала',
          teams: [
            {
              rate: '1778',
              name: 'Joint17',
              avatar: 'logo-team-1.png',
            },
            {
              rate: '1774',
              name: 'WEAK_Sincerely',
              avatar: 'logo-team-1.png',
            },
          ],
        },
      ],
    },
  ];

  render() {
    return (
      <div className="tournamentsTournament__table">
        {this.blocks.map((block, key) => (
          <div className="tournamentsTournament__tableBlock" key={key}>
            <p className="tournamentsTournament__tableDate">{block.date}</p>
            <div className="tournamentsTournament__tableItems">
              {block.items.map((item, keyItem) => (
                <div className="tournamentsTournament__tableItem" key={keyItem}>
                  <div className="scheduleCard">
                    <div className="scheduleCard__item _info">
                      <p className="scheduleCard__time">{item.time}</p>
                      {item.teams[0].result !== undefined && (
                        <a href="#" className="scheduleCard__link">
                          Смотреть
                        </a>
                      )}

                      {item.isOnline === true && <div className="scheduleCard__online">Онлайн</div>}
                    </div>
                    <div className="scheduleCard__item _content">
                      <div className="scheduleCard__teams">
                        <div
                          className={`scheduleCard__teamsItem _first ${
                            item.teams[0].result > item.teams[1].result ? '_win' : ''
                          }`}>
                          <p className="scheduleCard__teamsItemRate">{item.teams[0].rate}</p>
                          <p className="scheduleCard__teamsItemName">{item.teams[0].name}</p>
                          <img
                            src={require(`../../../img/${item.teams[0].avatar}`).default}
                            alt=""
                            className="scheduleCard__teamsItemAvatar"
                          />
                        </div>
                        <div className="scheduleCard__teamsResult">
                          {item.teams[0].result || `-`} : {item.teams[1].result || `-`}
                        </div>
                        <div
                          className={`scheduleCard__teamsItem _second ${
                            item.teams[0].result < item.teams[1].result ? '_win' : ''
                          }`}>
                          <img
                            src={require(`../../../img/${item.teams[1].avatar}`).default}
                            alt=""
                            className="scheduleCard__teamsItemAvatar"
                          />
                          <p className="scheduleCard__teamsItemName">{item.teams[1].name}</p>
                          <p className="scheduleCard__teamsItemRate">{item.teams[1].rate}</p>
                        </div>
                      </div>
                    </div>
                    <div className="scheduleCard__item _stage">
                      <p className="scheduleCard__stage">{item.stage}</p>
                    </div>
                  </div>
                </div>
              ))}
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

export default connect(mapStateToProps)(TournamentsTournamentSchedule);

TournamentsTournamentSchedule.propTypes = {
  levels: PropTypes.array,
};
