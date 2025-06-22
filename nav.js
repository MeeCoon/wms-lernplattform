// /wms-lernplattform/nav.js

// 1) Beim Laden nav.html einfügen
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://meecoon.github.io/wms-lernplattform/nav.html')
    .then(r => r.text())
    .then(html => document.getElementById('sidebar').innerHTML = html);
});

// 2) Sidebar ein-/ausblenden
function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('show');
}

// 3) Tab-Wechsel
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

// 4) Initial-Click, damit die Linie unter dem aktiven Reiter sitzt
window.addEventListener('load', () => {
  const active = document.querySelector('.reiter.active');
  if (active) active.click();
});
