import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '../../components/Icon.jsx';
import { inputLoader } from '../loaders/loaders';
import { Input, Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

class Personal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalTitle: false,
      newEmail: this.props.user?.email || '',
      newNickName: this.props.user?.name || '',
      newBio: this.props.user?.bio || '',
    };
  }

  render() {
    const { user } = this.props;
    const { modalTitle, newEmail, newNickName, newBio } = this.state;
    return (
      <div className={`cabinetPersonal`}>
        <div className='cabinetPersonal__block'>
          <div className='cabinetPersonal__blockHead'>
            <div className='cabinetPersonal__blockTitle'>
              <h3 className='title'>Основная информация</h3>
            </div>
            <div className='cabinetPersonal__blockEdit'>
              <a className='edit' onClick={() => this.setState({ modalTitle: 'Основная информация' })}>
                Редактировать
              </a>
            </div>
          </div>
          <div className='cabinetPersonal__blockContent'>
            <div className='cabinetPersonal__blockItem _info'>
              <div className='cabinetPersonal__blockRow _id'>
                <div className='cabinetPersonal__blockCol _support'>ID</div>
                <div className='cabinetPersonal__blockCol _content'>
                  <p className='cabinetPersonal__blockColContent'>
                    {user ? user.id : inputLoader()}
                    <i className='cabinetPersonal__blockIcon _copy'>
                      <Icon name='copy' />
                    </i>
                  </p>
                </div>
              </div>
              <div className='cabinetPersonal__blockRow _name'>
                <div className='cabinetPersonal__blockCol _support'>Никнейм</div>
                <div className='cabinetPersonal__blockCol _content'>
                  {user
                    ? user.name
                    : inputLoader()}
                </div>
              </div>
              <div className='cabinetPersonal__blockRow _bio'>
                <div className='cabinetPersonal__blockCol _support'>Био</div>
                <div className='cabinetPersonal__blockCol _content'>
                  {user
                    ? (user.bio || '-')
                    : inputLoader()}
                </div>
              </div>
              <div className='cabinetPersonal__blockRow _date'>
                <div className='cabinetPersonal__blockCol _support'>Дата регистрации</div>
                <div
                  className='cabinetPersonal__blockCol _content'>
                  {user
                    ? (user.created_at && new Date(user.created_at).toLocaleDateString())
                    : inputLoader()
                  }
                </div>
              </div>
            </div>
            <div className='cabinetPersonal__blockItem _more'>
              <div className='cabinetPersonal__blockAvatar'>
                <div className='cabinetPersonal__blockAvatarPreview'>
                  <img
                    src={user?.profile_picture || require('../../img/avatar-image.jpg').default}
                    alt='avatar'
                    className='cabinetPersonal__blockAvatarImage'
                  />
                </div>
                <div className='cabinetPersonal__blockAvatarEdit'>
                  <a href='#' className='edit'>
                    Изменить
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='cabinetPersonal__block'>
          <div className='cabinetPersonal__blockHead'>
            <div className='cabinetPersonal__blockTitle'>
              <h3 className='title'>Адрес электронной почты</h3>
            </div>
            <div className='cabinetPersonal__blockEdit'>
              <a className='edit' onClick={() => this.setState({ modalTitle: 'Электронная почта' })}>
                Редактировать
              </a>
            </div>
          </div>
          <div className='cabinetPersonal__blockContent'>
            <div className='cabinetPersonal__blockItem _info'>
              <div className='cabinetPersonal__blockRow _email'>
                <div className='cabinetPersonal__blockCol _support'>Электронная почта</div>
                <div className='cabinetPersonal__blockCol _content'>
                  <p className='cabinetPersonal__blockColContent'>
                    {user
                      ? (user?.email || '-')
                      : inputLoader()}
                    {user?.email_verified_at &&
                    <i className='cabinetPersonal__blockIcon _done'>
                      <Icon name='done' />
                    </i>}
                  </p>
                </div>
              </div>
            </div>
            <div className='cabinetPersonal__blockItem _more'></div>
          </div>
        </div>
        <Modal
          title={modalTitle}
          visible={modalTitle}
          // onOk={handleOk}
          // confirmLoading={confirmLoading}
          onCancel={() => this.setState({ modalTitle: false })}
        ><>
          {modalTitle === 'Основная информация' &&
          <>
            <Input
              value={newNickName}
              onChange={(e) => {
                this.setState({ newNickName: e.target.value });
              }}
              placeholder='Введите новый никнейм' />
            <TextArea
              value={newBio}
              autoSize={{ minRows: 3, maxRows: 6 }}
              onChange={(e) => {
                this.setState({ newBio: e.target.value });
              }}
              placeholder='Введите новое био' />
          </>
          }
          {modalTitle === 'Электронная почта' &&
          <>
            <Input
              value={newEmail}
              onChange={(e) => {
                this.setState({ newEmail: e.target.value });
              }}
              placeholder='Введите новую электронную почту' />
          </>
          }
        </>

        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(Personal);

Personal.propTypes = {
  levels: PropTypes.array,
};
