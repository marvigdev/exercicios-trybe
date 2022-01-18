let margarida = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let tio = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Não',
};

console.log(`${margarida.personagem} e ${tio.personagem}`);
console.log(`${margarida.origem} e ${tio.origem}`);
console.log(`${margarida.nota} e ${tio.nota}`);
if (margarida.recorrente === 'Sim' && tio.recorrente === 'Sim') {
  console.log('Ambos recorrentes');
} else {
  console.log(
    margarida.recorrente === 'Sim'
      ? 'Margarida é recorrente'
      : tio.recorrente === 'Sim'
      ? 'Tio Patinhas é recorrente'
      : 'Nenhum personagem é recorrente.'
  );
}
