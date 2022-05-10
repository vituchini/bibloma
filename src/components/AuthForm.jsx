import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { message } from 'antd';

import Field from './Field.jsx';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import changePage from '../functions/changePage';
import { dispatcher, login, registration, steamLogin, userInfo } from '../redux/redux.js';
import { setItem } from '../utils/storage.js';
import { isUserAuth } from '../utils/authRedirect.js';
import { userDataConfig } from '../utils/userDataConfig.js';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.REGISTER_RESULT = this.props.REGISTER_RESULT;
    this.LOGIN_RESULT = this.props.LOGIN_RESULT;
    this.getCurrentPage = this.getCurrentPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.state = {
      login: '',
      email: '',
      password: '',
    };
  }

  componentDidUpdate() {
    this.REGISTER_RESULT = this.props.REGISTER_RESULT;
    this.LOGIN_RESULT = this.props.LOGIN_RESULT;
  }

  componentDidMount() {
    if (isUserAuth()) {
      changePage('index');
    }
    const query = window.location.href
      .split('?')
      .filter((el, i) => i !== 0)
      .join();
    // .replaceAll('openid.','')

    // STEAM AUTH
    if (query.match('openid')) {
      const parsedQuery = this.parseQuery(query);
      this.props.steamLogin(parsedQuery).then((data) => {
        console.log('STEAM_DATA', data);
        if (!data.success) {
          this.getValidate(data.message);
        } else {
          this.setUser(data);
          changePage('index');
        }
      });
    }
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value,
    });
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

  getCurrentPage(name) {
    return this.pages.find((page) => page.href === name.split('?')[0]);
  }

  isLoginPage() {
    return this.props.nameOfPage === 'login';
  }

  getValidate(messageInfo) {
    const emptyFieldsMessage = 'Ви не ввели всіх даних!';
    message.info({ content: messageInfo ? messageInfo : emptyFieldsMessage, className: 'message' });
  }

  setUser({ token, user }) {
    setItem('token', token);
    dispatcher({ type: 'user', data: user });
  }

  async loginUser(email, password) {
    setItem('info', { email, password, name: 'User ' + Math.trunc(Math.random() * 100) });
    changePage('index');

    // await this.props.login(email, password);
    // const { success, message } = this.LOGIN_RESULT;
    // console.log(this.LOGIN_RESULT);
    // if (!success) {
    //   this.getValidate(message);
    // } else {
    //   this.setUser(this.LOGIN_RESULT);
    //   await this.props.userInfo(userDataConfig);
    //   changePage('index');
    // }
  }

  async registerUser(name, email, password) {
    setItem('info', { email, password, name });
    changePage('index');
    // await this.props.registration(name, email, password, password);
    // const { success, message } = this.REGISTER_RESULT;
    // console.log(this.REGISTER_RESULT);
    // if (!success) {
    //   this.getValidate(message);
    // } else {
    //   this.setUser(this.REGISTER_RESULT);
    //   await this.props.userInfo(userDataConfig);
    //   changePage('index');
    // }
  }

  handleAuth() {
    const { email, password } = this.state;
    const name = this.state.login;
    return this.isLoginPage()
      ? this.loginUser(name, password)
      : this.registerUser(name, email, password, password);
  }

  pages = [
    {
      href: 'login',
      labelContent: 'ВВІЙТИ',
      buttonContent: 'ВВІЙТИ',
      fields: [
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
      ],
    },
    {
      href: 'registration',
      labelContent: 'СТВОРИТИ АККАУНТ',
      buttonContent: 'СТВОРИТИ',
      fields: [
        {
          name: 'login',
          placeholder: 'Введите никнейм',
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
      ],
    },
  ];

  socials = [
    {
      name: 'steam',
      href: 'https://battlestar.co/api/auth/steam/redirect',
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
    const { nameOfPage } = this.props;
    const currentPage = this.getCurrentPage(nameOfPage);

    return (
      <div className="authForm">
        <img
          src={require('../img/logo-shadow-icon.svg').default}
          alt=""
          className="authForm__logo"
        />
        <div className="authForm__tabs">
          {this.pages.map((page, key) => (
            <label className="authForm__tab" key={key}>
              <input
                type="radio"
                className="authForm__tabInput"
                checked={nameOfPage === page.href}
                onChange={() => {
                  changePage(`auth/${page.href}`);
                }}
              />
              <div className="authForm__tabView">{page.labelContent}</div>
            </label>
          ))}
        </div>
        <div className="authForm__fields" key={nameOfPage}>
          {currentPage.fields.map((field, key) => (
            <div className="authForm__field" key={key}>
              <Field
                model={field}
                handleChange={this.handleChange}
                value={this.state[`${field.name}`]}
              />
            </div>
          ))}
        </div>
        <div className="authForm__button">
          <Button
            content={currentPage.buttonContent}
            clickFunc={() => {
              this.handleAuth();
            }}
          />
        </div>
        {nameOfPage === 'login' && (
          <div className="authForm__socials">
            <h4 className="authForm__socialsTitle">Чи ввійдіть через</h4>
            <div className="authForm__socialsItems">
              {this.socials.map((social, key) => (
                <a href={social.href} className={`authForm__socialsItem _${social.name}`} key={key}>
                  <Icon name={`social-${social.name}`} />
                </a>
              ))}
            </div>
          </div>
        )}

        <p className="authForm__rules">
          Создавая аккаунт в “Название” вы соглашаетесь с{' '}
          <a href="#" className="authForm__rulesLink">
            пользовательским соглашением
          </a>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    REGISTER_RESULT: state.REGISTER_RESULT,
    LOGIN_RESULT: state.LOGIN_RESULT,
  };
}

export default connect(mapStateToProps, { registration, login, userInfo, steamLogin })(AuthForm);

AuthForm.propTypes = {
  nameOfPage: PropTypes.string,
  REGISTER_RESULT: PropTypes.object,
  LOGIN_RESULT: PropTypes.object,
};
