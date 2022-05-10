import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../../../components/Icon.jsx';

const langs = require('../../../info/langs.json');

class IndexMainRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRate: 'cs',
    };
  }

  rateLinks = [
    {
      key: 'cs',
      contentLink: 'CS:GO',
    },
    {
      key: 'dota',
      contentLink: 'DOTA 2',
    },
  ];

  rateUsers = {
    cs: [
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4ewfwefwefwef',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
    ],
    dota: [
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
      {
        avatar: 'avatar-image.jpg',
        lang: 'ru',
        name: 'JohnTrawolta_4',
        counter: 9678,
      },
    ],
  };

  acticlesList = [
    {
      image: 'article-image-3.jpg',
      title: 'С другой стороны дальнейшее развитие различных форм',
      description:
        'Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации существенных финансовых и административных условий.',
      date: '17 Тра 2020',
      likes: 345,
      views: 1380,
    },
    {
      image: 'article-image-4.jpg',
      title: 'С другой стороны дальнейшее развитие различных форм',
      description:
        'Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации существенных финансовых и административных условий.',
      date: '17 Тра 2020',
      likes: 345,
      views: 1380,
    },
    {
      image: 'article-image-5.jpg',
      title: 'С другой стороны дальнейшее развитие различных форм',
      description:
        'Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации существенных финансовых и административных условий.',
      date: '17 Тра 2020',
      likes: 345,
      views: 1380,
    },
    {
      image: 'article-image-6.jpg',
      title: 'С другой стороны дальнейшее развитие различных форм',
      description:
        'Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации существенных финансовых и административных условий.',
      date: '17 Тра 2020',
      likes: 345,
      views: 1380,
    },
  ];

  render() {
    const { currentRate } = this.state;

    return (
      <>
        <div className="indexMain__rate">
          <div className="indexMain__rateItem _info">
            <div className="indexMain__rateHead">
              <div className="indexMain__rateLinks">
                {this.rateLinks.map((link, key) => (
                  <div className="indexMain__rateLink" key={key}>
                    <label className="checkbox">
                      <input
                        type="radio"
                        className="checkbox__input"
                        checked={currentRate === link.key}
                        onChange={() => {
                          this.setState((state) => {
                            const newState = { ...state };

                            newState.currentRate = link.key;

                            return newState;
                          });
                        }}
                      />
                      <div className="checkbox__view">{link.contentLink}</div>
                    </label>
                  </div>
                ))}
              </div>
              <p className="indexMain__rateSupport">Топ игроков месяца</p>
            </div>

            <div className="indexMain__ratePlayers">
              {this.rateUsers[currentRate].map((user, key) => (
                <div className="indexMain__ratePlayer" key={key}>
                  <p className="indexMain__ratePlayerNumber">{key + 1}</p>
                  <div className="indexMain__ratePlayerUser">
                    <div className="indexMain__ratePlayerUserAvatar">
                      <img
                        src={require(`../../../img/${user.avatar}`).default}
                        alt=""
                        className="indexMain__ratePlayerUserAvatarImage"
                      />
                    </div>
                    <img
                      src={require(`../../../img/${langs[user.lang].image}`).default}
                      alt=""
                      className="indexMain__ratePlayerUserLang"
                    />
                    <p className="indexMain__ratePlayerUserName">{user.name}</p>
                  </div>
                  <p className="indexMain__ratePlayerCounter">{user.counter}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="indexMain__rateItem _articles">
            {this.acticlesList.map((item, key) => (
              <div className="indexMain__rateArticle" key={key}>
                <div className="articleList">
                  <div className="articleList__item _image">
                    <img
                      src={require(`../../../img/${item.image}`).default}
                      alt=""
                      className="articleList__image"
                    />
                  </div>
                  <div className="articleList__item _content">
                    <h3 className="articleList__title">{item.title}</h3>
                    <p className="articleList__description">{item.description}</p>
                    <div className="articleList__foot">
                      <p className="articleList__date">{item.date}</p>
                      <div className="articleList__info">
                        {['likes', 'views'].map((prop) => {
                          let icon;

                          switch (prop) {
                            case 'likes':
                              icon = 'likes';
                              break;
                            case 'views':
                              icon = 'counter-views';
                              break;
                            default:
                              break;
                          }

                          return (
                            <div className="articleList__infoItem" key={prop}>
                              <i className="articleList__infoIcon">
                                <Icon name={icon} />
                              </i>
                              {item[prop]}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps)(IndexMainRate);

IndexMainRate.propTypes = {
  levels: PropTypes.array,
};
