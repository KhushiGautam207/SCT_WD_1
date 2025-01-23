window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const nav = document.querySelector(".fixed-nav");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.style.backgroundColor = "#222"; // Change the background color when scrolled
  } else {
    nav.style.backgroundColor = "#333"; // Default color
  }
}
