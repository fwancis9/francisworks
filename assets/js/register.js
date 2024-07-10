document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector("#register").addEventListener("submit", function(e) {
    var username = document.getElementById("username").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var password = document.getElementById("password").value;

    if (validateStringLength(password) && validateStringLength(confirm_password)) {
      if (password == confirm_password) {
        document.getElementById("atleast").style.display = 'none';
        document.getElementById("matched").style.display = 'none';
        // TODO: user login save to file

        window.username = username;
        window.password = password;

        alert('success registration!');
      } else {
        document.getElementById("matched").style.display = 'block';
        document.getElementById("atleast").style.display = 'none'; 
      }
    } else {
      document.getElementById("atleast").style.display = 'block';
      document.getElementById("matched").style.display = 'none';
    }

    e.preventDefault();
  });

  function validateStringLength(str) {
    return str.length >= 8;
  }
});