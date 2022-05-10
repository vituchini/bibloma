import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userInfo } from '../redux/redux';
import { userDataConfig } from '../utils/userDataConfig';
import Article from './index/Article.jsx';
import Main from './index/Main.jsx';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.userInfo(userDataConfig);
  }

  

  pages = [
    {
      key: 'article',
      hrefs: ['article'],
      render() {
        return <Article />;
      },
    },
    {
      key: 'index',
      hrefs: ['', undefined],
      render() {
        return <Main />;
      },
    },
  ];

  render() {
    const { levels } = this.props;
    const currentPage =
      this.pages.find((page) => page.hrefs.indexOf(levels[1]) !== -1) ||
      this.pages.find((page) => page.hrefs.indexOf('') !== -1);

    return <div className="index">{currentPage.render.call(this)}</div>;
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps,{userInfo})(Index);

Index.propTypes = {
  levels: PropTypes.array,
};
