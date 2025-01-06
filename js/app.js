// nav bar
let sections = document.querySelectorAll('.text');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  // Get the current scroll position
  let scrollPosition = window.scrollY;

  // Loop through each section to determine which one is in the viewport
  sections.forEach((section) => {
    let sectionTop = section.offsetTop - 150; // Adjust offset for better alignment
    let sectionHeight = section.offsetHeight;
    let sectionId = section.getAttribute('id');

    // Check if the current scroll position is within the section
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Remove the active class from all nav links
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });

      // Add the active class to the nav link corresponding to the current section
      let activeLink = document.querySelector(`header nav a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
};

//Light and Dark Theme.
const toggle = document.getElementById('toggleDark');
const textDivs = document.querySelectorAll('.text');
const header = document.querySelector('header');

// Apply saved theme or default to dark theme on page load
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'dark') {
  applyDarkMode();
} else {
  applyLightMode();
}

// Event listener to toggle theme
toggle.addEventListener('click', function () {
  if (document.body.classList.contains('dark-mode')) {
    applyLightMode();
  } else {
    applyDarkMode();
  }
});

// Function to apply dark mode
// Function to apply dark mode
function applyDarkMode() {
  document.body.classList.add('dark-mode');
  document.body.classList.remove('light-mode');
  header.classList.add('dark-mode');
  header.classList.remove('light-mode');
  toggle.classList.remove('bi-moon-stars-fill'); // Remove moon icon
  toggle.classList.add('bi-brightness-high-fill'); // Add sun icon
  toggle.style.color = 'yellow'; // Sun icon color in dark mode

  // Update each .text div for dark mode
  textDivs.forEach((div) => {
    div.style.background = 'black'; // Set background color to white
    div.style.color = 'white'; // Set text color to black
  });

  localStorage.setItem('theme', 'dark'); // Save theme preference
}

// Function to apply light mode
function applyLightMode() {
  document.body.classList.add('light-mode');
  document.body.classList.remove('dark-mode');
  header.classList.add('light-mode');
  header.classList.remove('dark-mode');
  toggle.classList.remove('bi-brightness-high-fill'); // Remove sun icon
  toggle.classList.add('bi-moon-stars-fill'); // Add moon icon
  toggle.style.color = 'black'; // Moon icon color in light mode

  // Update each .text div for light mode
  textDivs.forEach((div, index) => {
    if (index % 2 === 0) {
      div.style.background = '#adc7e3';
      div.style.color = 'black'; // Restore light mode text color
    } else {
      div.style.background = '#e1eaec';
      div.style.color = '#000000'; // Restore light mode text color
    }
  });

  localStorage.setItem('theme', 'light'); // Save theme preference
}

// names services
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Mobiles Repairs";
  }, 0);
  setTimeout(() => {
    text.textContent = "Cpu Repairs";
  }, 4000);
  setTimeout(() => {
    text.textContent = "CCTV Cameras Installation";
  }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);

//image code here
var TrandingSlider = new Swiper('.tranding-slider', {
  slidesPerView: 4, // Display 3 slides at a time
  spaceBetween: 20, // Space between slides
  loop: true, // Enable looping through slides
  centeredSlides: true, // Center the active slide
  pagination: {
    el: '.swiper-pagination', // Target pagination container
    clickable: true, // Enable clicking to change slides
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      // Add active class to the current slide
      const slides = document.querySelectorAll('.tranding-slide');
      slides.forEach(slide => slide.classList.remove('active'));
      const activeSlide = slides[this.realIndex];
      activeSlide.classList.add('active');
    }
  }
});

// dropdown code here about feedback text frequently asked questions
function toggleDropdown(button) {
  var dropdown = button.nextElementSibling; // Target the specific dropdown content
  var isShown = dropdown.classList.contains("show");

  // Hide all dropdowns
  var dropdowns = document.getElementsByClassName("dropdown-content");
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].classList.remove("show");
  }

  // Show the clicked dropdown if it was not already visible
  if (!isShown) {
    dropdown.classList.add("show");
  }
}

//current year
document.getElementById('currentYear').textContent = new Date().getFullYear();
// slide effect of the pages
// slide effect of the pages
document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".scroll-effect");

  const elementInView = (el, offset = 150) => {
    const rect = el.getBoundingClientRect();
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset - scrollbarWidth &&
      rect.bottom >= 0
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 150)) {
        displayScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation(); // Initial check for items already in view

  // Save scroll position before the page unloads
  window.addEventListener("beforeunload", function () {
    sessionStorage.setItem("scrollPosition", window.scrollY);
  });

  // Restore scroll position after the page is fully loaded and rendered
  window.addEventListener("load", function () {
    // Prevent rendering issues during restoration by hiding overflow temporarily
    document.body.style.overflow = "hidden";

    setTimeout(function () {
      const scrollPosition = sessionStorage.getItem("scrollPosition");
      const headerHeight = document.querySelector("header") ? document.querySelector("header").offsetHeight : 0;

      if (scrollPosition) {
        // Calculate the maximum scrollable height
        const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;

        // Clamp the restored scroll position to the maximum allowed
        const clampedScrollPosition = Math.min(parseInt(scrollPosition) - headerHeight, maxScrollTop);

        window.scrollTo(0, Math.max(0, clampedScrollPosition));
      } else {
        window.scrollTo(0, 0);
      }

      // Restore overflow once scroll position is set
      document.body.style.overflow = "";
    }, 200); // Delay to ensure layout stabilization
  });
});

//image slide effects
// document.addEventListener("DOMContentLoaded", () => {
//   // Select all images with the class 'image'
//   const images = document.querySelectorAll("img.image"); // Select all <img> elements with class 'image'
//
//   // Function to handle the animation when images come into view
//   const handleAnimation = (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("act"); // Add 'act' class to trigger animation
//       } else {
//         entry.target.classList.remove("act"); // Remove 'act' class if not in view
//       }
//     });
//   };
//
//   // Create an Intersection Observer
//   const observer = new IntersectionObserver(handleAnimation, {
//     threshold: 0.1, // Trigger when 10% of the element is visible
//   });
//
//   // Observe each image
//   images.forEach((image) => {
//     observer.observe(image);
//   });
// });
// header scroll bar
document.addEventListener('DOMContentLoaded', () => {
  let lastScrollY = window.scrollY; // Keep track of the last scroll position
  const header = document.querySelector('header'); // Select the header

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      header.classList.add('hidden');
      header.classList.remove('scrolled-up');
    } else {
      // Scrolling up
      header.classList.remove('hidden');
      header.classList.add('scrolled-up');
    }

    if (currentScrollY === 0) {
      // Back at the top
      header.classList.remove('scrolled-up');
    }

    lastScrollY = currentScrollY; // Update the last scroll position
  });
});
// privacy terms
// Display the popup after the page loads
window.onload = function() {
  checkPrivacyStatus();
};

// Function to check and display the popup
function checkPrivacyStatus() {
  const hasAccepted = localStorage.getItem('privacyAccepted') === 'true';

  if (hasAccepted) {
    console.log('User has already accepted the terms.');
    document.getElementById('privacy-popup').style.display = 'none';
  } else {
    console.log('User has not accepted the terms. Displaying the popup.');
    document.getElementById('privacy-popup').style.display = 'block';
  }
}

// Function to handle acceptance
function acceptPrivacy() {
  localStorage.setItem('privacyAccepted', 'true');
  console.log('User accepted the terms.');
  document.getElementById('privacy-popup').style.display = 'none';
}
//mobile screen menu code
function openNav() {
  document.getElementById("myNav").style.height = "100%";
  document.querySelector("header").style.display = "none";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.querySelector("header").style.display = "flex";
}
