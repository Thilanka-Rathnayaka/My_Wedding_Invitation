/* =========================================================
   Chathurika & Thilanka — Wedding Invitation
   English / Sinhala, with background music per language
   ========================================================= */

/* ---------- SETTINGS YOU MAY WANT TO EDIT ---------- */
const WHATSAPP_NUMBER = '94712109337';           // Thilanka's number, no + or leading 0
const WEDDING_START   = '2026-11-13T08:36:00+05:30'; // Poruwa ceremony, Sri Lanka time

// English plays one song on loop. Sinhala plays a list, one after another.
// Add or remove file names freely; any file that is missing is skipped.
const MUSIC = {
  en: ['Assets/music/En_bg_music.mp3'],
  si: ['Assets/music/Si_bg_music.mp3',
       'Assets/music/Si_bg_music_2.mp3',
       'Assets/music/Si_bg_music_3.mp3']
};
const CARD = {
  en: 'Assets/images/En_invcard.png',
  si: 'Assets/images/Si_invcard.png'
};

/* ---------- TEXT ---------- */
const T = {
  en: {
    title: 'Chathurika & Thilanka — Wedding Invitation',
    metaDesc: 'Join us as we celebrate the wedding of Chathurika & Thilanka — Friday, 13th November 2026, Amaya Grand Hotel, Giriulla.',
    gateEyebrow: 'You are cordially invited to the wedding of',
    gateHint: 'Tap the seal to open your invitation',
    changeLang: 'Change language · භාෂාව වෙනස් කරන්න',
    leEyebrow: 'Wedding Invitation',
    sealAria: "Tap the couple's photo seal to open your invitation",
    bride: 'Chathurika', groom: 'Thilanka',
    heroEyebrow: 'Together with our families',
    heroDate: 'Friday, 13th November 2026 · Amaya Grand Hotel, Giriulla',
    heroCta: 'Confirm Your Presence',
    scrollAria: 'Scroll to invitation details',
    note1: 'Mr. & Mrs. Chandrasiri together with Mr. & Mrs. Rathnayaka family',
    note2: 'request the honour of your presence',
    note3: 'to celebrate the wedding of their daughter and son',
    cdTitle: 'Counting Down To Our Big Day',
    cdDays: 'Days', cdHours: 'Hours', cdMins: 'Minutes', cdSecs: 'Seconds',
    cdNote: 'until the Poruwa ceremony begins',
    cdDone: 'Today is the day — see you at the Poruwa!',
    addCal: 'Add to my calendar',
    detTitle: 'Wedding Day Details',
    detDateT: 'The Date', detDate: 'Friday<br>13th November 2026',
    detTimeT: 'The Time', detTime: 'Reception — 8.00 AM to 4.00 PM<br>Poruwa Ceremony — 8.36 AM',
    detVenueT: 'The Venue', detVenue: 'Amaya Grand Hotel<br>Giriulla, Sri Lanka',
    locTitle: 'Find Us Here',
    locSub: "Amaya Grand Hotel, Giriulla — we can't wait to welcome you",
    locBtn: 'Get Directions',
    dlTitle: 'Your Personal Invitation',
    dlSub: 'Type your name and watch it appear on our invitation, then download it as a keepsake.',
    dlPh: 'Enter Your Name',
    rsvpName: 'Your full name',
    dlTitleAria: 'Title',
    ttNone: 'Title', ttMr: 'Mr.', ttMrs: 'Mrs.', ttMiss: 'Miss', ttCouple: 'Mr. & Mrs.', ttFamily: 'Family',
    dlBtn: 'Download My Invitation',
    dlBusy: 'Preparing your invitation…',
    dlDone: 'Downloaded! Thank you, {name}.',
    dlNoName: 'Please enter your name first.',
    dlFallback: 'Your name could not be added because this page is opened as a local file. The blank invitation was downloaded instead. Once the site is online, your name will be added automatically.',
    dlLoadErr: 'The invitation image could not be loaded.',
    rsvpTitle: 'Confirm Your Presence',
    rsvpSub: "Let us know you're coming — it means the world to us. Confirm directly on WhatsApp.",
    rsvpQ: 'Will you be attending?',
    rsvpYes: 'Joyfully Accepts', rsvpNo: 'Regretfully Declines',
    rsvpGuests: 'Guests',
    rsvpBtn: 'Confirm via WhatsApp',
    rsvpNote: 'Or call or message us directly —',
    waYes: (n, g) => `Hello! This is ${n}.\nRSVP for Chathurika & Thilanka's wedding:\nJoyfully accepts, ${g} guest(s).`,
    waNo:  (n)    => `Hello! This is ${n}.\nRSVP for Chathurika & Thilanka's wedding:\nRegretfully declines.`,
    footNote: 'With love and gratitude, we look forward to celebrating with you.',
    musicAria: 'Play or pause background music',
    musicNext: 'Next song',
    calTitle: "Chathurika & Thilanka's Wedding",
    calDesc: 'Poruwa ceremony at 8.36 AM. Reception 8.00 AM to 4.00 PM.'
  },
  si: {
    title: 'චතුරිකා සහ තිලංක — විවාහ ආරාධනා පත්‍රය',
    metaDesc: 'චතුරිකා සහ තිලංකගේ විවාහ මංගල්‍යය සැමරීමට ඔබට ආරාධනා කරමු — 2026 නොවැම්බර් 13 වන සිකුරාදා, අමයා ග්‍රෑන්ඩ් හෝටලය, ගිරිඋල්ල.',
    gateEyebrow: 'විවාහ මංගල්‍යයට ඔබට ආදරයෙන් ආරාධනා කරමු',
    gateHint: 'ආරාධනාව විවෘත කිරීමට මුද්‍රාව ස්පර්ශ කරන්න',
    changeLang: 'භාෂාව වෙනස් කරන්න · Change language',
    leEyebrow: 'විවාහ ආරාධනා පත්‍රය',
    sealAria: 'ආරාධනාව විවෘත කිරීමට යුවළගේ ඡායාරූප මුද්‍රාව ස්පර්ශ කරන්න',
    bride: 'චතුරිකා', groom: 'තිලංක',
    heroEyebrow: 'දෙපාර්ශ්වයේ පවුල් සමඟ',
    heroDate: '2026 නොවැම්බර් 13 වන සිකුරාදා · අමයා ග්‍රෑන්ඩ් හෝටලය, ගිරිඋල්ල',
    heroCta: 'ඔබගේ පැමිණීම තහවුරු කරන්න',
    scrollAria: 'ආරාධනා විස්තර වෙත පහළට යන්න',
    note1: 'චන්ද්‍රසිරි මහතා සහ එම මැතිණිය රත්නායක මහතා සහ එම මැතිණියගේ පව්ල සමග එක්ව',
    note2: 'ඔවුන්ගේ දියණියගේ හා පුතණුවන්ගේ විවාහ මංගල්‍යය සැමරීම සදහා',
    note3: 'ඔබට ගෞරවයෙන් ආරාධනා කරති',
    cdTitle: 'අපගේ විශේෂ දිනයට ඉතිරි කාලය',
    cdDays: 'දින', cdHours: 'පැය', cdMins: 'මිනිත්තු', cdSecs: 'තත්පර',
    cdNote: 'පෝරුව චාරිත්‍රය ආරම්භ වන තෙක්',
    cdDone: 'අද අපගේ විශේෂ දිනයයි — පෝරුව අසල හමුවෙමු!',
    addCal: 'මගේ දින දර්ශනයට එක් කරන්න',
    detTitle: 'මංගල දිනයේ විස්තර',
    detDateT: 'දිනය', detDate: 'සිකුරාදා<br>2026 නොවැම්බර් 13',
    detTimeT: 'වේලාව', detTime: 'උදෑසන 8.00 සිට පස්වරු 4.00 දක්වා<br>පෝරුව චාරිත්‍රය — පෙ.ව. 8.36',
    detVenueT: 'ස්ථානය', detVenue: 'අමයා ග්‍රෑන්ඩ් හෝටලය<br>ගිරිඋල්ල',
    locTitle: 'අප සොයා එන්න',
    locSub: 'අමයා ග්‍රෑන්ඩ් හෝටලය, ගිරිඋල්ල — ඔබ පැමිණෙන තෙක් අපි බලා සිටිමු',
    locBtn: 'මාර්ග සැලැස්ම ලබාගන්න',
    dlTitle: 'ඔබේ පෞද්ගලික ආරාධනා පත්‍රය',
    dlSub: 'ඔබේ නම ටයිප් කරන්න. එය ආරාධනා පත්‍රයේ දිස්වනු දකින්න, ඉන්පසු සිහිවටනයක් ලෙස බාගන්න.',
    dlPh: 'ඔබේ නම ඇතුළත් කරන්න',
    rsvpName: 'ඔබේ සම්පූර්ණ නම',
    dlTitleAria: 'ගෞරව නාමය',
    ttNone: 'ගෞරව නාමය', ttMr: 'මහතා', ttMrs: 'මහත්මිය', ttMiss: 'මෙනවිය', ttCouple: 'මහත් මහත්මියන්', ttFamily: 'පවුල',
    dlBtn: 'මගේ ආරාධනා පත්‍රය බාගන්න',
    dlBusy: 'ආරාධනා පත්‍රය සකසමින්…',
    dlDone: 'බාගත විය! ස්තූතියි, {name}.',
    dlNoName: 'කරුණාකර මුලින්ම ඔබේ නම ඇතුළත් කරන්න.',
    dlFallback: 'මෙම පිටුව පරිගණකයේ ගොනුවක් ලෙස විවෘත කර ඇති නිසා ඔබේ නම ඇතුළත් කළ නොහැකි විය. නම නොමැති ආරාධනා පත්‍රය බාගත විය. වෙබ් අඩවිය අන්තර්ජාලයට පළ කළ පසු ඔබේ නම ස්වයංක්‍රීයව ඇතුළත් වේ.',
    dlLoadErr: 'ආරාධනා පත්‍ර රූපය පූරණය කළ නොහැකි විය.',
    rsvpTitle: 'ඔබගේ පැමිණීම තහවුරු කරන්න',
    rsvpSub: 'ඔබ පැමිණෙන බව අපට දන්වන්න — එය අපට ඉමහත් සතුටකි. WhatsApp හරහා කෙලින්ම තහවුරු කරන්න.',
    rsvpQ: 'ඔබ සහභාගී වන්නෙහිද?',
    rsvpYes: 'සතුටින් සහභාගී වෙමි', rsvpNo: 'කණගාටුවෙන් සහභාගී විය නොහැක',
    rsvpGuests: 'සහභාගී වන ගණන',
    rsvpBtn: 'WhatsApp හරහා තහවුරු කරන්න',
    rsvpNote: 'නැතහොත් කෙලින්ම අමතන්න, පණිවිඩයක් එවන්න —',
    waYes: (n, g) => `ආයුබෝවන්! මම ${n}.\nචතුරිකා සහ තිලංකගේ මංගල්‍යය සඳහා මගේ පිළිතුර:\nසතුටින් සහභාගී වෙමි. සහභාගී වන ගණන: ${g}.`,
    waNo:  (n)    => `ආයුබෝවන්! මම ${n}.\nචතුරිකා සහ තිලංකගේ මංගල්‍යය සඳහා මගේ පිළිතුර:\nකණගාටුවෙන් සහභාගී විය නොහැක.`,
    footNote: 'ආදරයෙන් සහ කෘතඥතාවෙන්, ඔබ සමඟ මෙම සතුට බෙදා ගැනීමට අපි බලා සිටිමු.',
    musicAria: 'පසුබිම් සංගීතය ධාවනය කරන්න හෝ නවත්වන්න',
    musicNext: 'ඊළඟ ගීතය',
    calTitle: 'චතුරිකා සහ තිලංකගේ විවාහ මංගල්‍යය',
    calDesc: 'පෝරුව චාරිත්‍රය පෙ.ව. 8.36 ට. මංගල සත්කාරය පෙ.ව. 8.00 සිට ප.ව. 4.00 දක්වා.'
  }
};

let lang = 'en';
let countdownDone = false;
const $ = (id) => document.getElementById(id);
const tr = (key) => (T[lang][key] !== undefined ? T[lang][key] : T.en[key]);

/* ---------- Apply a language to the whole page ---------- */
function applyLang(next){
  lang = next;
  document.documentElement.lang = next;
  document.title = tr('title');
  const meta = $('metaDesc'); if(meta) meta.setAttribute('content', tr('metaDesc'));

  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = tr(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = tr(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = tr(el.dataset.i18nPh); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', tr(el.dataset.i18nAria)); });

  document.querySelectorAll('.lang-switch button').forEach(b => {
    b.setAttribute('aria-pressed', String(b.dataset.lang === next));
  });
  if(countdownDone){ const n = $('countdownNote'); if(n) n.textContent = tr('cdDone'); }
  try { localStorage.setItem('wedding-lang', next); } catch(e){}

  Music.setLang(next);
  Card.refresh();
}

/* =========================================================
   MUSIC — one track (EN) or a playlist (SI)
   ========================================================= */
const Music = (function(){
  const audio = $('bgMusic');
  const toggle = $('musicToggle');
  const skip = $('musicSkip');
  const dock = $('musicDock');
  let list = [], index = 0, failures = 0, wantPlaying = false, currentLang = null;

  function paint(){
    const playing = !audio.paused;
    toggle.classList.toggle('muted', !playing);
    toggle.setAttribute('aria-pressed', String(playing));
  }

  function load(i){
    index = (i + list.length) % list.length;
    audio.src = list[index];
    audio.load();
  }

  function play(){
    if(!list.length) return;
    wantPlaying = true;
    audio.volume = 0.6;
    const p = audio.play();
    if(p && p.catch) p.catch(() => { wantPlaying = false; paint(); });
  }

  function next(){
    if(list.length < 2){ audio.currentTime = 0; if(wantPlaying) play(); return; }
    load(index + 1);
    if(wantPlaying) play();
  }

  audio.addEventListener('play', paint);
  audio.addEventListener('pause', paint);
  audio.addEventListener('ended', next);
  audio.addEventListener('error', () => {
    failures++;
    if(failures >= list.length){
      // No music files found for this language — hide the buttons quietly.
      dock.classList.add('is-unavailable');
      console.warn('No background music files could be loaded for "' + currentLang + '". Add them to Assets/music/.');
      return;
    }
    next();
  });

  toggle.addEventListener('click', () => {
    if(audio.paused){
      if(!audio.src) load(0);
      play();
    } else {
      wantPlaying = false;
      audio.pause();
    }
  });
  skip.addEventListener('click', next);

  return {
    start(){ if(!audio.src && list.length) load(0); play(); },
    setLang(l){
      if(l === currentLang) return;
      const wasPlaying = !audio.paused;
      currentLang = l;
      list = MUSIC[l] || [];
      failures = 0;
      dock.classList.remove('is-unavailable');
      audio.pause();
      audio.removeAttribute('src');
      skip.hidden = list.length < 2;
      if(list.length){ load(0); }
      if(wasPlaying) play(); else paint();
    }
  };
})();

/* =========================================================
   PERSONAL CARD — live preview + download
   ========================================================= */
const Card = (function(){
  const canvas = $('cardCanvas');
  const input = $('recipientName');
  const titleSel = $('recipientTitle');
  const status = $('downloadStatus');
  const form = $('downloadForm');
  if(!canvas || !form) return { refresh(){} };
  const ctx = canvas.getContext('2d');
  const images = {};
  let drawToken = 0;

  // Where the name sits on each card, in the card's own 428x900 space
  // (so it lines up at any resolution). EN: blank band above the dotted rule.
  // SI: on the dotted line under the title banner.
  const NAME_POS = {
    en: { x: 214, y: 262, maxWidth: 320 },
    si: { x: 214, y: 141, maxWidth: 296 }
  };

  const TITLES = {
    en: { mr: 'Mr.', mrs: 'Mrs.', miss: 'Miss', couple: 'Mr. & Mrs.' },
    si: { mr: 'මහතා', mrs: 'මහත්මිය', miss: 'මෙනවිය', couple: 'මහත් මහත්මියන්', family: 'පවුල' }
  };

  // "Mr. Nimal Perera" / "Perera Family"  —  "සුනිල් පෙරේරා මහතා" / "පෙරේරා පවුල"
  function fullName(){
    const name = input.value.trim().replace(/\s+/g, ' ');
    if(!name) return '';
    const t = titleSel ? titleSel.value : '';
    if(!t) return name;
    if(lang === 'si') return name + ' ' + TITLES.si[t];
    return t === 'family' ? name + ' Family' : TITLES.en[t] + ' ' + name;
  }

  function loadImg(src){
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }
  // Reading a canvas back is blocked when the picture came from a local file.
  function readable(img){
    try {
      const c = document.createElement('canvas'); c.width = c.height = 1;
      const x = c.getContext('2d'); x.drawImage(img, 0, 0); x.getImageData(0, 0, 1, 1);
      return true;
    } catch(e){ return false; }
  }
  // Use the PNG when the browser lets us save from it; otherwise use the
  // embedded copy (Assets/js/cards-data.js), which always works.
  async function cardImage(l){
    if(images[l]) return images[l];
    let img = null;
    try { img = await loadImg(CARD[l]); } catch(e){}
    if((!img || !readable(img)) && window.CARD_DATA && window.CARD_DATA[l]){
      img = await loadImg(window.CARD_DATA[l]);
    }
    if(!img) throw new Error('card image missing');
    images[l] = img;
    return img;
  }

  async function draw(text){
    const token = ++drawToken;
    const img = await cardImage(lang);
    if(token !== drawToken) return;
    canvas.width = img.naturalWidth || 856;
    canvas.height = img.naturalHeight || 1800;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    if(!text) return;

    const pos = NAME_POS[lang];
    const sx = canvas.width / 428, sy = canvas.height / 900;
    const stack = '"Abhaya Libre","Noto Serif Sinhala","Playfair Display",Georgia,serif';
    try {
      await document.fonts.load('600 24px "Abhaya Libre"', text);
      await document.fonts.load('600 24px "Playfair Display"', text);
    } catch(e){}
    if(token !== drawToken) return;

    let size = 25 * sy;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#7A1230';
    for(; size > 10; size -= 1){
      ctx.font = '600 ' + size + 'px ' + stack;
      if(ctx.measureText(text).width <= pos.maxWidth * sx) break;
    }
    ctx.fillText(text, pos.x * sx, pos.y * sy + size * 0.3);
  }

  function say(msg, isError){
    status.textContent = msg;
    status.classList.toggle('is-error', !!isError);
  }

  let timer;
  function schedule(){ clearTimeout(timer); timer = setTimeout(() => draw(fullName()).catch(() => {}), 100); }
  input.addEventListener('input', schedule);
  if(titleSel) titleSel.addEventListener('change', schedule);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = fullName();
    if(!text){ say(tr('dlNoName'), true); return; }
    say(tr('dlBusy'));
    try {
      await draw(text);
      const blob = await new Promise((res) => canvas.toBlob(res, 'image/png'));
      if(!blob) throw new Error('could not read canvas');
      const safe = text.replace(/[\\/:*?"<>|\u200c\u200d]+/g, '').trim() || 'Guest';
      const fileName = safe + ' - Wedding Invitation.png';
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 4000);
      say(tr('dlDone').replace('{name}', input.value.trim()));
    } catch(err){
      console.error(err);
      say(tr('dlLoadErr'), true);
    }
  });

  return { refresh: schedule };
})();

/* =========================================================
   GATE: language choice -> sealed envelope -> open
   ========================================================= */
(function(){
  const gate = $('envelopeGate');
  const scene = $('envelopeScene');
  const seal = $('waxSeal');
  if(!gate || !scene || !seal) return;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.dataset.pick);
      gate.classList.remove('step-lang');
      gate.classList.add('step-seal');
      seal.focus({ preventScroll: true });
    });
  });
  $('gateBack').addEventListener('click', () => {
    gate.classList.remove('step-seal');
    gate.classList.add('step-lang');
  });

  let opened = false;
  function openEnvelope(){
    if(opened) return;
    opened = true;
    gate.classList.add('open');
    Music.start();   // this tap is a real user gesture, so audio is allowed
    setTimeout(() => { gate.classList.add('hide'); document.body.classList.remove('is-locked'); }, 1550);
    setTimeout(() => { gate.style.display = 'none'; }, 2250);
  }
  seal.addEventListener('click', openEnvelope);
  scene.addEventListener('click', openEnvelope);
})();

