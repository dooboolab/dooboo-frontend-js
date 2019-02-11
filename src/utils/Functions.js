// @flow
export const getStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const setStorage = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};

export const destroyStorage = (key: string) => {
  return localStorage.removeItem(key);
};

export const getSessionStorage = (key: string) => {
  return sessionStorage.getItem(key);
};

export const setSessionStorage = (key: string, value: string) => {
  return sessionStorage.setItem(key, value);
};

export const destroySessionStorage = (key: string) => {
  return sessionStorage.removeItem(key);
};

export const checkImageExists = (url: string, callback: (err: Function, val: boolean) => void) => {
  const img = new Image();
  img.onload = function() {
    callback(null, true);
  };
  img.onerror = function() {
    callback(null, false);
  };
  img.src = url;
};
