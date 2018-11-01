function generatePassword() {
  var passwordDiv = document.getElementById('password');
  passwordDiv.innerHTML = Math.random().toString(36).substring(2, 10);
}

