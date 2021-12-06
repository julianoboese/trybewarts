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
  const characters = textarea.value.length;
  const available = 500 - characters;
  counter.innerText = available;
});

const answerName = document.getElementById('answer-name');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const answerEmail = document.getElementById('answer-email');
const inputEmail = document.getElementById('input-email');
const answerHouse = document.getElementById('answer-house');
const selectHouse = document.getElementById('house');
const answerFamily = document.getElementById('answer-family');
const families = document.getElementsByClassName('family');
const answerSubjects = document.getElementById('answer-subjects');
const subjects = document.getElementsByClassName('subject');
const answerRate = document.getElementById('answer-rate');
const answerObs = document.getElementById('answer-obs');
const formFillSection = document.getElementById('form-fill');
const formAnswers = document.getElementById('form-answers');

function writeFamily() {
  for (let i = 0; i < families.length; i += 1) {
    if (families[i].checked) {
      answerFamily.innerHTML += ` ${families[i].value}`;
    }
  }
}

function checkFirstSubject(i) {
  if (answerSubjects.innerText === 'Matérias:') {
    answerSubjects.innerHTML += ` ${subjects[i].value}`;
  } else {
    answerSubjects.innerHTML += `, ${subjects[i].value}`;
  }
}

function writeRate() {
  const rates = document.querySelectorAll('#rate-container input');
  for (let i = 0; i < rates.length; i += 1) {
    if (rates[i].checked) {
      answerRate.innerHTML += ` ${rates[i].value}`;
    }
  }
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  formFillSection.style.display = 'none';
  answerName.innerHTML = `${answerName.innerHTML} ${inputName.value} ${inputLastName.value}`;
  answerEmail.innerHTML += ` ${inputEmail.value}`;
  answerHouse.innerHTML += ` ${selectHouse.value}`;
  writeFamily();
  for (let i = 0; i < subjects.length; i += 1) {
    if (subjects[i].checked) {
      checkFirstSubject(i);
    }
  }
  writeRate();
  answerObs.innerHTML += ` ${textarea.value}`;

  formAnswers.style.display = 'block';
});
