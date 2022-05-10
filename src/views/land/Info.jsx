import React from 'react';
import { connect } from 'react-redux';

class LandInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: 0,
      tournaments: 0,
      games: 0,
    };

    this.setCounter = this.setCounter.bind(this);
    this.startAnim = this.startAnim.bind(this);

    this.parent = React.createRef();
  }

  items = [
    {
      break: 20000,
      counter: 61,
      key: 'players',
      description: 'Игроков',
    },
    {
      break: 13,
      counter: 1,
      key: 'tournaments',
      description: 'Турнірів',
    },
    {
      break: 5172,
      counter: 15,
      key: 'games',
      description: 'Матчей сыграно',
    },
  ];

  setCounter(key) {
    const currentItem = this.items.find((item) => item.key === key);
    const { break: breakVal, counter: counterVal } = currentItem;
    const timeOut = 1500;

    currentItem.intervalId = setInterval(() => {
      this.setState((state) => {
        const newState = { ...state };
        let counter = newState[key];

        counter += counterVal;

        newState[key] = parseInt(counter, 10);

        if (counter >= breakVal) {
          clearInterval(currentItem.intervalId);

          newState[key] = breakVal;
        }

        return newState;
      });
    }, timeOut / breakVal);
  }

  isStart = false;

  startAnim() {
    const offsetTop = this.parent.current.getBoundingClientRect().y + window.pageYOffset;

    if (
      window.pageYOffset + document.documentElement.clientHeight / 3 > offsetTop &&
      this.isStart === false
    ) {
      this.isStart = true;
      setTimeout(() => {
        this.items.forEach((item) => {
          this.setCounter(item.key);
        });
      }, 300);
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.startAnim);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.startAnim);
  }

  render() {
    return (
      <div ref={this.parent} className="landInfo">
        <div className="landInfo__bonus">
          <p className="landInfo__bonusContent">Бонус 500 BS для новых игроков</p>
          <div className="landInfo__bonusButton">Создать аккаунт</div>
        </div>
        <div className="landInfo__box">
          <div className="landInfo__inner">
            <div className="landInfo__content">
              <div className="landInfo__contentItems">
                {this.items.map((item, key) => (
                  <div className="landInfo__contentItem" key={key}>
                    <p className="landInfo__contentValue">{this.state[item.key]}</p>
                    <p className="landInfo__contentDescription">{item.description}</p>
                  </div>
                ))}
              </div>
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

export default connect(mapStateToProps)(LandInfo);
