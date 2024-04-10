function showTab(tabId) {
    // Hide all tabs
    var tabs = ["home", "about", "contributors"];
    tabs.forEach(function(tab) {
        document.getElementById(tab).style.display = "none";
    });

    // Show the selected tab
    document.getElementById(tabId).style.display = "block";
}

// Show the "Home" tab by default
showTab("home");

// Tab Buttons
document.getElementById("tab1").addEventListener("click", function(event) {
    event.preventDefault();
    showTab("home");
});

document.getElementById("tab2").addEventListener("click", function(event) {
    event.preventDefault();
    showTab("about");
});

document.getElementById("tab3").addEventListener("click", function(event) {
    event.preventDefault();
    showTab("contributors");
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let mybutton = document.getElementById("upButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document with easing
function topFunction() {
  scrollToTop(document.documentElement, 0, 800); // 800 milliseconds for the easing effect
}

// Smooth scroll function with easing
function scrollToTop(element, to, duration) {
  const start = element.scrollTop;
  const change = to - start;
  let currentTime = 0;
  const increment = 20;

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  function animateScroll() {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  animateScroll();
}

// Accessibility Buttons
$("#fontUp").click(function() {
  pSize = parseInt($('.paragraph').css('font-size'));
  pSize = pSize + 6;
$('.paragraph').css('font-size', pSize);
  cSize = parseInt($('.caption').css('font-size'));
  cSize = cSize + 6;
  $('.caption').css('font-size', cSize);
});

$("#fontDown").click(function() {
  pSize = parseInt($('.paragraph').css('font-size'));
  pSize = pSize - 6;
$('.paragraph').css('font-size', pSize);
  cSize = parseInt($('.caption').css('font-size'));
  cSize = cSize - 6;
  $('.caption').css('font-size', cSize);
});

$("#imageUp").click(function() {
  img = parseInt($('img').css('width'));
  img += 10;
  $('img').css('width', img);
});

$("#imageDown").click(function() {
  img = parseInt($('img').css('width'));
  img -= 10;
  $('img').css('width', img);
});