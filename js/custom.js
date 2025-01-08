const closeMenuBtn = document.querySelector(".offcanvas-close-btn");
const openMenuBtn = document.querySelector(".open_menu_btn");
const closeBtn = document.querySelector(".offcanvas-close-btn");
const offCanvas = document.querySelector(".offcanvas__area");
const bodyOverlay = document.querySelector(".body-overlay");

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

/*
=================================================
? => Popup Calender  js :----
=================================================
*/

// ============popup calender js==

const popupOpenBtns = document.querySelectorAll(".openModal");
const calendlyPopup = document.querySelector(".popUpCalendly");
const calendlyCloseBtn = document.querySelector(".close_calendly");
const selectedCardInput = document.querySelector(".selected_card_Input");

popupOpenBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    calendlyPopup.style.display = "flex";
    // document.body.style.overflow = 'hidden';
    const parentData = btn.closest(".course-card")?.dataset.card;

    // console.log(parentData);
    if (parentData) {
      selectedCardInput.value = parentData;
    }
    console.log(selectedCardInput.value);
  });
});

calendlyCloseBtn.addEventListener("click", () => {
  calendlyPopup.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const calendarDays = document.getElementById("popup_cal_calendar-days");
  const currentMonthDisplay = document.getElementById(
    "popup_cal_current-month"
  );
  const prevMonthBtn = document.getElementById("popup_cal_prev-month");
  const nextMonthBtn = document.getElementById("popup_cal_next-month");
  const selectedDateDisplay = document.querySelectorAll(
    ".popup_cal_selected-date"
  );
  const timeSlotContainer = document.querySelector(
    ".popup_cal_time-slots-section"
  );
  const timeDisplay = document.querySelector(".time_display");
  const calenderArea = document.querySelector(".popup_cal_right-panel");
  const nextBtns = document.querySelectorAll(".popup_cal_next-button");
  const modalForm = document.querySelector(".popupForm");
  const previousBtn = document.querySelector(".previous_btn_popup");
  const addGuestBtn = document.querySelector(".add_guest");
  const addGuestInput = document.getElementById("add_guestInput");
  const dateInput = document.querySelector(".selected_date_Input");
  const timeInput = document.querySelector(".selected_time_Input");
  const noTimeSlotDiv = document.querySelector(".no_slots_div");

  const isTodaySunday = new Date().getDay() === 0;

  // console.log(new Date().getDay);

  if (isTodaySunday) {
    // If it's sunday then show no slot's available today div
    noTimeSlotDiv.style.display = "flex";
    timeSlotContainer.appendChild(noTimeSlotDiv);
  } else {
    noTimeSlotDiv.style.display = "none";
  }

  // ====== Dynamic Time Slots Generation ======
  function generateDynamicTimeSlots(selectedDate) {
    const now = new Date();
    const selected = new Date(selectedDate);
    const endTime = new Date(selected);
    endTime.setHours(18, 0, 0, 0); // End at 12:00 PM
    let currentTime = new Date(now);

    // Clear existing time slots
    timeSlotContainer.innerHTML = "";

    dateInput.value = selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

    // console.log(dateInput.value);

    // Check if the selected date is today
    const isToday =
      selected.getDate() === now.getDate() &&
      selected.getMonth() === now.getMonth() &&
      selected.getFullYear() === now.getFullYear();
    // Check if today is Sunday
    const isTodaySunday = now.getDay() === 0;

    console.log(now.getDay);

    if (isToday && (currentTime >= endTime || isTodaySunday)) {
      // If today and the current time is beyond the end time
      noTimeSlotDiv.style.display = "flex";
      timeSlotContainer.appendChild(noTimeSlotDiv);
      return; // Exit early as there are no slots to generate
    } else {
      noTimeSlotDiv.style.display = "none";
    }

    let startTime;

    // Determine the start time based on today's or a future date
    if (isToday) {
      // Get the current time
      const now = new Date();

      // Set start time to 11:00 AM
      startTime = new Date();
      startTime.setHours(8, 0, 0, 0);

      // If the current time is past 11:00 AM, round up to the next 30-minute interval
      if (now > startTime) {
        startTime = new Date(now);
        startTime.setMinutes(Math.ceil(startTime.getMinutes() / 30) * 30, 0, 0);
      }

      // Ensure start time does not go beyond 7:00 PM
      const endTime = new Date();
      endTime.setHours(18, 0, 0, 0);
      if (startTime > endTime) {
        startTime = endTime;
      }
    } else {
      // For future dates, start at 11:00 AM
      startTime = new Date(selected);
      startTime.setHours(8, 0, 0, 0);
    }

    // Generate time slots in 30-minute intervals
    while (startTime <= endTime) {
      let hours = startTime.getHours() % 12 || 12; // Convert to 12-hour format
      let minutes = startTime.getMinutes().toString().padStart(2, "0");
      const ampm = startTime.getHours() >= 12 ? "PM" : "AM";

      // Add a leading zero if the hour is a single digit
      hours = hours < 10 ? `0${hours}` : hours;

      const timeString = `${hours}:${minutes}${ampm}`;

      // Create time slot elements
      const buttonGroup = document.createElement("div");
      buttonGroup.classList.add("popup_cal_button-group");

      const timeSlotSelected = document.createElement("div");
      timeSlotSelected.classList.add("popup_cal_time-slot-selected");
      timeSlotSelected.classList.add("right_form_time_slot");
      timeSlotSelected.textContent = timeString;

      const nextButton = document.createElement("button");
      nextButton.classList.add("popup_cal_next-button");
      nextButton.textContent = "Next";

      buttonGroup.appendChild(timeSlotSelected);
      buttonGroup.appendChild(nextButton);
      timeSlotContainer.appendChild(buttonGroup);

      // Increment the time by 30 minutes
      startTime.setMinutes(startTime.getMinutes() + 30);
    }

    // Reattach event listeners to the new time slots
    const timeSelectedBtns = document.querySelectorAll(
      ".popup_cal_time-slot-selected"
    );
    const nextBtns = document.querySelectorAll(".popup_cal_next-button");

    timeSelectedBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        timeSelectedBtns.forEach((button) => button.classList.remove("active"));
        this.classList.add("active");
        timeDisplay.textContent = `${btn.textContent}`;
        timeInput.value = `${btn.textContent}`;
      });
    });

    nextBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        calenderArea.style.display = "none";
        modalForm.classList.add("active");
        previousBtn.style.display = "flex";
      });
    });
  }

  // ====== Navigation Buttons ======
  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      calenderArea.style.display = "none";
      modalForm.classList.add("active");
      previousBtn.style.display = "flex";

      // selectedDateDisplay.forEach((el, i) => {
      //   if (i === 0) {
      //     dateInput.value = `${el.textContent}`;

      //   }
      // });
    });
  });

  previousBtn.addEventListener("click", () => {
    calenderArea.style.display = "flex";
    modalForm.classList.remove("active");
    previousBtn.style.display = "none";
  });

  // ====== Display Current Date ======
  const currentDate = new Date();
  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  selectedDateDisplay.forEach((el) => {
    el.textContent = currentDate.toLocaleDateString("en-IN", options);
  });

  // ====== Calendar Variables ======
  const today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // ====== Render Calendar ======
  function renderCalendar() {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    currentMonthDisplay.textContent = `${months[currentMonth]} ${currentYear}`;
    calendarDays.innerHTML = "";

    // Disable previous month button if it's the current month
    const currentMonthCheck = new Date();
    if (
      currentMonth === currentMonthCheck.getMonth() &&
      currentYear === currentMonthCheck.getFullYear()
    ) {
      prevMonthBtn.disabled = true;
      prevMonthBtn.classList.add("popup_cal_disabled");
    } else {
      prevMonthBtn.disabled = false;
      prevMonthBtn.classList.remove("popup_cal_disabled");
    }

    // Add empty slots for days before the first of the month
    for (let i = 0; i < (firstDayOfMonth + 6) % 7; i++) {
      const emptyDay = document.createElement("div");
      emptyDay.classList.add("popup_cal_day", "popup_cal_disabled");
      calendarDays.appendChild(emptyDay);
    }

    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement("div");
      dayElement.classList.add("popup_cal_day");
      dayElement.textContent = day;

      const currentDate = new Date(currentYear, currentMonth, day);
      const isBeforeToday = currentDate < new Date().setHours(0, 0, 0, 0);
      const isSunday = currentDate.getDay() === 0;

      // Disable past dates and Sundays
      if (isBeforeToday || isSunday) {
        dayElement.classList.add("popup_cal_disabled");
        if (isSunday) {
          dayElement.classList.add("popup_cal_sunday");
        }
      } else {
        dayElement.addEventListener("click", () => {
          document
            .querySelectorAll(".popup_cal_day.popup_cal_selected")
            .forEach((selectedDay) =>
              selectedDay.classList.remove("popup_cal_selected")
            );

          dayElement.classList.add("popup_cal_selected");
          const selectedDate = new Date(currentYear, currentMonth, day);
          dateInput.value = selectedDate.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          });

          console.log(dateInput.value);

          selectedDateDisplay.forEach((display) => {
            display.textContent = selectedDate.toLocaleDateString("en-IN", {
              weekday: "long",
              month: "short",
              day: "numeric",
              year: "numeric",
            });
          });

          // Regenerate time slots for the newly selected date
          generateDynamicTimeSlots(selectedDate);
        });
      }

      // Highlight and select today's date if it's selectable
      if (
        day === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear() &&
        !isSunday
      ) {
        dayElement.classList.add("popup_cal_today");
        dayElement.classList.add("popup_cal_selected"); // Add selected class by default

        // Set the selected date display to today's date
        selectedDateDisplay.forEach((display) => {
          display.textContent = today.toLocaleDateString("en-IN", {
            weekday: "long",
            month: "short",
            day: "numeric",
            year: "numeric",
          });
        });

        // Generate time slots for today
        generateDynamicTimeSlots(today);
      }

      calendarDays.appendChild(dayElement);
    }
  }

  prevMonthBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar();
  });

  nextMonthBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar();
  });

  // Initial render of the calendar
  renderCalendar();
});
