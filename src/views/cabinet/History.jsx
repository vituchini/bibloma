import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TransferTable from '../../components/TransferTable.jsx';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  items = [
    {
      name: 'CS:GO',
      date: '07.06.2021',
      time: '19:20',
      mode: '5v5',
      id: '37589023',
      isWin: true,
      price: 1200,
    },
    {
      name: 'DOTA 2',
      date: '03.06.2021',
      time: '17:34',
      mode: '1v1',
      id: '37589023',
      isWin: false,
      price: -500,
    },
    {
      name: 'CS:GO',
      date: '07.06.2021',
      time: '19:20',
      mode: '5v5',
      id: '37589023',
      isWin: true,
      price: 1200,
    },
    {
      name: 'DOTA 2',
      date: '03.06.2021',
      time: '17:34',
      mode: '1v1',
      id: '37589023',
      isWin: false,
      price: -500,
    },
    {
      name: 'CS:GO',
      date: '07.06.2021',
      time: '19:20',
      mode: '5v5',
      id: '37589023',
      isWin: true,
      price: 1200,
    },
    {
      name: 'DOTA 2',
      date: '03.06.2021',
      time: '17:34',
      mode: '1v1',
      id: '37589023',
      isWin: false,
      price: -500,
    },
    {
      name: 'CS:GO',
      date: '07.06.2021',
      time: '19:20',
      mode: '5v5',
      id: '37589023',
      isWin: true,
      price: 1200,
    },
    {
      name: 'DOTA 2',
      date: '03.06.2021',
      time: '17:34',
      mode: '1v1',
      id: '37589023',
      isWin: false,
      price: -500,
    },
    {
      name: 'CS:GO',
      date: '07.06.2021',
      time: '19:20',
      mode: '5v5',
      id: '37589023',
      isWin: true,
      price: 1200,
    },
    {
      name: 'DOTA 2',
      date: '03.06.2021',
      time: '17:34',
      mode: '1v1',
      id: '37589023',
      isWin: false,
      price: -500,
    },
  ];

  render() {
    return (
      <div className={`cabinetHistory`}>
        <div className="cabinetHistory__head">
          <div className="cabinetHistory__headTitle">
            <h3 className="title">Історія матчів</h3>
          </div>
          <div className="cabinetHistory__headFilter">
            <div className="cabinetHistory__headFilterView">
              Показать:
              <span>Все матчи</span>
            </div>
          </div>
        </div>
        <div className="cabinetHistory__table">
          <TransferTable items={this.items} />
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(History);

History.propTypes = {
  levels: PropTypes.array,
};
