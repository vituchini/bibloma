import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../../components/Icon.jsx';
import Grid from './tournament/Grid.jsx';
import Schedule from './tournament/Schedule.jsx';
import Players from './tournament/Players.jsx';

class TournamentsTournament extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentContent: 'players',
    };
  }

  event = {
    prize: '2 000 000 $',
    date: '23 Тра - 7 Гру',
    reg: 'До 15 Тра',
    teams: '9/16',
  };

  info = [
    {
      key: 'prize',
      icon: 'event-prize',
      description: 'Призовой фонд',
    },
    {
      key: 'date',
      icon: 'event-date',
      description: 'Даты проведения',
    },
    {
      key: 'reg',
      icon: 'event-reg',
      description: 'Регистрация',
    },
    {
      key: 'teams',
      icon: 'event-teams',
      description: 'Команд в игре',
    },
  ];

  teams = [
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
  ];

  teamsList = [
    {
      avatar: 'tournament-team-avatar-1.png',
      name: 'Team 2',
      description: 'CS:GO',
    },
    {
      avatar: 'tournament-team-avatar-1.png',
      name: 'Team 2',
      description: 'CS:GO',
    },
    {
      avatar: 'tournament-team-avatar-1.png',
      name: 'Team 2',
      description: 'CS:GO',
    },
    {
      avatar: 'tournament-team-avatar-1.png',
      name: 'Team 2',
      description: 'CS:GO',
    },
  ];

  games = [
    {
      image: 'tournament-image-2.png',
      isOnline: true,
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
      image: 'tournament-image-2.png',
      isOnline: true,
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
      image: 'tournament-image-2.png',
      duration: '1:23:48',
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

  links = [
    {
      key: 'grid',
      contentLink: 'ТурнірНАЯ СЕТКА',
      render() {
        return <Grid />;
      },
    },
    {
      key: 'schedule',
      contentLink: 'РАСПИСАНИЕ ИГР',
      render() {
        return <Schedule />;
      },
    },
    {
      key: 'players',
      contentLink: 'УЧАСТНИКИ',
      render() {
        return <Players />;
      },
    },
  ];

  render() {
    const { currentContent } = this.state;
    const currentPage = this.links.find((link) => link.key === currentContent);

    return (
      <div className="tournamentsTournament">
        <img
          src={require('../../img/tournament-image-back.jpg').default}
          alt=""
          className="tournamentsTournament__back"
        />
        <h1 className="tournamentsTournament__title">
          Major Stochholm 2021
          <i className="tournamentsTournament__titleIcon">
            <Icon name="share" />
          </i>
        </h1>
        <div className="tournamentsTournament__items">
          <div className="tournamentsTournament__item _content">
            <div className="tournamentsTournament__preview">
              <div className="tournamentsTournament__previewStatus">Турнір уже начался</div>
              <img
                src={require('../../img/tournament-image-1.png').default}
                alt=""
                className="tournamentsTournament__previewImage"
              />
            </div>
            <div className="tournamentsTournament__info">
              {this.info.map((item, key) => (
                <div className="tournamentsTournament__infoItem" key={key}>
                  <i className="tournamentsTournament__infoItemIcon">
                    <Icon name={item.icon} />
                  </i>
                  <div className="tournamentsTournament__infoItemContent">
                    <p className="tournamentsTournament__infoItemValue">{this.event[item.key]}</p>
                    <p className="tournamentsTournament__infoItemDescription">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="tournamentsTournament__about">
              <div className="tournamentsTournament__aboutBlock">
                <h3 className="tournamentsTournament__aboutTitle">О Турніре</h3>
                <p className="tournamentsTournament__aboutDescription">
                  PGL Major Stockholm 2021 — семнадцатый Турнір серии Major по Counter-Strike:
                  Global Offensive. Турнір запланированна 23 Траября — 7 ноября 2021 года, место
                  соревнований — Авичи-Арена, Стокгольм, Швеция. Призовой фонд Турніра — 2 000 000
                  $. 24 команды будут квалифицированы через серию из специальных RMR-Турнірів. Это
                  второй Турнір серии Major организованный румынской организацией PGL, после PGL
                  Major: Kraków 2017. Этот Турнір — первый Major после перерыва, связанного из-за
                  пандемии коронавируса COVID-19.
                </p>
              </div>
              <div className="tournamentsTournament__aboutBlock">
                <h3 className="tournamentsTournament__aboutTitle">Условия проведения</h3>
                <p className="tournamentsTournament__aboutDescription">
                  Vесто соревнований — Авичи-Арена, Стокгольм, Швеция. Призовой фонд Турніра — 2 000
                  000 $. 24 команды будут квалифицированы через серию из специальных RMR-Турнірів.
                  Это второй Турнір серии Major организованный румынской организацией PGL, после PGL
                  Major: Kraków 2017. Этот Турнір — первый Major после перерыва, связанного из-за
                  пандемии коронавируса COVID-19.
                </p>
              </div>
            </div>
          </div>
          <div className="tournamentsTournament__item _nav">
            <div className="tournamentsTournament__nav">
              <div className="tournamentsTournament__navBlock">
                <p className="tournamentsTournament__navSupport">Даты</p>
                <p className="tournamentsTournament__navContent">23 Тра - 7 Гру</p>
              </div>
              <div className="tournamentsTournament__navBlock">
                <p className="tournamentsTournament__navSupport">Призовой фонд</p>
                <p className="tournamentsTournament__navContent">2 000 000 $</p>
              </div>
              <div className="tournamentsTournament__navBlock">
                <p className="tournamentsTournament__navSupport">Серия</p>
                <p className="tournamentsTournament__navContent">ESEA RELEGATION PGL</p>
              </div>
              <div className="tournamentsTournament__navBlock">
                <p className="tournamentsTournament__navSupport">Команди (23)</p>
                <div className="tournamentsTournament__navTeams">
                  <div className="tournamentsTournament__navTeamsBox">
                    {this.teams.map((team, key) => (
                      <div className="tournamentsTournament__navTeam" key={key}>
                        <div className="tournamentsTournament__navTeamAvatar">
                          <img
                            src={require(`../../img/${team.image}`).default}
                            alt=""
                            className="tournamentsTournament__navTeamAvatarImage"
                          />
                        </div>
                        <p className="tournamentsTournament__navTeamName">{team.name}</p>
                        <p className="tournamentsTournament__navTeamCounter">{team.counter}</p>
                      </div>
                    ))}
                  </div>
                  <p className="tournamentsTournament__navTeamsShow">Посмотреть все команды</p>
                </div>
                <div className="tournamentsTournament__navButton _grey">Подати заявку</div>
              </div>
              <div className="tournamentsTournament__navList">
                <div className="tournamentsTournament__navListName">
                  <i className="tournamentsTournament__navListNameIcon">
                    <Icon name="users" />
                  </i>
                  Подобрать команду
                </div>
                <div className="tournamentsTournament__navListTeams">
                  {this.teamsList.map((item, key) => (
                    <div className="tournamentsTournament__navListTeam" key={key}>
                      <div className="tournamentsTournament__navListTeamAvatar">
                        <img
                          src={require(`../../img/${item.avatar}`).default}
                          alt=""
                          className="tournamentsTournament__navListTeamAvatarImage"
                        />
                      </div>
                      <div className="tournamentsTournament__navListTeamContent">
                        <h4 className="tournamentsTournament__navListTeamName">{item.name}</h4>
                        <p className="tournamentsTournament__navListTeamDescription">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tournamentsTournament__games">
          <p className="tournamentsTournament__gamesSupport">Главные ігри Турніра</p>
          <div className="tournamentsTournament__gamesItems">
            {this.games.map((game, key) => (
              <div className="tournamentsTournament__gamesItem" key={key}>
                <div className="articleCard">
                  <div className="articleCard__image">
                    <img
                      src={require(`../../img/${game.image}`).default}
                      alt=""
                      className="articleCard__imageItem"
                    />
                  </div>
                  <div className="articleCard__content">
                    <p className={`articleCard__status ${game.isOnline === true ? '_online' : ''}`}>
                      {game.isOnline === true ? 'Онлайн' : game.duration}
                    </p>
                    <div className="articleCard__teams">
                      <div className="articleCard__teamsItem">
                        <img
                          src={require(`../../img/${game.teams[0].logo}`).default}
                          alt=""
                          className="articleCard__teamsLogo"
                        />
                        <p className="articleCard__teamsName">{game.teams[0].name}</p>
                      </div>
                      <div className="articleCard__teamsSupport">VS</div>
                      <div className="articleCard__teamsItem">
                        <img
                          src={require(`../../img/${game.teams[1].logo}`).default}
                          alt=""
                          className="articleCard__teamsLogo"
                        />
                        <p className="articleCard__teamsName">{game.teams[1].name}</p>
                      </div>
                    </div>
                    <p className="articleCard__stage">{game.stage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`tournamentsTournament__content _${currentContent}`}>
          <div className="tournamentsTournament__links">
            {this.links.map((link, key) => (
              <div className="tournamentsTournament__link" key={key}>
                <label className="checkbox">
                  <input
                    type="radio"
                    className="checkbox__input"
                    checked={currentContent === link.key}
                    onChange={() => {
                      this.setState((state) => {
                        const newState = { ...state };

                        newState.currentContent = link.key;

                        return newState;
                      });
                    }}
                  />
                  <div className="checkbox__view">{link.contentLink}</div>
                </label>
              </div>
            ))}
          </div>
          <div className="tournamentsTournament__contentInner">{currentPage.render.call(this)}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps)(TournamentsTournament);

TournamentsTournament.propTypes = {
  levels: PropTypes.array,
};
