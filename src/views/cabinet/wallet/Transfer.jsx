import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../../../components/Icon.jsx';
import DropList from '../../../components/DropList.jsx';
import changePage from '../../../functions/changePage';
import { dispatcher } from '../../../redux/redux';

class WalletTransfer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowUsers: false,
      user: null,
      currentPrice: null,
    };

    this.handlerDrop = this.handlerDrop.bind(this);
    this.handlerUser = this.handlerUser.bind(this);
  }

  users = {
    key: 'users',
    withSearch: true,
    items: [
      {
        preview: {
          type: 'image',
          url: 'avatar-image.jpg',
        },
        name: 'Lutes_Deas',
      },
      {
        preview: {
          type: 'image',
          url: 'avatar-image.jpg',
        },
        name: 'Keita_Noir',
      },
      {
        preview: {
          type: 'image',
          url: 'avatar-image.jpg',
        },
        name: 'Kiil$hot',
      },
      {
        preview: {
          type: 'image',
          url: 'avatar-image.jpg',
        },
        name: 'Lutes_Deas',
      },
      {
        preview: {
          type: 'image',
          url: 'avatar-image.jpg',
        },
        name: 'Keita_Noir',
      },
      {
        preview: {
          type: 'image',
          url: 'avatar-image.jpg',
        },
        name: 'Kiil$hot',
      },
      {
        preview: {
          type: 'image',
          url: 'avatar-image.jpg',
        },
        name: 'Keita_Noir',
      },
      {
        preview: {
          type: 'image',
          url: 'avatar-image.jpg',
        },
        name: 'Kiil$hot',
      },
      {
        preview: {
          type: 'image',
          url: 'avatar-image.jpg',
        },
        name: 'Keita_Noir',
      },
      {
        preview: {
          type: 'image',
          url: 'avatar-image.jpg',
        },
        name: 'Kiil$hot',
      },
    ],
  };

  prices = [
    {
      value: 100,
    },
    {
      value: 300,
    },
    {
      value: 500,
    },
    {
      value: 1000,
    },
    {
      value: 3000,
    },
    {
      value: 5000,
    },
  ];

  handlerDrop(name, isShow = !this.state.isShowUsers) {
    this.setState((state) => {
      const newState = { ...state };

      newState.isShowUsers = isShow;

      return newState;
    });
  }

  handlerUser(data) {
    const { value } = data;

    this.setState((state) => {
      const newState = { ...state };

      newState.user = value;

      return newState;
    });
  }

  handlerPrice(key) {
    this.setState((state) => {
      const newState = { ...state };

      newState.currentPrice = key;

      return newState;
    });
  }

  render() {
    const { isShowUsers, user, currentPrice } = this.state;

    return (
      <div className="cabinetWallet__transfer">
        <div className="cabinetWallet__inner">
          <a
            href="/cabinet/wallet"
            className="cabinetWallet__innerBack"
            onClick={(e) => {
              e.preventDefault();
              changePage('cabinet/wallet');
            }}></a>
          <h3 className="cabinetWallet__innerTitle">Перевести монеты другу</h3>
          <p className="cabinetWallet__innerDescription">
            Значимость этих проблем настолько очевидна, что консультация с широким активом
            способствует подготовки и реализации позиций, занимаемых участниками в отношении
            поставленных задач
          </p>
        </div>
        <div className="cabinetWallet__transferContent">
          <div className="cabinetWallet__transferAddressat">
            <div className="cabinetWallet__transferAddressatIcons">
              <i className="cabinetWallet__transferAddressatIcon">
                <Icon name="arrow-next" />
              </i>
              <i className="cabinetWallet__transferAddressatIcon">
                <Icon name="users" />
              </i>
            </div>

            {user === null ? (
              <div className="cabinetWallet__transferAddressatButton">
                <div
                  className="cabinetWallet__transferAddressatButtonInner"
                  onClick={() => {
                    this.handlerDrop();
                  }}>
                  Выберите получателя
                </div>
                {isShowUsers === true && (
                  <div className="cabinetWallet__transferAddressatButtonDrop">
                    <DropList
                      config={this.users}
                      callback={this.handlerDrop}
                      handler={this.handlerUser}
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="cabinetWallet__transferAddressatUser">
                <div className="user _medium">
                  <div className="user__avatar">
                    <div className="user__avatarBox">
                      <img
                        src={require(`../../../img/avatar-image.jpg`).default}
                        alt=""
                        className="user__avatarImage"
                      />
                    </div>
                  </div>
                  <div className="user__info">
                    <p className="user__name _white">GLron</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="cabinetWallet__transferForm">
            <div className="cabinetWallet__transferFormHead">
              <input
                type="text"
                className="cabinetWallet__transferFormInput"
                placeholder="Введите свою сумму"
              />
              <p className="cabinetWallet__transferFormSupport">BS</p>
            </div>
            <div className="cabinetWallet__transferFormItems">
              {this.prices.map((price, key) => (
                <label className="cabinetWallet__transferFormItem" key={key}>
                  <input
                    type="radio"
                    className="cabinetWallet__transferFormItemInput"
                    checked={currentPrice === key}
                    onChange={() => {
                      this.handlerPrice(key);
                    }}
                  />
                  <div className="cabinetWallet__transferFormItemView">{price.value} BS</div>
                </label>
              ))}
            </div>
            <div
              className={`cabinetWallet__transferFormButton ${user === null ? '_disable' : ''}`}
              onClick={() => {
                if (user !== null) {
                  dispatcher({ type: 'isShowPopupSuccessTransfer', data: true });
                }
              }}>
              Перевести
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(WalletTransfer);

WalletTransfer.propTypes = {
  levels: PropTypes.array,
};
