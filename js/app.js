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
const body = document.querySelector('body');
const themeDiv = document.getElementById('theme');

// Apply saved theme or default to light theme on page load
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  applyDarkMode();
} else {
  applyLightMode();
}

// Event listener to toggle theme
toggle.addEventListener('click', function () {
  if (body.classList.contains('dark-mode')) {
    applyLightMode();
  } else {
    applyDarkMode();
  }
});

// Function to apply dark mode
function applyDarkMode() {
  body.classList.add('dark-mode');
  body.classList.remove('light-mode');
  toggle.classList.remove('bi-moon-stars-fill'); // Remove moon icon
  toggle.classList.add('bi-brightness-high-fill'); // Add sun icon
  toggle.style.color = 'black'; // Sun icon color in dark mode
  body.style.background = 'black';
  body.style.color = 'white';
  themeDiv.style.backgroundColor = 'white'; // White div background for dark mode
  localStorage.setItem('theme', 'dark'); // Save theme preference
}

// Function to apply light mode
function applyLightMode() {
  body.classList.add('light-mode');
  body.classList.remove('dark-mode');
  toggle.classList.remove('bi-brightness-high-fill'); // Remove sun icon
  toggle.classList.add('bi-moon-stars-fill'); // Add moon icon
  toggle.style.color = 'white'; // Moon icon color in light mode
  body.style.background = 'white';
  body.style.color = 'black';
  themeDiv.style.backgroundColor = 'black'; // Black div background for light mode
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
document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector(".main-img");

  const handleAnimation = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        image.classList.add("act");
      } else {
        image.classList.remove("act");
      }
    });
  };

  const observer = new IntersectionObserver(handleAnimation, {
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  // Observe the target element
  observer.observe(image);
});

// image slider code
// Select all image cards and navigation buttons
const imageCards = document.querySelectorAll('.feedback-img-card');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const swipePointsContainer = document.querySelector('.swipe-points');

let currentIndex = 0;
const totalImages = imageCards.length;
const feedbackImg = document.querySelector('.container');

// Function to show the current image based on the index
function showImage(index) {
  // Scroll to the corresponding thumbnail
  const offset = index * (imageCards[0].offsetWidth + 10); // 10 is the margin between the images
  feedbackImg.scrollTo({left: offset, behavior: 'smooth'});

  // Update swipe points
  updateSwipePoints(index);
}

// Function to update swipe points
function updateSwipePoints(index) {
  // Clear existing points
  swipePointsContainer.innerHTML = '';

  // Create new points
  for (let i = 0; i < totalImages; i++) {
    const point = document.createElement('div');
    point.classList.add('swipe-point');
    if (i === index) {
      point.classList.add('active');
    }
    swipePointsContainer.appendChild(point);
  }
}

// Function to move to the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image
  showImage(currentIndex);
}

// Function to move to the previous image
function previousImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Loop back to the last image
  showImage(currentIndex);
}

// Event listeners for arrow buttons
leftArrow.addEventListener('click', previousImage);
rightArrow.addEventListener('click', nextImage);

// Automatic scrolling function
function autoScroll() {
  nextImage();
}

// Start automatic scrolling every 3 seconds (adjust as needed)
let autoScrollInterval = setInterval(autoScroll, 3000);

// Show the first image on page load
showImage(currentIndex);

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
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
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

  // Restore scroll position after load, accounting for any fixed headers
  window.addEventListener("load", function () {
    // Add a small delay to allow the layout to fully settle
    setTimeout(function () {
      const scrollPosition = sessionStorage.getItem("scrollPosition");
      const headerHeight = document.querySelector("header") ? document.querySelector("header").offsetHeight : 0;

      if (scrollPosition) {
        // Apply scroll position and subtract the header height
        window.scrollTo(0, parseInt(scrollPosition) - headerHeight);
      } else {
        // If no scroll position is saved, scroll to the top
        window.scrollTo(0, 0);
      }
    }, 100); // Small delay to allow layout to finish
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
