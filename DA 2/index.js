// personal information
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var umsex = document.getElementById("Male");
var ufsex = document.getElementById("Female");
var uosex = document.getElementById("Others");
var dob = document.getElementById("dob");
var age = document.getElementById("age");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var profile = document.getElementById("profile");
var fcolor = document.getElementById("fav_color");

// educational qualificatons

var btech = document.getElementById("B");
var mtech = document.getElementById("M");
var branch = document.getElementById("SB");
var branch2 = document.getElementById("SM");
var aoi = document.getElementById("aoi");

// job details

var years = document.getElementById("years");
var title = document.getElementById("jtitle");
var desc = document.getElementById("job");

// resume

var pic = document.getElementById("photo");
var aadhar = document.getElementById("aadhar");

// submit

var dvalidateBtn = document.getElementById("dvalidate");
var validateBtn = document.getElementById("validate");
var resetBtn = document.getElementById("reset");

// validate function

function validate() {
  if (fname.value == "") {
    alert("Please enter your first name");
    fname.focus();
    return false;
  }
  if (lname.value == "") {
    alert("Please enter your last name");
    lname.focus();
    return false;
  }
  if (
    umsex.checked == false &&
    ufsex.checked == false &&
    uosex.checked == false
  ) {
    alert("Please select your gender");
    umsex.focus();
    return false;
  }
  if (dob.value == "") {
    alert("Please enter your date of birth");
    dob.focus();
    return false;
  }
  if (age.value == "") {
    alert("Please enter your age");
    age.focus();
    return false;
  }
  if (email.value == "") {
    alert("Please enter your email");
    email.focus();
    return false;
  }
  if (phone.value == "") {
    alert("Please enter your phone number");
    phone.focus();
    return false;
  }
  if (profile.value == "") {
    alert("Please enter your profile");
    profile.focus();
    return false;
  }
  if (fcolor.value == "") {
    alert("Please enter your favourite color");
    fcolor.focus();
    return false;
  }
  if (btech.checked == false && mtech.checked == false) {
    alert("Please select your degree");
    btech.focus();
    return false;
  }
  if (branch.value == "") {
    alert("Please enter your branch");
    branch.focus();
    return false;
  }
  if (branch2.value == "") {
    alert("Please enter your branch");
    branch2.focus();
    return false;
  }
  if (aoi.value == "") {
    alert("Please enter your area of interest");
    aoi.focus();
    return false;
  }
  if (years.value == "") {
    alert("Please enter your experience");
    years.focus();
    return false;
  }
  if (title.value == "") {
    alert("Please enter your job title");
    title.focus();
    return false;
  }
  if (desc.value == "") {
    alert("Please enter your job description");
    desc.focus();
    return false;
  }
  if (pic.value == "") {
    alert("Please upload your photo");
    pic.focus();
    return false;
  }
  if (aadhar.value == "") {
    alert("Please upload your aadhar");
    aadhar.focus();
    return false;
  } else {
    alert("Form Submitted Successfully");
  }
}

// reset function

function reset() {
  fname.value = "";
  lname.value = "";
  umsex.checked = false;
  ufsex.checked = false;
  uosex.checked = false;
  dob.value = "";
  age.value = "";
  email.value = "";
  phone.value = "";
  profile.value = "";
  fcolor.value = "";
  btech.checked = false;
  mtech.checked = false;
  branch.value = "";
  branch2.value = "";
  aoi.value = "";
  years.value = "";
  title.value = "";
  desc.value = "";
  pic.value = "";
  aadhar.value = "";
}

// adding event listner to submit button
if(validateBtn){
    validateBtn.addEventListener("click", validate);
}
if(dvalidateBtn){
    dvalidateBtn.addEventListener("click", () => {
        alert("Please validate your form!!");
        console.log("hello");
      });
}

if(resetBtn){
    resetBtn.addEventListener("click", reset);
}
