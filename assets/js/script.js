document.addEventListener('DOMContentLoaded', function(event) {
    // array with texts to type in typewriter
    var dataText = ["Shots", "Works", "francis", "largo"];
  
    // function to delete the text
    function deleteText(text, i, fnCallback) {
      // check if text isn't deleted yet
      if (i >= 0) {
        // remove the last character
        document.getElementById("hero-text").innerHTML = text.substring(0, i) + '<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again to delete the next character
        setTimeout(function() {
          deleteText(text, i - 1, fnCallback);
        }, 100);
      }
      // text deleted, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 500);
      }
    }
  
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
    // function StartTextAnimation(i) {
    //   if (i < dataText.length) {
    //     // first delete the current text, then type the next text
    //     deleteText(dataText[i > 0 ? i - 1 : i], dataText[i > 0 ? i - 1 : i].length, function() {
    //       typeWriter(dataText[i], 0, function() {
    //         // after callback (and whole text has been animated), start next text
    //         StartTextAnimation(i + 1);
    //       });
    //     });
    //   } else {
    //     // remove the span element after all text animations are done
    //     setTimeout(function() {
    //       var span = document.querySelector("h1 span");
    //       if (span) {
    //         span.remove();
    //       }
    //     }, 700);
    //   }
    // }

    function StartTextAnimation(i) {
        if (i < dataText.length) {
          deleteText(dataText[i > 0 ? i - 1 : i], dataText[i > 0 ? i - 1 : i].length, function() {
            typeWriter(dataText[i], 0, function() {
              StartTextAnimation(i + 1);
            });
          });
        } else {
          StartTextAnimation(0); // Restart the animation from the beginning
        }
      }
      
    // start the text animation
    StartTextAnimation(0);

    var imageArray = [
      'url("assets/img/pinto-art/IMG_7832.jpeg")',
      'url("assets/img/pitogo/IMG_0655.jpeg")',
      'url("assets/img/g12/4.JPEG")',
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
  });