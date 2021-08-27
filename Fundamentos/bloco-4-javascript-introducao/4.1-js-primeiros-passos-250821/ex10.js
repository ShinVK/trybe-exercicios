const custo = 800;
const venda = 1000;

let custoTotal = custo + (0.2 * custo);
let lucro = venda - custoTotal;

let lucroMil = lucro * 1000;

switch (custo && venda) {
  case (0):
    console.log("Erro na entrada");
    break
  default:
    console.log("Seu lucro ao vender 1000 unidades é de R$" + lucroMil);
}

