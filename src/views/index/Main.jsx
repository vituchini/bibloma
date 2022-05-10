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
          <div className="indexMain__promo">
            <div className="promo _sale">
              <img
                src={require('../../img/promo-image-1.png').default}
                alt=""
                className="promo__image"
              />
              <div className="promo__content">
                <p className="promo__support">Акции и бонусы</p>
                <h3 className="promo__title">
                  Пополни баланс сегодня и полчи +200 BS в качестве бонуса
                </h3>
                <div className="promo__button">Перейти в кошелёк</div>
              </div>
            </div>
          </div>
          <Rate />
          <Matches />
          <div className="indexMain__promo">
            <div className="promo _sale2">
              <img
                src={require('../../img/promo-image-2.png').default}
                alt=""
                className="promo__image"
              />
              <div className="promo__content">
                <p className="promo__support">Акции и бонусы</p>
                <h3 className="promo__title">
                  Пополни баланс сегодня и полчи +200 BS в качестве бонуса
                </h3>
                <div className="promo__button">Перейти в кошелёк</div>
              </div>
            </div>
          </div>
          <Poster />
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
