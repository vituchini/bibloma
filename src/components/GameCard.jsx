import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

class GameCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.renderInfoItem = this.renderInfoItem.bind(this);
  }

  infos = {
    map: 'Карта',
    price: 'Ставка',
    mode: 'Режим',
    lobbi: 'Лоббі',
    counterUsers: 'Учасників',
  };

  orderInfo = {
    cs: ['map', 'price', 'mode', 'counterUsers'],
    dota: ['mode', 'price', 'lobbi', 'counterUsers'],
  };

  renderInfoItem(prop) {
    const { model } = this.props;

    return (
      <div className="gameCard__infoItem" key={prop}>
        <p className="gameCard__infoItemSupport">{this.infos[prop]}</p>
        <p className="gameCard__infoItemValue">
          {model.info[prop]} {prop === 'price' ? 'BS' : ''}
        </p>
      </div>
    );
  }

  render() {
    const { model, type, nameOfGame } = this.props;

    return (
      <div className={`gameCard _${type} ${!model.image ? '_withoutImage' : ''}`}>
        {type === 'block' && (
          <>
            {model.image && (
              <div className="gameCard__image">
                <img
                  src={require(`../img/${model.image}`).default}
                  alt=""
                  className="gameCard__imageItem"
                />
              </div>
            )}
            <div className="gameCard__info">
              <div className="gameCard__infoHead">
                {model.isOnline === true && <div className="gameCard__online">Онлайн</div>}
                <div className="gameCard__user">
                  <img
                    src={require('../img/lang-ru.svg').default}
                    alt=""
                    className="gameCard__userLang"
                  />
                  <p className="gameCard__userName">{model.name}</p>
                  <i className="gameCard__userIcon">{model.is_locked && <Icon name="locked" />}</i>
                </div>
                <p className="gameCard__map">{model.info.map}</p>
              </div>
              <div className="gameCard__infoFoot">
                {['price', 'mode', 'counterUsers']
                  .filter((prop) => model.info[prop] !== undefined)
                  .map((prop) => this.renderInfoItem(prop))}
                {model.ping && (
                  <div className={`gameCard__infoStatus ${model.ping > 300 ? '_error' : ''}`}>
                    {model.ping}
                    <i className="gameCard__infoStatusIcon">
                      <Icon name="connected-status-1" />
                    </i>
                  </div>
                )}
                {model.views && (
                  <div className="gameCard__infoViews">
                    <i className="gameCard__infoViewsIcon">
                      <Icon name="counter-views" />
                    </i>
                    {model.views}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        {type === 'list' && (
          <>
            {model.image && (
              <div className="gameCard__image">
                <img
                  src={require(`../img/${model.image}`).default}
                  alt=""
                  className="gameCard__imageItem"
                />
              </div>
            )}

            <div className="gameCard__info">
              <div className="gameCard__infoHead">
                <div className="gameCard__user">
                  <img
                    src={require('../img/lang-ru.svg').default}
                    alt=""
                    className="gameCard__userLang"
                  />
                  <p className="gameCard__userName">{model.name}</p>
                </div>
              </div>
              <div className="gameCard__infoFoot">
                <div className="gameCard__infoItems">
                  {this.orderInfo[nameOfGame]
                    .filter((prop) => model.info[prop] !== undefined)
                    .map((prop) => this.renderInfoItem(prop))}
                </div>

                {model.ping && (
                  <div className={`gameCard__infoStatus ${model.ping > 300 ? '_error' : ''}`}>
                    {model.ping}
                    <i className="gameCard__infoStatusIcon">
                      <Icon name="connected-status-1" />
                    </i>
                  </div>
                )}

                {model.views && (
                  <div className="gameCard__infoViews">
                    <i className="gameCard__infoViewsIcon">
                      <Icon name="counter-views" />
                    </i>
                    {model.views}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(GameCard);

GameCard.propTypes = {
  type: PropTypes.string,
  model: PropTypes.object,
  nameOfGame: PropTypes.string,
};
