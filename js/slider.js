let splide;

function initSplide() {
  if (splide) {
    splide.destroy();
  }

  // Always show 1 slide per page
  const perPage = 1;

  splide = new Splide(".splide", {
    type: 'loop',
    perPage: perPage,
    gap: '20px'
  });

  splide.mount();
}

initSplide();

window.addEventListener('resize', () => {
  initSplide();
});
