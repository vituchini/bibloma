import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Field from '../../../../components/Field.jsx';

class OfferOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fields = [
    {
      name: 'name',
      placeholder: 'Имя и Фамилия',
    },
    {
      name: 'email',
      placeholder: 'Электронная почта',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Придумайте пароль',
    },
  ];

  socials = [
    {
      name: 'steam',
      href: '#',
    },
    {
      name: 'apple',
      href: '#',
    },
    {
      name: 'google',
      href: '#',
    },
    {
      name: 'fb',
      href: '#',
    },
  ];

  render() {
    return (
      <>
        <img
          src={require('../../../../img/logo-white.svg').default}
          alt=""
          className="infoPartnersOffer__logo"
        />
        <h1 className="infoPartnersOffer__title">Заявка регистрации партнёра BattleStar</h1>
        <p className="infoPartnersOffer__subTitle">
          Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское
          обеспечение нашей деятельности играет важную роль в формировании систем массового участия.
          Значимость этих проблем настолько очевидна.
        </p>
        <div className="infoPartnersOffer__form">
          <div className="infoPartnersOffer__fields">
            {this.fields.map((field, key) => (
              <div className="infoPartnersOffer__field" key={key}>
                <Field model={field} />
              </div>
            ))}
          </div>
          <div className="infoPartnersOffer__formLink">
            <p className="infoPartnersOffer__formLinkSupport">
              Значимость этих проблем настолько очевидна, что постоянное информационное обеспечение
              нашей деятельности играет важную роль.
            </p>
            <div className="infoPartnersOffer__formLinkField">
              <Field
                model={{
                  name: 'link',
                  placeholder: 'Ссылка на ваш канал/блог/аккаунт',
                }}
              />
            </div>
          </div>
          <div className="infoPartnersOffer__formButton">
            <div className="infoPartnersOffer__button">Подать заявку</div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps)(OfferOrder);

OfferOrder.propTypes = {
  levels: PropTypes.array,
};
