import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class IndexMainMatches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  matches = [
    {
      image: 'match-image-1.jpg',
      name: 'Major Stochholm 2021',
      dates: '23 Тра - 7 Гру',
      teams: [
        {
          image: 'team-preview-1.jpg',
          name: 'JJJASON_Team',
          counter: '1769',
        },
        {
          image: 'team-preview-1.jpg',
          name: 'JJJASON_Team',
          counter: '1769',
        },
        {
          image: 'team-preview-1.jpg',
          name: 'JJJASON_Team',
          counter: '1769',
        },
        {
          image: 'team-preview-1.jpg',
          name: 'JJJASON_Team',
          counter: '1769',
        },
        {
          image: 'team-preview-1.jpg',
          name: 'JJJASON_Team',
          counter: '1769',
        },
        {
          image: 'team-preview-1.jpg',
          name: 'JJJASON_Team',
          counter: '1769',
        },
      ],
    },
  ];

  render() {
    return (
      <>
        <div className="indexMain__matches">
          <div className="indexMain__matchesItems">
            {this.matches.map((match, key) => (
              <div className="indexMain__matchesItem" key={key}>
                <div className="matchCard">
                  <div className="matchCard__item _image">
                    <img
                      src={require(`../../../img/${match.image}`).default}
                      alt=""
                      className="matchCard__image"
                    />
                  </div>
                  <div className="matchCard__item _info">
                    <h3 className="matchCard__name">{match.name}</h3>
                    <p className="matchCard__dates">{match.dates}</p>
                    <div className="matchCard__teams">
                      <p className="matchCard__teamsSupport">
                        {match.teams.length} команд зареєстровано:
                      </p>
                      <div className="matchCard__teamsBox">
                        <div className="matchCard__teamsItems">
                          {match.teams.map((team, keyTeam) => (
                            <div className="matchCard__teamsItem" key={keyTeam}>
                              <div className="matchCard__team">
                                <div className="matchCard__teamPreview">
                                  <img
                                    src={require(`../../../img/${team.image}`).default}
                                    alt=""
                                    className="matchCard__teamPreviewImage"
                                  />
                                </div>
                                <p className="matchCard__teamName">{team.name}</p>
                                <p className="matchCard__teamCounter">{team.counter}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="matchCard__button">Подати заявку</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps)(IndexMainMatches);

IndexMainMatches.propTypes = {
  levels: PropTypes.array,
};
