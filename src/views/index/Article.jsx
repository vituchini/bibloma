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

  tags = ['#CS:GO', '#Tournament', '#BattleStar', '#GreenDragon', '#Турнир'];

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
      <div className="indexArticle">
        <div className="indexArticle__inner">
          <img
            src={require('../../img/article-image-1.jpg').default}
            alt=""
            className="indexArticle__image"
          />
          <h1 className="indexArticle__title">
            BattleStar: Apache Team против Green Dragon - главный матч октября
          </h1>
          <div className="indexArticle__head">
            <div className="indexArticle__headUser">
              <div className="indexArticle__headUserAvatar">
                <img
                  src={require('../../img/avatar-image.jpg').default}
                  alt=""
                  className="indexArticle__headUserAvatarImage"
                />
              </div>
              <p className="indexArticle__headUserName">Максим Рихтер</p>
            </div>
            <div className="indexArticle__headInfo">
              <div className="indexArticle__headViews">
                <i className="indexArticle__headViewsIcon">
                  <Icon name="counter-views" />
                </i>
                354
              </div>
              <p className="indexArticle__headDate">17 Апр, 2021</p>
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
              Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера
              нашей активности позволяет выполнять важные задания по разработке направлений
              прогрессивного развития. Равным образом сложившаяся структура организации влечет за
              собой процесс внедрения и модернизации систем массового участия. Значимость этих
              проблем настолько очевидна, что начало повседневной работы по формированию позиции
              позволяет выполнять важные задания по разработке систем массового участия.
              Повседневная практика показывает, что новая модель организационной деятельности
              позволяет оценить значение дальнейших направлений развития.
            </p>
            <p>
              Не следует, однако забывать, что реализация намеченных плановых заданий позволяет
              выполнять важные задания по разработке форм развития. Идейные соображения высшего
              порядка, а также новая модель организационной деятельности требуют от нас анализа
              системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый
              опыт сложившаяся структура организации требуют определения и уточнения форм развития.
              Разнообразный и богатый опыт консультация с широким активом представляет собой
              интересный эксперимент проверки форм развития. С другой стороны консультация с широким
              активом влечет за собой процесс внедрения и модернизации системы обучения кадров,
              соответствует насущным потребностям.
            </p>
            <img src={require('../../img/article-image-2.jpg').default} alt="" />
            <p>
              Разнообразный и богатый опыт начало повседневной работы по формированию позиции
              обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых
              участниками в отношении поставленных задач. Значимость этих проблем настолько
              очевидна, что укрепление и развитие структуры в значительной степени обуславливает
              создание направлений прогрессивного развития. С другой стороны новая модель
              организационной деятельности требуют от нас анализа систем массового участия.
              Значимость этих проблем настолько очевидна, что консультация с широким активом
              позволяет оценить значение систем массового участия. С другой стороны рамки и место
              обучения кадров требуют от нас анализа систем массового участия. Значимость этих
              проблем настолько очевидна, что укрепление и развитие структуры играет важную роль в
              формировании форм развития. Не следует, однако забывать, что постоянный количественный
              рост и сфера нашей активности представляет собой интересный эксперимент проверки
              модели развития.
            </p>
            <h3>Где смотреть игру?</h3>
            <p>
              Равным образом консультация с широким активом требуют от нас анализа направлений
              прогрессивного развития. Разнообразный и богатый опыт начало повседневной работы по
              формированию позиции в значительной степени обуславливает создание системы обучения
              кадров, соответствует насущным потребностям.
            </p>
            <p>
              Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера
              нашей активности позволяет выполнять важные задания по разработке направлений
              прогрессивного развития. Равным образом сложившаяся структура организации влечет за
              собой процесс внедрения и модернизации систем массового участия. Значимость этих
              проблем настолько очевидна, что начало повседневной работы по формированию позиции
              позволяет выполнять важные задания по разработке систем массового участия.
              Повседневная практика показывает, что новая модель организационной деятельности
              позволяет оценить значение дальнейших направлений развития.
            </p>
            <p>
              Не следует, однако забывать, что реализация намеченных плановых заданий позволяет
              выполнять важные задания по разработке форм развития. Идейные соображения высшего
              порядка, а также новая модель организационной деятельности требуют от нас анализа
              системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый
              опыт сложившаяся структура организации требуют определения и уточнения форм развития.
              Разнообразный и богатый опыт консультация с широким активом представляет собой
              интересный эксперимент проверки форм развития. С другой стороны консультация с широким
              активом влечет за собой процесс внедрения и модернизации системы обучения кадров,
              соответствует насущным потребностям.
            </p>
            <div className="indexArticle__contentGame">
              <GridGame />
            </div>
            <p>
              Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера
              нашей активности позволяет выполнять важные задания по разработке направлений
              прогрессивного развития. Равным образом сложившаяся структура организации влечет за
              собой процесс внедрения и модернизации систем массового участия. Значимость этих
              проблем настолько очевидна, что начало повседневной работы по формированию позиции
              позволяет выполнять важные задания по разработке систем массового участия.
              Повседневная практика показывает, что новая модель организационной деятельности
              позволяет оценить значение дальнейших направлений развития.
            </p>
            <p>
              Не следует, однако забывать, что реализация намеченных плановых заданий позволяет
              выполнять важные задания по разработке форм развития. Идейные соображения высшего
              порядка, а также новая модель организационной деятельности требуют от нас анализа
              системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый
              опыт сложившаяся структура организации требуют определения и уточнения форм развития.
              Разнообразный и богатый опыт консультация с широким активом представляет собой
              интересный эксперимент проверки форм развития. С другой стороны консультация с широким
              активом влечет за собой процесс внедрения и модернизации системы обучения кадров,
              соответствует насущным потребностям.
            </p>
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
              <p className="indexArticle__headDate">17 Апр, 2021</p>
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
            <h3 className="indexArticle__articlesTitle">Похожие статьи</h3>
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
