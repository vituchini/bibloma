import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userInfo } from '../redux/redux';
import { userDataConfig } from '../utils/userDataConfig';
import changePage from '../functions/changePage';

import Index from './teams/Index.jsx';
import Open from './teams/Open.jsx';
import Best from './teams/Best.jsx';
import Team from './teams/Team.jsx';

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getCondForHideLinks = this.getCondForHideLinks.bind(this);
  }

  componentDidMount() {
    this.props.userInfo(userDataConfig);
  }

  links = ['my', 'open', 'best'];

  pages = [
    {
      hrefs: ['', undefined, 'my'],
      key: 'my',
      contentLink: 'МОЇ КОМАНДИ',
      render() {
        return <Index />;
      },
    },
    {
      hrefs: ['open'],
      key: 'open',
      contentLink: 'Відкриті команди',
      render() {
        return <Open />;
      },
    },
    {
      hrefs: ['best'],
      key: 'best',
      contentLink: 'ТОП КОМАНД',
      render() {
        return <Best />;
      },
    },
    {
      hrefs: ['team'],
      key: 'team',
      render() {
        return <Team />;
      },
    },
  ];

  getCondForHideLinks() {
    const { levels } = this.props;

    return levels[1] !== 'team';
  }

  render() {
    const { levels } = this.props;
    const currentPage =
      this.pages.find((page) => page.hrefs.indexOf(levels[1]) !== -1) ||
      this.pages.find((page) => page.hrefs.indexOf('') !== -1);

    return (
      <div className={`teams ${this.getCondForHideLinks() !== true ? '_team' : ''}`}>
        <div className="teams__inner">
          {this.getCondForHideLinks() === true && (
            <div className="teams__links">
              {this.links.map((link, key) => {
                const currentPageInner = this.pages.find((page) => page.key === link, key);

                return (
                  <div className="teams__link" key={key}>
                    <label className="checkbox">
                      <input
                        type="radio"
                        className="checkbox__input"
                        checked={currentPage.key === currentPageInner.key}
                        onChange={() => {
                          changePage(`teams/${currentPageInner.hrefs[0]}`);
                        }}
                      />
                      <div className="checkbox__view">{currentPageInner.contentLink}</div>
                    </label>
                  </div>
                );
              })}
            </div>
          )}
          <div className="teams__content">{currentPage.render.call(this)}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    levels: state.levels,
  };
}

export default connect(mapStateToProps, { userInfo })(Teams);

Teams.propTypes = {
  levels: PropTypes.array,
};
