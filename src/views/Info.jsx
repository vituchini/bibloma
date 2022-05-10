import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Support from './info/Support.jsx';
import Partners from './info/Partners.jsx';
import { userInfo } from '../redux/redux';
import { userDataConfig } from '../utils/userDataConfig';
class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount(){
    this.props.userInfo(userDataConfig);
  }

  pages = [
    {
      key: 'partners',
      hrefs: ['partners'],
      render() {
        return <Partners />;
      },
    },
    {
      key: 'about',
      hrefs: ['', undefined, 'about'],
      render() {
        return <Support />;
      },
    },
  ];

  render() {
    const { levels } = this.props;
    const currentPage =
      this.pages.find((page) => page.hrefs.indexOf(levels[1]) !== -1) ||
      this.pages.find((page) => page.hrefs.indexOf('') !== -1);

    return <div className="info">{currentPage.render.call(this)}</div>;
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps,{userInfo})(Info);

Info.propTypes = {
  levels: PropTypes.array,
};
