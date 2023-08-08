window.addEventListener('scroll', function () {
  if (window.matchMedia('(max-width: 991px)').matches) {
    // max 991px
    var scrollPoints = [
      { scroll: 0, bgColor: '#B8B8FF', textColor: '#3434B0' },
      { scroll: 600, bgColor: '#1B3644', textColor: '#FFA6D9' },
      // { scroll: 2600, bgColor: '#7D342A', textColor: '#E7E8D1' },
      { scroll: 2400, bgColor: '#DCC5EB', textColor: '#64131A' },
      { scroll: 3000, bgColor: '#B8B8FF', textColor: '#3434B0' }
    ];

    var body = document.body;
    var navbar = document.querySelector('.navbar');
    var navLinks = document.querySelectorAll('.nav-link');

    var scrollTop = window.scrollY;
    var currentPoint;

    for (var i = 0; i < scrollPoints.length; i++) {
      if (scrollTop >= scrollPoints[i].scroll) {
        currentPoint = scrollPoints[i];
      } else {
        break;
      }
    }

    if (currentPoint) {
      body.style.backgroundColor = currentPoint.bgColor;
      body.style.color = currentPoint.textColor; 
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = currentPoint.textColor;
      }
    } else {
      body.style.backgroundColor = '#B8B8FF';
      body.style.color = '#3434B0';
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = '#3434B0';
      }
    }

    navbar.style.backgroundColor = 'transparent';
  } else {
    // min 992px
    var scrollPoints = [
      { scroll: 0, bgColor: '#B8B8FF', textColor: '#3434B0' },
      { scroll: 600, bgColor: '#1B3644', textColor: '#FFA6D9' },
      // { scroll: 2300, bgColor: '#7D342A', textColor: '#E7E8D1' },
      { scroll: 2200, bgColor: '#DCC5EB', textColor: '#64131A' },
      { scroll: 3000, bgColor: '#B8B8FF', textColor: '#3434B0' }
    ];

    var body = document.body;
    var navbar = document.querySelector('.navbar');
    var navLinks = document.querySelectorAll('.nav-link');

    var scrollTop = window.scrollY;
    var currentPoint;

    for (var i = 0; i < scrollPoints.length; i++) {
      if (scrollTop >= scrollPoints[i].scroll) {
        currentPoint = scrollPoints[i];
      } else {
        break;
      }
    }

    if (currentPoint) {
      body.style.backgroundColor = currentPoint.bgColor;
      body.style.color = currentPoint.textColor;
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = currentPoint.textColor;
      }
    } else {
      body.style.backgroundColor = '#B8B8FF';
      body.style.color = '#3434B0';
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = '#3434B0';
      }
    }

    navbar.style.backgroundColor = 'transparent';
  }
});

  // video
const video = document.querySelector('video');
video.controls = false;

//formulario
document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('.container__index-form');
  var successMessage = document.querySelector('.success-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Realizar la solicitud al servidor utilizando fetch
    fetch('enviar_email.php', {
      method: 'POST',
      body: new FormData(form)
    })
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      // Mostrar el mensaje emergente
      successMessage.style.display = 'block';
    })
    .catch(function(error) {
      console.error('Error al enviar el formulario:', error);
    });
  });
});