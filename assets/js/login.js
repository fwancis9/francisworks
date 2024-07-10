document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector("#login").addEventListener("submit", function(e) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    alert(window.username);
    alert(window.password);

    if (window.username == username && window.password == password) {
      document.getElementById("invalid").style.display = 'none'; 

      // TODO: login success
      alert("login success");

      window.location.href = "product.html";
    } else {
      document.getElementById("invalid").style.display = 'block'; 
    }

    e.preventDefault();
  });
});