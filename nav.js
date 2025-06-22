  <script>
    // 1) Sidebar laden
    document.addEventListener('DOMContentLoaded', () => {
      fetch('nav.html')
        .then(resp => resp.text())
        .then(html => {
          document.getElementById('sidebar').innerHTML = html;
        });
    });

    // 2) Menü umschalten
    function toggleMenu() {
      document.getElementById('sidebar').classList.toggle('show');
    }

    // 3) Tabs wechseln
    function showTab(e, id) {
      document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      document.querySelectorAll('.reiter').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const ind = document.querySelector('.indicator'),
            br  = e.target.getBoundingClientRect(),
            cr  = e.target.parentElement.getBoundingClientRect();
      ind.style.left  = (br.left - cr.left) + 'px';
      ind.style.width = br.width + 'px';
    }

    // 4) Initialisierung des Indikators
    window.addEventListener('load', () => {
      document.querySelector('.reiter.active').click();
    });
  </script>
