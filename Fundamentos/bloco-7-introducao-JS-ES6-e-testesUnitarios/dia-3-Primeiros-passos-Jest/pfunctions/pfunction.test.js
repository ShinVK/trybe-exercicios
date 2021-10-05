const { encode, decode } = require('./pfunction');

describe('função 9 - encode, decode', () => {
  it('encode is a function', () => {
    expect(typeof encode).toBe('function');
  });
  it('Decode is a function', () => {
    expect(typeof decode).toBe('function');
  });
  it('Should return 12345', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  it('Should return a,e,i,o,u', () => {
    expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u');
  });
  it('should return the same thing', () => {
    expect(encode('sdfq')).toBe('sdfq');
  });
  it('should return the same numbers', () => {
    expect(decode('7,8,9,6')).toBe('7,8,9,6');
  });
  it('Should return true', () => {
    expect(decode('1,2,3,4,5').length).toBe('1,2,3,4,5'.length);
  });
});
