// In the terminal to run locally: $ node local.js
// Name: Julia Bays
// Overview: in this file we run express,socket.io, and JQuery to run/test progrm locally on personal machine
var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var path = require('path');

app.use(express.static(__dirname));

app.get('/', (request, response) => {
    console.log("Got an HTTP request");
    response.sendFile(path.join(__dirname, '/index.html'));
});

io.on("connection", (socketclient) => {
    console.log("A new Socket.io client is connected. ID= " + socketclient.id);
});

// Can view locally in port 8080
const port = process.env.PORT || 8080;
var server = http.listen(port, () => {
    console.log(`App listening on port ${server.address().port}`);
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


