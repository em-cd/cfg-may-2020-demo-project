document.addEventListener('DOMContentLoaded', function() {

  var button = document.getElementById("go-to-top");
  window.addEventListener('scroll', function() {
    if (window.scrollY > 56) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });

  button.addEventListener('click', function() {
    window.scrollTo(0, 0);
  });
});