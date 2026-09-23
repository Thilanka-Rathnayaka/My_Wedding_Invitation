/* =========================================================
   Chathurika & Thilanka — Wedding Invitation
   ========================================================= */

// ---------- Sealed envelope intro + music start ----------
(function(){
  const gate = document.getElementById('envelopeGate');
  const scene = document.getElementById('envelopeScene');
  const seal = document.getElementById('waxSeal');
  const audio = document.getElementById('bgMusic');
  const musicToggle = document.getElementById('musicToggle');
  if(!gate || !scene || !seal) return;

  // Keep the site from scrolling behind the envelope until it's opened.
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  let opened = false;
  function openEnvelope(){
    if(opened) return;
    opened = true;
    gate.classList.add('open');

    // This click is a genuine user gesture, so audible playback is allowed
    // to start immediately — this is the moment the full site "opens".
    if(audio){
      audio.volume = 0.6;
      audio.play().then(() => {
        if(musicToggle) musicToggle.classList.remove('muted');
      }).catch(() => {
        // If the browser still blocks it for some reason, the mute/unmute
        // button lets the guest start it manually with one tap.
        if(musicToggle) musicToggle.classList.add('muted');
      });
    }

    setTimeout(() => {
      gate.classList.add('hide');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }, 1550);
    setTimeout(() => {
      gate.style.display = 'none';
    }, 2250);
  }

  seal.addEventListener('click', openEnvelope);
  scene.addEventListener('click', openEnvelope);
})();

// ---------- Music mute/unmute toggle ----------
(function(){
  const audio = document.getElementById('bgMusic');
  const toggle = document.getElementById('musicToggle');
  if(!audio || !toggle) return;

  toggle.classList.add('muted'); // starts muted-looking until envelope opens playback

  toggle.addEventListener('click', () => {
    if(audio.paused){
      audio.play().then(() => toggle.classList.remove('muted')).catch(() => {});
    } else if(audio.muted){
      audio.muted = false;
      toggle.classList.remove('muted');
    } else {
      audio.muted = true;
      toggle.classList.add('muted');
    }
    toggle.setAttribute('aria-pressed', String(!audio.muted && !audio.paused));
  });

  audio.addEventListener('play', () => toggle.classList.remove('muted'));
  audio.addEventListener('pause', () => toggle.classList.add('muted'));
})();

// ---------- Scroll cue ----------
(function(){
  const cue = document.getElementById('scrollCue');
  if(!cue) return;
  cue.addEventListener('click', () => {
    const next = document.querySelector('.invite-note');
    if(next) next.scrollIntoView({ behavior: 'smooth' });
  });
})();

