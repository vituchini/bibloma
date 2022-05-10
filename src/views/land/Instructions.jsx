import React from 'react';
import { connect } from 'react-redux';

class LandInstructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  items = [
    {
      icon: 'instructions-icon-1.png',
      description: 'Регистрируй аккаунт',
    },
    {
      icon: 'instructions-icon-2.png',
      description: 'Пополняй счёт',
    },
    {
      icon: 'instructions-icon-3.png',
      description: 'Подключайся к матчу или создавай свой',
    },
    {
      icon: 'instructions-icon-4.png',
      description: 'Играй и побеждай',
    },
    {
      icon: 'instructions-icon-5.png',
      description: 'Легко выводи выігриш',
    },
  ];

  render() {
    return (
      <div className="landInstructions">
        <div className="landInstructions__inner">
          <div className="landInstructions__title">
            <h3 className="landTitle">Как играть</h3>
          </div>
          <div className="landInstructions__items">
            {this.items.map((item, key) => (
              <div className="landInstructions__item" key={key}>
                <img
                  src={require(`../../img/${item.icon}`).default}
                  alt=""
                  className="landInstructions__itemIcon"
                />
                <p className="landInstructions__itemNumber">{key + 1}</p>
                <p className="landInstructions__itemDescription">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LandInstructions);
