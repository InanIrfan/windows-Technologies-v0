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

