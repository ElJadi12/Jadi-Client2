/* ===== Jadi Client — mockup logic (homework, not a real client) ===== */

// Simple inline SVG icon set (stroke style, matches the reference image)
const ICONS = {
  shield:   '<path d="M12 3l7 3v5.5c0 4.3-3 8-7 9.5-4-1.5-7-5.2-7-9.5V6l7-3z"/>',
  pin:      '<path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
  server:   '<rect x="3.5" y="4" width="17" height="6" rx="2"/><rect x="3.5" y="14" width="17" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/>',
  clock:    '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5.2l3.2 2"/>',
  sword:    '<path d="M19 4l-9.5 9.5M14.5 4H19v4.5"/><path d="M4.5 14.5l5 5M3.5 20.5l2-2"/>',
  compass:  '<circle cx="12" cy="12" r="8.5"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z"/>',
  target:   '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
  mouse:    '<rect x="7" y="3.5" width="10" height="17" rx="5"/><path d="M12 7v3.5"/>',
  sunrise:  '<path d="M3 18h18M6.5 18a5.5 5.5 0 0 1 11 0"/><path d="M12 3v3M4.5 8.5l2 2M19.5 8.5l-2 2"/>',
  sparkles: '<path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4z"/><path d="M18.5 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z"/>',
  chart:    '<path d="M4 17l5-5.5 3.5 3L20 6"/><path d="M15 6h5v5"/>',
  list:     '<rect x="4" y="3.5" width="16" height="17" rx="2.5"/><path d="M8 8.5h8M8 12h8M8 15.5h5"/>',
  keyboard: '<rect x="2.5" y="6.5" width="19" height="11" rx="2.5"/><path d="M6.5 10h1M10 10h1M13.5 10h1M17 10h1M8 14h8"/>',
  chip:     '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
  map:      '<path d="M9 4.5L3.5 6.5v13L9 17.5l6 2 5.5-2v-13l-5.5 2-6-2z"/><path d="M9 4.5v13M15 6.5v13"/>',
  eye:      '<path d="M2.5 12S6 6 12 6s9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="3"/>',
  pickaxe:  '<path d="M4.5 19.5l9-9"/><path d="M11 6.5c3-2.5 6.5-2.5 9 0-3 3.5-6 4-9 2.5"/>',
  heart:    '<path d="M12 20s-7.5-4.7-7.5-10A4.2 4.2 0 0 1 12 7.4 4.2 4.2 0 0 1 19.5 10c0 5.3-7.5 10-7.5 10z"/>',
  cloud:    '<path d="M7.5 18.5A4.5 4.5 0 0 1 8 9.6a5.5 5.5 0 0 1 10.4 1.6 3.7 3.7 0 0 1-.4 7.3H7.5z"/>',
  bolt:     '<path d="M13 3L5.5 13.5H11L10 21l7.5-10.5H12L13 3z"/>',
  box:      '<path d="M12 3l8 4.2v9.6L12 21l-8-4.2V7.2L12 3z"/><path d="M4 7.2l8 4.3 8-4.3M12 11.5V21"/>',
  potion:   '<path d="M10 3h4v4.5l3.5 6A4.8 4.8 0 0 1 13.5 21h-3A4.8 4.8 0 0 1 6.5 13.5l3.5-6V3z"/><path d="M8 14h8"/>',
};