/* ---------- Language switch (after opening) ---------- */
document.querySelectorAll('.lang-switch button').forEach(b => {
  b.addEventListener('click', () => applyLang(b.dataset.lang));
});

/* ---------- Scroll cue ---------- */
(function(){
  const cue = $('scrollCue');
  if(!cue) return;
  cue.addEventListener('click', () => {
    const next = document.querySelector('.invite-note');
    if(next) next.scrollIntoView({ behavior: 'smooth' });
  });
})();

/* ---------- Countdown ---------- */
(function(){
  const d = $('cdDays'), h = $('cdHours'), m = $('cdMins'), s = $('cdSecs'), note = $('countdownNote');
  if(!d) return;
  const target = new Date(WEDDING_START).getTime();
  const pad = (n) => String(n).padStart(2, '0');
  let timer = null;

  function tick(){
    const diff = target - Date.now();
    if(diff <= 0){
      d.textContent = h.textContent = m.textContent = s.textContent = '00';
      countdownDone = true;
      if(note) note.textContent = tr('cdDone');
      if(timer) clearInterval(timer);
      return;
    }
    d.textContent = pad(Math.floor(diff / 86400000));
    h.textContent = pad(Math.floor(diff / 3600000) % 24);
    m.textContent = pad(Math.floor(diff / 60000) % 60);
    s.textContent = pad(Math.floor(diff / 1000) % 60);
  }
  tick();
  timer = setInterval(tick, 1000);
})();

