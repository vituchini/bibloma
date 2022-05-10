import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../../components/Icon.jsx';

class TournamentsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLink: 'nubs',
    };
  }

  matches = [
    {
      image: 'match-image-1.jpg',
      name: 'Major Stochholm 2021',
      dates: '23 Окт - 7 Ноя',
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

  links = [
    {
      key: 'nubs',
      contentLink: 'ЛЮБИТЕЛЬСКИЕ ТУРНИРЫ',
    },
    {
      key: 'profi',
      contentLink: 'ПРОФЕССИОНАЛЬНЫЕ ТУРНИРЫ',
    },
  ];

  tournaments = {
    nubs: [
      {
        image: 'article-image-3.jpg',
        title: 'NAC Sport Championship 2020',
        description: '23 Окт - Начало в 14:00',
        author: 'Максим Рихтер',
        prize: '200000 ₽',
        rate: '1200+',
        area: 'Весь мир',
      },
      {
        image: 'article-image-4.jpg',
        title: 'NAC Sport Championship 2020',
        description: '23 Окт - Начало в 14:00',
        author: 'Максим Рихтер',
        prize: '200000 ₽',
        rate: '1200+',
        area: 'Весь мир',
      },
      {
        image: 'article-image-5.jpg',
        title: 'NAC Sport Championship 2020',
        description: '23 Окт - Начало в 14:00',
        author: 'Максим Рихтер',
        prize: '200000 ₽',
        rate: '1200+',
        area: 'Весь мир',
      },
      {
        image: 'article-image-6.jpg',
        title: 'NAC Sport Championship 2020',
        description: '23 Окт - Начало в 14:00',
        author: 'Максим Рихтер',
        prize: '200000 ₽',
        rate: '1200+',
        area: 'Весь мир',
      },
      {
        image: 'article-image-7.jpg',
        title: 'NAC Sport Championship 2020',
        description: '23 Окт - Начало в 14:00',
        author: 'Максим Рихтер',
        prize: '200000 ₽',
        rate: '1200+',
        area: 'Весь мир',
      },
      {
        image: 'article-image-8.jpg',
        title: 'NAC Sport Championship 2020',
        description: '23 Окт - Начало в 14:00',
        author: 'Максим Рихтер',
        prize: '200000 ₽',
        rate: '1200+',
        area: 'Весь мир',
      },
    ],
    profi: [
      {
        image: 'article-image-3.jpg',
        title: 'NAC Sport Championship 2020',
        description: '23 Окт - Начало в 14:00',
        author: 'Максим Рихтер',
        prize: '200000 ₽',
        rate: '1200+',
        area: 'Весь мир',
      },
      {
        image: 'article-image-4.jpg',
        title: 'NAC Sport Championship 2020',
        description: '23 Окт - Начало в 14:00',
        author: 'Максим Рихтер',
        prize: '200000 ₽',
        rate: '1200+',
        area: 'Весь мир',
      },
      {
        image: 'article-image-5.jpg',
        title: 'NAC Sport Championship 2020',
        description: '23 Окт - Начало в 14:00',
        author: 'Максим Рихтер',
        prize: '200000 ₽',
        rate: '1200+',
        area: 'Весь мир',
      },
      {
        image: 'article-image-6.jpg',
        title: 'NAC Sport Championship 2020',
        description: '23 Окт - Начало в 14:00',
        author: 'Максим Рихтер',
        prize: '200000 ₽',
        rate: '1200+',
        area: 'Весь мир',
      },
      {
        image: 'article-image-7.jpg',
        title: 'NAC Sport Championship 2020',
        description: '23 Окт - Начало в 14:00',
        author: 'Максим Рихтер',
        prize: '200000 ₽',
        rate: '1200+',
        area: 'Весь мир',
      },
      {
        image: 'article-image-8.jpg',
        title: 'NAC Sport Championship 2020',
        description: '23 Окт - Начало в 14:00',
        author: 'Максим Рихтер',
        prize: '200000 ₽',
        rate: '1200+',
        area: 'Весь мир',
      },
    ],
  };

  tournamentInfo = [
    {
      icon: 'tournament-prize',
      key: 'prize',
    },
    {
      icon: 'tournament-rate',
      key: 'rate',
    },
    {
      icon: 'tournament-area',
      key: 'area',
    },
  ];

  render() {
    const { currentLink } = this.state;

    return (
      <div className="tournamentsIndex">
        <div className="tournamentsIndex__items">
          {this.matches.map((match, key) => (
            <div className="tournamentsIndex__item" key={key}>
              <div className="matchCard">
                <div className="matchCard__item _image">
                  <img
                    src={require(`../../img/${match.image}`).default}
                    alt=""
                    className="matchCard__image"
                  />
                </div>
                <div className="matchCard__item _info">
                  <h3 className="matchCard__name">{match.name}</h3>
                  <p className="matchCard__dates">{match.dates}</p>
                  <div className="matchCard__teams">
                    <p className="matchCard__teamsSupport">
                      {match.teams.length} команд зарегистрированы:
                    </p>
                    <div className="matchCard__teamsBox">
                      <div className="matchCard__teamsItems">
                        {match.teams.map((team, keyTeam) => (
                          <div className="matchCard__teamsItem" key={keyTeam}>
                            <div className="matchCard__team">
                              <div className="matchCard__teamPreview">
                                <img
                                  src={require(`../../img/${team.image}`).default}
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
                  <div className="matchCard__button">Подать заявку</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="tournamentsIndex__content">
          <div className="tournamentsIndex__head">
            <div className="tournamentsIndex__headBox">
              <div className="tournamentsIndex__headLinks">
                {this.links.map((link, key) => (
                  <div className="tournamentsIndex__headLink" key={key}>
                    <label className="checkbox">
                      <input
                        type="radio"
                        className="checkbox__input"
                        checked={currentLink === link.key}
                        onChange={() => {
                          this.setState((state) => {
                            const newState = { ...state };

                            newState.currentLink = link.key;

                            return newState;
                          });
                        }}
                      />
                      <div className="checkbox__view">{link.contentLink}</div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="tournamentsIndex__headButton">СОЗДАТЬ ТУРНИР</div>
          </div>
          <div className="tournamentsIndex__tournaments">
            <div className="tournamentsIndex__tournamentsHead">
              <div className="tournamentsIndex__tournamentsHeadItem">
                <div className="tournamentsIndex__tournamentsFilter">
                  <div className="tournamentsIndex__tournamentsFilterView">Ближайшие турниры</div>
                </div>
              </div>
              <div className="tournamentsIndex__tournamentsHeadItem">
                <div className="tournamentsIndex__tournamentsFilter">
                  <div className="tournamentsIndex__tournamentsFilterView">
                    <span>Рейтинг турнира:</span> Любой
                  </div>
                </div>
              </div>
            </div>
            <div className="tournamentsIndex__tournamentsItems">
              {this.tournaments[currentLink].map((tournament, key) => (
                <div className="tournamentsIndex__tournamentsItem" key={key}>
                  <div className="articleCard">
                    <div className="articleCard__image">
                      <img
                        src={require(`../../img/${tournament.image}`).default}
                        alt=""
                        className="articleCard__imageItem"
                      />
                    </div>
                    <div className="articleCard__content">
                      <p className="articleCard__description">{tournament.description}</p>
                      <h4 className="articleCard__title">{tournament.title}</h4>
                      <div className="articleCard__params">
                        {this.tournamentInfo.map((item, keyItem) => (
                          <div className="articleCard__param" key={keyItem}>
                            <i className="articleCard__paramIcon">
                              <Icon name={item.icon} />
                            </i>
                            {tournament[item.key]}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps)(TournamentsIndex);

TournamentsIndex.propTypes = {
  levels: PropTypes.array,
};
