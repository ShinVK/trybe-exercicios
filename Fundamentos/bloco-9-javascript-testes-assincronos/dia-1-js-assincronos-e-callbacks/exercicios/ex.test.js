const uppercase = require('./ex7');

describe('Expected return words in Uppercase', () => {
  it('exercicio 7 - uppercase', (done) => {
    uppercase('teste', (text) => {
    try {
      expect(text).toBe('TESTE');
      done();
    } catch (error) {
      done(error);
    }})
  });
});

// const asyncSum = (a, b, callback) => {
//   setTimeout(() => {
//     const result = a + b + 1;
//     callback(result);
//   }, 500);
// };

// test('Testando asyncSum, soma 5 mais 10', (done) => {
//   asyncSum(5, 10, (result) => {
//     try {
//       expect(result).toBe(15);
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });
