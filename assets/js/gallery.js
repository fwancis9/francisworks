function showOverlay(imageSrc) {
  const overlay = document.getElementById('overlay');
  const overlayImage = document.getElementById('overlayImage');
  overlayImage.src = imageSrc;
  overlay.style.display = 'flex';
}

function hideOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function(event) {
    // array with texts to type in typewriter
    var dataText = ["Gallery"]; 
    
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
      'url("assets/img/pinto-art/IMG_7961.jpeg")',
      'url("assets/img/pitogo/IMG_0432.jpeg")',
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

    const links = document.querySelectorAll('.image-link');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const img = link.querySelector('img');
            const imageSrc = img.src;
            showOverlay(imageSrc);
        });
    });

    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            hideOverlay();
        }
    });

    document.getElementById('overlayImage').addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });