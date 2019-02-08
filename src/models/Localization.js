// @flow
import STRINGS from '../../STRINGS';

class Localization {
  LANG: string = 'en';
  DEFAULT: string = 'en';

  getString = (param: string) => {
    let string: string = STRINGS[this.LANG] && STRINGS[this.LANG][param]
      ? STRINGS[this.LANG][param]
      : '';

    if (!string) {
      string = STRINGS[this.DEFAULT][param]
        ? STRINGS[this.DEFAULT][param]
        : '';
    }

    if (!string) {
      return '...';
    }
    return string.toString();
  }
}

export const getString = Localization.prototype.getString;
export default Localization;
