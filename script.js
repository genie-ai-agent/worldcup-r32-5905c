(function(){
  const cal = document.getElementById('calendar');
  const email = window.RSVP_EMAIL;
  const matches = (window.MATCHES || []).slice();

  // Convert '3:00 PM' -> minutes since midnight for sorting
  function toMin(t){
    const m = t.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if(!m) return 0;
    let h = parseInt(m[1],10) % 12;
    if(/PM/i.test(m[3])) h += 12;
    return h*60 + parseInt(m[2],10);
  }

  // Group by dayKey, preserve day order
  const dayOrder = [];
  const byDay = {};
  matches.forEach(m => {
    if(!byDay[m.dayKey]){ byDay[m.dayKey] = { label: m.dayLabel, items: [] }; dayOrder.push(m.dayKey); }
    byDay[m.dayKey].items.push(m);
  });
  dayOrder.forEach(k => byDay[k].items.sort((a,b) => toMin(a.kickoffET) - toMin(b.kickoffET)));

  function mailto(m){
    const subject = `RSVP: I want to watch ${m.a} vs ${m.b} (Match ${m.num})`;
    const body = [
      `Hey Iqram,`,
      ``,
      `Count me in for ${m.a} vs ${m.b} — Round of 32, Match ${m.num}.`,
      ``,
      `📅 ${m.dayLabel} · ${m.kickoffET} ET (${m.kickoffLocal})`,
      `🏟  ${m.venue}, ${m.city}`,
      ``,
      `Name:`,
      `Where I want to watch:`,
      ``,
      `— sent from your World Cup R32 page`
    ].join('\n');
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function dayDateBadge(label){
    // 'Sunday, June 28' -> { weekday:'SUN', day:'28', month:'JUN' }
    const m = label.match(/^(\w+), (\w+) (\d+)/);
    if(!m) return { weekday:'', day:'', month:'' };
    return {
      weekday: m[1].slice(0,3).toUpperCase(),
      month: m[2].slice(0,3).toUpperCase(),
      day: m[3]
    };
  }

  function row(m){
    const el = document.createElement('a');
    el.className = 'slot';
    el.href = mailto(m);
    el.innerHTML = `
      <div class="time">
        <div class="t-et">${m.kickoffET}</div>
        <div class="t-zone">ET</div>
        <div class="t-local">${m.kickoffLocal}</div>
      </div>
      <div class="divider" aria-hidden="true"></div>
      <div class="body">
        <div class="meta-line">
          <span class="mnum">Match ${String(m.num).padStart(2,'0')}</span>
          <span class="mdot">·</span>
          <span class="mvenue">${m.venue}, ${m.city}</span>
        </div>
        <div class="teams">
          <span class="flag">${m.flagA}</span>
          <span class="tname">${m.a}</span>
          <span class="vs">vs</span>
          <span class="flag">${m.flagB}</span>
          <span class="tname">${m.b}</span>
        </div>
      </div>
      <div class="rsvp">
        <span class="rsvp-label">Watch with me</span>
        <span class="rsvp-arrow">→</span>
      </div>
    `;
    return el;
  }

  const frag = document.createDocumentFragment();
  dayOrder.forEach(k => {
    const day = byDay[k];
    const badge = dayDateBadge(day.label);
    const section = document.createElement('section');
    section.className = 'day';
    section.innerHTML = `
      <header class="day-head">
        <div class="date-badge">
          <div class="db-weekday">${badge.weekday}</div>
          <div class="db-day">${badge.day}</div>
          <div class="db-month">${badge.month}</div>
        </div>
        <div class="day-title">
          <h2>${day.label}</h2>
          <div class="day-count">${day.items.length} ${day.items.length === 1 ? 'match' : 'matches'}</div>
        </div>
      </header>
      <div class="slots"></div>
    `;
    const slots = section.querySelector('.slots');
    day.items.forEach(m => slots.appendChild(row(m)));
    frag.appendChild(section);
  });
  cal.appendChild(frag);
})();
