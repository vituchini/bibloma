import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import changePage from '../../functions/changePage';

import MatchesTeams from './game/Teams.jsx';
import MatchesStats from './game/Stats.jsx';
import { getLobbyInfo, leaveGame, resetLobby } from '../../redux/redux';

class MatchesGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount() {
    console.log('UNMOUNTED!!!!');
    this.props.leaveGame();
    this.props.resetLobby();
  }

  pages = [
    {
      hrefs: ['', undefined, 'teams'],
      key: 'teams',
      contentLink: 'КОМАНДИ',
      render() {
        return <MatchesTeams />;
      },
    },
    {
      hrefs: ['stats'],
      key: 'stats',
      contentLink: 'СТАТИСТИКА',
      render() {
        return <MatchesStats />;
      },
    },
  ];

  render() {
    const { levels } = this.props;
    const currentPage =
      this.pages.find((page) => page.hrefs.indexOf(levels[2]) !== -1) ||
      this.pages.find((page) => page.hrefs.indexOf('') !== -1);

    return (
      <div className={`matchesGame`}>
        <div className="matchesGame__inner">
          <div className="matchesGame__head">
            <div className="matchesGame__links">
              {this.pages.map((page, key) => (
                <div className="matchesGame__link" key={key}>
                  <label className="checkbox">
                    <input
                      type="radio"
                      className="checkbox__input"
                      checked={currentPage.key === page.key}
                      onChange={() => {
                        changePage(`matches/game/${page.hrefs[0]}`);
                      }}
                    />
                    <div className="checkbox__view">{page.contentLink}</div>
                  </label>
                </div>
              ))}
            </div>
          </div>
          {currentPage.render.call(this)}
        </div>
        <Interval id={this.props.game.id} getLobbyInfo={this.props.getLobbyInfo} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels, game: state.isShowPopupLoginGame };
}

export default connect(mapStateToProps, { getLobbyInfo, leaveGame, resetLobby })(MatchesGame);

MatchesGame.propTypes = {
  levels: PropTypes.array,
};

function Interval({ id, getLobbyInfo }) {
  const [currentCount, setCount] = useState(10);
  const timer = () => getLobbyInfo(id);

  useEffect(() => {
    if (currentCount <= 0) {
      return;
    }
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [currentCount]);

  return <></>;
}
