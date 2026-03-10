const navegarPredial = document.querySelector('.navegar-predial')
let sectionConteudo = document.querySelector('section')
const navegarIndustrial = document.querySelector('.navegar-industrial')
const navegarSistemaDeSeguranca = document.querySelector('.navegar-sistema-de-seguranca')
const linkMarcarOrcamento = document.querySelector('.link-paginas')
function redirecionarPredial() {
 
  sectionConteudo.innerHTML = artigoPredial()
  return sectionConteudo

}

function redirecionarIndustrial(event) {
  
  sectionConteudo.innerHTML = artigoIndustrial()
  return sectionConteudo
}

function redirecionarSistemaDeSeguranca(event) {

  sectionConteudo.innerHTML = artigoSistemaSeguranca()
  return sectionConteudo
}

function redirecionarMarcarOrcamento(event) {
 
  event.preventDefault();
  window.open('http://127.0.0.1:5500/Formolário.html', '_blank');
}


navegarPredial.addEventListener('click', redirecionarPredial)
navegarIndustrial.addEventListener('click', redirecionarIndustrial)
navegarSistemaDeSeguranca.addEventListener('click', redirecionarSistemaDeSeguranca)
linkMarcarOrcamento.addEventListener('click', redirecionarMarcarOrcamento)
