// Cover overrides are visual only; favorites do not link to other websites.
document.querySelectorAll('.cover-card img').forEach(image => {
  const key = image.getAttribute('src').split('/').pop().replace(/\.[^.]+$/, '');
  const config = (window.PORTFOLIO_MEDIA || {})[key];
  if (!config?.cover?.trim()) return;
  const original = image.getAttribute('src');
  image.addEventListener('error', () => { image.src = original; }, { once: true });
  image.src = config.cover.trim();
});
