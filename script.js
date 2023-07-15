window.addEventListener('scroll', function () {
  if (window.matchMedia('(max-width: 991px)').matches) {
    // Scroll points para pantallas de máximo 991px
    var scrollPoints = [
      { scroll: 0, bgColor: '#B8B8FF', textColor: '#3434B0' },
      { scroll: 600, bgColor: '#1B3644', textColor: '#FFA6D9' },
      { scroll: 2000, bgColor: '#7D342A', textColor: '#E7E8D1' },
      { scroll: 4000, bgColor: '#DCC5EB', textColor: '#64131A' },
      { scroll: 4400, bgColor: '#B8B8FF', textColor: '#3434B0' }
    ];

    // Resto del código para pantallas de máximo 991px
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
    // Scroll points para pantallas de mínimo 992px
    var scrollPoints = [
      { scroll: 0, bgColor: '#B8B8FF', textColor: '#3434B0' },
      { scroll: 600, bgColor: '#1B3644', textColor: '#FFA6D9' },
      { scroll: 2000, bgColor: '#7D342A', textColor: '#E7E8D1' },
      { scroll: 3800, bgColor: '#DCC5EB', textColor: '#64131A' },
      { scroll: 4400, bgColor: '#B8B8FF', textColor: '#3434B0' }
    ];

    // Resto del código para pantallas de mínimo 992px
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
  
  