const SYSTEM_VERSION = '0.001';

const keyForUser = key => `${key}-${SYSTEM_VERSION}`;

export const setItem = (key, data) => localStorage.setItem(keyForUser(key), JSON.stringify(data));

export const getItem = key => JSON.parse(localStorage.getItem(keyForUser(key)));

export const removeItem = key => localStorage.removeItem(keyForUser(key));