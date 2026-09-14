const resumeDialog = document.getElementById('resume-preview');
const resumeFrame = resumeDialog.querySelector('.resume-document img');
let resumeOpener;

document.querySelectorAll('a[href="Andre_Tsoi_Resume.pdf"]:not([download])').forEach(link => {
  link.removeAttribute('target');
  link.setAttribute('aria-haspopup', 'dialog');
  link.setAttribute('aria-controls', 'resume-preview');
  link.addEventListener('click', event => {
    event.preventDefault();
    resumeOpener = link;
    if (!resumeFrame.getAttribute('src')) resumeFrame.src = resumeFrame.dataset.src;
    resumeDialog.showModal();
    document.body.classList.add('resume-preview-open');
  });
});

resumeDialog.querySelector('.resume-close').addEventListener('click', () => resumeDialog.close());
resumeDialog.addEventListener('click', event => {
  const bounds = resumeDialog.getBoundingClientRect();
  if (event.target === resumeDialog &&
      (event.clientX < bounds.left || event.clientX > bounds.right ||
       event.clientY < bounds.top || event.clientY > bounds.bottom)) {
    resumeDialog.close();
  }
});
resumeDialog.addEventListener('close', () => {
  document.body.classList.remove('resume-preview-open');
  resumeOpener?.focus();
});

