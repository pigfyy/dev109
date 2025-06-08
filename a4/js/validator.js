// ADDED E.C. FEATURES

// function to validate the form, originally gotten from downloaded zip
function isValid() {
  // checks all the different verification functions, if any one of them fails, it shows the error message and prevents the form from being submitted
  if (
    firstName() &&
    lastName() &&
    email() &&
    phone() &&
    username() &&
    password() &&
    address() &&
    city() &&
    state() &&
    country() &&
    zipCode()
  ) {
    return true;
  } else {
    document.getElementById("submiterror").innerHTML =
      "<p><strong>Error Submitting — See Above</strong></p>";
    event.preventDefault();
    return false;
  }
}

// validates first name, checks if length is adequate and if input exists
function firstName() {
  var validFirstname = false;
  var firstname = document.getElementById("FirstName").value;
  var errorMessages = "";

  if (firstname === null || firstname === "" || firstname.length > 20) {
    errorMessages +=
      '<p style="color: red;">The first name is required and cannot be greater than 20 characters</p>';
  } else if (firstname.match("^[a-zA-Z ,.'-]+$") === null) {
    errorMessages +=
      '<p style="color: red;">Invalid character in first name (accepts only A-Z, a-z, and ,.\'-)</p>';
  } else {
    validFirstname = true;
  }

  document.getElementById("fname").innerHTML = errorMessages;
  return validFirstname;
}

// validates last name, basically the same as the first name check
function lastName() {
  var validLastname = false;
  var lastname = document.getElementById("LastName").value;
  var errorMessages = "";

  if (lastname === null || lastname === "" || lastname.length > 20) {
    errorMessages +=
      '<p style="color: red;">The last name is required and cannot be greater than 20 characters</p>';
  } else if (lastname.match("^[a-zA-Z ,.'-]+$") === null) {
    errorMessages +=
      '<p style="color: red;">Invalid character in last name (accepts only A-Z, a-z, and ,.\'-)</p>';
  } else {
    validLastname = true;
  }

  document.getElementById("lname").innerHTML = errorMessages;
  return validLastname;
}

// validates email, checks if it is a email by checking if there's an @ and a ., as well as verifying their position as well
function email() {
  var validEmail = false;
  var userEmail = document.getElementById("Email").value;
  var errorMessages = "";
  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");

  // also checks if email empty
  if (userEmail === null || userEmail === "") {
    errorMessages += '<p style="color: red;">Email is required</p>';
  } else if (
    atpos < 1 ||
    dotpos < atpos + 2 ||
    dotpos + 2 >= userEmail.length
  ) {
    errorMessages += '<p style="color: red;">Invalid email format</p>';
  } else {
    validEmail = true;
  }

  document.getElementById("emailerror").innerHTML = errorMessages;
  return validEmail;
}

// checks phone number
function phone() {
  var validPhone = false;
  var phone = document.getElementById("Phone").value;
  var errorMessages = "";

  // E.C. --- use regex found at https://stackoverflow.com/questions/31143315/regex-phone-number-with-dashes
  var phoneRegex = /^(1-)?\d{3}-\d{3}-\d{4}$/;

  if (phone === null || phone === "") {
    errorMessages += '<p style="color: red;">Phone number is required</p>';
  } else if (!phone.match(phoneRegex)) {
    errorMessages +=
      '<p style="color: red;">Invalid phone number format (e.g., 1-XXX-XXX-XXXX or XXX-XXX-XXXX)</p>';
  } else {
    validPhone = true;
  }

  document.getElementById("phoneerror").innerHTML = errorMessages;
  return validPhone;
}

// checks username, checks if length is adequate and if input exists
function username() {
  var validUsername = false;
  var username = document.getElementById("Username").value;
  var errorMessages = "";

  if (username === null || username === "" || username.length > 12) {
    errorMessages +=
      '<p style="color: red;">Username is required and cannot be greater than 12 characters</p>';
  } else {
    validUsername = true;
  }

  document.getElementById("usernameerror").innerHTML = errorMessages;
  return validUsername;
}

// checks password, checks if length is adequate and if input exists
function password() {
  var validPassword = false;
  var password = document.getElementById("Password").value;
  var errorMessages = "";

  if (password === null || password === "" || password.length > 7) {
    errorMessages +=
      '<p style="color: red;">Password is required and cannot be greater than 7 characters</p>';
  } else {
    // E.C. --- implements special requirement checking
    var upperCase = /[A-Z]/;
    var lowerCase = /[a-z]/;
    var number = /[0-9]/;
    // using regex found at https://stackoverflow.com/questions/8359566/regex-to-match-symbols/61394741
    var specialChar = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;

    if (!password.match(upperCase)) {
      errorMessages +=
        '<p style="color: red;">Password must contain at least one uppercase letter</p>';
    }
    if (!password.match(lowerCase)) {
      errorMessages +=
        '<p style="color: red;">Password must contain at least one lowercase letter</p>';
    }
    if (!password.match(number)) {
      errorMessages +=
        '<p style="color: red;">Password must contain at least one number</p>';
    }
    if (!password.match(specialChar)) {
      errorMessages +=
        '<p style="color: red;">Password must contain at least one special character</p>';
    }

    if (errorMessages === "") {
      validPassword = true;
    }
  }

  document.getElementById("passworderror").innerHTML = errorMessages;
  return validPassword;
}

// checks address, checks if input exists
function address() {
  var validAddress = false;
  var address = document.getElementById("Address").value;
  var errorMessages = "";

  if (address === null || address === "") {
    errorMessages += '<p style="color: red;">Address is required</p>';
  } else {
    validAddress = true;
  }

  document.getElementById("addresserror").innerHTML = errorMessages;
  return validAddress;
}

// checks city, checks if input exists
function city() {
  var validCity = false;
  var city = document.getElementById("City").value;
  var errorMessages = "";

  if (city === null || city === "") {
    errorMessages += '<p style="color: red;">City is required</p>';
  } else {
    validCity = true;
  }

  document.getElementById("cityerror").innerHTML = errorMessages;
  return validCity;
}

// checks state, checks if input exists
function state() {
  var validState = false;
  var state = document.getElementById("State").value;
  var errorMessages = "";

  if (state === null || state === "") {
    errorMessages += '<p style="color: red;">State is required</p>';
  } else {
    validState = true;
  }

  document.getElementById("stateerror").innerHTML = errorMessages;
  return validState;
}

// checks country, checks if input exists
function country() {
  var validCountry = false;
  var country = document.getElementById("Country").value;
  var errorMessages = "";

  if (country === null || country === "") {
    errorMessages += '<p style="color: red;">Country is required</p>';
  } else {
    validCountry = true;
  }

  document.getElementById("countryerror").innerHTML = errorMessages;
  return validCountry;
}

// checks zip code, but only required if country === USA, max 5 digits as well
function zipCode() {
  var validZipcode = false;
  var zipcode = document.getElementById("ZipCode").value;
  var country = document.getElementById("Country").value;
  var errorMessages = "";

  if (country === "USA") {
    if (zipcode === null || zipcode === "") {
      errorMessages +=
        '<p style="color: red;">Zip Code is required for USA</p>';
    } else if (zipcode.length > 5 || zipcode.match(/^\d{5}$/) === null) {
      errorMessages +=
        '<p style="color: red;">Zip Code must be 5 digits for USA</p>';
    } else {
      validZipcode = true;
    }
  } else {
    validZipcode = true; // Zipcode is optional if not USA
  }

  document.getElementById("zipcodeerror").innerHTML = errorMessages;
  return validZipcode;
}
