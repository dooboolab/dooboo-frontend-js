import STRINGS from '../../STRINGS';

class Localization {
  LANG: string = 'en';
  DEFAULT: string = 'en';

  getString = (param) => {
    const string: string = STRINGS[this.LANG]
      ? STRINGS[this.LANG][param.toString()]
      : STRINGS[this.DEFAULT][param.toString()]
        ? STRINGS[this.DEFAULT][param.toString()]
        : null;

    if (!string) {
      return '...';
    }
    return string.toString();
  }
}

export const getString = Localization.prototype.getString;
export default Localization;
