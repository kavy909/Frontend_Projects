function validateSignup() {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  if (email === '' || password.length < 6) {
    alert('Please enter a valid email and password (min 6 characters).');
    return false;
  }
  return true;
}

function validateSignin() {
  const email = document.getElementById('signinEmail').value;
  const password = document.getElementById('signinPassword').value;
  if (email === '' || password === '') {
    alert('Please fill in both fields.');
    return false;
  }
  return true;
}