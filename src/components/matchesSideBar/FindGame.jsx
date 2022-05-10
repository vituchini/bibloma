import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import handlerAbsBlock from '../../functions/handlerAbsBlock';
import getOffsetPosition from '../../functions/getOffsetPosition';

import Icon from '../Icon.jsx';
import DropList from '../DropList.jsx';
import MatchesFilter from '../MatchesFilter.jsx';

class FindGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  render() {
    const { condForLinks } = this.props;

    return (
      <>
        {condForLinks === true && (
          <div className="matchesSideBar__team">
            <p className="matchesSideBar__teamSupport">
              Паті
              <i className="matchesSideBar__teamSupportIcon">
                <Icon name="question" />
              </i>
            </p>
            <div className="matchesSideBar__teamUsers">
              <div className="matchesSideBar__teamUser">
                <div className="user _medium">
                  <div className="user__avatar">
                    <div className="user__avatarBox">
                      <img
                        src={require(`../../img/avatar-image.jpg`).default}
                        alt=""
                        className="user__avatarImage"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="matchesSideBar__teamUser _add">
                <i
                  className="matchesSideBar__teamUserIcon"
                  onClick={(e) => {
                    handlerAbsBlock('toggle', {
                      children: (
                        <DropList
                          config={this.users}
                          callback={() => {
                            handlerAbsBlock('hide');
                          }}
                          handler={this.handlerUser}
                        />
                      ),
                      coords: getOffsetPosition(
                        e.target.closest('.matchesSideBar__teamUser'),
                        [64, 0],
                      ),
                    });
                  }}>
                  {' '}
                  <Icon name="add-circle" />
                </i>
              </div>
            </div>
          </div>
        )}
        <div className="matchesSideBar__filter">
          <div className="matchesSideBar__filterInner">
            <h3 className="matchesSideBar__filterSupport">
              <i className="matchesSideBar__filterSupportIcon">
                <Icon name="filters" />
              </i>
              Фильтри
            </h3>
            <div className="matchesSideBar__filterContent">
              <MatchesFilter />
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(FindGame);

FindGame.propTypes = {
  condForLinks: PropTypes.bool,
};
