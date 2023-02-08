import validator from 'validator';

import './style.css';

const getBtn = document.querySelector('button');
const getInput = document.querySelector('#caixa');
const getSelect = document.querySelector('#select')
const getParagraph = document.querySelector('p');


getBtn.addEventListener('click', (e) => {
  e.preventDefault();


  const objetaoDeFuncao = {
    cpf: validator.isTaxID(getInput.value, 'pt-BR'),
    email: validator.isEmail(getInput.value),
    hexColor: validator.isHexColor(getInput.value),
  }
  getParagraph.innerHTML = `A validação retornou ${objetaoDeFuncao[getSelect.value]}`
})