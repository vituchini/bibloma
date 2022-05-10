import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FindGame from './matchesSideBar/FindGame.jsx';
import handlerAbsBlock from '../functions/handlerAbsBlock';
import CreateGame from './matchesSideBar/CreateGame.jsx';

class MatchesSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLinkKey: 'createGame',
      isShowUsers: false,
    };

    this.handlerLink = this.handlerLink.bind(this);
    this.getCondForLinks = this.getCondForLinks.bind(this);
  }

  headLinks = ['findGame', 'createGame'];

  links = [
    {
      key: 'findGame',
      contentLink: 'НАЙТИ ИГРУ',
      render() {
        return <FindGame condForLinks={this.getCondForLinks()} />;
      },
    },
    {
      key: 'createGame',
      contentLink: 'СОЗДАТЬ ЛОББИ',
      render() {
        return <CreateGame hideSideBar={this.props.hideSideBar} />;
      },
    },
  ];

  handlerLink(link) {
    this.setState((state) => {
      const newState = { ...state };

      newState.currentLinkKey = link;

      return newState;
    });
  }

  getCondForLinks() {
    const { levels } = this.props;

    return ['streams'].indexOf(levels[1]) === -1;
  }

  render() {
    const { currentLinkKey } = this.state;
    const currentLink = this.links.find((link) => link.key === currentLinkKey);

    return (
      <div className={`matchesSideBar ${this.getCondForLinks() !== true ? '_fullContent' : ''}`}>
        <div className="matchesSideBar__inner">
          {this.getCondForLinks() === true && (
            <div className="matchesSideBar__head">
              <div className="matchesSideBar__labels">
                <div className="matchesSideBar__labelsInner">
                  {this.headLinks.map((link, key) => {
                    const currentLinkInner = this.links.find((item) => item.key === link);

                    return (
                      <div className="matchesSideBar__label" key={key}>
                        <label className="checkbox _medium">
                          <input
                            type="radio"
                            className="checkbox__input"
                            checked={currentLinkKey === currentLinkInner.key}
                            onChange={() => {
                              this.handlerLink(currentLinkInner.key);
                            }}
                          />
                          <div className="checkbox__view">{currentLinkInner.contentLink}</div>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          <div
            className="matchesSideBar__content"
            key={currentLinkKey}
            onScroll={() => {
              handlerAbsBlock('hide');
            }}>
            {currentLink && currentLink.render.call(this)}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    levels: state.levels,
  };
}

export default connect(mapStateToProps)(MatchesSideBar);

MatchesSideBar.propTypes = {
  content: PropTypes.string,
  levels: PropTypes.array,
  hideSideBar: PropTypes.func,
};
