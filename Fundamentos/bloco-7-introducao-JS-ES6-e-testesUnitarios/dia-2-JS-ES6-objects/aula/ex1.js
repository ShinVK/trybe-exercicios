const student1 = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkills: "Ótimo",
};

const student2 = {
  Html: "Bom",
  Css: "Ótimo",
  JavaScript: "Ruim",
  SoftSkills: "Ótimo",
  Git: "Bom", // chave adicionada
};

function habilities(std) {
  const habArr = Object.keys(std);
  for (i in habArr) {
    let str = `${habArr[i]}, nível: ${std[habArr[i]]}`;
    console.log(str);
  }
}

habilities(student2);
