import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AuthForm from '../components/AuthForm.jsx';


class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  pages = [
    {
      hrefs: ['login', '', undefined],
      key: 'login',
    },
    {
      hrefs: ['registration'],
      key: 'registration',
    },
  ];

  render() {
    const { levels } = this.props;
    const currentPage = this.pages.find((page) => page.hrefs.indexOf(levels[1]) !== -1);

    return (
      <div className="auth">
        <img src={require('../img/auth-back-image-1.jpg').default} alt="" className="auth__back" />
        <div className="auth__form">
          <AuthForm nameOfPage={currentPage.key} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { levels: state.levels };
}

export default connect(mapStateToProps)(Auth);

Auth.propTypes = {
  levels: PropTypes.array,
};
