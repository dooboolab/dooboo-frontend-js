import STRINGS, { getString } from '../STRINGS';

// test for the container page in dom
describe('STRINGS', () => {
  let json;

  it('should [getString]', () => {
    getString('LOGIN');
  });

  it('should render [...] when [getString(str)] not exists', () => {
    getString();
  });
});
