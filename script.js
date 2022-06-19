const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submit = document.getElementById("submit");

var nameFormat = "^[a-zA-Zs, ]+$";

function Error(inputs, message) {
  const form = inputs.parentElement;
  const label = form.querySelector("label");
  label.innerText = message;
  inputs.className = "error";
  label.className = "label-validation";
}

function Successful(inputs) {
  const form = inputs.parentElement;
  const label = form.querySelector("label");
  inputs.className = "success";
  label.className = "label-success";
}

firstName.addEventListener("blur", function () {
  FirstName();
});

lastName.addEventListener("blur", function () {
  LastName();
});

emailInput.addEventListener("blur", function () {
  email();
});

passwordInput.addEventListener("blur", function () {
  password();
});

function FirstName() {
  var fn = firstName.value;
  if (!fn) {
    Error(firstName, "First Name cannot be empty");
  } else {
    if (fn.match(nameFormat)) {
      Successful(firstName);
    } else {
      Error(firstName, "Looks like this is not an name");
    }
  }
  return fn;
}

function LastName() {
  var ln = lastName.value;
  if (!ln) {
    Error(lastName, "Last Name cannot be empty");
  } else {
    if (ln.match(nameFormat)) {
      Successful(lastName);
    } else {
      Error(lastName, "Looks like this is not an name");
    }
  }
}

function email() {
  var mail = emailInput.value;
  if (!mail) {
    Error(emailInput, "Email Address cannot be empty");
  } else {
    if (!validateEmail(mail)) {
      Error(emailInput, "Looks like this is not an email");
    } else {
      Successful(emailInput);
    }
  }
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function password() {
  var pass = passwordInput.value;
  if (!pass) {
    Error(passwordInput, "Password cannot be empty");
  } else {
    Successful(passwordInput);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  FirstName();
  LastName();
  email();
  password();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();

  FirstName();
  LastName();
  email();
  password();
});
