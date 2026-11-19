// PROTOTYPE - NOT FOR PRODUCTION
// Question: ¿Es divertido coordinar 3 PA por héroe entre salas con niebla, dados y cartas con cooldown hasta llegar al jefe?
// Date: 2026-11-19
//
// The painted art the game uses. List a file here only once it is in assets/: anything not
// listed is painted by code as a placeholder, so a missing file never breaks the game.
// Each file also gets an entry in assets/provenance.yaml.
//
// Sizes: one cell is any size, 64 px recommended. Every image is seen from straight above.
//   rooms.<template>  a whole 12x12-cell room (768x768 at 64 px), matching its map in rooms.js.
//                     A list of paths gives variants; each room picks one by the seed.
//                     Paint the doorways (cells 5-6 of each side) as plain wall.
//   doors.closed / doors.open
//                     2x2 cells (128x128), a doorway in a north or south wall: two cells wide,
//                     the passage running top to bottom across both rooms' walls. The game turns
//                     it 90 degrees for east and west walls.
//   props.chest / props.chest_open   1 cell.
//   units.<kind>      a figure seen from above, square, transparent background, centred on its
//                     cell and drawn 1.2 cells wide (the boss 2.2). Kinds: warrior, mage, healer,
//                     archer, skeleton, goblin, rat, boss.
window.ART = {
  rooms: {
    // osario: 'assets/rooms/osario.png',
    // pilares: ['assets/rooms/pilares-1.png', 'assets/rooms/pilares-2.png'],
  },
  doors: {
    // closed: 'assets/doors/closed.png',
    // open: 'assets/doors/open.png',
  },
  props: {
    // chest: 'assets/props/chest.png',
    // chest_open: 'assets/props/chest_open.png',
  },
  units: {
    // skeleton: 'assets/units/skeleton.png',
  },
};
