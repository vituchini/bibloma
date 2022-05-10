import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AbsBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { absBlock } = this.props;

    return <>{absBlock.children}</>;
  }
}

function mapStateToProps(state) {
  return {
    absBlock: state.absBlock,
  };
}

export default connect(mapStateToProps)(AbsBlock);

AbsBlock.propTypes = {
  absBlock: PropTypes.object,
};
