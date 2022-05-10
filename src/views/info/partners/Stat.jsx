import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../../../components/Icon.jsx';

class InfoPartnersStat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  cards = [
    {
      value: '4,058',
      description: 'Привлечено игроков',
    },
    {
      value: '8,326',
      description: 'Заработано BS',
    },
    {
      value: '12,378',
      description: 'Переходов по ссылке',
    },
  ];

  render() {
    return (
      <div className="infoPartnersStat">
        <div className="infoPartnersStat__cards">
          {this.cards.map((card, key) => (
            <div className="infoPartnersStat__card" key={key}>
              <p className="infoPartnersStat__cardValue">{card.value}</p>
              <p className="infoPartnersStat__cardDescription">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="infoPartnersStat__diagram">
          <img
            src={require('../../../img/partners-diagram.svg').default}
            alt=""
            className="infoPartnersStat__diagramImage"
          />
        </div>
        <div className="infoPartnersStat__table">
          <div className="infoPartnersStat__tableRow _head">
            <div className="infoPartnersStat__tableCol _name">
              <p className="infoPartnersStat__tableContent">Источник перехода</p>
            </div>
            <div className="infoPartnersStat__tableCol _info">
              <div className="infoPartnersStat__tableRow">
                <div className="infoPartnersStat__tableCol _full">
                  <p className="infoPartnersStat__tableContent">Аудитория</p>
                </div>
              </div>
              <div className="infoPartnersStat__tableRow">
                <div className="infoPartnersStat__tableCol _short">
                  <p className="infoPartnersStat__tableContent _medium">
                    Пользователей
                    <span className="infoPartnersStat__tableContentInfo">
                      <i className="infoPartnersStat__tableContentInfoIcon">
                        <Icon name="info2" />
                      </i>
                    </span>
                  </p>
                </div>
                <div className="infoPartnersStat__tableCol _short">
                  <p className="infoPartnersStat__tableContent _medium">
                    Новых пользователей
                    <span className="infoPartnersStat__tableContentInfo">
                      <i className="infoPartnersStat__tableContentInfoIcon">
                        <Icon name="info2" />
                      </i>
                    </span>
                  </p>
                </div>
                <div className="infoPartnersStat__tableCol _short">
                  <p className="infoPartnersStat__tableContent _medium">
                    Сессии
                    <span className="infoPartnersStat__tableContentInfo">
                      <i className="infoPartnersStat__tableContentInfoIcon">
                        <Icon name="info2" />
                      </i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="infoPartnersStat__tableRow _head">
            <div className="infoPartnersStat__tableCol _name"></div>
            <div className="infoPartnersStat__tableCol _info">
              <div className="infoPartnersStat__tableRow">
                <div className="infoPartnersStat__tableCol _short _stat">
                  <p className="infoPartnersStat__tableValue">7,261</p>
                  <p className="infoPartnersStat__tableDescription">% от общего количества</p>
                </div>
                <div className="infoPartnersStat__tableCol _short _stat">
                  <p className="infoPartnersStat__tableValue">6,357</p>
                  <p className="infoPartnersStat__tableDescription">% от общего количества</p>
                </div>
                <div className="infoPartnersStat__tableCol _short _stat">
                  <p className="infoPartnersStat__tableValue">9,456</p>
                  <p className="infoPartnersStat__tableDescription">% от общего количества</p>
                </div>
              </div>
            </div>
          </div>
          <div className="infoPartnersStat__tableRow _top">
            <div className="infoPartnersStat__tableCol _name">
              <p className="infoPartnersStat__tableContent _medium _link">www.youtube.com/348739</p>
            </div>
            <div className="infoPartnersStat__tableCol _info">
              <div className="infoPartnersStat__tableRow">
                <div className="infoPartnersStat__tableCol _short">
                  <div className="infoPartnersStat__tableInfo">
                    <div className="infoPartnersStat__tableInfoItem _value">5789</div>
                    <div className="infoPartnersStat__tableInfoItem _percent">
                      (34%)
                      <i className="infoPartnersStat__tableInfoUp">
                        <Icon name="up" />
                      </i>
                    </div>
                  </div>
                </div>
                <div className="infoPartnersStat__tableCol _short _stat">
                  <div className="infoPartnersStat__tableInfo">
                    <div className="infoPartnersStat__tableInfoItem _value">5789</div>
                    <div className="infoPartnersStat__tableInfoItem _percent">(34%)</div>
                  </div>
                </div>
                <div className="infoPartnersStat__tableCol _short _stat">
                  <div className="infoPartnersStat__tableInfo">
                    <div className="infoPartnersStat__tableInfoItem _value">5789</div>
                    <div className="infoPartnersStat__tableInfoItem _percent">(34%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="infoPartnersStat__tableRow _top">
            <div className="infoPartnersStat__tableCol _name">
              <p className="infoPartnersStat__tableContent _medium _link">www.youtube.com/348739</p>
            </div>
            <div className="infoPartnersStat__tableCol _info">
              <div className="infoPartnersStat__tableRow">
                <div className="infoPartnersStat__tableCol _short">
                  <div className="infoPartnersStat__tableInfo">
                    <div className="infoPartnersStat__tableInfoItem _value">5789</div>
                    <div className="infoPartnersStat__tableInfoItem _percent">(34%)</div>
                  </div>
                </div>
                <div className="infoPartnersStat__tableCol _short _stat">
                  <div className="infoPartnersStat__tableInfo">
                    <div className="infoPartnersStat__tableInfoItem _value">5789</div>
                    <div className="infoPartnersStat__tableInfoItem _percent">(34%)</div>
                  </div>
                </div>
                <div className="infoPartnersStat__tableCol _short _stat">
                  <div className="infoPartnersStat__tableInfo">
                    <div className="infoPartnersStat__tableInfoItem _value">5789</div>
                    <div className="infoPartnersStat__tableInfoItem _percent">(34%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="infoPartnersStat__tableRow _top">
            <div className="infoPartnersStat__tableCol _name">
              <p className="infoPartnersStat__tableContent _medium _link">www.youtube.com/348739</p>
            </div>
            <div className="infoPartnersStat__tableCol _info">
              <div className="infoPartnersStat__tableRow">
                <div className="infoPartnersStat__tableCol _short">
                  <div className="infoPartnersStat__tableInfo">
                    <div className="infoPartnersStat__tableInfoItem _value">5789</div>
                    <div className="infoPartnersStat__tableInfoItem _percent">
                      (34%)
                      <i className="infoPartnersStat__tableInfoUp">
                        <Icon name="up" />
                      </i>
                    </div>
                  </div>
                </div>
                <div className="infoPartnersStat__tableCol _short _stat">
                  <div className="infoPartnersStat__tableInfo">
                    <div className="infoPartnersStat__tableInfoItem _value">5789</div>
                    <div className="infoPartnersStat__tableInfoItem _percent">(34%)</div>
                  </div>
                </div>
                <div className="infoPartnersStat__tableCol _short _stat">
                  <div className="infoPartnersStat__tableInfo">
                    <div className="infoPartnersStat__tableInfoItem _value">5789</div>
                    <div className="infoPartnersStat__tableInfoItem _percent">(34%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps)(InfoPartnersStat);

InfoPartnersStat.propTypes = {
  levels: PropTypes.array,
};
