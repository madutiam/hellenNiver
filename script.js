const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const openSeal = document.getElementById("openSeal");
const audio = document.getElementById("birthdayAudio");

let started = false;

function showScreen(screenToShow) {
  screen1.classList.remove("active");
  screen2.classList.remove("active");
  screenToShow.classList.add("active");
}

async function startExperience() {
  if (started) return;
  started = true;

  showScreen(screen2);

  try {
    audio.currentTime = 0;
    await audio.play();
  } catch (error) {
    console.log("Não foi possível tocar o áudio automaticamente:", error);
  }
}

openSeal.addEventListener("click", startExperience);
