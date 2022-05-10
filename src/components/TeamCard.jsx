import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

// import { dispatcher } from '../redux/redux';

class TeamCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  infoDescriptions = {
    rate: 'Рейтинг',
    counterGames: 'Турниров',
    amount: 'Выиграно',
    counterUsers: 'Участников',
  };

  infoOrder = ['rate', 'counterGames', 'amount', 'counterUsers'];

  render() {
    const { model, settings } = this.props;

    return (
      <div
        className={`teamCard ${model.isInvite === true ? '_isInvite' : ''} ${
          (settings && settings.class) || ``
        }`}>
        <div className="teamCard__preview">
          <img
            src={require(`../img/${model.avatar}`).default}
            alt=""
            className="teamCard__previewImage"
          />
        </div>
        <p className="teamCard__name">{model.name}</p>
        <div className="teamCard__info">
          {this.infoOrder.map((prop) => (
            <div className="teamCard__infoItem" key={prop}>
              <p className="teamCard__infoItemSupport">{this.infoDescriptions[prop]}</p>
              <p className="teamCard__infoItemValue">
                {model[prop]}
                {prop === 'amount' && (
                  <>
                    {` `}
                    <span className="_strike">BS</span>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>

        {model.isInvite === true && (
          <div className="teamCard__actions">
            <div className="teamCard__action _done">
              <i className="teamCard__actionIcon">
                <Icon name="action-done" />
              </i>
            </div>
            <div className="teamCard__action _delete">
              <i className="teamCard__actionIcon">
                <Icon name="action-delete" />
              </i>
            </div>
          </div>
        )}
        {model.awards && (
          <div className="teamCard__awards">
            {model.awards.map((award, key) => (
              <img src={require(`../img/${award}`).default} className="teamCard__award" key={key} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(TeamCard);

TeamCard.propTypes = {
  model: PropTypes.object,
  settings: PropTypes.object,
};
