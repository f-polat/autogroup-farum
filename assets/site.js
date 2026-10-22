// Fælles for alle sider: menu, formularer og bilkort.
(() => {
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('solid', window.scrollY > 60);
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  const burger = document.getElementById('burger'), links = document.getElementById('links');
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open'); burger.setAttribute('aria-expanded', false);
  }));

  // Formularer sendes via Netlify Forms. Hvis siden ikke ligger på Netlify, åbnes kundens mailprogram i stedet.
  document.querySelectorAll('form[data-netlify]').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const ok = form.querySelector('.form-ok'), btn = form.querySelector('[type=submit]');
      const label = btn.textContent, d = new FormData(form);
      btn.disabled = true; btn.textContent = 'Sender…';
      try {
        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(d).toString()
        });
        if (!res.ok) throw new Error(res.status);
        form.reset();
        ok.textContent = 'Forespørgsel sendt. Vi ringer dig op hurtigst muligt.';
      } catch {
        const body = [...d.entries()]
          .filter(([k]) => k !== 'form-name' && k !== 'bot-field')
          .map(([k, v]) => `${k[0].toUpperCase() + k.slice(1)}: ${v}`).join('\n');
        const subject = (form.dataset.subject || 'Forespørgsel') + (d.get('ydelse') ? ' – ' + d.get('ydelse') : '');
        location.href = 'mailto:info@autogroupfarum.dk?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        ok.textContent = 'Din e-mail åbner nu med forespørgslen klar til at sende. Du kan også ringe på 52 90 93 90.';
      }
      ok.style.display = 'block';
      btn.disabled = false; btn.textContent = label;
    });
  });

  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();

// Hjælpere til bilerne i assets/biler-data.js
const fmtKr = n => n.toLocaleString('da-DK') + ' kr.';
const fmtKm = n => n.toLocaleString('da-DK') + ' km';
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const carImage = car => car.billeder && car.billeder.length ? car.billeder[0] : 'assets/biler/ingen-billede.svg';

function carCard(car) {
  const tag = car.solgt ? '<span class="tag sold">Solgt</span>' : car.eksempel ? '<span class="tag">Eksempel</span>' : '';
  return `<li><a class="car" href="bil.html?id=${encodeURIComponent(car.id)}">
    <div class="car-img"><img src="${esc(carImage(car))}" alt="${esc(car.maerke + ' ' + car.model)}" loading="lazy">${tag}</div>
    <div class="car-body">
      <h3>${esc(car.maerke)} ${esc(car.model)}</h3>
      <div class="car-variant">${esc(car.variant || '')}</div>
      <ul class="specs"><li>${car.aar}</li><li>${fmtKm(car.km)}</li><li>${esc(car.braendstof)}</li><li>${esc(car.gear)}</li></ul>
      <div class="car-price">${car.solgt ? 'Solgt' : fmtKr(car.pris)}</div>
    </div>
  </a></li>`;
}
