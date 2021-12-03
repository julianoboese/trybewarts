const email = document.getElementById('email');
const password = document.getElementById('password');
const formButton = document.getElementById('submit');
const rateValues = document.getElementById('rate-container');
const agreementCheck = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const counter = document.getElementById('counter');
const textarea = document.getElementById('textarea');

formButton.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

window.onload = function addRateValues() {
  for (let i = 1; i <= 10; i += 1) {
    const inputToAdd = document.createElement('input');
    inputToAdd.type = 'radio';
    inputToAdd.name = 'rate';
    inputToAdd.value = i;
    inputToAdd.id = `rate${i}`;

    const labelToAdd = document.createElement('label');
    labelToAdd.setAttribute('for', `rate${i}`);
    labelToAdd.innerText = i;

    rateValues.appendChild(inputToAdd);
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

const respostaNome = document.getElementById('answer-name');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const respostaEmail = document.getElementById('answer-email');
const inputEmail = document.getElementById('input-email');
const respostaCasa = document.getElementById('answer-house');
const selectCasa = document.getElementById('house');
const respostaFamilia = document.getElementById('answer-family');
const familias = document.getElementsByClassName('family');
const respostaObs = document.getElementById('answer-obs');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  respostaNome.innerText = `${respostaNome.innerText} ${inputName.value} ${inputLastName.value}`;
  respostaEmail.innerText += ` ${inputEmail.value}`;
  respostaCasa.innerText += ` ${selectCasa.value}`;
  for (let i = 0; i < familias.length; i += 1) {
    if (familias[i].checked) {
      respostaFamilia.innerText += ` ${familias[i].value}`;
    }
  }
  respostaObs.innerText += ` ${textarea.value}`;
});
