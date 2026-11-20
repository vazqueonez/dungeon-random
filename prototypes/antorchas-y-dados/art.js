// PROTOTYPE - NOT FOR PRODUCTION
// Question: ¿Es divertido coordinar 3 PA por héroe entre salas con niebla, dados y cartas con cooldown hasta llegar al jefe?
// Date: 2026-11-19
//
// The painted art the game uses. List a file here only once it is in assets/: anything not
// listed is painted by code as a placeholder, so a missing file never breaks the game.
// Each file also gets an entry in assets/provenance.yaml.
//
// Sizes: one cell is any size, 64 px recommended. Every image is seen from straight above.
//   rooms.<card id>   a whole card, 12x12 cells (768x768 at 64 px), matching its map in rooms.js,
//                     with square corners (the game rounds them). Paint all 4 exits (cells 5-6
//                     of each side) as openings in the wall: the game fills each one with a door
//                     or with rubble. A list of paths gives variants; the seed picks one.
//   cards.back        the back of a main-deck card, 768x768: what a face-down card shows.
//   cards.back_boss   the back of the boss-deck card, 768x768.
//   doors.closed / doors.open
//                     2x1 cells (128x64): the half of a door that sits in one card's exit,
//                     painted for a north exit (top edge = the card's edge). The game turns it
//                     for the other sides; the threshold across the gap is drawn by the game.
//   props.rubble      2x1 cells (128x64): fallen stone filling an exit that leads nowhere,
//                     painted for a north exit like the doors.
//   props.chest / props.chest_open   1 cell.
//   units.<kind>      a figure seen from above, square, transparent background, centred on its
//                     cell and drawn 1.2 cells wide (the boss 2.2). Kinds: the heroes (flink,
//                     natwure, sombra, gorm, orla, kesh, morwen, mirko, velia, pip), tree,
//                     skeleton, goblin, rat, boss.
//   heroes.back       the back of the hero deck, 660x1024 (any size of that shape).
window.ART = {
  rooms: {
    // osario: 'assets/rooms/osario.png',
    // pilares: ['assets/rooms/pilares-1.png', 'assets/rooms/pilares-2.png'],
    // 'sala-07': 'assets/rooms/sala-07.png',
  },
  cards: {
    // back: 'assets/cards/back.png',
    // back_boss: 'assets/cards/back_boss.png',
  },
  doors: {
    // closed: 'assets/doors/closed.png',
    // open: 'assets/doors/open.png',
  },
  props: {
    // rubble: 'assets/props/rubble.png',
    // chest: 'assets/props/chest.png',
    // chest_open: 'assets/props/chest_open.png',
  },
  units: {
    // skeleton: 'assets/units/skeleton.png',
  },
  heroes: {
    back: 'assets/heroes/back.webp',
  },
};
