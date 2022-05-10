import React from 'react';
import { connect } from 'react-redux';

import Icon from '../../components/Icon.jsx';
import Slider from '../../functions/slider';
import changePage from '../../functions/changePage';
import { steamLogin } from '../../redux/redux';

class LandHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSetAnimate: false,
    };

    this.parent = React.createRef();
  }

  parseQuery(queryString) {
    const query = {};
    const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i].split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
  }

  partners = [
    { key: 'tw', src: 'partner-logo-1.png' },
    { key: 'lo', src: 'partner-logo-2.svg' },
    { key: 'as', src: 'partner-logo-3.svg' },
    { key: 'sen', src: 'partner-logo-4.svg' },
    { key: 'hyp', src: 'partner-logo-5.svg' },
    { key: 'htc', src: 'partner-logo-6.svg' },
    { key: 'jbl', src: 'partner-logo-7.svg' },
    { key: 'tw', src: 'partner-logo-1.png' },
    { key: 'lo', src: 'partner-logo-2.svg' },
    { key: 'as', src: 'partner-logo-3.svg' },
    { key: 'sen', src: 'partner-logo-4.svg' },
    { key: 'hyp', src: 'partner-logo-5.svg' },
    { key: 'htc', src: 'partner-logo-6.svg' },
    { key: 'jbl', src: 'partner-logo-7.svg' },
  ];

  tournaments = [
    {
      image: 'tournament-image-1.jpg',
      name: 'NAC Sport Championship 2020',
    },
    {
      image: 'tournament-image-2.jpg',
      name: 'IEM KATOWICE CS:GO',
    },
    {
      image: 'tournament-image-3.jpg',
      name: 'THE ELEAGUE - CS:GO Premier',
    },
  ];

  setAnimate() {
    this.setState((state) => {
      const newState = { ...state };

      newState.isSetAnimate = true;

      return newState;
    });
  }

  componentDidMount() {
    // const query = window.location.href.split('?').filter((el,i)=>i!==0).join().replaceAll('openid.','')

    // const parsedQuery = this.parseQuery(query)
    // if(parsedQuery)steamLogin(parsedQuery)

    setTimeout(() => {
      this.setAnimate();
    }, 100);

    setTimeout(() => {
      new Slider({
        slider: this.parent.current.querySelector('.landHeader__partners'),
        lay: document.querySelector('.landHeader__partnersItems'),
        items: document.querySelectorAll('.landHeader__partnersItem'),
        infinity: true,
        loop: 3000,
        current: 0,
        // buttons: {
        //   prev: document.querySelector('.landCollections__sliderArrow._prev'),
        //   next: document.querySelector('.landCollections__sliderArrow._next'),
        // },
      });
    }, 100);
  }

  render() {
    const { isSetAnimate } = this.state;

    return (
      <div ref={this.parent} className={`landHeader ${isSetAnimate === true ? '_animate' : ''}`}>
        <div className="landHeader__top">
          <div className="landHeader__topInner">
            <p className="landHeader__topName">Для партнёров</p>
            <div className="landHeader__topActions">
              <div className="landHeader__topButtons">
                <div className="landHeader__topButton">
                  <i className="landHeader__topButtonIcon">
                    <Icon name="download" />
                  </i>
                  Cкачать клиент
                </div>
                <div className="landHeader__topButton _main" onClick={() => changePage(`auth`)}>
                  Создать аккаунт
                </div>
              </div>
              <div className="landHeader__topLang">
                <div className="landHeader__topLangView">Ru</div>
              </div>
            </div>
          </div>
        </div>
        <div className="landHeader__inner">
          <img
            src={require('../../img/logo-icon.svg').default}
            alt=""
            className={`landHeader__logo`}
          />
          <h1 className="landHeader__title">Соревновательные матчи и&nbsp;Турніры</h1>
          <p className="landHeader__description">
            Добро пожаловать на стартовую страницу уникального проекта Battlestar, который погрузит
            вас в незабываемую атмосферу игрового соперничества, побед и новых достижений. Играйте с
            игроками со всего мира!
          </p>
          <div className="landHeader__buttons">
            <div className="landHeader__button">
              <div className="downloadBtn">
                Скачать на Mac
                <i className="downloadBtn__icon">
                  <Icon name="logo-apple" />
                </i>
              </div>
            </div>
            <div className="landHeader__button">
              <div className="downloadBtn">
                Скачать на Windows
                <i className="downloadBtn__icon">
                  <Icon name="logo-windows" />
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="landHeader__partners">
          <div className="landHeader__partnersItems">
            {this.partners.map((logo, key) => (
              <div className={`landHeader__partnersItem _${logo.key}`} key={key}>
                <img
                  src={require(`../../img/${logo.src}`).default}
                  alt=""
                  className={`landHeader__partner _${logo.key}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="landHeader__inner">
          <div className="landHeader__tournaments">
            {this.tournaments.map((item, key) => (
              <div className="landHeader__tournament" key={key}>
                <div className="landHeader__tournamentPreview">
                  <img
                    src={require(`../../img/${item.image}`).default}
                    alt=""
                    className="landHeader__tournamentImage"
                  />
                </div>
                <div className="landHeader__tournamentContent">
                  <div className="landHeader__tournamentStatus">Онлайн</div>
                  <p className="landHeader__tournamentName">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LandHeader);
