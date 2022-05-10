import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import changePage from '../../../../functions/changePage';

class OfferIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="infoPartnersOffer__head">
          <h1 className="infoPartnersOffer__title">Зарабатывай вместе с BattleStar</h1>
          <p className="infoPartnersOffer__subTitle">Ваши подписчики играют - вы зарабатываете</p>
        </div>
        <ul className="infoPartnersOffer__list">
          <li className="infoPartnersOffer__listItem">• Призы от компании BattleStar</li>
          <li className="infoPartnersOffer__listItem">
            • Процент от выигрыша приведенных подписчиков
          </li>
          <li className="infoPartnersOffer__listItem">
            • Подробная аналитика аудитории в личном кабинете
          </li>
        </ul>
        <div className="infoPartnersOffer__actions">
          <div className="infoPartnersOffer__actionsBlock">
            <p className="infoPartnersOffer__actionsDescription">
              Заполните заявку чтобы присоединиться к реферальной программе для лидеров мнений
            </p>
            <div
              className="infoPartnersOffer__actionsButton"
              onClick={() => {
                changePage(`info/partners/offer/order`);
              }}>
              <div className="infoPartnersOffer__button">Заполнить заявку</div>
            </div>
          </div>
          <div className="infoPartnersOffer__actionsBlock">
            <p className="infoPartnersOffer__actionsDescription">
              Если у вас уже есть аккаунт партнёра - выполните вход
            </p>
            <div
              className="infoPartnersOffer__actionsButton"
              onClick={() => {
                changePage(`info/partners/offer/login`);
              }}>
              <div className="infoPartnersOffer__button">Войти</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps)(OfferIndex);

OfferIndex.propTypes = {
  levels: PropTypes.array,
};
