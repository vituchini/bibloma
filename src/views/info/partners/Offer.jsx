import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import OfferIndex from './offer/Index.jsx';
import OfferLogin from './offer/Login.jsx';
import OfferOrder from './offer/Order.jsx';

class InfoPartnersOffer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  pages = [
    {
      key: 'index',
      hrefs: ['', undefined],
      render() {
        return <OfferIndex />;
      },
    },
    {
      key: 'login',
      hrefs: ['login'],
      render() {
        return <OfferLogin />;
      },
    },
    {
      key: 'order',
      hrefs: ['order'],
      render() {
        return <OfferOrder />;
      },
    },
  ];

  render() {
    const { levels } = this.props;
    const currentPage =
      this.pages.find((page) => page.hrefs.indexOf(levels[3]) !== -1) ||
      this.pages.find((page) => page.hrefs.indexOf('') !== -1);

    return (
      <div className="infoPartnersOffer">
        <div className="infoPartnersOffer__inner">
          <div className="infoPartnersOffer__content">{currentPage.render.call(this)}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps)(InfoPartnersOffer);

InfoPartnersOffer.propTypes = {
  levels: PropTypes.array,
};
