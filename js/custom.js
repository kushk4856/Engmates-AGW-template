const closeMenuBtn = document.querySelector(".offcanvas-close-btn");
const openMenuBtn = document.querySelector(".open_menu_btn");
const closeBtn = document.querySelector(".offcanvas-close-btn");
const offCanvas = document.querySelector(".offcanvas__area");
const bodyOverlay = document.querySelector(".body-overlay");
const hasDropdown = document.querySelectorAll(".has-dropdown");
const navbar = document.getElementById("header-sticky");
const mobLinks = document.querySelectorAll(".tp-static");

// Wait for the DOM to load
window.addEventListener("load", () => {
  // Select the video element
  const video = document.getElementById("video");

  // Remove the 'muted' attribute
  if (video.hasAttribute("muted")) {
    video.removeAttribute("muted");
  }

  // Try playing the video (in case autoplay is restricted)
  video.play().catch((error) => {
    console.log("Autoplay with sound failed:", error);
  });
});

/* 
==========================================================
? => Countdown Functionality 
========================================================== 

 */

function getNextMondayMidnight() {
  const now = new Date();
  const dayOfWeek = now.getDay(); // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const daysUntilNextMonday = (8 - dayOfWeek) % 7 || 7; // Calculate days until next Monday
  const nextMondayMidnight = new Date(now);

  // Set the time to next Monday at 00:00 AM
  nextMondayMidnight.setDate(now.getDate() + daysUntilNextMonday);
  nextMondayMidnight.setHours(0, 0, 0, 0);

  return nextMondayMidnight;
}

function padZero(value) {
  return value < 10 ? `0${value}` : value;
}

function updateCountdown() {
  const now = new Date();
  const nextMonday = getNextMondayMidnight();
  const timeDiff = nextMonday - now;

  // Calculate time left in days, hours, minutes, and seconds
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Update the HTML with padded zeros
  document.querySelector(".days").textContent = padZero(days);
  document.querySelector(".hours").textContent = padZero(hours);
  document.querySelector(".minutes").textContent = padZero(minutes);
  document.querySelector(".seconds").textContent = padZero(seconds);

  // If the time is up, reset the countdown
  if (timeDiff <= 0) {
    setTimeout(() => {
      updateCountdown(); // Start again
    }, 1000);
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

/* 
========================
for Toggle mobile navbar 
=============================
 */
closeMenuBtn.addEventListener("click", () => {
  offCanvas.classList.toggle("offcanvas-opened");
  bodyOverlay.classList.toggle("opened");
});
openMenuBtn.addEventListener("click", () => {
  offCanvas.classList.toggle("offcanvas-opened");
  bodyOverlay.classList.toggle("opened");
});

mobLinks.forEach((link) => {
  link.addEventListener("click", () => {
    offCanvas.classList.remove("offcanvas-opened");
    bodyOverlay.classList.remove("opened");
  });
});
/* 
========================
for expanded dropdown 
=============================
 */
hasDropdown.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("expanded");
  });
});

/* 
========================
for Sticky header
=============================
 */
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

/* 
==========================================================
? => Modal Functionality 
========================================================== 

 */

//open modal
function openModal(modalId) {
  // document.body.style.overflow = "hidden";
  const backdrop = document.getElementById(`${modalId}-backdrop`);
  const container = document.getElementById(`${modalId}-container`);
  const modalWrapper = container.querySelector(".modal-wrapper");

  // Remove hiding class if present
  backdrop.classList.remove("hiding");
  container.classList.remove("hiding");

  // Show modal
  backdrop.classList.add("show");
  container.classList.add("show");

  // Add click event listener to the modal wrapper
  modalWrapper.addEventListener("click", (event) => {
    // If clicked element is the modal wrapper (the outer area)
    if (event.target === modalWrapper) {
      closeModal(modalId);
    }
  });
}

//close modal
function closeModal(modalId) {
  const backdrop = document.getElementById(`${modalId}-backdrop`);
  const container = document.getElementById(`${modalId}-container`);

  // Add hiding class for close animation
  backdrop.classList.add("hiding");
  container.classList.add("hiding");

  // Remove show class after animation
  setTimeout(() => {
    backdrop.classList.remove("show");
    container.classList.remove("show");
    backdrop.classList.remove("hiding");
    container.classList.remove("hiding");
    document.body.style.overflow = "unset";
    document.body.style.overflowX = "hidden";
  }, 300);
}
