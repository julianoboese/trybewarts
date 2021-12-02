const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('password');
const formButton = document.getElementById('submit');
const rateValues = document.getElementById('rate-container');

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
    valueToAdd.id = 'rate' + i;

    const labelToAdd = document.createElement('label');
    labelToAdd.setAttribute('for','rate' + i);
    labelToAdd.innerText = i;

    rateValues.appendChild(valueToAdd);
    rateValues.appendChild(labelToAdd);
  }
}

