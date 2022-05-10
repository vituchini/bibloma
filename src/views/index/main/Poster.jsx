import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class IndexMainPoster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  streams = [
    {
      image: 'stream-image-1.jpg',
      teams: [
        {
          logo: 'logo-team-1.png',
          name: 'ApacheLeader',
        },
        {
          logo: 'logo-team-2.png',
          name: 'DeJaVU',
        },
      ],
      stage: '1/16 финала',
    },
    {
      image: 'stream-image-1.jpg',
      teams: [
        {
          logo: 'logo-team-1.png',
          name: 'ApacheLeader',
        },
        {
          logo: 'logo-team-2.png',
          name: 'DeJaVU',
        },
      ],
      stage: '1/16 финала',
    },
    {
      image: 'stream-image-1.jpg',
      teams: [
        {
          logo: 'logo-team-1.png',
          name: 'ApacheLeader',
        },
        {
          logo: 'logo-team-2.png',
          name: 'DeJaVU',
        },
      ],
      stage: '1/16 финала',
    },
  ];

  games = [
    {
      time: '15:00',
      name: 'Полуфинал Major 2021 Stockholm',
      teams: [
        {
          logo: 'logo-team-3.png',
          name: 'WEAK_Sincerely',
          counter: '1774',
          counterRound: 3,
        },
        {
          logo: 'logo-team-4.png',
          name: 'HendrickTeam1',
          counter: '1778',
          counterRound: 2,
        },
      ],
    },
    {
      time: '15:00',
      name: 'Полуфинал Major 2021 Stockholm',
      isOnline: true,
      teams: [
        {
          logo: 'logo-team-3.png',
          name: 'WEAK_Sincerely',
          counter: '1774',
          counterRound: 3,
        },
        {
          logo: 'logo-team-4.png',
          name: 'HendrickTeam1',
          counter: '1778',
          counterRound: 2,
        },
      ],
    },
    {
      time: '15:00',
      name: 'Полуфинал Major 2021 Stockholm',
      teams: [
        {
          logo: 'logo-team-3.png',
          name: 'WEAK_Sincerely',
          counter: '1774',
        },
        {
          logo: 'logo-team-4.png',
          name: 'HendrickTeam1',
          counter: '1778',
        },
      ],
    },
    {
      time: '15:00',
      name: 'Полуфинал Major 2021 Stockholm',
      teams: [
        {
          logo: 'logo-team-3.png',
          name: 'WEAK_Sincerely',
          counter: '1774',
          counterRound: 3,
        },
        {
          logo: 'logo-team-4.png',
          name: 'HendrickTeam1',
          counter: '1778',
          counterRound: 2,
        },
      ],
    },
    {
      time: '15:00',
      name: 'Полуфинал Major 2021 Stockholm',
      teams: [
        {
          logo: 'logo-team-3.png',
          name: 'WEAK_Sincerely',
          counter: '1774',
          counterRound: 3,
        },
        {
          logo: 'logo-team-4.png',
          name: 'HendrickTeam1',
          counter: '1778',
          counterRound: 2,
        },
      ],
    },
    {
      time: '15:00',
      name: 'Полуфинал Major 2021 Stockholm',
      teams: [
        {
          logo: 'logo-team-3.png',
          name: 'WEAK_Sincerely',
          counter: '1774',
          counterRound: 3,
        },
        {
          logo: 'logo-team-4.png',
          name: 'HendrickTeam1',
          counter: '1778',
          counterRound: 2,
        },
      ],
    },
  ];

  render() {
    return (
      <>
        <div className="indexMain__poster">
          <div className="indexMain__posterItem _streams">
            {this.streams.map((stream, key) => (
              <div className="indexMain__posterStream" key={key}>
                <div className="streamCard">
                  <div className="streamCard__preview">
                    <img
                      src={require(`../../../img/${stream.image}`).default}
                      alt=""
                      className="streamCard__previewImage"
                    />
                  </div>
                  <div className="streamCard__content">
                    <div className="streamCard__teams">
                      <div className="streamCard__teamsItem">
                        <img
                          src={require(`../../../img/${stream.teams[0].logo}`).default}
                          alt=""
                          className="streamCard__teamsLogo"
                        />
                        <p className="streamCard__teamsName">{stream.teams[0].name}</p>
                      </div>
                      <div className="streamCard__teamsDel">VS</div>
                      <div className="streamCard__teamsItem">
                        <img
                          src={require(`../../../img/${stream.teams[1].logo}`).default}
                          alt=""
                          className="streamCard__teamsLogo"
                        />
                        <p className="streamCard__teamsName">{stream.teams[1].name}</p>
                      </div>
                    </div>
                    <div className="streamCard__stage">{stream.stage}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="indexMain__posterItem _list">
            <p className="indexMain__posterSupport">Популярные матчи</p>
            <div className="indexMain__posterGames">
              {this.games.map((game, key) => (
                <div className="indexMain__posterGame" key={key}>
                  <div className="battleCard">
                    <p className="battleCard__name">{game.name}</p>
                    <div className="battleCard__team">
                      <img
                        src={require(`../../../img/${game.teams[0].logo}`).default}
                        alt=""
                        className="battleCard__teamLogo"
                      />
                      <p className="battleCard__teamName">{game.teams[0].name}</p>
                      <p className="battleCard__teamCounter">{game.teams[0].counter}</p>
                    </div>
                    <div className="battleCard__item">
                      <p className="battleCard__time">{game.time}</p>
                      <div className="battleCard__status">
                        {game.isOnline === true ? (
                          <>
                            <div className="battleCard__online">Онлайн</div>
                          </>
                        ) : (
                          <>
                            {game.teams[0].counterRound || `–`}
                            {` : `}
                            {game.teams[1].counterRound || `–`}
                          </>
                        )}
                      </div>
                    </div>
                    <div className="battleCard__team">
                      <p className="battleCard__teamCounter">{game.teams[1].counter}</p>
                      <p className="battleCard__teamName">{game.teams[1].name}</p>
                      <img
                        src={require(`../../../img/${game.teams[1].logo}`).default}
                        alt=""
                        className="battleCard__teamLogo"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps)(IndexMainPoster);

IndexMainPoster.propTypes = {
  levels: PropTypes.array,
};
