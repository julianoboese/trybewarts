const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('password');
const formButton = document.getElementById('submit');

formButton.addEventListener('click', function(){
  if (inputEmail.value === "tryber@teste.com" && inputSenha.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.")
  }
})