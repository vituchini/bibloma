import React from 'react';
import { connect } from 'react-redux';

import Icon from '../../components/Icon.jsx';

class LandFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  nav = [
    {
      name: 'Новини',
      list: [
        { content: 'Обновление 1.2' },
        { content: 'Рейтинг игроков' },
        { content: 'Лучшие команды' },
      ],
    },
    {
      name: 'Турніры',
      list: [
        { content: 'Любительские' },
        { content: 'Профессиональные' },
        { content: 'Трансляции' },
      ],
    },
    {
      name: 'Трансляции',
      list: [
        { content: 'Прямые эфиры' },
        { content: 'Записи матчей' },
        { content: 'Турнірные ігри' },
      ],
    },
    {
      name: 'О BattleStar',
      list: [{ content: 'Поддержка' }, { content: 'Партнёрам' }, { content: 'Как играть' }],
    },
  ];

  render() {
    return (
      <div className="landFooter">
        <div className="landFooter__inner">
          <div className="landFooter__content">
            <div className="landFooter__logo">
              <img
                src={require(`../../img/logo-icon.svg`).default}
                alt=""
                className="landFooter__logoIcon"
              />
            </div>
            <div className="landFooter__nav">
              {this.nav.map((block, key) => (
                <div className="landFooter__navBlock" key={key}>
                  <p className="landFooter__navTitle">{block.name}</p>
                  <ul className="landFooter__navList">
                    {block.list.map((item, keyItem) => (
                      <li className="landFooter__navListItem" key={keyItem}>
                        <a href="#" className="landFooter__navListLink">
                          {item.content}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="landFooter__actions">
              <div className="landFooter__actionsButtons">
                <div className="landFooter__actionsButton">
                  <div className="downloadBtn _white">
                    Скачать на Mac
                    <i className="downloadBtn__icon">
                      <Icon name="logo-apple" />
                    </i>
                  </div>
                </div>
                <div className="landFooter__actionsButton">
                  <div className="downloadBtn _white">
                    Скачать на Windows
                    <i className="downloadBtn__icon">
                      <Icon name="logo-windows" />
                    </i>
                  </div>
                </div>
              </div>
              <div className="landFooter__actionsSocials">
                <a href="#" className="landFooter__actionsSocial">
                  <Icon name="share-fb" />
                </a>
                <a href="#" className="landFooter__actionsSocial">
                  <Icon name="share-inst-full" />
                </a>
                <a href="#" className="landFooter__actionsSocial">
                  <Icon name="share-tw" />
                </a>
                <a href="#" className="landFooter__actionsSocial">
                  <Icon name="share-yt" />
                </a>
              </div>
            </div>
          </div>
          <div className="landFooter__foot">
            <div className="landFooter__footLinks">
              <a href="#" className="landFooter__footLink">
                Пользовательское соглашение
              </a>
              <a href="#" className="landFooter__footLink">
                Помощь
              </a>
            </div>
            <div className="landFooter__footCopy">Все права защищены. 2021</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LandFooter);
