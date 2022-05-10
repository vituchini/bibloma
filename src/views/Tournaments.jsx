import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userInfo } from '../redux/redux';
import { userDataConfig } from '../utils/userDataConfig';
import Create from './tournaments/Create.jsx';
import Index from './tournaments/Index.jsx';
import Tournament from './tournaments/Tournament.jsx';

// import { dispatcher } from '../redux/redux';

class Tournaments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.userInfo(userDataConfig);
  }

  pages = [
    {
      hrefs: ['create'],
      key: 'create',
      render() {
        return <Create />;
      },
    },
    {
      hrefs: ['', undefined],
      key: 'index',
      render() {
        return <Index />;
      },
    },
    {
      hrefs: ['tournament'],
      key: 'tournament',
      render() {
        return <Tournament />;
      },
    },
  ];

  render() {
    const { levels } = this.props;
    const currentPage =
      this.pages.find((page) => page.hrefs.indexOf(levels[1]) !== -1) ||
      this.pages.find((page) => page.hrefs.indexOf('') !== -1);

    return (
      <div className={`tournaments _${currentPage.key}`}>
        <div className="tournaments__content">{currentPage.render.call(this)}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps,{userInfo})(Tournaments);

Tournaments.propTypes = {
  levels: PropTypes.array,
};
