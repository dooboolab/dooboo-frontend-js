import { observable, action } from 'mobx';

import { setSessionStorage, getSessionStorage } from '../utils/Functions';
import Localization from '../models/Localization';
import User from '../models/User';

class Store {
  // todo - make variable properties in the class to private and add getter and setter for those
  @observable user: User = new User();
  @observable locale: Localization = new Localization();
  @observable isDesktop: boolean = false;
  @observable isOpen: boolean = false;

  getString = (param: string) => {
    return this.locale.getString(param);
  }
}

export default Store;
