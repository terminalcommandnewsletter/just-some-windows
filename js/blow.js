function blowWindow() {
  const windowEl = document.querySelector(".window");
  setTimeout(() => {
    windowEl.animate(
      [{ top: "100vh", left: "-100vw", transform: "rotate(780deg)" }],
      {
        duration: 2000,
        iterations: 1,
        easing: "ease-in-out",
      }
    );
  }, 1000);
  setTimeout(() => {
    windowEl.parentElement.removeChild(windowEl);
    document.body.insertAdjacentHTML(
      "afterbegin",
      `<div class="fullscreen-message" onclick="location.reload()"><h1>The window was blown away by a heavy gust of wind!</h1><p>Click anywhere to reload.</p></div>`
    );
  }, 2000);
}

if (Math.floor(Math.random() * 11) == 10) {
  blowWindow();
}
