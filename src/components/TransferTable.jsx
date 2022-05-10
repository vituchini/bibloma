import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

class TransferTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  order = ['name', 'date', 'time', 'mode', 'id', 'isWin', 'price'];

  renderCol(key, item) {
    let component;

    switch (key) {
      case 'name':
        switch (item.type) {
          case 'transfer':
            component = (
              <div className="cabinetTable__name _transfer">
                <div className="cabinetTable__nameIcons">
                  <i className="cabinetTable__nameIcon">
                    <Icon name="arrow-next" />
                  </i>
                  <i className="cabinetTable__nameIcon">
                    <Icon name="users" />
                  </i>
                </div>
                Перевод средств
              </div>
            );
            break;
          case 'withdrawal':
            component = (
              <div className="cabinetTable__name _withdrawal">
                <div className="cabinetTable__nameIcons">
                  <i className="cabinetTable__nameIcon">
                    <Icon name="arrow-next" />
                  </i>
                  <i className="cabinetTable__nameIcon">
                    <Icon name="card" />
                  </i>
                </div>
                Вывод средств
              </div>
            );
            break;
          default:
            component = <p className="cabinetTable__content">{item[key]}</p>;
            break;
        }
        break;
      case 'mode':
        component = item[key] && (
          <p className="cabinetTable__content">
            <span>Режим</span>
            {item[key]}
          </p>
        );
        break;
      case 'id':
        switch (item.type) {
          case 'transfer':
            component = (
              <div className="cabinetTable__user">
                <div className="cabinetTable__userAvatar">
                  <div className="cabinetTable__userAvatarBox">
                    <img
                      src={require(`../img/${item.data.avatar}`).default}
                      alt=""
                      className="cabinetTable__userAvatarImage"
                    />
                  </div>
                </div>
                <p className="cabinetTable__userName">{item.data.name}</p>
              </div>
            );
            break;
          case 'withdrawal':
            component = <p className="cabinetTable__content">{item.data.number}</p>;
            break;
          default:
            component = (
              <p className="cabinetTable__content">
                <span>ID</span>
                <a href="#">{item[key]}</a>
              </p>
            );
            break;
        }

        break;
      case 'isWin':
        component = item.isWin !== undefined && (
          <p className={`cabinetTable__content ${item[key] === true ? '_win' : ''}`}>
            {item[key] === true ? 'Победа' : 'Поражение'}
          </p>
        );
        break;
      case 'price':
        component = (
          <p className="cabinetTable__content">
            {item[key] > 0 ? `+ ${item[key]}` : item[key]}
            {` `}
            <span className="_strike">BS</span>
          </p>
        );
        break;
      default:
        component = <p className="cabinetTable__content">{item[key]}</p>;
        break;
    }

    return (
      <div className={`cabinetTable__col _${key}`} key={key}>
        {component}
      </div>
    );
  }

  render() {
    const { items } = this.props;

    return (
      <div className="cabinetTable">
        {items.map((item, key) => (
          <div className="cabinetTable__row" key={key}>
            {this.order.map((orderItem) => this.renderCol(orderItem, item))}
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(TransferTable);

TransferTable.propTypes = {
  items: PropTypes.array,
};
