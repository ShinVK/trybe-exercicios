// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const person = (nomeCompleto) => {
  const emailPerson = nomeCompleto.split(' ').join('_');
  return { nome: nomeCompleto, email: `${emailPerson}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Victor Shin'),
    id2: callback('Luis Josa'),
    id3: callback('raquel Mika'),
    id4: callback('Sandra Aika'),
  };

  return employees;
};

console.log(newEmployees(person));

// oque precisamos entender disso com o callback, o callback é uma função e uma função é considerado um valor em JS, por isso podemos utilizar isso com parâmetro. Ao chamar a função callback damos como parametro o nome completo, não chamamos diretamente a função pelo nome (person), e sim pelo parâmetro callback, que posteriormente quando for chamada, será necessário um parâmetro, que é o parâmetro dado na função. callback('victor shin). Ao chamar a função referente pelo callback - person, o person vai entrar no lugar do call back e vai ficar person('victor SHin'), que é uma função que exige como parâmetro o nome completo.
