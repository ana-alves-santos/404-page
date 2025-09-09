const astronautParagraph = document.querySelector('.astronaut p');
const text = 'Página perdida no espaço...';
let index = 0;
astronautParagraph.textContent = '';

function typeWriter() {
  if(index < text.length) {
    astronautParagraph.textContent += text[index++];
    setTimeout(typeWriter, 80);
  }
}

typeWriter();
