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

// Quts objetos temos um dentro do outro
// Objeto maior que contem todos é o ORDER (1) ('pai d todos')
// Objeto Adress dentro do Order (1) ('filho 1')
// Objeto order filho do Order (2)
// objeto Payment filho do Order (3)
// ATÉ AQUI SÃO 3 FILHOS DO ORDER (adress, order e payment)
// acredito que temos que fazer uma constante para cada filho, para ficar mais fácil coletar e alterar.

// declarando os filhos do Objeto Pai Order
// filho 1
const adress1 = Object.values(order.address);
// console.log(adress1); // retorna uma array com os dados do endereço
// filho 2

// console.log(order2);
const order2 = Object.entries(order.order);
// o filho 2 tem mais 3 filhos, que seriam netos do Order pai, mas acessamos diretamento do order 2.
const pizzas21 = Object.entries(order2[0][1]);
// console.log(pizzas21[0][0]);
// retorna as pizzas em uma  ARRAY com os sabores, dentro de cada elemento dessa array tem um elemento com o nome do sabor e um objeto com preço e qutde;
// portanto temos 2 itens em cada elemento da array. O primeiro item é o sabor (str), o segundo item é um objeto, que queremos acessar
// para acessar as quantidades e preços é mais fácil.
// pizzas[0][1] - dessa forma acessamos o objeto dentro da array
// pizzas[0][1].price - acessamos a key price dentro do objeto.

const drinks22 = Object.entries(order2[1][1]);
// console.log(drinks22);
// drinks22.[0][0].type
// console.log(drinks22[0][1].type);

const delv23 = Object.values(order2[2][1]);
// Nesse caso como o retorno é só um objeto e dentro desse objeto já contem os itens que queremos, optei por usar um values, dessa forma conseguimos acessar o valor diretamente.
// console.log(delv23[1]);

// EXERCICIO 1 - CERTO
const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const str = `Olá ${delv23[0]}, entrega para: ${order.name}, telefone: ${order.phoneNumber}, R. ${adress1[0]}, Nº: ${adress1[1]}, AP: ${adress1[2]}`;
  console.log(str);
};

customerInfo(order);

const pedidosPizzasEBeb = () => {
  let arrSabore = [];
  for (let i = 0; i < pizzas21.length; i += 1) {
    arrSabore.push(pizzas21[i][0]);
  }
  for (let i = 0; i < drinks22.length; i += 1) {
    arrSabore.push(drinks22[i][1].type);
  }
  const newStr = arrSabore.join(", ");
  return newStr;
};

const pricePizzas = () => {
  let price = 0;
  for (let i = 0; i < pizzas21.length; i += 1) {
    price += pizzas21[i][1].price * pizzas21[i][1].amount;
  }
  return price;
};

const priceDrinks = () => {
  const drinks = Object.entries(order2[1][1]);
  let price = 0;
  for (let i = 0; i < drinks.length; i += 1) {
    price += drinks[i][1].price * drinks[i][1].amount;
  }
  return price;
};

const totalConta = () => {
  return pricePizzas() + priceDrinks() + delv23[1];
};

// console.log(totalConta());

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const str = `Olá ${
    order.name
  }, o total do seu pedido de ${pedidosPizzasEBeb()} é R$${totalConta()}`;
  return str;
};

console.log(orderModifier(order));
