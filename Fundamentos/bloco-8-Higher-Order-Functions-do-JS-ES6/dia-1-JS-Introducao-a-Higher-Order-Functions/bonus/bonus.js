const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const drgDmg = (dragon) => {
  const { strength: dstr } = dragon;
  return Math.floor(Math.random() * (dstr - 15 + 1) + 15);
};

const wrDmg = (warrior) => {
  const { strength: wstr, weaponDmg: wdmg } = warrior;
  const mxDmg = wstr * wdmg;
  return Math.floor(Math.random() * (mxDmg - wstr + 1) + wstr);
};

const mageDmg = (mage) => {
  const { mana, intelligence: int } = mage;
  const objMage = {
    dmg: 'Não possui mana suficiente',
    manaAct: 0,
  };
  if (mana > 15) {
    const dmgMage = Math.floor(Math.random() * (int * 2 - int + 1) + int);
    objMage.manaAct = 15;
    objMage.dmg = dmgMage;
    return objMage;
  }
  return objMage;
};

// 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .

//  2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

// 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.

// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

const gameActions = {
  turnWarrior: (wrDmg) => {
    const wDamage = wrDmg(warrior);
    dragon.healthPoints -= wDamage;
    warrior.damage = wDamage;
  },
  turnMage: (mageDmg) => {
    const oMage = mageDmg(mage);
    const { dmg, manaAct } = oMage;
    dragon.healthPoints -= dmg;
    mage.damage = dmg;
    mage.mana -= manaAct;
  },
  turnDragon: (drgDmg) => {
    const dragoDmg = drgDmg(dragon);
    warrior.healthPoints -= dragoDmg;
    mage.healthPoints -= dragoDmg;
    dragon.damage = dragoDmg;
  },

  endTurn: () => battleMembers,
};

gameActions.turnWarrior(wrDmg);
gameActions.turnMage(mageDmg);
gameActions.turnDragon(drgDmg);
console.log(gameActions.endTurn());

// console.log(drgDmg(dragon));
// console.log(wrDmg(warrior));
// console.log(mageDmg(mage));
