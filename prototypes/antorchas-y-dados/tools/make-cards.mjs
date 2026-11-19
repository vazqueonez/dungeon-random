// PROTOTYPE - NOT FOR PRODUCTION
// Question: ¿Es divertido coordinar 3 PA por héroe entre salas con niebla, dados y cartas con cooldown hasta llegar al jefe?
// Date: 2026-11-19
//
// Writes ../rooms.js: the 60 room cards, 50 for the main deck and 10 for the boss deck.
// The hand-made cards in HAND go in as they are (their exits opened); the rest are generated from
// a fixed seed, so running it again gives the same cards. Running it OVERWRITES rooms.js: retouch
// the cards in rooms.js by hand, and only run this again if you want a fresh set (or edit HAND or
// the seed here first).
// Usage: node prototypes/antorchas-y-dados/tools/make-cards.mjs
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const R = 12, EX = [5, 6], ROOMS = 50, BOSSES = 10;
let seed = 20261119;
function rnd() { // mulberry32
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), seed | 1);
  t = (t + Math.imul(t ^ (t >>> 7), t | 61)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
const ri = (a, b) => a + Math.floor(rnd() * (b - a + 1));
const pick = a => a[Math.floor(rnd() * a.length)];

// The cards drawn by hand in iteration 1, with the doorways still as wall: opened below.
const HAND = {
  inicio: { name: 'la antecámara', use: 'room', map: ['##t######t##', '#..........#', '#..........#', '#...o......#', '#..........#', '#..........#', '#..........#', '#......o...#', '#..........#', '#..........#', '#..........#', '##t######t##'] },
  pilares: { name: 'el salón de pilares', use: 'room', map: ['###t####t###', '#..........#', '#.o......o.#', 't..........t', '#...o..o...#', '#..........#', '#..........#', '#...o..o...#', 't..........t', '#.o......o.#', '#..........#', '###t####t###'] },
  osario: { name: 'el osario', use: 'room', map: ['##t######t##', '#...#..#...#', '#.o.#..#.o.#', '#...#..#...#', '##.##..##.##', '#..........#', '#..........#', '##.##..##.##', '#...#..#...#', '#.o.#..#.o.#', '#...#..#...#', '##t######t##'] },
  capilla: { name: 'la capilla', use: 'room', map: ['###t####t###', '#..........#', '#.##....##.#', '#.#......#.#', '#..........#', '#...o..o...#', '#...o..o...#', '#..........#', '#.#......#.#', '#.##....##.#', '#..........#', '###t####t###'] },
  galeria: { name: 'la galería', use: 'room', map: ['##t######t##', '#..........#', '#.o.o..o.o.#', '#..........#', '#..........#', '#....oo....#', '#....oo....#', '#..........#', '#..........#', '#.o.o..o.o.#', '#..........#', '##t######t##'] },
  derrumbe: { name: 'el derrumbe', use: 'room', map: ['###t####t###', '#..oo......#', '#..o.......#', '#......##..#', '#.o....#...#', '#..........#', '#..........#', '#...#....o.#', '#..##....oo#', '#..........#', '#..o.......#', '###t####t###'] },
  jefe: { name: 'la sala del Carcelero', use: 'boss', map: ['###t####t###', '#..........#', '#.o......o.#', '#..........#', 't..........t', '#..........#', '#..........#', 't..........t', '#..........#', '#.o......o.#', '#..........#', '###t####t###'] },
};

const exitCell = (x, y) => (EX.includes(x) && (y === 0 || y === R - 1)) || (EX.includes(y) && (x === 0 || x === R - 1));
function openExits(map) {
  return map.map((row, y) => [...row].map((ch, x) => exitCell(x, y) ? '.' : ch).join(''));
}

// Cells that must stay floor: the exits and the two cells inward from each, and for a boss card
// the centre, where El Carcelero stands.
function isProtected(x, y, boss) {
  if (exitCell(x, y)) return true;
  if (EX.includes(x) && (y <= 2 || y >= R - 3)) return true;
  if (EX.includes(y) && (x <= 2 || x >= R - 3)) return true;
  return boss && x >= 4 && x <= 7 && y >= 4 && y <= 7;
}

/** The problems with a card, empty when it keeps every rule rooms.js states. */
function problems(map, boss) {
  const bad = [], at = (x, y) => map[y] && map[y][x];
  if (map.length !== R || map.some(r => r.length !== R)) return ['no es de 12x12'];
  for (let i = 0; i < R; i++) for (const [x, y] of [[i, 0], [i, R - 1], [0, i], [R - 1, i]]) {
    if (exitCell(x, y)) { if (at(x, y) !== '.') bad.push(`salida tapada en ${x},${y}`); }
    else if (!'#t'.includes(at(x, y))) bad.push(`anillo abierto en ${x},${y}`);
  }
  for (let y = 0; y < R; y++) for (let x = 0; x < R; x++) if (isProtected(x, y, boss) && at(x, y) !== '.') bad.push(`casilla que debe ser suelo en ${x},${y}`);
  let floor = 0; for (const r of map) for (const ch of r) if (ch === '.') floor++;
  const seen = new Set(['5,0']), q = [[5, 0]];
  while (q.length) {
    const [x, y] = q.pop();
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const k = `${x + dx},${y + dy}`; if (!seen.has(k) && at(x + dx, y + dy) === '.') { seen.add(k); q.push([x + dx, y + dy]); } }
  }
  if (seen.size < floor) bad.push(`${floor - seen.size} casillas de suelo sin camino`);
  if (floor < 60) bad.push(`solo ${floor} casillas de suelo`);
  return bad;
}

