// Apply optional overrides while retaining the built-in artwork as a fallback.
document.querySelectorAll('.cover-card img').forEach((image) => {
  const key = image.getAttribute('src').split('/').pop().replace(/\.[^.]+$/, '');
  const config = (window.PORTFOLIO_MEDIA || {})[key];
  if (!config) return;
  if (config.cover && config.cover.trim()) {
    const original = image.getAttribute('src');
    image.addEventListener('error', () => { image.src = original; }, { once: true });
    image.src = config.cover.trim();
  }
  if (config.link && config.link.trim()) {
    const url = new URL(config.link, window.location.href);
    if (url.protocol === 'https:' || url.protocol === 'http:') {
      image.closest('a').href = url.href;
    }
  }
});
