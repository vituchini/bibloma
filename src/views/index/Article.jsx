import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../../components/Icon.jsx';
import GridGame from '../../components/GridGame.jsx';

class IndexArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shareBtns = ['share', 'share-inst', 'share-tw', 'share-fb'];

  tags = ['#CS:GO', '#Tournament', '#BattleStar', '#GreenDragon', '#Турнір'];

  articles = [
    {
      image: 'article-image-3.jpg',
      title: 'Головні турніри літа',
      description: 'FURIA показала нового тренера. Тепер tacituswefewfewfwef',
      author: 'Віктор Петрович',
      date: '22 Тра, 2022',
      views: 134,
    },
    {
      image: 'article-image-4.jpg',
      title: 'Головні турніри літа',
      description: 'FURIA показала нового тренера. Тепер tacitus',
      author: 'Віктор Петрович',
      date: '22 Тра, 2022',
      views: 134,
    },
    {
      image: 'article-image-5.jpg',
      title: 'Головні турніри літа',
      description: 'FURIA показала нового тренера. Тепер tacitus',
      author: 'Віктор Петрович',
      date: '22 Тра, 2022',
      views: 134,
    },
    {
      image: 'article-image-6.jpg',
      title: 'Головні турніри літа',
      description: 'FURIA показала нового тренера. Тепер tacitus',
      author: 'Віктор Петрович',
      date: '22 Тра, 2022',
      views: 134,
    },
    {
      image: 'article-image-7.jpg',
      title: 'Головні турніри літа',
      description: 'FURIA показала нового тренера. Тепер tacitus',
      author: 'Віктор Петрович',
      date: '22 Тра, 2022',
      views: 134,
    },
    {
      image: 'article-image-8.jpg',
      title: 'Головні турніри літа',
      description: 'FURIA показала нового тренера. Тепер tacitus',
      author: 'Віктор Петрович',
      date: '22 Тра, 2022',
      views: 134,
    },
  ];

  render() {
    return (
      <div className="indexArticle">
        <div className="indexArticle__inner">
          <img
            src={require('../../img/article-image-1.jpg').default}
            alt=""
            className="indexArticle__image"
          />
          <h1 className="indexArticle__title">BattleStar: Apache Team проти Green Dragon</h1>
          <div className="indexArticle__head">
            <div className="indexArticle__headUser">
              <div className="indexArticle__headUserAvatar">
                <img
                  src={require('../../img/avatar-image.jpg').default}
                  alt=""
                  className="indexArticle__headUserAvatarImage"
                />
              </div>
              <p className="indexArticle__headUserName">Віктор Петрович</p>
            </div>
            <div className="indexArticle__headInfo">
              <div className="indexArticle__headViews">
                <i className="indexArticle__headViewsIcon">
                  <Icon name="counter-views" />
                </i>
                354
              </div>
              <p className="indexArticle__headDate">19 Тра, 2022</p>
            </div>
            <div className="indexArticle__headShare">
              {this.shareBtns.map((btn, key) => (
                <div className="indexArticle__headShareBtn" key={key}>
                  <i className="indexArticle__headShareBtnIcon">
                    <Icon name={btn} />
                  </i>
                </div>
              ))}
            </div>
          </div>
          <div className="indexArticle__tags">
            {this.tags.map((tag, key) => (
              <a href="#" className="indexArticle__tag" key={key}>
                {tag}
              </a>
            ))}
          </div>
          <div className="indexArticle__content">
            <p>
              Значимість цих проблем настільки очевидна, що постійне кількісне зростання та сфера
              нашої активності дозволяє виконувати важливі завдання щодо розробки напрямів
              прогресивного розвитку. Також структура організації, що склалася, тягне за собою
              процес впровадження та модернізації систем масової участі. Значимість цих проблем
              настільки очевидна, що початок повсякденної роботи з формування позиції дозволяє
              виконувати важливі завдання розробки систем масової участі. Повсякденна практика
              показує, що нова модель організаційної діяльності дозволяє оцінити значення подальших
              напрямів розвитку. Не слід проте забувати, що реалізація намічених планових завдань
              дозволяє виконувати важливі завдання з розробки форм розвитку. Ідейні міркування
              вищого ладу, а також нова модель організаційної діяльності вимагають від нас аналізу
              системи навчання кадрів, що відповідає насущним потребам. Різноманітний і багатий
              досвід структура організації, що склалася, вимагають визначення та уточнення форм
              розвитку. Різноманітний та багатий досвід консультація з широким активом є цікавим
              експериментом перевірки форм розвитку. З іншого боку, консультація з широким активом
              тягне за собою процес впровадження та модернізації системи навчання кадрів, відповідає
              насущним потребам.
            </p>
            <img src={require('../../img/article-image-2.jpg').default} alt="" />
          </div>
          <div className="indexArticle__tags">
            {this.tags.map((tag, key) => (
              <a href="#" className="indexArticle__tag" key={key}>
                {tag}
              </a>
            ))}
          </div>
          <div className="indexArticle__head">
            <div className="indexArticle__headInfo">
              <p className="indexArticle__headDate">19 Тра, 2022</p>
              <div className="indexArticle__headViews">
                <i className="indexArticle__headViewsIcon">
                  <Icon name="counter-views" />
                </i>
                354
              </div>
            </div>
          </div>
          <div className="indexArticle__actions">
            <div className="indexArticle__action _dislike">
              <i className="indexArticle__actionIcon">
                <Icon name="dislike" />
              </i>
              <p className="indexArticle__actionContent">3</p>
            </div>
            <div className="indexArticle__action _like">
              <i className="indexArticle__actionIcon">
                <Icon name="like" />
              </i>
              <p className="indexArticle__actionContent">124 + 1</p>
            </div>
          </div>
          <div className="indexArticle__articles">
            <h3 className="indexArticle__articlesTitle">Схожі статті</h3>
            <div className="indexArticle__articlesItems">
              {this.articles.map((article, key) => (
                <div className="indexArticle__articlesItem" key={key}>
                  <div className="articleCard">
                    <div className="articleCard__image">
                      <img
                        src={require(`../../img/${article.image}`).default}
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
                </div>
              ))}
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

export default connect(mapStateToProps)(IndexArticle);

IndexArticle.propTypes = {
  levels: PropTypes.array,
};