// ---- Generated cards: a layout kind, mirrored, plus a few loose stones -----------------------
function blank() {
  return Array.from({ length: R }, (_, y) => Array.from({ length: R }, (_, x) =>
    (x === 0 || y === 0 || x === R - 1 || y === R - 1) && !exitCell(x, y) ? '#' : '.'));
}
function painter(g, sym, boss) {
  return (x, y, ch) => {
    const pts = [[x, y]];
    if (sym.includes('h')) pts.push([R - 1 - x, y]);
    if (sym.includes('v')) for (const [px, py] of [...pts]) pts.push([px, R - 1 - py]);
    if (sym === 'rot') pts.push([R - 1 - x, R - 1 - y]);
    for (const [px, py] of pts) if (px >= 1 && py >= 1 && px <= R - 2 && py <= R - 2 && !isProtected(px, py, boss)) g[py][px] = ch;
  };
}
const KINDS = {
  pilares(set) { // a grid of pillars
    const d = pick([2, 3]), o = ri(1, 2);
    for (let y = o + 1; y <= 5; y += d) for (let x = o + 1; x <= 5; x += d) if (rnd() < 0.8) set(x, y, 'o');
  },
  celdas(set) { // wall spurs from the outer wall, making cells and niches
    const n = ri(2, 3);
    for (let k = 0; k < n; k++) {
      const along = pick([2, 3, 4, 8, 9]), len = ri(2, 3), side = rnd() < 0.5;
      for (let i = 1; i <= len; i++) side ? set(along, i, '#') : set(i, along, '#');
      if (rnd() < 0.5) set(side ? along : 2, side ? 2 : along, 'o');
    }
  },
  altar(set) { // a block in the middle, pillars around it
    const w = ri(1, 2), h = ri(1, 2), ch = pick(['#', 'o']);
    for (let y = 6 - h; y < 6 + h; y++) for (let x = 6 - w; x < 6 + w; x++) set(x, y, ch);
    if (rnd() < 0.7) { set(2, 2, 'o'); }
    if (rnd() < 0.5) { set(3, 4, 'o'); }
  },
  derrumbe(set) { // fallen stone in clusters, no symmetry
    const n = ri(4, 6);
    for (let k = 0; k < n; k++) {
      let x = ri(2, 9), y = ri(2, 9);
      for (let i = ri(2, 4); i > 0; i--) { set(x, y, rnd() < 0.2 ? '#' : 'o'); x += ri(-1, 1); y += ri(-1, 1); }
    }
  },
  cripta(set) { // rows of tombs, two cells long
    const rows = pick([[3], [3, 4], [2, 4]]), cols = pick([[2, 3], [3, 4], [2, 3, 4]]);
    for (const y of rows) for (const x of cols) if (rnd() < 0.85) set(x, y, 'o');
  },
  galeria(set) { // an inner wall line with gaps, like a cloister
    const at = pick([3, 4]), gaps = new Set([ri(2, 3), ri(7, 9)]);
    for (let i = 2; i <= 9; i++) if (!gaps.has(i) && i !== 5 && i !== 6) set(at, i, '#');
    if (rnd() < 0.6) set(at - 2 > 0 ? at - 2 : 1, ri(2, 4), 'o');
  },
};
const SYM = { pilares: ['hv'], celdas: ['h', 'hv', 'rot', 'v'], altar: ['hv'], derrumbe: ['none'], cripta: ['hv', 'h'], galeria: ['h', 'hv', 'rot'] };
const NOUNS = {
  pilares: ['la sala de columnas', 'el pórtico', 'el salón hipóstilo', 'la nave', 'el atrio'],
  celdas: ['las celdas', 'los nichos', 'el calabozo', 'las mazmorras', 'el redil'],
  altar: ['el altar', 'el pozo', 'el sepulcro', 'el santuario', 'el ara'],
  derrumbe: ['el hundimiento', 'la galería caída', 'las ruinas', 'el desprendimiento', 'la grieta'],
  cripta: ['la cripta', 'el panteón', 'las tumbas', 'el mausoleo', 'el cementerio'],
  galeria: ['el pasillo doble', 'el claustro', 'el corredor', 'la arcada', 'el deambulatorio'],
};
const OF = ['del eco', 'de las ratas', 'de los susurros', 'del verdugo', 'de la ceniza', 'del obispo', 'de los huesos',
  'del musgo', 'de la cadena', 'de la vela', 'del cuervo', 'de las arañas', 'del agua negra', 'de los reyes', 'del silencio',
  'de la plaga', 'de las lágrimas', 'del humo', 'de hierro', 'de la niebla', 'del gusano', 'de los perdidos', 'del juramento'];
