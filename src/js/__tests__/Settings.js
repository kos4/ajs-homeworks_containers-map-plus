import Settings from '../classes/Settings';

test('set option', () => {
  const settings = new Settings();
  settings.set('theme', 'gray');
  expect(settings.optionsUser).toEqual(new Map([['theme', 'gray']]));
});

test('set option invalid code', () => {
  const settings = new Settings();
  expect(() => {
    settings.set('test', 'gray');
  }).toThrow('Invalid code: test.');
});

test('set option invalid value', () => {
  const settings = new Settings();
  expect(() => {
    settings.set('theme', 'dark');
  }).toThrow('Invalid value "dark" from code "theme".');
});

test('get user options', () => {
  const settings = new Settings();
  settings.set('theme', 'gray');
  settings.set('music', 'pop');
  settings.set('difficulty', 'normal');
  expect(settings.get()).toEqual(new Map([['theme', 'gray'], ['music', 'pop'], ['difficulty', 'normal']]));
});

test('get user and default options', () => {
  const settings = new Settings();
  settings.set('difficulty', 'normal');
  expect(settings.get()).toEqual(new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'normal']]));
});
