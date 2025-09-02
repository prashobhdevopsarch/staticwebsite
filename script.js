// Tiny helper JS: mobile menu, demo functions
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');
  if (toggle && nav){
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('show');
    });
  }
})();

// Console test util
window.testPing = async function(){
  const out = document.getElementById('ping-output');
  out.textContent = 'Running test...';
  const t0 = performance.now();
  await new Promise(r => setTimeout(r, 250)); // simulate latency
  const t1 = performance.now();
  const result = `OK • Simulated RTT: ${(t1 - t0).toFixed(1)} ms`;
  console.log(result);
  out.textContent = result;
};

// Fake submit for contact form
window.fakeSubmit = function(form){
  const data = Object.fromEntries(new FormData(form).entries());
  const status = document.getElementById('form-status');
  status.textContent = 'Submitting…';
  setTimeout(() => {
    status.textContent = `Thanks, ${data.name}! This is a demo — no data was sent.`;
    form.reset();
  }, 600);
};
