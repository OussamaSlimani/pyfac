// ===================== Set Countdown to Specific Date (09 Nov 2024, 8:30 AM) =====================

function updateTargetDate() {
  // Set the target date and time: November 9, 2024, 08:30 AM
  const targetDate = new Date("2024-11-09T08:30:00");
  return targetDate.getTime();
}

function updateCountdown() {
  const targetDate = updateTargetDate();
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days < 10 ? "0" + days : days;
  document.getElementById("hours").textContent =
    hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").textContent =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").textContent =
    seconds < 10 ? "0" + seconds : seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ===================== Set Countdown to Specific Date (09 Nov 2024, 8:30 AM) =====================
