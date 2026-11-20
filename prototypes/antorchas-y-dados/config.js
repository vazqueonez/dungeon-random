// PROTOTYPE - NOT FOR PRODUCTION
// Question: ¿Es divertido coordinar 3 PA por héroe entre salas con niebla, dados y cartas con cooldown hasta llegar al jefe?
// Date: 2026-11-19
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  volume: { value: 0.5, min: 0, max: 1, step: 0.05 },

  // ---- Turn and dice ----
  ap_per_turn: { value: 3, min: 1, max: 6, step: 1 },          // action points per hero per turn
  cover_penalty: { value: 25, min: 0, max: 50, step: 5 },      // % hit lost per obstacle between attacker and target
  falloff_start: { value: 3, min: 1, max: 8, step: 1 },        // tiles before range starts to cost hit chance
  falloff_per_tile: { value: 5, min: 0, max: 15, step: 5 },    // % hit lost per tile beyond falloff_start
  miss_pity: { value: 15, min: 0, max: 30, step: 5 },          // % added per consecutive miss (heroes only)
  crit_on: { value: 20, min: 15, max: 21, step: 1 },           // d20 roll that doubles hero damage (21 = never)
  min_hit: { value: 10, min: 5, max: 50, step: 5 },            // % floor
  max_hit: { value: 95, min: 50, max: 100, step: 5 },          // % ceiling

  // ---- Heroes: the deck of 10 (design/heroes.md). Each player draws one. ----
  // hp · atk (damage on a hit) · def (each point takes 1 off every hit, min 1) · move (tiles per
  // move action) · range (tiles) · hit (% base, the d20)
  min_damage: { value: 1, min: 0, max: 3, step: 1 },           // the least a hit does after defence
  flink_hp: { value: 14, min: 4, max: 30, step: 1 },           // Flink el herrero
  flink_atk: { value: 4, min: 1, max: 10, step: 1 },
  flink_def: { value: 1, min: 0, max: 4, step: 1 },
  flink_move: { value: 3, min: 1, max: 7, step: 1 },
  flink_range: { value: 1, min: 1, max: 10, step: 1 },
  flink_hit: { value: 75, min: 30, max: 100, step: 5 },
  natwure_hp: { value: 10, min: 4, max: 30, step: 1 },         // Natwure
  natwure_atk: { value: 2, min: 1, max: 10, step: 1 },
  natwure_def: { value: 0, min: 0, max: 4, step: 1 },
  natwure_move: { value: 3, min: 1, max: 7, step: 1 },
  natwure_range: { value: 4, min: 1, max: 10, step: 1 },
  natwure_hit: { value: 75, min: 30, max: 100, step: 5 },
  sombra_hp: { value: 9, min: 4, max: 30, step: 1 },           // Sombra
  sombra_atk: { value: 3, min: 1, max: 10, step: 1 },
  sombra_def: { value: 0, min: 0, max: 4, step: 1 },
  sombra_move: { value: 4, min: 1, max: 7, step: 1 },
  sombra_range: { value: 3, min: 1, max: 10, step: 1 },
  sombra_hit: { value: 75, min: 30, max: 100, step: 5 },
  gorm_hp: { value: 18, min: 4, max: 30, step: 1 },            // Gorm el muro
  gorm_atk: { value: 3, min: 1, max: 10, step: 1 },
  gorm_def: { value: 2, min: 0, max: 4, step: 1 },
  gorm_move: { value: 2, min: 1, max: 7, step: 1 },
  gorm_range: { value: 1, min: 1, max: 10, step: 1 },
  gorm_hit: { value: 75, min: 30, max: 100, step: 5 },
  orla_hp: { value: 11, min: 4, max: 30, step: 1 },            // Hermana Orla
  orla_atk: { value: 2, min: 1, max: 10, step: 1 },
  orla_def: { value: 1, min: 0, max: 4, step: 1 },
  orla_move: { value: 3, min: 1, max: 7, step: 1 },
  orla_range: { value: 3, min: 1, max: 10, step: 1 },
  orla_hit: { value: 70, min: 30, max: 100, step: 5 },
  kesh_hp: { value: 10, min: 4, max: 30, step: 1 },            // Kesh la cazadora
  kesh_atk: { value: 3, min: 1, max: 10, step: 1 },
  kesh_def: { value: 0, min: 0, max: 4, step: 1 },
  kesh_move: { value: 4, min: 1, max: 7, step: 1 },
  kesh_range: { value: 6, min: 1, max: 10, step: 1 },
  kesh_hit: { value: 80, min: 30, max: 100, step: 5 },
  morwen_hp: { value: 9, min: 4, max: 30, step: 1 },           // Morwen la hechicera
  morwen_atk: { value: 3, min: 1, max: 10, step: 1 },
  morwen_def: { value: 0, min: 0, max: 4, step: 1 },
  morwen_move: { value: 3, min: 1, max: 7, step: 1 },
  morwen_range: { value: 5, min: 1, max: 10, step: 1 },
  morwen_hit: { value: 75, min: 30, max: 100, step: 5 },
  mirko_hp: { value: 11, min: 4, max: 30, step: 1 },           // Mirko el tahúr
  mirko_atk: { value: 3, min: 1, max: 10, step: 1 },
  mirko_def: { value: 0, min: 0, max: 4, step: 1 },
  mirko_move: { value: 4, min: 1, max: 7, step: 1 },
  mirko_range: { value: 1, min: 1, max: 10, step: 1 },
  mirko_hit: { value: 75, min: 30, max: 100, step: 5 },
  velia_hp: { value: 12, min: 4, max: 30, step: 1 },           // Velia la farolera
  velia_atk: { value: 3, min: 1, max: 10, step: 1 },
  velia_def: { value: 1, min: 0, max: 4, step: 1 },
  velia_move: { value: 3, min: 1, max: 7, step: 1 },
  velia_range: { value: 2, min: 1, max: 10, step: 1 },
  velia_hit: { value: 75, min: 30, max: 100, step: 5 },
  pip_hp: { value: 10, min: 4, max: 30, step: 1 },             // Pip la ganzúa
  pip_atk: { value: 2, min: 1, max: 10, step: 1 },
  pip_def: { value: 0, min: 0, max: 4, step: 1 },
  pip_move: { value: 4, min: 1, max: 7, step: 1 },
  pip_range: { value: 1, min: 1, max: 10, step: 1 },
  pip_hit: { value: 80, min: 30, max: 100, step: 5 },

  // ---- Abilities: one per hero. Active ones cost AP and cool down for some of their own turns ----
  forge_on: { value: 15, min: 2, max: 21, step: 1 },           // Flink, Forja: d20 at turn start, this or more (21 = never)
  forge_shield: { value: 2, min: 1, max: 8, step: 1 },
  forge_range: { value: 3, min: 0, max: 8, step: 1 },          // to the most hurt hero this near, himself included
  tree_cost: { value: 2, min: 1, max: 3, step: 1 },            // Natwure, Árbol guardián
  tree_cd: { value: 3, min: 1, max: 6, step: 1 },
  tree_hp: { value: 2, min: 1, max: 10, step: 1 },
  tree_atk: { value: 2, min: 1, max: 8, step: 1 },
  tree_def: { value: 2, min: 0, max: 4, step: 1 },
  tree_hit: { value: 75, min: 30, max: 100, step: 5 },         // its swing at the end of the heroes' turn
  hands_cost: { value: 1, min: 1, max: 3, step: 1 },           // Orla, Imposición de manos
  hands_cd: { value: 1, min: 1, max: 6, step: 1 },
  hands_heal: { value: 4, min: 1, max: 12, step: 1 },
  hands_range: { value: 3, min: 1, max: 8, step: 1 },
  hands_revive_hp: { value: 1, min: 1, max: 10, step: 1 },     // a hero she raises comes back with this
  aimed_cost: { value: 1, min: 1, max: 3, step: 1 },           // Kesh, Tiro certero: ignores cover
  aimed_cd: { value: 2, min: 1, max: 6, step: 1 },
  aimed_bonus_dmg: { value: 2, min: 0, max: 8, step: 1 },
  chains_cost: { value: 2, min: 1, max: 3, step: 1 },          // Morwen, Cadenas arcanas: 3x3, always hits
  chains_cd: { value: 3, min: 1, max: 6, step: 1 },
  chains_dmg: { value: 2, min: 1, max: 8, step: 1 },
  chains_range: { value: 5, min: 2, max: 9, step: 1 },
  reroll_range: { value: 4, min: 0, max: 10, step: 1 },        // Mirko, Dedos ligeros: a failed d20 this near, once a round
  lantern_bonus: { value: 2, min: 0, max: 6, step: 0.5 },      // Velia, Farol: tiles of extra light; no cover inside it
  pip_tonics: { value: 2, min: 1, max: 4, step: 1 },           // Pip, Ganzúa: Tónicos per chest he opens

  // ---- Tónico (from chests) ----
  tonic_heal: { value: 6, min: 1, max: 15, step: 1 },          // drunk by its holder
  tonic_revive_hp: { value: 50, min: 10, max: 100, step: 10 }, // % of max HP a raised hero gets back

  // ---- Enemies ----
  skeleton_hp: { value: 6, min: 1, max: 20, step: 1 },
  skeleton_move: { value: 3, min: 1, max: 6, step: 1 },
  skeleton_dmg: { value: 3, min: 1, max: 10, step: 1 },
  skeleton_hit: { value: 70, min: 20, max: 100, step: 5 },
  goblin_hp: { value: 4, min: 1, max: 20, step: 1 },
  goblin_move: { value: 3, min: 1, max: 6, step: 1 },
  goblin_dmg: { value: 2, min: 1, max: 10, step: 1 },
  goblin_hit: { value: 70, min: 20, max: 100, step: 5 },
  goblin_range: { value: 5, min: 2, max: 9, step: 1 },
  rat_hp: { value: 3, min: 1, max: 12, step: 1 },
  rat_move: { value: 5, min: 1, max: 8, step: 1 },
  rat_dmg: { value: 2, min: 1, max: 8, step: 1 },
  rat_hit: { value: 65, min: 20, max: 100, step: 5 },
  enemy_sight: { value: 6, min: 2, max: 12, step: 1 },         // tiles, needs line of sight
  patrol_move: { value: 2, min: 0, max: 5, step: 1 },          // tiles per turn while patrolling
  extra_enemies_from: { value: 3, min: 1, max: 5, step: 1 },   // heroes needed for the extra enemies (5 = never)

  // ---- The dungeon: a table of 5x5 room cards of 12x12, dealt from the seed ----
  extra_door_chance: { value: 30, min: 0, max: 100, step: 5 }, // % for each neighbour pair not already joined by the maze
  card_gap: { value: 40, min: 0, max: 160, step: 4 },          // world px of table between cards (a cell is 64)
  flip_time: { value: 0.6, min: 0.1, max: 2, step: 0.05 },     // seconds a card takes to turn face up
  room_enemies_min: { value: 1, min: 0, max: 5, step: 1 },     // enemies in an ordinary room
  room_enemies_max: { value: 2, min: 0, max: 6, step: 1 },
  extra_enemy_chance: { value: 35, min: 0, max: 100, step: 5 }, // % a room gets one more, with extra_enemies_from heroes
  spawn_skeleton: { value: 45, min: 0, max: 100, step: 5 },    // weights for which enemy appears
  spawn_goblin: { value: 25, min: 0, max: 100, step: 5 },
  spawn_rat: { value: 30, min: 0, max: 100, step: 5 },
  chest_chance: { value: 35, min: 0, max: 100, step: 5 },      // % an ordinary room holds a chest
  boss_escorts: { value: 2, min: 0, max: 6, step: 1 },         // +1 with extra_enemies_from heroes

  // ---- Light ----
  ambient_light: { value: 0.3, min: 0, max: 1, step: 0.05 },   // how much of a lit room shows away from any light
  torch_radius: { value: 5.5, min: 2, max: 10, step: 0.5 },    // tiles
  hero_light_radius: { value: 3.5, min: 1, max: 8, step: 0.5 }, // tiles

  // ---- El Carcelero (boss) ----
  boss_hp: { value: 24, min: 6, max: 80, step: 2 },
  boss_hp_per_hero: { value: 6, min: 0, max: 20, step: 1 },
  boss_slam_dmg: { value: 6, min: 1, max: 15, step: 1 },       // marked 3x3 area, lands next enemy turn
  boss_chain_dmg: { value: 4, min: 1, max: 12, step: 1 },      // swipe at an adjacent hero, rolled
  boss_hit: { value: 75, min: 20, max: 100, step: 5 },
  boss_sight: { value: 7, min: 2, max: 12, step: 1 },
  boss_rage_at: { value: 50, min: 0, max: 100, step: 10 },     // % HP at which it marks two areas

  // ---- Pace and view ----
  anim_speed: { value: 7, min: 2, max: 20, step: 1 },          // tiles per second for moving figures
  enemy_pause: { value: 0.35, min: 0.05, max: 1.5, step: 0.05 }, // seconds after each enemy acts
  fast_forward: { value: 3, min: 1, max: 8, step: 0.5 },       // enemy turn speed while Space or F is held
  cam_pan_speed: { value: 700, min: 200, max: 1600, step: 50 }, // screen px per second
  zoom_start: { value: 0.8, min: 0.3, max: 1.6, step: 0.05 },
  minimap_size: { value: 150, min: 80, max: 260, step: 10 },   // screen px
};
