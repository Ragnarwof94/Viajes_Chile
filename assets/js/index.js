window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
      navbar.style.backgroundColor = '#007B9E'; 
    } else {
      navbar.style.backgroundColor = 'transparent';
    }
  };
  