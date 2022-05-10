import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  days = [
    28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30, 31, 1,
  ];

  render() {
    return (
      <div className="calendar">
        <div className="calendar__head">
          <i className="calendar__headBtn">
            <Icon name="calendar-prev" />
          </i>
          <p className="calendar__headCurrent">Тра 2021</p>
          <i className="calendar__headBtn">
            <Icon name="calendar-next" />
          </i>
        </div>
        <div className="calendar__content">
          <div className="calendar__days">
            {this.days.map((day, key) => (
              <label className={`calendar__day ${day > 2 && day < 21 ? '_cur' : ''}`} key={key}>
                <input
                  type="radio"
                  className="calendar__dayInput"
                  checked={day === 2 || day === 21}
                />
                <div className="calendar__dayView">
                  <div className="calendar__dayInner">{day}</div>
                </div>
              </label>
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

export default connect(mapStateToProps)(Calendar);

Calendar.propTypes = {
  content: PropTypes.string,
};