// ---------- Countdown ----------
(function(){
  const daysEl = document.getElementById('cdDays');
  const hoursEl = document.getElementById('cdHours');
  const minsEl = document.getElementById('cdMins');
  const secsEl = document.getElementById('cdSecs');
  const note = document.getElementById('countdownNote');
  if(!daysEl) return;

  // Poruwa ceremony begins 8.36 AM, Friday 13th November 2026, Sri Lanka time (UTC+5:30)
  const target = new Date('2026-11-13T08:36:00+05:30').getTime();

  function pad(n){ return String(n).padStart(2, '0'); }

  function tick(){
    const now = Date.now();
    const diff = target - now;

    if(diff <= 0){
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      if(note) note.textContent = "Today is the day — see you at the Poruwa!";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minsEl.textContent = pad(mins);
    secsEl.textContent = pad(secs);
  }

  tick();
  const timer = setInterval(tick, 1000);
})();

// ---------- Decorative floating background (petals, hearts, balloons) ----------
(function(){
  const field = document.getElementById('bgField');
  if(!field) return;
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const w = window.innerWidth;
  const petalColors = ['#C89B3C', '#7A1230', '#E4C173', '#2F5233'];
  const heartColors = ['#7A1230', '#C0392B', '#E4C173'];
  const balloonColors = ['#7A1230', '#C89B3C', '#2F5233', '#C0392B'];

  function densityFor(mobile, tablet, desktop, wide){
    if(w < 640) return mobile;
    if(w < 1024) return tablet;
    if(w < 1600) return desktop;
    return wide;
  }
  const PETAL_COUNT = densityFor(8, 13, 18, 24);
  const HEART_COUNT = densityFor(6, 9, 13, 17);
  const BALLOON_COUNT = densityFor(3, 4, 6, 8);

  function makePetal(){
    const el = document.createElement('div');
    el.className = 'bg-petal';
    const size = 10 + Math.random() * 12;
    const color = petalColors[Math.floor(Math.random() * petalColors.length)];
    el.style.setProperty('--x', Math.random() * 100 + 'vw');
    el.style.setProperty('--size', size + 'px');
    el.style.setProperty('--delay', (Math.random() * -25) + 's');
    el.style.setProperty('--fall-dur', (14 + Math.random() * 12) + 's');
    el.style.setProperty('--sway-dur', (3.5 + Math.random() * 3) + 's');
    el.style.setProperty('--max-opacity', (0.35 + Math.random() * 0.35).toFixed(2));
    el.innerHTML = '<svg viewBox="0 0 32 32"><path d="M16 2C10 8 6 12 6 18a10 10 0 0 0 20 0c0-6-4-10-10-16Z" fill="' + color + '"/></svg>';
    field.appendChild(el);
  }

  function makeHeart(){
    const el = document.createElement('div');
    el.className = 'bg-heart';
    const size = 12 + Math.random() * 14;
    const color = heartColors[Math.floor(Math.random() * heartColors.length)];
    el.style.setProperty('--x', Math.random() * 100 + 'vw');
    el.style.setProperty('--size', size + 'px');
    el.style.setProperty('--delay', (Math.random() * -22) + 's');
    el.style.setProperty('--float-dur', (11 + Math.random() * 9) + 's');
    el.style.setProperty('--sway-dur', (3 + Math.random() * 2.5) + 's');
    el.style.setProperty('--max-opacity', (0.4 + Math.random() * 0.35).toFixed(2));
    el.innerHTML = '<svg viewBox="0 0 32 29"><path d="M16 29S1 18.6 1 9.6C1 4.3 5 1 9.4 1 12.6 1 15 2.8 16 5.4 17 2.8 19.4 1 22.6 1 27 1 31 4.3 31 9.6 31 18.6 16 29 16 29Z" fill="' + color + '"/></svg>';
    field.appendChild(el);
  }

  function makeBalloon(){
    const el = document.createElement('div');
    el.className = 'bg-balloon';
    const size = 24 + Math.random() * 20;
    const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    el.style.setProperty('--x', Math.random() * 100 + 'vw');
    el.style.setProperty('--bsize', size + 'px');
    el.style.setProperty('--delay', (Math.random() * -26) + 's');
    el.style.setProperty('--rise-dur', (17 + Math.random() * 11) + 's');
    el.style.setProperty('--bsway-dur', (4 + Math.random() * 3) + 's');
    el.style.setProperty('--max-opacity', (0.5 + Math.random() * 0.3).toFixed(2));
    el.innerHTML =
      '<svg viewBox="0 0 30 38">' +
        '<ellipse cx="15" cy="14" rx="14" ry="14" fill="' + color + '" opacity="0.85"/>' +
        '<path d="M15 28c1.5 1.5 1.5 3.5 0 5-1.5-1.5-1.5-3.5 0-5Z" fill="' + color + '" opacity="0.85"/>' +
        '<line x1="15" y1="28" x2="15" y2="36" stroke="' + color + '" stroke-width="1" opacity="0.6"/>' +
      '</svg>';
    field.appendChild(el);
  }

  for(let i = 0; i < PETAL_COUNT; i++) makePetal();
  for(let i = 0; i < HEART_COUNT; i++) makeHeart();
  for(let i = 0; i < BALLOON_COUNT; i++) makeBalloon();
})();

// ---------- RSVP -> WhatsApp ----------
(function(){
  const form = document.getElementById('rsvpForm');
  if(!form) return;

  const WHATSAPP_NUMBER = '94712109337'; // Thilanka's number, no + or leading 0

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('rsvpName').value.trim();
    const attending = document.getElementById('rsvpAttending').value;
    const guests = document.getElementById('rsvpGuests').value || '1';

    if(!name || !attending) return;

    const message =
      'Hello! This is ' + name + '.\n' +
      'RSVP for Chathurika & Thilanka\'s wedding:\n' +
      attending + ', ' + guests + ' guest(s).';

    const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
    window.open(url, '_blank', 'noopener');
  });
})();

// ---------- Downloadable personalized invitation ----------
(function(){
  const form = document.getElementById('downloadForm');
  const status = document.getElementById('downloadStatus');
  const canvas = document.getElementById('cardCanvas');
  if(!form || !canvas) return;

  const ctx = canvas.getContext('2d');
  const CARD_SRC = 'Assets/images/invcard.png';
  // Blank band on the card (between the address block and the dotted rule)
  // where the recipient's name is drawn. Coordinates are in the card's own
  // 428x900 pixel space, so they line up regardless of on-screen size.
  const NAME_Y = 271;
  const NAME_MAX_WIDTH = 340;
  const NAME_CENTER_X = 214;

  function drawName(img, name){
    canvas.width = img.naturalWidth || 428;
    canvas.height = img.naturalHeight || 900;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Scale the fixed coordinates if the source image isn't exactly 428x900.
    const scaleX = canvas.width / 428;
    const scaleY = canvas.height / 900;
    const x = NAME_CENTER_X * scaleX;
    const y = NAME_Y * scaleY;
    const maxWidth = NAME_MAX_WIDTH * scaleX;

    let fontSize = 24 * scaleY;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#7A1230';

    do {
      ctx.font = fontSize + 'px Georgia, "Playfair Display", serif';
      const width = ctx.measureText(name).width;
      if(width <= maxWidth || fontSize < 10) break;
      fontSize -= 1;
    } while (true);

    ctx.fillText(name, x, y);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('recipientName').value.trim();
    if(!name) return;

    status.textContent = 'Preparing your invitation…';

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function(){
      try {
        drawName(img, name);
        const link = document.createElement('a');
        link.download = name.replace(/[^\w\- ]+/g, '').trim() + ' - Wedding Invitation.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        status.textContent = 'Downloaded! Thank you, ' + name + '.';
      } catch(err){
        status.textContent = 'Could not generate the download. Please make sure the site is served over http(s), not opened directly as a local file.';
      }
    };
    img.onerror = function(){
      status.textContent = 'Could not load the invitation image.';
    };
    img.src = CARD_SRC;
  });
})();

