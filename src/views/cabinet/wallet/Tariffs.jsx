import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import changePage from '../../../functions/changePage';
import Icon from '../../../components/Icon.jsx';

class WalletTariffs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTariff: 'basic',
    };
  }

  tariffs = [
    {
      key: 'basic',
      image: 'tariff-base.jpg',
      name: 'Базовая',
      price: 'Басплатно',
      subTitle: 'Значення проблем настільки очевидна що...',
      list: ['10% комиссия платформы', '50 матчей в истории', 'участие в любительских Турнірах'],
    },
    {
      key: 'premium',
      image: 'tariff-premium.jpg',
      name: 'Премиум',
      price: '500$ / мес',
      subTitle: 'Значення проблем настільки очевидна що...',
      list: ['5% комиссия платформы', '200 матчей в истории', 'участие в любительских Турнірах'],
    },
    {
      key: 'star',
      image: 'tariff-star.jpg',
      name: 'BattleStar Pro',
      price: '4000$ / год',
      subTitle: 'Значення проблем настільки очевидна що...',
      list: [
        '1% комиссия платформы',
        '1000 матчей в истории',
        'участие в профессиональных Турнірах',
      ],
    },
  ];

  render() {
    const { currentTariff } = this.state;

    return (
      <div className="cabinetWallet__tariffs">
        <div className="cabinetWallet__inner">
          <a
            href="/cabinet/wallet"
            className="cabinetWallet__innerBack"
            onClick={(e) => {
              e.preventDefault();
              changePage('cabinet/wallet');
            }}></a>
          <h3 className="cabinetWallet__innerTitle">Премиум подписки BattleStar </h3>
          <p className="cabinetWallet__innerDescription">
            Значення проблем настільки очевидна що... с широким активом способствует подготовки и
            реализации позиций, занимаемых участниками в отношении поставленных задач
          </p>
        </div>
        <div className="cabinetWallet__tariffsCards">
          {this.tariffs.map((tariff, key) => {
            const isCurrent = tariff.key === currentTariff;

            return (
              <div className={`cabinetWallet__tariffsCard`} key={key}>
                <div className={`tariffCard ${isCurrent === true ? '_current' : ''}`}>
                  <img
                    src={require(`../../../img/${tariff.image}`).default}
                    alt=""
                    className="tariffCard__back"
                  />
                  <div className="tariffCard__head">
                    <h3 className="tariffCard__name">{tariff.name}</h3>
                    <p className="tariffCard__price">{tariff.price}</p>
                    <p className="tariffCard__subTitle">{tariff.subTitle}</p>
                  </div>

                  <ol className="tariffCard__list">
                    {tariff.list.map((item, keyItem) => (
                      <li className="tariffCard__listItem" key={keyItem}>
                        {item}
                      </li>
                    ))}
                  </ol>
                  <div className="tariffCard__choice">
                    {isCurrent === true ? (
                      <>
                        Ваша подписка
                        <i className="tariffCard__choiceIcon">
                          <Icon name="done" />
                        </i>
                      </>
                    ) : (
                      `Выбрать`
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(WalletTariffs);

WalletTariffs.propTypes = {
  levels: PropTypes.array,
};
