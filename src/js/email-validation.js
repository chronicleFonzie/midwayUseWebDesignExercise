function ValidateEmail(form) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const userEmail = form.user_email;
  const userName = form.user_name;
  const reason = form.reason;

  if (!userName.value) {
    document.getElementById("user_name_error").innerHTML = " Name is required";
    document.getElementById("user_name_error").style.color = "red";
  }else {
    document.getElementById("user_name_error").innerHTML = "";
  }

  if (!userEmail.value) {
    document.getElementById("user_email_error").innerHTML = " Email address is required";
    document.getElementById("user_email_error").style.color = "red";
    return;
  }else {
    document.getElementById("user_email_error").innerHTML = "";
  }

  if (userEmail.value.match(mailformat)) {
    if (reason.value === "2") {
      window.location.href = "../feedback/product-suggestion-form.html";
      return;
    }
    return true;
  }

  document.getElementById("user_email_error").innerHTML = " You have entered an invalid email address!";
  document.getElementById("user_email_error").style.color = "red";
  document.form1.user_email.focus();

  return false;
}
