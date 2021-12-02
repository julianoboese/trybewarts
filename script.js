const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('password');
const formButton = document.getElementById('submit');
const rateValues = document.getElementById('rate-container');
const agreementCheck = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const counter = document.getElementById('counter');
const textarea = document.getElementById('textarea');

formButton.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

window.onload = function addRateValues() {
  for (let i = 1; i <= 10; i += 1) {
    const valueToAdd = document.createElement('input');
    valueToAdd.type = 'radio';
    valueToAdd.name = 'rate';
    valueToAdd.value = i;
    valueToAdd.id = `rate${i}`;

    const labelToAdd = document.createElement('label');
    labelToAdd.setAttribute('for', `rate${i}`);
    labelToAdd.innerText = i;

    rateValues.appendChild(valueToAdd);
    rateValues.appendChild(labelToAdd);
  }
};

agreementCheck.addEventListener('change', () => {
  if (agreementCheck.checked) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
});

textarea.addEventListener('keyup', () => {
  const caracteres = textarea.value.length;
  const disponiveis = 500 - caracteres;
  counter.innerText = disponiveis;
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const respostaNome = document.getElementById('respostas-nome');
  const inputName = document.getElementById('input-name');
  const inputLastName = document.getElementById('input-lastname');
  respostaNome.innerText = `${respostaNome.innerText} ${inputName.value} ${inputLastName.value}`;

  const respostaEmail = document.getElementById('respostas-email');
  const inputEmail = document.getElementById('input-email');
  respostaEmail.innerText += ` ${inputEmail.value}`;

  const respostaCasa = document.getElementById('respostas-casa');
  const selectCasa = document.getElementById('house');
  respostaCasa.innerText += ` ${selectCasa.value}`;

  const respostaFamilia = document.getElementById('respostas-familia');
  const familias = document.getElementsByClassName('family');
  for (let i = 0; i < familias.length; i += 1) {
    if (familias[i].checked) {
      respostaFamilia.innerText += ` ${familias[i].value}`;
    }
  }

  const respostaObs = document.getElementById('respostas-obs');
  respostaObs.innerText += ` ${textarea.value}`;
});
