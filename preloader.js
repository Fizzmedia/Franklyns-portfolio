(() => {
  const DURATION = 2500; // total time preloader stays visible (ms)

  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  // sync the progress bar animation to the same duration
  document.documentElement.style.setProperty('--preloader-duration', `${DURATION}ms`);

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('fade-out');
      setTimeout(() => preloader.remove(), 500);
    }, DURATION);
  });
})();