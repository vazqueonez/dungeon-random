// PROTOTYPE - NOT FOR PRODUCTION
// Question: ¿Es divertido coordinar 3 PA por héroe entre salas con niebla, dados y cartas con cooldown hasta llegar al jefe?
// Date: 2026-11-19
//
// Room templates. The dungeon is 5x5 rooms; every room is 12x12 cells, seen from above.
// Each template is the layout a painted room image must match, cell for cell (art.js names the
// images). Legend:
//   #  wall: blocks movement and sight
//   .  floor
//   o  obstacle (pillar, rubble, bone pile): blocks movement, gives cover, does not block sight
//   t  wall with a torch: a wall that is also a light source
// Rules every template keeps (the game checks them at load and warns in the console):
//   - the outer ring (row 0, row 11, column 0, column 11) is wall (# or t);
//   - doorways are always cells 5 and 6 of each side. Paint them as wall: the game draws the
//     door (closed or open) over the wall where two rooms connect;
//   - the floor cells just inside each doorway ((5,1) (6,1), (5,10) (6,10), (1,5) (1,6),
//     (10,5) (10,6)) are floor, and every floor cell is reachable from them.
// `use`: start = the heroes' corner rooms, boss = the centre room, room = any other room.
window.ROOMS = {
  inicio: {
    name: 'la antecámara', use: 'start',
    map: [
      '##t######t##',
      '#..........#',
      '#..........#',
      '#...o......#',
      '#..........#',
      '#..........#',
      '#..........#',
      '#......o...#',
      '#..........#',
      '#..........#',
      '#..........#',
      '##t######t##',
    ],
  },
  jefe: {
    name: 'la sala del Carcelero', use: 'boss',
    map: [
      '###t####t###',
      '#..........#',
      '#.o......o.#',
      '#..........#',
      't..........t',
      '#..........#',
      '#..........#',
      't..........t',
      '#..........#',
      '#.o......o.#',
      '#..........#',
      '###t####t###',
    ],
  },
  pilares: {
    name: 'el salón de pilares', use: 'room',
    map: [
      '###t####t###',
      '#..........#',
      '#.o......o.#',
      't..........t',
      '#...o..o...#',
      '#..........#',
      '#..........#',
      '#...o..o...#',
      't..........t',
      '#.o......o.#',
      '#..........#',
      '###t####t###',
    ],
  },
  osario: {
    name: 'el osario', use: 'room',
    map: [
      '##t######t##',
      '#...#..#...#',
      '#.o.#..#.o.#',
      '#...#..#...#',
      '##.##..##.##',
      '#..........#',
      '#..........#',
      '##.##..##.##',
      '#...#..#...#',
      '#.o.#..#.o.#',
      '#...#..#...#',
      '##t######t##',
    ],
  },
  capilla: {
    name: 'la capilla', use: 'room',
    map: [
      '###t####t###',
      '#..........#',
      '#.##....##.#',
      '#.#......#.#',
      '#..........#',
      '#...o..o...#',
      '#...o..o...#',
      '#..........#',
      '#.#......#.#',
      '#.##....##.#',
      '#..........#',
      '###t####t###',
    ],
  },
  galeria: {
    name: 'la galería', use: 'room',
    map: [
      '##t######t##',
      '#..........#',
      '#.o.o..o.o.#',
      '#..........#',
      '#..........#',
      '#....oo....#',
      '#....oo....#',
      '#..........#',
      '#..........#',
      '#.o.o..o.o.#',
      '#..........#',
      '##t######t##',
    ],
  },
  derrumbe: {
    name: 'el derrumbe', use: 'room',
    map: [
      '###t####t###',
      '#..oo......#',
      '#..o.......#',
      '#......##..#',
      '#.o....#...#',
      '#..........#',
      '#..........#',
      '#...#....o.#',
      '#..##....oo#',
      '#..........#',
      '#..o.......#',
      '###t####t###',
    ],
  },
};
