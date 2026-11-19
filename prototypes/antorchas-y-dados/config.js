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

  // ---- Heroes ----
  warrior_hp: { value: 16, min: 6, max: 30, step: 1 },
  warrior_move: { value: 3, min: 1, max: 6, step: 1 },         // tiles per move action
  warrior_dmg: { value: 4, min: 1, max: 10, step: 1 },
  warrior_hit: { value: 80, min: 30, max: 100, step: 5 },      // % base hit
  warrior_range: { value: 1, min: 1, max: 3, step: 1 },        // tiles
  mage_hp: { value: 10, min: 4, max: 24, step: 1 },
  mage_move: { value: 3, min: 1, max: 6, step: 1 },
  mage_dmg: { value: 3, min: 1, max: 10, step: 1 },
  mage_hit: { value: 75, min: 30, max: 100, step: 5 },
  mage_range: { value: 5, min: 1, max: 9, step: 1 },
  healer_hp: { value: 12, min: 4, max: 24, step: 1 },
  healer_move: { value: 3, min: 1, max: 6, step: 1 },
  healer_dmg: { value: 2, min: 1, max: 8, step: 1 },
  healer_hit: { value: 75, min: 30, max: 100, step: 5 },
  healer_range: { value: 3, min: 1, max: 7, step: 1 },
  archer_hp: { value: 11, min: 4, max: 24, step: 1 },
  archer_move: { value: 4, min: 1, max: 7, step: 1 },
  archer_dmg: { value: 3, min: 1, max: 10, step: 1 },
  archer_hit: { value: 80, min: 30, max: 100, step: 5 },
  archer_range: { value: 6, min: 2, max: 10, step: 1 },

  // ---- Cards: cost in AP, cooldown in own turns ----
  charge_cost: { value: 1, min: 1, max: 3, step: 1 },          // Guerrero: Embestida
  charge_cd: { value: 2, min: 1, max: 6, step: 1 },
  charge_dmg: { value: 2, min: 0, max: 8, step: 1 },
  charge_push: { value: 2, min: 1, max: 4, step: 1 },          // tiles pushed
  charge_crash: { value: 3, min: 0, max: 8, step: 1 },         // extra damage when it hits a wall or unit
  charge_crash_other: { value: 2, min: 0, max: 8, step: 1 },   // damage to the enemy it is pushed into
  shout_cost: { value: 2, min: 1, max: 3, step: 1 },           // Guerrero: Grito de guardia
  shout_cd: { value: 3, min: 1, max: 6, step: 1 },
  shout_shield: { value: 3, min: 0, max: 10, step: 1 },
  shout_radius: { value: 5, min: 1, max: 10, step: 1 },        // tiles
  fireball_cost: { value: 2, min: 1, max: 3, step: 1 },        // Mago: Bola de fuego
  fireball_cd: { value: 3, min: 1, max: 6, step: 1 },
  fireball_dmg: { value: 4, min: 1, max: 10, step: 1 },
  fireball_range: { value: 5, min: 2, max: 9, step: 1 },
  blink_cost: { value: 1, min: 1, max: 3, step: 1 },           // Mago: Parpadeo
  blink_cd: { value: 2, min: 1, max: 6, step: 1 },
  blink_range: { value: 4, min: 2, max: 8, step: 1 },
  heal_cost: { value: 1, min: 1, max: 3, step: 1 },            // Curandero: Sanar
  heal_cd: { value: 1, min: 1, max: 6, step: 1 },
  heal_amount: { value: 5, min: 1, max: 12, step: 1 },
  heal_range: { value: 3, min: 1, max: 8, step: 1 },
  ward_cost: { value: 1, min: 1, max: 3, step: 1 },            // Curandero: Escudo de luz
  ward_cd: { value: 3, min: 1, max: 6, step: 1 },
  ward_shield: { value: 4, min: 1, max: 12, step: 1 },
  ward_range: { value: 3, min: 1, max: 8, step: 1 },
  aimed_cost: { value: 1, min: 1, max: 3, step: 1 },           // Arquero: Disparo certero
  aimed_cd: { value: 2, min: 1, max: 6, step: 1 },
  aimed_bonus_hit: { value: 10, min: 0, max: 40, step: 5 },
  aimed_bonus_dmg: { value: 2, min: 0, max: 8, step: 1 },
  volley_cost: { value: 2, min: 1, max: 3, step: 1 },          // Arquero: Lluvia de flechas
  volley_cd: { value: 3, min: 1, max: 6, step: 1 },
  volley_dmg: { value: 2, min: 1, max: 8, step: 1 },
  volley_range: { value: 6, min: 2, max: 10, step: 1 },

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
