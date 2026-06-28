(function(){
  const grid = document.getElementById('grid');
  const email = window.RSVP_EMAIL;
  const matches = window.MATCHES || [];

  function mailto(m){
    const subject = `RSVP: I want to watch ${m.a} vs ${m.b} (Match ${m.num})`;
    const body = [
      `Hey Iqram,`,
      ``,
      `Count me in for ${m.a} vs ${m.b} — Round of 32, Match ${m.num}.`,
      ``,
      `📅 ${m.date} · ${m.kickoff}`,
      `🏟  ${m.venue}, ${m.city}`,
      ``,
      `Name:`,
      `Where I want to watch:`,
      ``,
      `— sent from your World Cup R32 page`
    ].join('\n');
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function card(m){
    const el = document.createElement('article');
    el.className = 'match';
    el.innerHTML = `
      <div class="swatch"></div>
      <div class="num">${m.num}</div>
      <div class="tag">
        <span>Match ${String(m.num).padStart(2,'0')} · ${m.date}</span>
        <span class="badge">R32</span>
      </div>
      <div class="fixture">
        <div class="team">
          <div class="flag" aria-hidden="true">${m.flagA}</div>
          <div class="name">${m.a}</div>
        </div>
        <div class="vs">vs</div>
        <div class="team">
          <div class="flag" aria-hidden="true">${m.flagB}</div>
          <div class="name">${m.b}</div>
        </div>
      </div>
      <div class="deets">
        <div class="row"><span>Kickoff</span><span>${m.kickoff}</span></div>
        <div class="row"><span>Venue</span><span>${m.venue}</span></div>
        <div class="row"><span>City</span><span>${m.city}</span></div>
      </div>
      <a class="cta" href="${mailto(m)}">Watch with me <span class="arrow">→</span></a>
    `;
    return el;
  }

  const frag = document.createDocumentFragment();
  matches.forEach(m => frag.appendChild(card(m)));
  grid.appendChild(frag);
})();
