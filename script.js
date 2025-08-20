// Set dynamic year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Optional subscription handler (not used on this page but kept for extensibility)
const sub = document.getElementById('subscribe');
if (sub) {
  sub.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(sub);
    fetch(sub.action, {
      method: 'POST',
      body: fd,
      headers: { 'Accept': 'application/json' },
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(r)))
      .then(() => {
        sub.reset();
        alert('Thanks! Check your inbox for the templates.');
      })
      .catch(() => {
        window.location.href = sub.action;
      });
  });
}