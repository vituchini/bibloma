import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Referal from '../components/popups/Referal.jsx';
import SuccessTransfer from '../components/popups/SuccessTransfer.jsx';
import AbsBlock from '../components/AbsBlock.jsx';
import Calibration from '../components/Calibration.jsx';
import CalibrationPopup from '../components/popups/Calibration.jsx';
import LoginGame from '../components/popups/LoginGame.jsx';
import ChatBar from './ChatBar.jsx';
import ChatSupport from './ChatSupport.jsx';
import Claim from '../components/popups/Claim.jsx';

class MiddleWareApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      isShowPopupReferal,
      isShowPopupSuccessTransfer,
      absBlock,
      isShowCalibration,
      isShowPopupCalibration,
      isShowPopupLoginGame,
      isShowChat,
      isShowChatSupport,
      isShowPopupClaim,
    } = this.props;

    return (
      <>
        {isShowPopupReferal === true && (
          <div className="body__popup">
            <Referal />
          </div>
        )}
        {isShowPopupSuccessTransfer === true && (
          <div className="body__popup">
            <SuccessTransfer />
          </div>
        )}
        {absBlock.isShow === true && (
          <div
            className="body__absBlock"
            style={{ left: `${absBlock.coords[0]}px`, top: `${absBlock.coords[1]}px` }}>
            <AbsBlock />
          </div>
        )}
        {isShowCalibration === true && (
          <div className="body__calibration">
            <Calibration />
          </div>
        )}
        {isShowPopupCalibration === true && (
          <div className="body__popup">
            <CalibrationPopup />
          </div>
        )}
        {isShowPopupLoginGame && (
          <div className="body__popup">
            <LoginGame />
          </div>
        )}
        {isShowChat === true && (
          <div className="body__chatBar">
            <ChatBar />
          </div>
        )}
        {isShowChatSupport === true && <ChatSupport />}
        {isShowPopupClaim === true && (
          <div className="body__popup">
            <Claim />
          </div>
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    isShowPopupReferal: state.isShowPopupReferal,
    isShowPopupSuccessTransfer: state.isShowPopupSuccessTransfer,
    absBlock: state.absBlock,
    isShowCalibration: state.isShowCalibration,
    isShowPopupCalibration: state.isShowPopupCalibration,
    isShowPopupLoginGame: state.isShowPopupLoginGame,
    isShowPopupClaim: state.isShowPopupClaim,
  };
}

export default connect(mapStateToProps)(MiddleWareApp);

MiddleWareApp.propTypes = {
  isShowPopupReferal: PropTypes.bool,
  isShowPopupSuccessTransfer: PropTypes.bool,
  absBlock: PropTypes.object,
  isShowCalibration: PropTypes.bool,
  isShowPopupCalibration: PropTypes.bool,
  isShowPopupLoginGame: PropTypes.bool,
  isShowChat: PropTypes.bool,
  isShowChatSupport: PropTypes.bool,
  isShowPopupClaim: PropTypes.bool,
};
