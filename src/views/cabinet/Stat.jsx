import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../../components/Icon.jsx';
import changePage from '../../functions/changePage';
import CsgoStatGraph from './stat/CsgoStatGraph.jsx';
import DotaStatGraph from './stat/DotaStatGraph.jsx';

class CabinetStat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  pages = [
    {
      hrefs: ['cs-go', '', undefined],
      key: 'cs-go',
      contentLink: 'CS:GO',
      render() {
        const csgoStat = this.findStat(this.props.user.stats, 'csgo');
        // const {
        //   csgo_accuracy,
        //   csgo_headshots,
        //   csgo_vitality,
        //   deaths,
        //   dota_farming,
        //   dota_fighting,
        //   dota_flexibility,
        //   dota_pushing,
        //   dota_supporting,
        //   game,
        //   hours_in_game,
        //   kills,
        //   losses,
        //   maps,
        //   matches,
        //   tournaments,
        //   win_rate,
        // } = csgoStat;
        const cards = this.getCards(csgoStat);
        const infos = this.getInfos(csgoStat);
        return (
          <>
            <div className="cabinetStat__block">
              <div className="cabinetStat__blockItem _support">
                <h3 className="cabinetStat__title">Ранг: 0</h3>
              </div>
              <div className="cabinetStat__blockItem _content">
                <div className="cabinetStat__cards">
                  {cards.map((card, key) => (
                    <div className="cabinetStat__card" key={key}>
                      <i className="cabinetStat__cardIcon">
                        <Icon name={card.icon} />
                      </i>
                      <div className="cabinetStat__cardInfo">
                        <p className="cabinetStat__cardValue">{card.value}</p>
                        <p className="cabinetStat__cardDescription">{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="cabinetStat__block">
              <div className="cabinetStat__blockItem _support">
                <h3 className="cabinetStat__title">Статистика</h3>
                <div className="cabinetStat__infos">
                  {infos.map((info, key) => (
                    <div className="cabinetStat__info" key={key}>
                      {info.map((item, keyItem) => (
                        <div className="cabinetStat__infoItems" key={keyItem}>
                          <div className="cabinetStat__infoItem _support">{item.support}</div>
                          <div className="cabinetStat__infoItem _value">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="cabinetStat__blockItem _content">
                <div className="cabinetStat__diagram">
                    <CsgoStatGraph/>
                </div>
              </div>
            </div>
          </>
        );
      },
    },
    {
      hrefs: ['dota2'],
      key: 'dota2',
      contentLink: 'DOTA 2',

      render() {
        const dotaStat = this.findStat(this.props.user.stats, 'dota');
        const cards = this.getCards(dotaStat);
        const infos = this.getInfos(dotaStat);
        return (
          <>
            <div className="cabinetStat__block">
              <div className="cabinetStat__blockItem _support">
                <h3 className="cabinetStat__title">Ранг: 0</h3>
              </div>
              <div className="cabinetStat__blockItem _content">
                <div className="cabinetStat__cards">
                  {cards.map((card, key) => (
                    <div className="cabinetStat__card" key={key}>
                      <i className="cabinetStat__cardIcon">
                        <Icon name={card.icon} />
                      </i>
                      <div className="cabinetStat__cardInfo">
                        <p className="cabinetStat__cardValue">{card.value}</p>
                        <p className="cabinetStat__cardDescription">{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="cabinetStat__block">
              <div className="cabinetStat__blockItem _support">
                <h3 className="cabinetStat__title">Стиль игры</h3>
                <div className="cabinetStat__infos">
                  {infos.map((info, key) => (
                    <div className="cabinetStat__info" key={key}>
                      {info.map((item, keyItem) => (
                        <div className="cabinetStat__infoItems" key={keyItem}>
                          <div className="cabinetStat__infoItem _support">{item.support}</div>
                          <div className="cabinetStat__infoItem _value">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="cabinetStat__blockItem _content">
                <div className="cabinetStat__diagram" style={{backgroundColor: 'rgba(248, 248, 248, 0.1)', borderRadius: '50px'}}>
                    <DotaStatGraph/>
                </div>
              </div>
            </div>
          </>
        );
      },
    },
  ];

  getCards({tournaments, win_rate, hours_in_game}){
    return [
      {
        icon: 'tournaments',
        value: `${tournaments}%`,
        description: 'Турнира',
      },
      {
        icon: 'rate',
        value: `${win_rate}%`,
        description: 'Винрейт',
      },
      {
        icon: 'hours',
        value: `${hours_in_game}`,
        description: 'Часов в игре',
      },
    ]
  }

  getInfos({matches, maps, wins, losses, kills, deaths}){
    return [
      [
        {
          support: 'Матчей сыграно:',
          value: matches,
        },
        {
          support: 'Карт сыграно:',
          value: maps,
        },
      ],
      [
        {
          support: 'Побед:',
          value: wins,
        },
        {
          support: 'Поражений:',
          value: losses,
        },
      ],
      [
        {
          support: 'Убийств:',
          value: kills,
        },
        {
          support: 'Смертей:',
          value: deaths,
        },
      ],
    ];
  }

  findStat(stats, gameName) {
    return stats.find((stat) => {
      return stat.game === gameName;
    });
  }

  render() {
    console.log('STAT props', this.props);

    const { levels } = this.props;
    const currentPage =
      this.pages.find((page) => page.hrefs.indexOf(levels[2]) !== -1) ||
      this.pages.find((page) => page.hrefs.indexOf('') !== -1);

    return (
      <div className={`cabinetStat _${currentPage.key}`}>
        <div className="cabinetStat__head">
          {this.pages.map((page, key) => (
            <div className="cabinetStat__headItem" key={key}>
              <label className="checkbox">
                <input
                  type="radio"
                  className="checkbox__input"
                  checked={currentPage.key === page.key}
                  onChange={() => {
                    changePage(`cabinet/stat/${page.hrefs[0]}`);
                  }}
                />
                <div className="checkbox__view">{page.contentLink}</div>
              </label>
            </div>
          ))}
        </div>
        <div className="cabinetStat__content">{currentPage.render.call(this)}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    levels: state.levels,
    user: state.user,
  };
}

export default connect(mapStateToProps)(CabinetStat);

CabinetStat.propTypes = {
  levels: PropTypes.array,
  user: PropTypes.object,
};
