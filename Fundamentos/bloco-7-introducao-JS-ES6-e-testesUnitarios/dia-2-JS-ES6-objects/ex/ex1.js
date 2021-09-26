const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// console.log(order.order.delivery.deliveryPerson);

// const customerInfo = (order) => {
//   // Adicione abaixo as informações necessárias.

// }

// customerInfo(order);

// TESTES (tirar o comentário se quiser acessar)
// const arrOrder = Object.entries(order);
// const arrAdress = Object.entries(arrOrder[2][1]);
// const arrDelivery = Object.entries(arrOrder[3][1]);
// const arrDelivery2 = Object.values(arrOrder[3][1]);
// console.log(arrOrder);
// console.log("-----------------------");
// console.log(arrAdress);
// console.log("-----------------------");
// console.log(arrDelivery);
// console.log("-----------------------");
// console.log(Object.entries(arrDelivery2[2])[0][1]);

// PENSAMENTOS - Não consigo obter retorno de um objeto igual obtenho retorno de uma array. Para conseguir o retorno pelo index preciso converter para array. Se quiser o retorno de um objeto, preciso utilizar do objeto[chave];
// Enquanto for uma array dentro de outra array posso utilizar de colchete dentro de colchete para ir mais fundo. Então para acessar os valores de um objeto têm essas duas formas;

// RESOLUÇÃO 1
// Separar os itens do objeto em arrays separadas.
// Retirar o destino (pessoa) e endereço (destino) do objeto
// é o primeiro item do objeto order, no caso 0, dessa forma o object entries retorna uma array, e dessa array queremos o primeiro elemento (0);
const arrDestino = Object.entries(order);
const arrValDest = Object.values(order);
const nomeDestino = arrValDest[0];
const numDest = arrValDest[1];
const objAddDest = arrValDest[2];
// no terceiro item do arrvaldest(2), o retorno é um objeto. Precisamos transformar em uma array esse objeto.

// const arrAddDest = Object.entries(objAddDest);

// foi transformado em objeto, agora precisamos acessar os itens dentro dessa array e pegar apenas os valores e não as chaves então vamos trocar o entries por values.

const arrAddDest = Object.values(objAddDest);

// agora podemos acessar os itens dentro da array pelo indice, sendo 0 rua, 1 numero, 2 numero do apartamento

// console.log(arrDestino);
// console.log("-----------------------");
// console.log(nomeDestino);
// console.log(numDest);
// console.log(arrAddDest);

// Para resolução do exercício, precisamos pegar o nome do entregador. Que é o 4º item da array, por isso utilizamos o indice 3;

const arrPedido = arrValDest[3];
// console.log(arrPedido);
// Está retornando um objeto com todos os pedidos, porém queremos a parte do delivery, então vamos utilizar do recurso de objeto [key]
const entregaGeral = Object.values(arrPedido["delivery"]);
// console.log(entregaGeral);
// foi transformado em uma array com os dados da entregadora e o preço da entrega;

// // FUNCAO DA QUESTÃO 1
// const customerInfo = (order) => {
//   // Adicione abaixo as informações necessárias.
//   str = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, telefone: ${order.phoneNumber}, endereço: ${order.address.street}, Nº ${order.address.number}, AP: ${order.address.apartment}`;
//   console.log(str);
// };

// // funcao questao 2
// customerInfo(order);

function priceCollector(order) {
  const pizzasDrinksDelivery = Object.values(order.order);
}

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const pizzasDrinksDelivery = Object.values(order.order);
  const pizzas = Object.values(order.order)[0];
  const drinks = Object.values(order.order)[1];
  const priceDelivery = Object.values(order.order)[2];
  const arrayPrices = Object.entries(pizzas, drinks, priceDelivery);
  console.log(pizzasDrinksDelivery.length);
};

orderModifier(order);
