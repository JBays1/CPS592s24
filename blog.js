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
    // Increase font size by 2px for paragraphs
    pSize = parseInt($('p').css('font-size'));
    pSize += 2;
    $('p').css('font-size', pSize + 'px');
    
    // Increase font size by 2px for headings (h1, h2, h3, h4)
    $('h1, h2, h3, h4').each(function() {
        var hSize = parseInt($(this).css('font-size'));
        hSize += 2;
        $(this).css('font-size', hSize + 'px');
    });
    
    // Increase font size by 2px for list items (li)
    liSize = parseInt($('li').css('font-size'));
    liSize += 2;
    $('li').css('font-size', liSize + 'px');
    
    // Increase font size by 2px for strong elements
    strongSize = parseInt($('strong').css('font-size'));
    strongSize += 2;
    $('strong').css('font-size', strongSize + 'px');
});

$("#fontDown").click(function() {
    // Decrease font size by 2px for paragraphs
    pSize = parseInt($('p').css('font-size'));
    pSize -= 2;
    $('p').css('font-size', pSize + 'px');
    
    // Decrease font size by 2px for headings (h1, h2, h3, h4)
    $('h1, h2, h3, h4').each(function() {
        var hSize = parseInt($(this).css('font-size'));
        hSize -= 2;
        $(this).css('font-size', hSize + 'px');
    });
    
    // Decrease font size by 2px for list items (li)
    liSize = parseInt($('li').css('font-size'));
    liSize -= 2;
    $('li').css('font-size', liSize + 'px');
    
    // Decrease font size by 2px for strong elements
    strongSize = parseInt($('strong').css('font-size'));
    strongSize -= 2;
    $('strong').css('font-size', strongSize + 'px');
});


$("#imageUp").click(function() {
  img = parseInt($('img').css('width'));
  img += 100;
  $('img').css('width', img);
});

$("#imageDown").click(function() {
  img = parseInt($('img').css('width'));
  img -= 10;
  $('img').css('width', img);
});

// Random word generator

var btn = document.getElementById("generateButton");
var out = document.getElementById("output");

btn.addEventListener("click", getWord);

function getWord() {
    // var theWord = [
    //     'dog', 'potato', 'cow', 'parrot', 'stone', 'watch', 'house', 'bioluminescence',
    //     'brake', 'potato/salad', 'trip', 'hippopotamus', 'mask', 'chicken',
    //     'Pneumonoultramicroscopicsilicovolcanoconiosis'
    // ];

    // var wordNum = Math.floor(Math.random() * theWord.length);

    // var output = document.getElementById("output");
    // output.innerHTML = "<h2>" + theWord[wordNum] + "</h2>";

    
    var list1 = document.getElementById("AccConcern").value;
    var result = list1.substring(0,5);

    var AccConcern = document.getElementById('AccConcern').value.split(',').map(item => item.trim());
    var UserGroup = document.getElementById('UserGroup').value.split(',').map(item => item.trim());
    var Activity = document.getElementById('Activity').value.split(',').map(item => item.trim());
    var Device = document.getElementById('Device').value.split(',').map(item => item.trim());

    var rand1 = Math.floor(Math.random() * AccConcern.length);
    var rand2 = Math.floor(Math.random() * UserGroup.length);
    var rand3 = Math.floor(Math.random() * Activity.length);
    var rand4 = Math.floor(Math.random() * Device.length);

    var output = document.getElementById("output");
    output.innerHTML += "<p>" + "Create a solution for " + AccConcern[rand1] + " " + UserGroup[rand2] + " enjoying " + Activity[rand3] + " using a " + Device[rand4] + "</p>" + "<br>";
}
