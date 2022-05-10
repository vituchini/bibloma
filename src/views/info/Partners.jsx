import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import changePage from '../../functions/changePage';
import Icon from '../../components/Icon.jsx';
import Stat from './partners/Stat.jsx';
import Wallet from './partners/Wallet.jsx';
import Personal from './partners/Personal.jsx';
import Settings from './partners/Settings.jsx';
import Offer from './partners/Offer.jsx';

class InfoSupport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  links = ['stat', 'wallet', 'personal', 'settings'];

  pages = [
    {
      hrefs: ['stat', '', undefined],
      key: 'stat',
      contentLink: 'Аналитика',
      icon: 'cabinet-list-stat',
      render() {
        return <Stat />;
      },
    },
    {
      hrefs: ['wallet'],
      key: 'wallet',
      contentLink: 'Гаманець',
      icon: 'cabinet-list-wallet',
      render() {
        return <Wallet />;
      },
    },
    {
      hrefs: ['personal'],
      key: 'personal',
      contentLink: 'Особисті дані',
      icon: 'cabinet-list-personal',
      render() {
        return <Personal />;
      },
    },
    {
      hrefs: ['settings'],
      key: 'settings',
      contentLink: 'Параметри',
      icon: 'cabinet-list-settings',
      render() {
        return <Settings />;
      },
    },
    {
      hrefs: ['offer'],
      key: 'offer',
      render() {
        return <Offer />;
      },
    },
  ];

  render() {
    const { levels } = this.props;
    const currentPage =
      this.pages.find((page) => page.hrefs.indexOf(levels[2]) !== -1) ||
      this.pages.find((page) => page.hrefs.indexOf('') !== -1);

    return (
      <div className={`cabinet _partners _${currentPage.key}`}>
        {this.links.find((link) => link === currentPage.key) ? (
          <div className="cabinet__items">
            <div className="cabinet__item _nav">
              <ul className="cabinet__list">
                {this.links.map((link) => {
                  const currentPageInner = this.pages.find((page) => page.key === link);

                  return (
                    <a
                      href={currentPageInner.hrefs[0]}
                      className={`cabinet__link ${
                        currentPage.key === link ? '_current' : ''
                      } _${link}`}
                      key={link}
                      onClick={(e) => {
                        e.preventDefault();
                        changePage(`info/partners/${currentPageInner.hrefs[0]}`);
                      }}>
                      {currentPageInner.contentLink}
                      <i className="cabinet__linkIcon">
                        <Icon name={currentPageInner.icon} />
                      </i>
                    </a>
                  );
                })}
              </ul>
            </div>
            <div className="cabinet__item _content">{currentPage.render.call(this)}</div>
          </div>
        ) : (
          <>{currentPage.render.call(this)}</>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps)(InfoSupport);

InfoSupport.propTypes = {
  levels: PropTypes.array,
};
