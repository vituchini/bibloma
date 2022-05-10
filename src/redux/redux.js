import { applyMiddleware, createStore, compose } from 'redux';
import axios from 'axios';
import thunkMiddleware from 'redux-thunk';
import {  message  } from 'antd';

import { getItem, removeItem } from '../utils/storage';

const clearPath = (pathRes) => {
  let path = pathRes;
  path = path.length > 1 && path[path.length - 1] === '/' ? path.slice(0, -1) : path;
  const levels = path.split('/');

  return {
    path,
    levels,
  };
};

const reducer = (
  state = {
    path: clearPath(window.location.pathname.slice(1)).path,
    levels: clearPath(window.location.pathname.slice(1)).levels,
    isShowPopupReferal: false,
    isShowPopupSuccessTransfer: false,
    isShowPopupCalibration: false,
    isShowPopupLoginGame: false,
    absBlock: {
      isShow: false,
      children: null,
    },
    isShowCalibration: false,
    isShowPopupClaim: false,
    currentGame: 'cs',
    REGISTER_RESULT: {},
    LOGIN_RESULT: {},
    currentMatch: null,
    isLobbyLoading: false,
  },
  settings,
) => {
  switch (settings.type) {
    case 'path': {
      return {
        ...state,
        ...{
          path: clearPath(settings.path).path,
          levels: clearPath(settings.path).levels,
        },
      };
    }
    default:
      if (settings.resolve && typeof settings.resolve === 'function') {
        settings.resolve(true);
      }
      return {
        ...state,
        ...{
          [settings.type]: settings.data,
        },
      };
  }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunkMiddleware),
));

function dispatcher(settings = {}) {
  return new Promise((resolve) => {
    store.dispatch({ ...settings, ...{ resolve } });
  });
}

const instance = axios.create({
  baseURL: 'https://battlestar.co/',
});

const instanceUser = () => {
  return axios.create({
    baseURL: 'https://battlestar.co/',
    headers: { Authorization: 'Bearer ' + getItem('token') },
  });
};

export const registration = (
  name = 'TestUser',
  email = 'testUser@gmail.com',
  password = '23455Hkdce3ef',
  password_confirmation = '23455Hkdce3ef',
) => (dispatch) => {
  return instance
    .post('/api/auth/sign/up', { email, password, password_confirmation, name })
    .then((res) => {
      dispatch({ type: 'REGISTER_RESULT', data: res.data });
      if (res.data.user) dispatch({ type: 'user', data: res.data.user });
      return res.data;
    });
};

export const exit = () => {
  removeItem("token");
  setTimeout(() => {
    dispatcher({ type: 'REGISTER_RESULT', data: {} });
    dispatcher({ type: 'LOGIN_RESULT', data: {} });
    dispatcher({ type: 'user', data: {} });
  },1000)
}

export const login = (email = 'testUser@gmail.com', password = '23455Hkdce3ef') => (dispatch) => {
  return instance.post('/api/auth/sign/in', { email, password }).then((res) => {
    dispatch({ type: 'LOGIN_RESULT', data: res.data });
    if (res.data.success) {
      if (res.data.user) dispatch({ type: 'user', data: res.data.user });
    }
    return res.data;
  });
};

export const userInfo = (data) => (dispatch) => {
  return instanceUser().post('/api/auth/me', data).then((res) => {
    if (res.data.user) dispatch({ type: 'user', data: res.data.user });

    console.log('userInfo', res.data);
    return res.data;
  });
};

export const getLobbies = () => (dispatch) => {
  return instanceUser().get('/api/lobby/all').then((res) => {
    if (res.data.success) {
      if (res.data?.lobbies) dispatch({ type: 'lobbies', data: res.data?.lobbies });
    }
    if (!res.data.success) message.info({content:res.data?.message,className: 'message'});

    console.log('getLobbies', res.data);
    return res.data;
  });
};

export const getStats = () => (dispatch) => {
  return instanceUser().get('/api/general/stats').then((res) => {
    if (res.data.success) {
      if (res.data) dispatch({ type: 'status', data: res.data });
    }
    if (!res.data.success) message.info({content:res.data?.message,className: 'message'});

    console.log('getStats', res.data);
    return res.data;
  });
};

