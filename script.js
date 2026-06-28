// script.js — minimal client-side behavior
document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const status = document.getElementById('status');
  status.textContent = 'Sending...';
  // For now just simulate a successful send. Replace with API call as needed.
  setTimeout(()=>{ status.textContent = 'Thanks! We\'ll be in touch.'; this.reset(); }, 800);
});
