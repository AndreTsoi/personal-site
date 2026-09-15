// When ready, upload volleyball.mp4 into dist/ and set VIDEO_URL to "volleyball.mp4".
const VIDEO_URL = "volleyball.mp4";
const volleyballVideo = document.querySelector('.volleyball-video');
if (volleyballVideo && VIDEO_URL) {
  volleyballVideo.src = VIDEO_URL;
  volleyballVideo.muted = true;
  volleyballVideo.hidden = false;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  volleyballVideo.autoplay = !reducedMotion.matches;
  if (!reducedMotion.matches) volleyballVideo.play().catch(() => {});
}

.volleyball-video{
  filter: grayscale(1) contrast(1.35) brightness(1.05);
}
