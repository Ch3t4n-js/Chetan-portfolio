/**
 * CHETAN SHARMA - MECHANICAL B.TECH PORTFOLIO
 * Clean, lightweight, interactive JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in Footer
  const yearSpans = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearSpans.forEach(span => {
    span.textContent = currentYear;
  });

  // 2. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 3. Animate Skill Meters on skills.html
  const skillMeters = document.querySelectorAll('.meter-fill[data-level]');
  if (skillMeters.length > 0) {
    // Delay slightly for smooth entrance animation
    setTimeout(() => {
      skillMeters.forEach(meter => {
        const level = meter.getAttribute('data-level') || '0%';
        meter.style.width = level;
      });
    }, 200);
  }

  // 4. Download Resume Prompt Modal System
  const resumeDownloadButtons = document.querySelectorAll('.trigger-resume-modal');
  const resumeModal = document.getElementById('resume-prompt-modal');
  const modalCloseBtn = document.getElementById('modal-cancel-btn');
  const modalConfirmDownloadBtn = document.getElementById('modal-confirm-download');

  function openResumeModal() {
    if (resumeModal) {
      resumeModal.classList.add('active');
      document.body.style.overflow = 'hidden'; // prevent background scrolling
    }
  }

  function closeResumeModal() {
    if (resumeModal) {
      resumeModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (resumeDownloadButtons.length > 0) {
    resumeDownloadButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openResumeModal();
      });
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeResumeModal);
  }

  if (resumeModal) {
    // Close on backdrop click
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        closeResumeModal();
      }
    });
  }

  // Confirm download action
  if (modalConfirmDownloadBtn) {
    modalConfirmDownloadBtn.addEventListener('click', () => {
      // Trigger actual file download
      const downloadLink = document.createElement('a');
      downloadLink.href = 'assets/resume/Chetan_Resume_Mechanical.pdf';
      downloadLink.download = 'Chetan_Resume_Mechanical.pdf';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      // Close modal and show toast confirmation
      closeResumeModal();
      showToast('Resume download started successfully!');
    });
  }

  // 5. Toast Notification Utility
  const toastElement = document.getElementById('toast-notice');
  let toastTimeout;

  function showToast(message) {
    if (!toastElement) return;
    toastElement.textContent = message;
    toastElement.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastElement.classList.remove('show');
    }, 3200);
  }

  // 6. Copy to Clipboard Feature for Contact Cards
  const copyButtons = document.querySelectorAll('[data-copy-target]');
  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-copy-target');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const textToCopy = targetElement.innerText.trim();
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard!`);
        }).catch(() => {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          showToast(`Copied to clipboard!`);
        });
      }
    });
  });

  // 7. Interactive Contact Form Handler (contact.html)
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // Show temporary sending status
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending message...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();

        formFeedback.className = 'form-feedback success';
        formFeedback.textContent = 'Thank you! Your message has been sent. Chetan will respond shortly.';
        formFeedback.style.display = 'block';

        showToast('Message sent successfully!');

        setTimeout(() => {
          formFeedback.style.display = 'none';
        }, 6000);
      }, 700);
    });
  }
});
