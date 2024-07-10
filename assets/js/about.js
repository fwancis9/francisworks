document.addEventListener('DOMContentLoaded', function(event) {
    // array with texts to type in typewriter
    var dataText = ["About Me"];
  
    // function to type the text
    function typeWriter(text, i, fnCallback) {
      // check if text isn't finished yet
      if (i < text.length) {
        // add next character
        document.getElementById("hero-text").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again to type the next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 1000);
      }
    }
  
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
      if (i < dataText.length) {
        typeWriter(dataText[i], 0, function() {
          // after callback (and whole text has been animated), stop
          setTimeout(function() {
            var span = document.querySelector("h1 span");
            if (span) {
              span.remove();
            }
          }, 700);
        });
      }
    }
  
    // start the text animation
    StartTextAnimation(0);

    var imageArray = [
      'url("assets/img/pinto-art/IMG_7931.jpeg")',
      'url("assets/img/pitogo/IMG_1173.jpeg")',
      'url("assets/img/g12/6.JPEG")',
      'url("assets/img/bl/IMG_7995.jpeg")'
  ];

  var currentIndex = 0;
  var windowElement = document.querySelector('.window');

  function changeBackgroundImage() {      
      setTimeout(function() {
          currentIndex = (currentIndex + 1) % imageArray.length;
          windowElement.style.backgroundImage = imageArray[currentIndex];
      }, 1000);
  }

  setInterval(changeBackgroundImage, 5000);
  windowElement.style.backgroundImage = imageArray[currentIndex];

  function validateEmail(email) {
    // Regular expression for validating an email address
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

  document.getElementById("contact_form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name-contact").value;
    var email = document.getElementById("email-contact").value;
    var message = document.getElementById("message-contact").value;

    if (name != "" && message != "" && validateEmail(email)) {
      document.getElementById("name-contact").value = "";
      document.getElementById("email-contact").value = "";
      document.getElementById("message-contact").value = "";

      alert("Message submitted!")
    } else {
      alert("Invalid input/s. Please try again!");
    }
    
  });
  });