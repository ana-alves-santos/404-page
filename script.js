const p = document.querySelector('.astronauta p');
const texto = 'Página perdida no espaço...';
let i = 0;
p.textContent = '';
function digita() {
  if(i < texto.length) {
    p.textContent += texto[i++];
    setTimeout(digita, 80);
  }
}
digita();
