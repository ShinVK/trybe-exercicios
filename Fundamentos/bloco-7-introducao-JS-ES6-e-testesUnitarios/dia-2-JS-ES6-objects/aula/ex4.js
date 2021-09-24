const person = {
  name: "Roberto",
};

const lastName = {
  lastName: "Silva",
};

const clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }

clone.name = "Maria";

console.log("Mudando a propriedade name através do objeto clone");
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log("--------------");

person.lastName = "Ferreira";

console.log("Mudando a propriedade lastName através do objeto person");
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

const person2 = {
  name: "Roberto",
};

const lastName2 = {
  lastName: "Silva",
};

const newPerson = Object.assign({}, person2, lastName2);
newPerson.name = "Gilberto";
console.log(newPerson);
console.log(person);
