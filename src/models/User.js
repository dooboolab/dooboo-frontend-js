import { observable } from 'mobx';
import { setSessionStorage, getSessionStorage, destroySessionStorage } from '../utils/Functions';

class User {
  @observable loggedIn: boolean;
  email: string;
  password: string;

  signup = (email: string, password: string) => {
    setSessionStorage('email', email);
    setSessionStorage('password', password);
    setSessionStorage('loggedIn', true);
    return this.checkLoginStatus();
  }

  login = (email: string, password: string) => {
    setSessionStorage('email', email);
    setSessionStorage('password', password);
    setSessionStorage('loggedIn', true);
    return this.checkLoginStatus();
  }

  logout = () => {
    destroySessionStorage('email');
    destroySessionStorage('password');
    destroySessionStorage('loggedIn');
    return this.checkLoginStatus();
  }

  checkLoginStatus() {
    this._email = getSessionStorage('email');
    this._password = getSessionStorage('password');
    this._loggedIn = getSessionStorage('loggedIn') === 'true';
  }
}

export default User;
