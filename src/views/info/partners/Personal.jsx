import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../../../components/Icon.jsx';

class InfoPartnersPersonal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props;
    return (
      <div className={`cabinetPersonal`}>
        <div className="cabinetPersonal__block">
          <div className="cabinetPersonal__blockHead">
            <div className="cabinetPersonal__blockTitle">
              <h3 className="title">Основная информация</h3>
            </div>
            <div className="cabinetPersonal__blockEdit">
              <a href="#" className="edit">
                Редактировать
              </a>
            </div>
          </div>
          <div className="cabinetPersonal__blockContent">
            <div className="cabinetPersonal__blockItem _info">
              <div className="cabinetPersonal__blockRow _id">
                <div className="cabinetPersonal__blockCol _support">ID</div>
                <div className="cabinetPersonal__blockCol _content">
                  <p className="cabinetPersonal__blockColContent">
                    {user.id}
                    <i className="cabinetPersonal__blockIcon _copy">
                      <Icon name="copy" />
                    </i>
                  </p>
                </div>
              </div>
              <div className="cabinetPersonal__blockRow _name">
                <div className="cabinetPersonal__blockCol _support">Никнейм</div>
                <div className="cabinetPersonal__blockCol _content">{user.name}</div>
              </div>
              <div className="cabinetPersonal__blockRow _bio">
                <div className="cabinetPersonal__blockCol _support">Био</div>
                <div className="cabinetPersonal__blockCol _content">
                  Значення проблем настільки очевидна що... с широким активом способствует
                  подготовки и реализации позиций, занимаемых участниками в отношении поставленных
                  задач
                </div>
              </div>
              <div className="cabinetPersonal__blockRow _date">
                <div className="cabinetPersonal__blockCol _support">Дата регистрации</div>
                <div className="cabinetPersonal__blockCol _content">16.05.2021</div>
              </div>
            </div>
          </div>
        </div>
        <div className="cabinetPersonal__block">
          <div className="cabinetPersonal__blockHead">
            <div className="cabinetPersonal__blockTitle">
              <h3 className="title">Адрес электронной почты</h3>
            </div>
            <div className="cabinetPersonal__blockEdit">
              <a href="#" className="edit">
                Редактировать
              </a>
            </div>
          </div>
          <div className="cabinetPersonal__blockContent">
            <div className="cabinetPersonal__blockItem _info">
              <div className="cabinetPersonal__blockRow _email">
                <div className="cabinetPersonal__blockCol _support">Электронная почта</div>
                <div className="cabinetPersonal__blockCol _content">
                  <p className="cabinetPersonal__blockColContent">
                    Example@mail.com
                    <i className="cabinetPersonal__blockIcon _done">
                      <Icon name="done" />
                    </i>
                  </p>
                </div>
              </div>
            </div>
            <div className="cabinetPersonal__blockItem _more"></div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, {})(InfoPartnersPersonal);

InfoPartnersPersonal.propTypes = {
  levels: PropTypes.array,
};
