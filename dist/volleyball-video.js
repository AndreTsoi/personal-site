const VIDEO_URL = "volleyball.mp4";
const volleyballVideo = document.querySelector('.volleyball-video');

if (volleyballVideo && VIDEO_URL) {
  volleyballVideo.src = VIDEO_URL;
  volleyballVideo.muted = true;
  volleyballVideo.loop = false;
  volleyballVideo.hidden = false;
  volleyballVideo.playbackRate = 0.5;

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let reversing = false;
  const END_BUFFER = 0.08; // seconds before true end to start reversing

  function stepReverse() {
    if (!reversing) return;
    volleyballVideo.currentTime -= (1 / 30) * 0.5;
    if (volleyballVideo.currentTime <= 0.05) {
      reversing = false;
      volleyballVideo.currentTime = 0;
      volleyballVideo.play().catch(() => {});
    } else {
      requestAnimationFrame(stepReverse);
    }
  }

  volleyballVideo.addEventListener('timeupdate', () => {
    if (!reversing && volleyballVideo.duration &&
        volleyballVideo.currentTime >= volleyballVideo.duration - END_BUFFER) {
      volleyballVideo.pause();
      reversing = true;
      requestAnimationFrame(stepReverse);
    }
  });

  volleyballVideo.addEventListener('loadedmetadata', () => {
    volleyballVideo.playbackRate = 0.5;
  });

  if (!reducedMotion.matches) {
    volleyballVideo.autoplay = true;
    volleyballVideo.play().catch(() => {});
  }
}