// Module list — fictional, categories match the tabs
const MODULES = [
  { name: 'Armor Status',      cat: 'hud',      icon: 'shield',    on: true  },
  { name: 'Block Coordinates', cat: 'hud',      icon: 'pin',       on: false },
  { name: 'Boss Bar',          cat: 'hud',      icon: 'server',    on: false },
  { name: 'Clock',             cat: 'hud',      icon: 'clock',     on: false },
  { name: 'Combo Count',       cat: 'combat',   icon: 'sword',     on: false },
  { name: 'Compass',           cat: 'hud',      icon: 'compass',   on: true  },
  { name: 'Coordinates',       cat: 'hud',      icon: 'target',    on: true  },
  { name: 'CPS',               cat: 'combat',   icon: 'mouse',     on: false },
  { name: 'Day Counter',       cat: 'hud',      icon: 'sunrise',   on: false },
  { name: 'Entity Count',      cat: 'mechanic', icon: 'sparkles',  on: false },
  { name: 'FPS',               cat: 'hud',      icon: 'chart',     on: true  },
  { name: 'Info HUD',          cat: 'hud',      icon: 'list',      on: false },
  { name: 'Keystrokes',        cat: 'mechanic', icon: 'keyboard',  on: true  },
  { name: 'Memory',            cat: 'mechanic', icon: 'chip',      on: true  },
  { name: 'Minimap',           cat: 'hud',      icon: 'map',       on: true  },
  { name: 'Obsidian Count',    cat: 'gamemode', icon: 'box',       on: false },
  { name: 'Pack Display',      cat: 'hud',      icon: 'eye',       on: false },
  { name: 'Ping',              cat: 'hud',      icon: 'cloud',     on: false },
  { name: 'Sprint Toggle',     cat: 'mechanic', icon: 'bolt',      on: false },
  { name: 'Hit Color',         cat: 'combat',   icon: 'heart',     on: false },
  { name: 'Totem Counter',     cat: 'combat',   icon: 'potion',    on: false },
  { name: 'Bedwars Stats',     cat: 'gamemode', icon: 'pickaxe',   on: false },
  { name: 'Skyblock Timer',    cat: 'gamemode', icon: 'clock',     on: false },
  { name: 'Reach Display',     cat: 'combat',   icon: 'target',    on: false },
];

const CAT_LABEL = { hud: 'HUD', combat: 'Combat', gamemode: 'Gamemode', mechanic: 'Mechanic' };

const grid = document.getElementById('grid');
const empty = document.getElementById('empty');
const toast = document.getElementById('toast');
let currentFilter = 'all';
let query = '';

function svg(path) {
  return `<svg viewBox="0 0 24 24">${path}</svg>`;
}

function render() {
  const list = MODULES.filter(m => {
    const okCat = currentFilter === 'all' || m.cat === currentFilter;
    const okText = m.name.toLowerCase().includes(query);
    return okCat && okText;
  });

  grid.innerHTML = list.map((m, i) => `
    <article class="card ${m.on ? 'on' : ''}" data-name="${m.name}">
      <div class="card-icon">${svg(ICONS[m.icon])}</div>
      <div class="card-body">
        <div class="card-title">${m.name}</div>
        <div class="card-cat">${CAT_LABEL[m.cat]}</div>
        <div class="card-actions">
          <button class="mini-btn pin" title="Pin to HUD">
            <svg viewBox="0 0 24 24"><path d="M12 17v4"/><path d="M8 3.5h8l-1.2 5.2 2.7 3.3H6.5l2.7-3.3L8 3.5z"/></svg>
          </button>
          <button class="mini-btn gear" title="Settings">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1"/></svg>
          </button>
        </div>
      </div>
    </article>
  `).join('');

  empty.hidden = list.length > 0;
}

let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1600);
}

// --- events ---
grid.addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (!card) return;
  const mod = MODULES.find(m => m.name === card.dataset.name);

  if (e.target.closest('.pin')) {
    e.target.closest('.pin').classList.toggle('active');
    showToast(`${mod.name} ${card.querySelector('.pin').classList.contains('active') ? 'pinned to HUD' : 'unpinned'}`);
    return;
  }
  if (e.target.closest('.gear')) {
    showToast(`Opening settings for ${mod.name}...`);
    return;
  }

  mod.on = !mod.on;
  card.classList.toggle('on', mod.on);
  showToast(`${mod.name} ${mod.on ? 'enabled' : 'disabled'}`);
});

document.getElementById('tabs').addEventListener('click', e => {
  const tab = e.target.closest('.tab');
  if (!tab) return;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  currentFilter = tab.dataset.filter;
  render();
});

const searchBtn = document.getElementById('searchBtn');
const searchBox = document.getElementById('searchBox');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', () => {
  const open = searchBox.classList.toggle('show');
  searchBtn.classList.toggle('open', open);
  if (open) searchInput.focus();
  else { searchInput.value = ''; query = ''; render(); }
});

searchInput.addEventListener('input', () => {
  query = searchInput.value.trim().toLowerCase();
  render();
});

// sidebar navigation (visual only)
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    const label = item.querySelector('span').textContent;
    if (label !== 'Modules') showToast(`${label} page is not part of this demo`);
  });
});

document.querySelectorAll('.ghost-btn').forEach(b =>
  b.addEventListener('click', () => showToast(`${b.textContent.trim()} — demo only`))
);

render();
