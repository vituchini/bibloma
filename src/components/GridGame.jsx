import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GridGamePair from './GridGamePair.jsx';

class GridGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  grid = [
    {
      key: '1-8',
      blocks: [
        {
          inner: [
            {
              pairs: [
                {
                  players: [
                    {
                      number: 1,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeaderwefwefwefwef',
                      result: 3,
                      isWin: true,
                    },
                    {
                      number: 2,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeader',
                      result: 2,
                    },
                  ],
                },
                {
                  players: [
                    {
                      number: 3,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeaderwefwefwefwef',
                      result: 3,
                      isWin: true,
                    },
                    {
                      number: 4,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeader',
                      result: 2,
                    },
                  ],
                },
              ],
            },
            {
              pairs: [
                {
                  players: [
                    {
                      number: 5,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeaderwefwefwefwef',
                      result: 3,
                      isWin: true,
                    },
                    {
                      number: 6,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeader',
                      result: 2,
                    },
                  ],
                },
                {
                  players: [
                    {
                      number: 7,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeaderwefwefwefwef',
                      result: 3,
                      isWin: true,
                    },
                    {
                      number: 8,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeader',
                      result: 2,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          inner: [
            {
              pairs: [
                {
                  players: [
                    {
                      number: 9,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeaderwefwefwefwef',
                      result: 3,
                      isWin: true,
                    },
                    {
                      number: 10,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeader',
                      result: 2,
                    },
                  ],
                },
                {
                  players: [
                    {
                      number: 11,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeaderwefwefwefwef',
                      result: 3,
                      isWin: true,
                    },
                    {
                      number: 12,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeader',
                      result: 2,
                    },
                  ],
                },
              ],
            },
            {
              pairs: [
                {
                  players: [
                    {
                      number: 13,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeaderwefwefwefwef',
                      result: 3,
                      isWin: true,
                    },
                    {
                      number: 14,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeader',
                      result: 2,
                    },
                  ],
                },
                {
                  players: [
                    {
                      number: 15,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeaderwefwefwefwef',
                      result: 3,
                      isWin: true,
                    },
                    {
                      number: 16,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeader',
                      result: 2,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: '1-4',
      blocks: [
        {
          inner: [
            {
              pairs: [
                {
                  players: [
                    {
                      number: 1,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeaderwefwefwefwef',
                      result: 3,
                      isWin: true,
                    },
                    {
                      number: 2,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeader',
                      result: 2,
                    },
                  ],
                },
              ],
            },
            {
              pairs: [
                {
                  players: [
                    {
                      number: 3,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeaderwefwefwefwef',
                      result: 3,
                      isWin: true,
                    },
                    {
                      number: 4,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeader',
                      result: 2,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          inner: [
            {
              pairs: [
                {
                  players: [
                    {
                      number: 5,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeaderwefwefwefwef',
                      result: 3,
                      isWin: true,
                    },
                    {
                      number: 6,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeader',
                      result: 2,
                    },
                  ],
                },
              ],
            },
            {
              pairs: [
                {
                  players: [
                    {
                      number: 7,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeaderwefwefwefwef',
                      result: 3,
                      isWin: true,
                    },
                    {
                      number: 8,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeader',
                      result: 2,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: '1-2',
      blocks: [
        {
          inner: [
            {
              pairs: [
                {
                  players: [
                    {
                      number: 1,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeaderwefwefwefwef',
                      result: 3,
                      isWin: true,
                    },
                    {
                      number: 2,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeader',
                      result: 2,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          inner: [
            {
              pairs: [
                {
                  players: [
                    {
                      number: 3,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeaderwefwefwefwef',
                      result: 3,
                      isWin: true,
                    },
                    {
                      number: 4,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeader',
                      result: 2,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: 'final',
      blocks: [
        {
          inner: [
            {
              pairs: [
                {
                  players: [
                    {
                      number: 1,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeaderwefwefwefwef',
                      result: 3,
                      isWin: true,
                    },
                    {
                      number: 2,
                      avatar: 'image-player-1.jpg',
                      name: 'ApacheLeader',
                      result: 2,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  render() {
    return (
      <div className="gridGame">
        <div className="gridGame__content">
        <div className="gridGame__inner">
          {this.grid.map((col, keyCol) => (
            <div className={`gridGame__col _${col.key}`} key={keyCol}>
              {col.blocks.map((block, keyBlock) => (
                <div className="gridGame__colBlock" key={keyBlock}>
                  {block.inner.map((inner, keyInner) => (
                    <div className="gridGame__colInner" key={keyInner}>
                      {inner.pairs.map((pair, keyPair) => (
                        <div className="gridGame__colPair" key={keyPair}>
                          <GridGamePair model={pair} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
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

export default connect(mapStateToProps)(GridGame);

GridGame.propTypes = {
  content: PropTypes.string,
};