export const createGame = (data) => (dispatch) => {
  return instanceUser().post('/api/lobby/create', { game: 'csgo', ...data }).then((res) => {
    if (res.data.success) {
      if (res.data?.match) dispatch({ type: 'currentMatch', data: res.data?.match });
      if (res.data?.user) dispatch({ type: 'user', data: res.data?.user });
    }
    if (!res.data.success) message.info({content:res.data?.message,className: 'message'});

    console.log('createGame', res.data);
    return res.data;
  });
};

export const startGame = () => (dispatch) => {
  let lobby_id = getItem('currentLobbyId');
  return instanceUser().post('/api/lobby/start', { lobby_id }).then((res) => {
    if (res.data.success) {
      // document.location.href = `steam://connect/80.78.244.35:27015`
      document.location.href = `steam://connect/${res.data.lobby.get_c_s_g_o_server.host}:${res.data.lobby.get_c_s_g_o_server.port}`;
      // dispatch({
      //   type: 'csgoserver',
      //   data: `steam://connect/${res.data.lobby.get_c_s_g_o_server.host}:${res.data.lobby.get_c_s_g_o_server.port}`,
      // });
    }
    if (!res.data.success) message.info({content:res.data?.message,className: 'message'});
    console.log('!!!startGame!!!', res.data);
    return res.data;
  });
};

export const changeTeam = (team_id) => (dispatch) => {
  return instanceUser().post('/api/lobby/select_team', { team_id }).then((res) => {
    if (res.data.success) {
      if (res.data?.user) dispatch({ type: 'user', data: res.data.user });
    }
    if (!res.data.success) message.info({content:res.data?.message,className: 'message'});
    console.log('changeTeam', res.data);
    return res.data;
  });
};

export const setReady = (team_id) => (dispatch) => {
  return instanceUser().post('/api/lobby/ready').then((res) => {
    if (res.data.success) message.info({content:'You are ready',className: 'message'});
    if (!res.data.success) message.info({content:res.data?.message,className: 'message'});
  });
};

export const setUnReady = (team_id) => (dispatch) => {
  return instanceUser().post('/api/lobby/unready').then((res) => {
    if (res.data.success) message.info({content:'You are unready',className: 'message'});
    if (!res.data.success) message.info({content:res.data?.message,className: 'message'});
  });
};

export const joinLobby = (lobby_id) => (dispatch) => {
  return instanceUser().post('/api/lobby/join', { lobby_id }).then((res) => {
    if (res.data.success) {
      if (res.data?.match) dispatch({ type: 'currentMatch', data: res.data?.match });
      if (res.data?.user) dispatch({ type: 'user', data: res.data.user });
    }
    if (!res.data.success) message.info({content:res.data?.message,className: 'message'});
    console.log('joinLobby', res.data);
    return res.data;
  });
};

export const getLobbyInfo = () => (dispatch) => {
  let id = getItem('currentLobbyId');
  return instanceUser().post('/api/lobby/get', { id, with_players: true }).then((res) => {
    if (res.data.success) {
      if (res.data?.match) dispatch({ type: 'currentMatch', data: res.data?.match });
      if (res.data.user) dispatch({ type: 'user', data: res.data.user });
    }
    if (!res.data.success)message.info({content:res.data?.message,className: 'message'});
    return res.data;
  });
};

export const leaveGame = () => (dispatch) =>{
  return instanceUser().post('/api/lobby/leave').then((res) => {
    if (!res.data.success) message.info({content:res.data?.message,className: 'message'});
    console.log('leaveGame', res.data);
    return res.data;
  });
}

export const steamLogin = (data) => (dispatch) => {
  return instance.get('/api/auth/steam/token', { params: data })
    .then(res => {
      return res.data;
    });
};

export const resetLobby = () => ({ type: 'currentMatch', data: null });

export const dispatch = (type, data) => (dispatch) => {
  dispatch({ type, data });
};

export { store, dispatcher, clearPath };

window.store = store;
