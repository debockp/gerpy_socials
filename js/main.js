const BOOKING_EMAIL = 'gerpystreetbandgerpinnes@gmail.com';

// Ouverture / fermeture du formulaire de demande de prestation
const toggle = document.getElementById('toggle');
const panel = document.getElementById('booking');

toggle.addEventListener('click', () => {
  panel.hidden = !panel.hidden;
  toggle.setAttribute('aria-expanded', String(!panel.hidden));
  toggle.innerHTML = panel.hidden
    ? '▦ &nbsp; Demander une prestation &nbsp;⌄'
    : '▦ &nbsp; Refermer le formulaire &nbsp;⌃';
});

// Envoi : ouvre le client mail avec un e-mail prérempli
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const fields = [
    ['Nom', 'name'],
    ['E-mail', 'email'],
    ['Téléphone', 'phone'],
    ['Date', 'date'],
    ['Lieu', 'place'],
    ['Événement', 'kind'],
    ['Informations', 'details'],
  ];
  const lines = fields.map(([label, key]) => label + ' : ' + (data.get(key) || ''));

  location.href = 'mailto:' + BOOKING_EMAIL
    + '?subject=' + encodeURIComponent('Demande de prestation — Gerpy Street Band')
    + '&body=' + encodeURIComponent(lines.join('\n'));
});
