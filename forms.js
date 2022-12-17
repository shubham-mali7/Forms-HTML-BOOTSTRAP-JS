const validateFname = () => {
  let fname = document.getElementById("fname");
  let fout = document.getElementById("fout");
  let fdiv = document.getElementById("fdiv");

  if (fname.value.trim().length == 0) {
    fout.innerText = "Please Enter First Name";
    fdiv.classList.add("has-error");
  } else {
    fout.innerText = "";
    fdiv.classList.remove("has-error");
    fdiv.classList.add("has-success");
    let data = fname.value.trim(); /// .value? to pick the value return in input box
    fname.value = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
  }
};

//The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.

const validateLname = () => {
  let lname = document.getElementById("lname");
  let lout = document.getElementById("lout");

  if (lname.value.trim().length == 0) {
    lout.innerText = "Please Enter Last Name";
    ldiv.classList.add("has-error");
  } else {
    lout.innerText = "";
    ldiv.classList.remove("has-error");
    ldiv.classList.add("has-success");
    let data = lname.value.trim();
    lname.value = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
  }
};

const validateEmail = () => {
  let email = document.getElementById("email").value;

  if (email.trim().length == 0) {
    document.getElementById("eout").innerText = "Please Enter Email";
  } else {
    if (
      email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,5})$") == null
    ) {
      //Reg-ex(Regular-Expression)
      document.getElementById("eout").innerText = "Please Enter Valid Email";
      ediv.classList.add("has-error");
    } else {
      document.getElementById("eout").innerText = "";
      ediv.classList.remove("has-error");
      ediv.classList.add("has-success");
    }
  }
};

const validatePassword = () => {
  let pwd = document.getElementById("password").value;
  let pout = document.getElementById("pout");
  let ppout = document.getElementById("ppout");

  if (pwd.trim().length < 15) {
    if (pwd.trim().length < 8) {
      pout.innerText = "Minimum length of password is 8";
      ppout.style.display = "block";
      ppout.style.backgroundColor = "red";
    } else if (pwd.trim().length < 11) {
      pout.innerText = "";
      ppout.style.backgroundColor = "orange";
    } else {
      ppout.style.backgroundColor = "green";
    }
  }
};

const showPassword = () => {
  let pwd = document.getElementById("password");

  if (pwd.type == "password") {
    pwd.type = "text";
    console.log("hello check" + pwd.type);
  } else {
    pwd.type = "password";
  }
};

const getCountry = () => {
  let country = document.getElementById("country").value;

  document.getElementsByTagName(
    "span"
  )[2].innerText = `You have selected ${country}`;
};
