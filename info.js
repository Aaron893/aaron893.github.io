function validateForm() {
  clearForm();

  let success = true;
  let firstNameInput = document.forms[0].elements["firstName"].value;
  let lastNameInput = document.forms[0].elements["lastNamed"].value;
  let passwordInput = document.forms[0].elements["passwordFirst"].value;
  let passwordInputC = document.forms[0].elements["passwordSecond"].value;

  let usernameInput = document.forms[0].elements["userName"].value;
  let ageInput = document.forms[0].elements["age"].value;
  let nameResult = testName(firstNameInput) && testName(lastNameInput);
  let ageResult = ageInput >= 18 && ageInput <= 60;
  let passResult = validatePassword(passwordInput);

  if (passResult) {
    passResult = passwordInputC == passwordInput;
  }
  let userNameResult =
    usernameInput.length >= 6 &&
    ((usernameInput.charCodeAt(0) >= 65 &&
        usernameInput.charCodeAt(0) <= 90) ||
      (usernameInput.charCodeAt(0) >= 97 &&
        usernameInput.charCodeAt(0) <= 122));

  if (!nameResult) {
    document.getElementById("NameVal").innerHTML =
      "Invalid Name fields , should start with Cap and contain letters only";
  }
  if (!passResult) {
    document.getElementById("passwordMatch").innerHTML =
      "Invalid password or passwords dont match,passwords must contain atleast 1 capital and digit";
  }
  if (!userNameResult) {
    document.getElementById("userNameVal").innerHTML =
      "Invalid username, username should start with Caps and minimum length of 6 characters";
  }
  if (!ageResult) {
    document.getElementById("ageVal").innerHTML =
      "Invalid age, must be between 18 and 60";
  }

  success = nameResult && ageResult && userNameResult && passResult;
  return success;
}

function testName(isValid) {
  valid = true;
  valid =
    valid && isValid.charCodeAt(0) >= 65 && isValid.charCodeAt(0) <= 90;
  for (let i = 1; i < isValid.length; i++) {
    valid =
      valid &&
      isValid.charCodeAt(i) >= 97 &&
      isValid.charCodeAt(i) <= 122;
  }

  return valid;
}

function validatePassword(isValid) {
  valid = true;
  valid =
    isValid.length >= 6 &&
    ((isValid.charCodeAt(0) >= 65 && isValid.charCodeAt(0) <= 90) ||
      (isValid.charCodeAt(0) >= 97 && isValid.charCodeAt(0) <= 122));
  let numAlphaC = 0;
  let numDigit = 0;
  if (valid) {
    for (let i = 0; i < isValid.length; i++) {
      if (isValid.charCodeAt(i) >= 65 && isValid.charCodeAt(i) <= 90) {
        numAlphaC++;
      } else if (
        isValid.charCodeAt(i) >= 48 &&
        isValid.charCodeAt(i) <= 57
      ) {
        numDigit++;
      }
    }

    valid = valid && numAlphaC >= 1 && numDigit > 0;
  }
  return valid;
}

function clearForm() {
  document.getElementById("NameVal").innerHTML = "";
  document.getElementById("passwordMatch").innerHTML = "";
  document.getElementById("userNameVal").innerHTML = "";
  document.getElementById("ageVal").innerHTML = "";
}