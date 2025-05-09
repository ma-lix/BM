
const video = document.getElementById("hero-video");
const toggleBtn = document.getElementById("toggle-video");
const formBtn = document.getElementById("open-form");
const modal = document.getElementById("login-modal");
const form = document.getElementById("login-form");

toggleBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    toggleBtn.textContent = "Pause Video";
  } else {
    video.pause();
    toggleBtn.textContent = "Play Video";
  }
});

formBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

form.addEventListener("submit", function (e) {
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const date = document.getElementById("date").value;
  const gender = document.getElementById("gender").value;

  if (!fullname || !email || !password || !date || !gender) {
    e.preventDefault();
    alert("Please fill out all fields.");
  }
});
