export default class Settings {
  constructor() {
    this.optionsDefault = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
    this.optionsUser = new Map();
    this.optionsValues = new Map([
      [
        'theme',
        new Set(['light', 'gray']),
      ],
      [
        'music',
        new Set(['pop', 'rock', 'chillout', 'off']),
      ],
      [
        'difficulty',
        new Set(['normal', 'hard', 'nightmare']),
      ],
    ]);
  }

  set(code, value) {
    if (!this.optionsValues.has(code)) {
      throw new Error(`Invalid code: ${code}.`);
    }

    if (!this.optionsValues.get(code).has(value)) {
      throw new Error(`Invalid value "${value}" from code "${code}".`);
    }

    this.optionsUser.set(code, value);
  }

  get() {
    let result = new Map();
    if (this.optionsDefault.size === this.optionsUser.size) {
      result = this.optionsUser;
    } else {
      this.optionsDefault.forEach((value, code) => {
        if (this.optionsUser.has(code)) {
          result.set(code, this.optionsUser.get(code));
        } else {
          result.set(code, value);
        }
      });
    }

    return result;
  }
}
