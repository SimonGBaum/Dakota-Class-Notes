const KANTO_COUNT = 151;
const API_BASE = 'https://pokeapi.co/api/v2';

const cache = new Map();
let currentIndex = 0;
let listItems = [];

const statColors = {
  hp:              '#f04040',
  attack:          '#f08030',
  defense:         '#f8d030',
  'special-attack':'#6890f0',
  'special-defense':'#78c850',
  speed:           '#f85888',
};

const statLabels = {
  hp:              'HP',
  attack:          'ATK',
  defense:         'DEF',
  'special-attack':'SpATK',
  'special-defense':'SpDEF',
  speed:           'SPD',
};

// ── DOM refs ──
const pokemonList    = document.getElementById('pokemonList');
const spriteWrapper  = document.getElementById('spriteWrapper');
const spriteNumber   = document.getElementById('spriteNumber');
const detailIdle     = document.getElementById('detailIdle');
const detailContent  = document.getElementById('detailContent');
const detailName     = document.getElementById('detailName');
const detailId       = document.getElementById('detailId');
const detailTypes    = document.getElementById('detailTypes');
const detailStats    = document.getElementById('detailStats');
const detailDesc     = document.getElementById('detailDesc');
const detailMeta     = document.getElementById('detailMeta');
const loadingOverlay = document.getElementById('loadingOverlay');
const statusText     = document.getElementById('statusText');

// ── Bootstrap list with minimal data ──
async function buildList() {
  const res  = await fetch(`${API_BASE}/pokemon?limit=${KANTO_COUNT}&offset=0`);
  const data = await res.json();

  data.results.forEach((p, i) => {
    const num  = i + 1;
    const li   = document.createElement('li');
    li.dataset.id = num;

    li.innerHTML = `
      <span class="list-num">#${String(num).padStart(3, '0')}</span>
      <span class="list-name">${p.name}</span>
      <span class="list-types" id="listTypes${num}">···</span>
    `;

    li.addEventListener('click', () => selectPokemon(num));
    pokemonList.appendChild(li);
    listItems.push(li);

    // Lazily load type dots as entries come into view
    lazyLoadTypes(num, p.url);
  });
}

async function lazyLoadTypes(num, url) {
  try {
    const data  = await fetchPokemon(num, url);
    const cell  = document.getElementById(`listTypes${num}`);
    if (!cell) return;
    cell.innerHTML = data.types
      .map(t => `<span class="list-type-dot type-${t.type.name}" title="${t.type.name}"></span>`)
      .join('');
  } catch (_) { /* silent — dots stay as ··· */ }
}

// ── Fetch with cache ──
async function fetchPokemon(id, urlHint) {
  if (cache.has(id)) return cache.get(id);
  const url  = urlHint || `${API_BASE}/pokemon/${id}`;
  const res  = await fetch(url);
  const data = await res.json();
  cache.set(id, data);
  return data;
}

async function fetchSpecies(id) {
  const key = `species-${id}`;
  if (cache.has(key)) return cache.get(key);
  const res  = await fetch(`${API_BASE}/pokemon-species/${id}`);
  const data = await res.json();
  cache.set(key, data);
  return data;
}

// ── Select & display ──
async function selectPokemon(id) {
  currentIndex = id - 1;

  listItems.forEach(li => li.classList.remove('active'));
  listItems[currentIndex]?.classList.add('active');
  listItems[currentIndex]?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });

  setLoading(true);

  try {
    const [pokemon, species] = await Promise.all([
      fetchPokemon(id),
      fetchSpecies(id),
    ]);

    renderSprite(pokemon);
    renderDetail(pokemon, species);
    setStatus(pokemon);
  } catch (err) {
    statusText.textContent = 'Network error!';
  } finally {
    setLoading(false);
  }
}

function renderSprite(pokemon) {
  const src = pokemon.sprites.other['official-artwork']?.front_default
           || pokemon.sprites.front_default;

  spriteWrapper.innerHTML = `<img class="pokemon-sprite" src="${src}" alt="${pokemon.name}" />`;
  spriteNumber.textContent = `#${String(pokemon.id).padStart(3, '0')}`;
}

function renderDetail(pokemon, species) {
  detailIdle.classList.add('hidden');
  detailContent.classList.remove('hidden');

  // Name & ID
  detailName.textContent = pokemon.name.replace(/-/g, ' ');
  detailId.textContent   = `#${String(pokemon.id).padStart(3, '0')}`;

  // Types
  detailTypes.innerHTML = pokemon.types
    .map(t => `<span class="type-badge type-${t.type.name}">${t.type.name}</span>`)
    .join('');

  // Stats (all 6 in a 2-col grid)
  detailStats.innerHTML = pokemon.stats.map(s => {
    const key   = s.stat.name;
    const val   = s.base_stat;
    const pct   = Math.min(100, Math.round((val / 255) * 100));
    const color = statColors[key] || '#888';
    const label = statLabels[key] || key;
    return `
      <div class="stat-row">
        <span class="stat-label">${label}</span>
        <div class="stat-bar-wrap">
          <div class="stat-bar" style="width:${pct}%; background:${color};"></div>
        </div>
        <span>${val}</span>
      </div>
    `;
  }).join('');

  // Flavor text (first English entry)
  const flavorEntry = species.flavor_text_entries
    .find(e => e.language.name === 'en' && e.version.name.includes('firered'))
    || species.flavor_text_entries.find(e => e.language.name === 'en');

  detailDesc.textContent = flavorEntry
    ? flavorEntry.flavor_text.replace(/[\f\n]/g, ' ')
    : 'No description available.';

  // Meta
  const heightM  = (pokemon.height  / 10).toFixed(1);
  const weightKg = (pokemon.weight  / 10).toFixed(1);
  detailMeta.innerHTML = `
    <span>HT: ${heightM} m</span>
    <span>WT: ${weightKg} kg</span>
    <span>EXP: ${pokemon.base_experience ?? '—'}</span>
  `;
}

function setStatus(pokemon) {
  const genus = ''; // keep it concise
  statusText.textContent = `${pokemon.name.toUpperCase()}\nHP ${pokemon.stats[0].base_stat}`;
}

function setLoading(on) {
  loadingOverlay.classList.toggle('hidden', !on);
}

// ── D-Pad navigation ──
function navigate(delta) {
  const next = Math.max(0, Math.min(KANTO_COUNT - 1, currentIndex + delta));
  if (next !== currentIndex) selectPokemon(next + 1);
}

document.getElementById('dpadUp').addEventListener('click',    () => navigate(-1));
document.getElementById('dpadDown').addEventListener('click',  () => navigate(+1));
document.getElementById('dpadLeft').addEventListener('click',  () => navigate(-5));
document.getElementById('dpadRight').addEventListener('click', () => navigate(+5));

// A = confirm select on current highlighted, B = scroll to top
document.getElementById('btnA').addEventListener('click', () => {
  if (currentIndex >= 0) selectPokemon(currentIndex + 1);
});
document.getElementById('btnB').addEventListener('click', () => {
  pokemonList.scrollTo({ top: 0, behavior: 'smooth' });
});

// Keyboard support
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp')    navigate(-1);
  if (e.key === 'ArrowDown')  navigate(+1);
  if (e.key === 'ArrowLeft')  navigate(-5);
  if (e.key === 'ArrowRight') navigate(+5);
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    if (currentIndex >= 0) selectPokemon(currentIndex + 1);
  }
});

// ── Init ──
buildList().then(() => {
  // Auto-select Bulbasaur on load
  selectPokemon(1);
});
