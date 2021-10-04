function wakeUp() {
  return 'Acordando!!';
}

function cofeeBreak() {
  return 'Bora tomar café!!';
}

function sleep() {
  return 'Pariu dormir!!';
}

const doingThings = (action) => {
  console.log(action());
};

doingThings(cofeeBreak);
