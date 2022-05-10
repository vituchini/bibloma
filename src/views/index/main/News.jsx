import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import changePage from '../../../functions/changePage';

import Icon from '../../../components/Icon.jsx';

class IndexMainNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  articles = [
    {
      image: 'article-image-3.jpg',
      title: 'Главные турниры октября',
      description: 'FURIA представила помощника тренера. Отныне tacituswefewfewfwef',
      author: 'Максим Рихтер',
      date: '19 Окт, 2020',
      views: 134,
    },
    {
      image: 'article-image-4.jpg',
      title: 'Главные турниры октября',
      description: 'FURIA представила помощника тренера. Отныне tacitus',
      author: 'Максим Рихтер',
      date: '19 Окт, 2020',
      views: 134,
    },
    {
      image: 'article-image-5.jpg',
      title: 'Главные турниры октября',
      description: 'FURIA представила помощника тренера. Отныне tacitus',
      author: 'Максим Рихтер',
      date: '19 Окт, 2020',
      views: 134,
    },
    {
      image: 'article-image-6.jpg',
      title: 'Главные турниры октября',
      description: 'FURIA представила помощника тренера. Отныне tacitus',
      author: 'Максим Рихтер',
      date: '19 Окт, 2020',
      views: 134,
    },
    {
      image: 'article-image-7.jpg',
      title: 'Главные турниры октября',
      description: 'FURIA представила помощника тренера. Отныне tacitus',
      author: 'Максим Рихтер',
      date: '19 Окт, 2020',
      views: 134,
    },
    {
      image: 'article-image-8.jpg',
      title: 'Главные турниры октября',
      description: 'FURIA представила помощника тренера. Отныне tacitus',
      author: 'Максим Рихтер',
      date: '19 Окт, 2020',
      views: 134,
    },
  ];

  render() {
    return (
      <>
        <h1 className="indexMain__title">
          <span>BattleStar</span> Новости
        </h1>
        <div className="indexMain__articles">
          <div className="indexMain__articlesBox">
            {this.articles.map((article, key) => (
              <a
                href={`/index/article`}
                className="indexMain__article"
                key={key}
                onClick={(e) => {
                  e.preventDefault();
                  changePage('index/article');
                }}>
                <div className="articleCard">
                  <div className="articleCard__image">
                    <img
                      src={require(`../../../img/${article.image}`).default}
                      alt=""
                      className="articleCard__imageItem"
                    />
                  </div>
                  <div className="articleCard__content">
                    <h4 className="articleCard__title">{article.title}</h4>
                    <p className="articleCard__description">{article.description}</p>
                    <div className="articleCard__info">
                      {['author', 'date'].map((prop) => (
                        <p className="articleCard__infoItem" key={prop}>
                          {article[prop]}
                        </p>
                      ))}
                    </div>
                    <div className="articleCard__views">
                      <i className="articleCard__viewsIcon">
                        <Icon name="counter-views" />
                      </i>
                      {article.views}
                    </div>
                  </div>
                </div>
              </a>
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

export default connect(mapStateToProps)(IndexMainNews);

IndexMainNews.propTypes = {
  levels: PropTypes.array,
};
