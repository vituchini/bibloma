import React from 'react';
import { connect } from 'react-redux';

class LandPromo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="landPromo">
        <div className="landPromo__inner">
          <div className="landPromo__title">
            <h3 className="landTitle">Акции и бонусы от BattleStar</h3>
          </div>
          <div className="landPromo__content">
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
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LandPromo);