/* ---------- Add to calendar (.ics) ---------- */
(function(){
  const btn = $('addCalendar') || $('addToCalendar');
  if(!btn) return;
  btn.addEventListener('click', () => {
    // 8.00 AM – 4.00 PM Sri Lanka time (UTC+5:30) = 02:30 – 10:30 UTC
    const esc = (t) => t.replace(/[\\;,]/g, '\\$&').replace(/\n/g, '\\n');
    const ics = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Chathurika and Thilanka//Wedding//EN', 'BEGIN:VEVENT',
      'UID:wedding-2026-11-13@chathurika-thilanka',
      'DTSTAMP:20261001T000000Z',
      'DTSTART:20261113T023000Z',
      'DTEND:20261113T103000Z',
      'SUMMARY:' + esc(tr('calTitle')),
      'DESCRIPTION:' + esc(tr('calDesc')),
      'LOCATION:' + esc('Amaya Grand Hotel, Giriulla, Sri Lanka'),
      'END:VEVENT', 'END:VCALENDAR'
    ].join('\r\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' }));
    a.download = 'Chathurika-and-Thilanka-Wedding.ics';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  });
})();

/* ---------- Floating petals, hearts, balloons ---------- */
(function(){
  const field = $('bgField');
  if(!field) return;
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const w = window.innerWidth;
  const petalColors = ['#C89B3C', '#7A1230', '#E4C173', '#2F5233'];
  const heartColors = ['#7A1230', '#C0392B', '#E4C173'];
  const balloonColors = ['#7A1230', '#C89B3C', '#2F5233', '#C0392B'];
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const density = (m, t, dk, wd) => w < 640 ? m : w < 1024 ? t : w < 1600 ? dk : wd;
  const PETALS = density(8, 13, 18, 24), HEARTS = density(6, 9, 13, 17), BALLOONS = density(3, 4, 6, 8);

  function make(cls, html, vars){
    const el = document.createElement('div');
    el.className = cls;
    for(const k in vars) el.style.setProperty(k, vars[k]);
    el.innerHTML = html;
    field.appendChild(el);
  }
  const r = Math.random;

  for(let i = 0; i < PETALS; i++){
    const c = pick(petalColors);
    make('bg-petal', '<svg viewBox="0 0 32 32"><path d="M16 2C10 8 6 12 6 18a10 10 0 0 0 20 0c0-6-4-10-10-16Z" fill="' + c + '"/></svg>', {
      '--x': r() * 100 + 'vw', '--size': (10 + r() * 12) + 'px', '--delay': (r() * -25) + 's',
      '--fall-dur': (14 + r() * 12) + 's', '--sway-dur': (3.5 + r() * 3) + 's', '--max-opacity': (0.3 + r() * 0.3).toFixed(2)
    });
  }
  for(let i = 0; i < HEARTS; i++){
    const c = pick(heartColors);
    make('bg-heart', '<svg viewBox="0 0 32 29"><path d="M16 29S1 18.6 1 9.6C1 4.3 5 1 9.4 1 12.6 1 15 2.8 16 5.4 17 2.8 19.4 1 22.6 1 27 1 31 4.3 31 9.6 31 18.6 16 29 16 29Z" fill="' + c + '"/></svg>', {
      '--x': r() * 100 + 'vw', '--size': (12 + r() * 14) + 'px', '--delay': (r() * -22) + 's',
      '--float-dur': (11 + r() * 9) + 's', '--sway-dur': (3 + r() * 2.5) + 's', '--max-opacity': (0.35 + r() * 0.3).toFixed(2)
    });
  }
  for(let i = 0; i < BALLOONS; i++){
    const c = pick(balloonColors);
    make('bg-balloon',
      '<svg viewBox="0 0 30 38"><ellipse cx="15" cy="14" rx="14" ry="14" fill="' + c + '" opacity="0.85"/>' +
      '<path d="M15 28c1.5 1.5 1.5 3.5 0 5-1.5-1.5-1.5-3.5 0-5Z" fill="' + c + '" opacity="0.85"/>' +
      '<line x1="15" y1="28" x2="15" y2="36" stroke="' + c + '" stroke-width="1" opacity="0.6"/></svg>', {
      '--x': r() * 100 + 'vw', '--bsize': (24 + r() * 20) + 'px', '--delay': (r() * -26) + 's',
      '--rise-dur': (17 + r() * 11) + 's', '--bsway-dur': (4 + r() * 3) + 's', '--max-opacity': (0.45 + r() * 0.3).toFixed(2)
    });
  }
})();

/* ---------- RSVP -> WhatsApp ---------- */
(function(){
  const form = $('rsvpForm');
  if(!form) return;
  const select = $('rsvpAttending');
  const row = form.querySelector('.rsvp-row');
  const guests = $('rsvpGuests');

  // Guests only matter if the person is coming.
  select.addEventListener('change', () => { row.classList.toggle('no-guests', select.value === 'no'); });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('rsvpName').value.trim();
    const answer = select.value;
    if(!name || !answer) return;
    const g = Math.min(10, Math.max(1, parseInt(guests.value, 10) || 1));
    const message = answer === 'yes' ? tr('waYes')(name, g) : tr('waNo')(name);
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message), '_blank', 'noopener');
  });
})();

/* ---------- First paint: English until a language is chosen ---------- */
applyLang('en');
