(() => {
  const DURATION = 2500; 

  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  
  document.documentElement.style.setProperty('--preloader-duration', `${DURATION}ms`);

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('fade-out');
      setTimeout(() => preloader.remove(), 500);
    }, DURATION);
  });
})();
