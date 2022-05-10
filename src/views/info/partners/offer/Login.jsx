import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Field from '../../../../components/Field.jsx';
import Icon from '../../../../components/Icon.jsx';

class OfferLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fields = [
    {
      name: 'login',
      placeholder: 'Никнейм или электронная почта',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Пароль',
      withForget: true,
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
        <h1 className="infoPartnersOffer__title">Вход в кабинет партнёра BattleStar</h1>
        <div className="infoPartnersOffer__form">
          <div className="infoPartnersOffer__fields">
            {this.fields.map((field, key) => (
              <div className="infoPartnersOffer__field" key={key}>
                <Field model={field} />
              </div>
            ))}
          </div>
          <div className="infoPartnersOffer__formButton">
            <div className="infoPartnersOffer__button">Ввійти</div>
          </div>
          <div className="infoPartnersOffer__socials">
            <h4 className="infoPartnersOffer__socialsTitle">Чи ввійдіть через</h4>
            <div className="infoPartnersOffer__socialsItems">
              {this.socials.map((social, key) => (
                <a
                  href={social.href}
                  className={`infoPartnersOffer__socialsItem _${social.name}`}
                  key={key}>
                  <Icon name={`social-${social.name}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps)(OfferLogin);

OfferLogin.propTypes = {
  levels: PropTypes.array,
};
