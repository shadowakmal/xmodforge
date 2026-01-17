
document.querySelectorAll(".download-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();

    if (btn.classList.contains("loading")) return;

    const link = btn.getAttribute("href");

    btn.classList.add("loading");

    setTimeout(() => {
      btn.classList.remove("loading");
      window.location.href = link;
    }, 2000);
  });
});

const buttons = document.querySelectorAll(".download-btn");
const overlay = document.getElementById("overlay");

buttons.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();

    const url = btn.getAttribute("href");

    overlay.style.display = "flex";

    setTimeout(() => {
      overlay.style.display = "none";
      window.location.href = url;
    }, 2000);
  });
});