const BOSS_NAMES = ['el trono del Carcelero', 'la jaula mayor', 'la forja del Carcelero', 'el patio de las cadenas', 'la sala del tormento',
  'la cámara del juicio', 'el foso de las cadenas', 'la cripta del Carcelero', 'la torre hundida'];

function torches(g) { // 2 to 4 torches on the outer wall, each beside floor
  const spots = [];
  for (let i = 1; i < R - 1; i++) for (const [x, y, nx, ny] of [[i, 0, i, 1], [i, R - 1, i, R - 2], [0, i, 1, i], [R - 1, i, R - 2, i]]) {
    if (Math.abs(i - 5.5) > 2 &&g[ny][nx] === '.') spots.push([x, y]);
  }
  for (let k = ri(2, 4); k > 0 && spots.length; k--) { const [x, y] = spots.splice(Math.floor(rnd() * spots.length), 1)[0]; g[y][x] = 't'; }
}
function generate(boss) {
  for (let tries = 0; tries < 200; tries++) {
    const g = blank(), kind = boss ? pick(['pilares', 'altar', 'cripta', 'galeria']) : pick(Object.keys(KINDS));
    const set = painter(g, pick(SYM[kind]), boss);
    KINDS[kind](set);
    if (!boss) for (let k = ri(0, 2); k > 0; k--) painter(g, 'none', boss)(ri(1, 10), ri(1, 10), 'o');
    torches(g);
    const map = g.map(r => r.join(''));
    if (!problems(map, boss).length) return { kind, map };
  }
  throw new Error('no card after 200 tries');
}

const cards = {}, names = new Set();
for (const [id, c] of Object.entries(HAND)) { cards[id] = { ...c, map: openExits(c.map) }; names.add(c.name); }
const handRooms = Object.values(HAND).filter(c => c.use === 'room').length;
for (let n = 1; n <= ROOMS - handRooms; n++) {
  const { kind, map } = generate(false);
  let name; do name = `${pick(NOUNS[kind])} ${pick(OF)}`; while (names.has(name));
  names.add(name);
  cards[`sala-${String(n).padStart(2, '0')}`] = { name, use: 'room', map };
}
for (let n = 0; n < BOSSES - 1; n++) {
  const { map } = generate(true);
  cards[`jefe-${String(n + 2).padStart(2, '0')}`] = { name: BOSS_NAMES[n], use: 'boss', map };
}
for (const [id, c] of Object.entries(cards)) {
  const bad = problems(c.map, c.use === 'boss');
  if (bad.length) throw new Error(`${id}: ${bad.join(', ')}`);
}

const head = `// PROTOTYPE - NOT FOR PRODUCTION
// Question: ¿Es divertido coordinar 3 PA por héroe entre salas con niebla, dados y cartas con cooldown hasta llegar al jefe?
// Date: 2026-11-19
//
// The room cards. The dungeon is a table of 5x5 cards; every card is a room of 12x12 cells, seen
// from above. At the start the seed shuffles two decks: the main deck (use: 'room', 50 cards)
// gives the 24 cards around the centre, and the boss deck (use: 'boss', 10 cards) gives the centre.
// Each card is the layout its painted image must match, cell for cell (art.js names the images).
// Written by tools/make-cards.mjs; retouch the cards here by hand (running the tool again
// overwrites this file). Legend:
//   #  wall: blocks movement and sight
//   .  floor
//   o  obstacle (pillar, rubble, bone pile): blocks movement, gives cover, does not block sight
//   t  wall with a torch: a wall that is also a light source
// Rules every card keeps (the game checks them at load and warns in the console):
//   - the outer ring (row 0, row 11, column 0, column 11) is wall (# or t), except the exits;
//   - every card has 4 exits, cells 5 and 6 of each side, written as floor (.). Paint them as
//     openings: the game covers an exit that leads nowhere with rubble, and puts a door in one
//     that leads to the next card;
//   - the two cells inward from each exit are floor, and every floor cell is reachable from them;
//   - on a boss card the centre (cells 4 to 7 both ways) is floor: El Carcelero stands there.
`;
const body = Object.entries(cards).map(([id, c]) =>
  `  '${id}': {\n    name: '${c.name}', use: '${c.use}',\n    map: [\n${c.map.map(r => `      '${r}',`).join('\n')}\n    ],\n  },`).join('\n');
const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'rooms.js');
writeFileSync(out, `${head}window.ROOMS = {\n${body}\n};\n`);
const count = u => Object.values(cards).filter(c => c.use === u).length;
console.log(`rooms.js: ${count('room')} room cards, ${count('boss')} boss cards`);
