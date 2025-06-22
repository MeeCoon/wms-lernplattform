// nav.js
document.addEventListener('DOMContentLoaded', () => {
  // lade das Menü in den Sidebar-Container
  fetch('nav.html')
    .then(r => r.text())
    .then(html => document.getElementById('sidebar').innerHTML = html);
});

function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('show');
}

function showTab(e, id) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.reiter').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  const br = e.target.getBoundingClientRect(),
        cr = e.target.parentElement.getBoundingClientRect(),
        ind = document.querySelector('.indicator');
  ind.style.left  = (br.left - cr.left) + 'px';
  ind.style.width = br.width + 'px';
}

window.addEventListener('load', () => {
  document.querySelector('.reiter.active').click();
});
