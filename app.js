const home = document.getElementById("home");
const licence = document.getElementById("licence");
const refresh = document.getElementById("refresh");

function goLicence() {
  home.classList.remove("active");
  licence.classList.remove("right");
  licence.classList.add("active");
  updateRefresh();
}

function goHome() {
  licence.classList.remove("active");
  licence.classList.add("right");
  home.classList.add("active");
}

function updateRefresh() {
  const now = new Date();
  const date = now.toLocaleDateString("en-AU");
  const time = now.toLocaleTimeString("en-AU", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
  refresh.textContent = `Last refreshed ${date} at ${time}`;
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
