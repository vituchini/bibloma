import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import News from './main/News.jsx';
import Rate from './main/Rate.jsx';
import Matches from './main/Matches.jsx';
import Poster from './main/Poster.jsx';

class IndexMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="indexMain">
        <div className="indexMain__inner">
          <News />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps)(IndexMain);

IndexMain.propTypes = {
  levels: PropTypes.array,
};
