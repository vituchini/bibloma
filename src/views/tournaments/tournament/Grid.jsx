import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GridGame from '../../../components/GridGame.jsx';

class TournamentsTournamentGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tournamentsTournament__contentBox">
        <GridGame />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps)(TournamentsTournamentGrid);

TournamentsTournamentGrid.propTypes = {
  levels: PropTypes.array,
};
