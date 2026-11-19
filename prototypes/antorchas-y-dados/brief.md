# Game Brief: Antorchas y Dados *(guessed)*

## In your words

"Juego de tablero táctico co-op para 1-4 jugadores. Grid isométrico 10x10. Cada héroe tiene 3 PA (Puntos de Acción) por turno: mover (1 PA), atacar (1 PA), usar carta (1-2 PA). 4 clases: Guerrero, Mago, Curandero, Arquero. Enemigos con IA simple (patrulla → persigue → ataca). Cartas con cooldown. Objetivo: derrotar al jefe al final del nivel."

1. Azar: Azar será un juego con dados y azar, lo habitual
2. Jugadores: Será de 1-4 jugadores y se elegirán al principio de la partida, en el tablero habrá tantos héroes como jugadores jueguen, el bot solo manejará a los enemigos
3. Héroe caído: habitual, habrá objetos para levantar a un "derribado"
4. Sensación: si hay obstáculos habrá más probabilidad de fallar
5. Aspecto: habitual, además habra fog si no se ha abierto la puerta o no está en visión (como en demeo)
6. Dificultad: habitual, pero el tablero vamos a ponerlo con más grid (25x25) para que haya diferentes salas. Los heroes empezaran en las esquinas del tablero y el jefe final estará en el centro y no se moverá de su sala.
7. Rebanada o prueba: nivel completo para ver como funciona

After play: "cenital con imagenes pintadas B, pero un matiz importante. Vamos a cambiar el prototipo. La mazmorra consistirá en un tablero de 5 x 5 salas. Cada sala será un grid de 12x12. Yo iré completando los asset-spec y art-bible" · elegido: una imagen pintada por sala, muro dentro de los 12x12, conexiones aleatorias por semilla

**Pitch:** 1-4 héroes entran por las esquinas de una mazmorra a oscuras, abren puertas sala a sala con dados y cartas, y convergen en el centro para derribar a un jefe que no sale de su sala.

**Genre:** tactical RPG + co-op (hot-seat)

**Controls:** ratón: clic en héroe → ver alcance, clic en casilla → mover, clic en enemigo → atacar, clic en carta → usarla; Espacio = pasar turno, Tab = siguiente héroe *(guessed)*

**Question:** ¿Es divertido coordinar 3 PA por héroe entre salas con niebla, dados y cartas con cooldown hasta llegar al jefe?

**Hooks:** niebla que solo se levanta al abrir puertas o por visión; coberturas que bajan el acierto; 4 clases que se necesitan entre sí.

**Intent:** needs 1-4 players *(you said)*

## Look and references
- Look: mazmorra cenital pintada a mano (referencia: `references/mazmorra-cenital.webp`): losas de piedra gris cálido agrietadas, muros de bloques gruesos y claros con borde oscuro, ladrillo en las subsalas, huesos, calaveras y telarañas, luz cálida ámbar alrededor de antorchas y héroes. Cada sala es una imagen pintada de 12x12 casillas (`art.js` lista las que existen; las demás las pinta el código como sustituto). El arte lo definen `/art-bible` y `/asset-spec`. Antes *(provisional)*: enemigos en verdes y violetas enfermizos con contorno oscuro; cada héroe y enemigo con silueta propia (Guerrero con escudo, Mago con capucha puntiaguda, Curandero con báculo y halo, Arquero con arco). Niebla negro-azulada con brillo tenue sobre salas sin abrir. Firma: los círculos de luz de las antorchas empujan la niebla al abrir una puerta. Toda figura dibujada: sin emoji, sin círculos lisos.
- References: Demeo (niebla hasta abrir la puerta, tablero de mazmorra, dados), Into the Breach (intent enemigo marcado en el tablero).
- View: 2D cenital (vista desde arriba) *(you said)* · Camera: cenital con desplazamiento (WASD / arrastrar), zoom con rueda y minimapa que lleva a una sala; centra en el héroe activo

## First minute
Eliges cuántos jugadores (1-4) y la clase de cada uno. Tu héroe aparece en su esquina, con su sala iluminada y el resto en niebla. Clic en él: se iluminan las casillas que alcanza. Mueves (1 PA) hasta una puerta y la abres (1 PA): la niebla se retira y aparece un esqueleto patrullando. Con el último PA, el cursor sobre él muestra "62% · 3 daño" (hay un pilar en medio). Atacas: el dado rueda, aciertas. En el turno enemigo el esqueleto te ve, pasa a "persigue" y marca a quién golpeará. Ves tu carta en enfriamiento y la otra lista para el siguiente turno.

## Challenge
Primer combate serio hacia el turno 3, cuando dos salas abiertas sueltan a la vez un arquero goblin y esqueletos. Un héroe a 0 vida queda derribado: solo lo levanta un compañero con un Tónico (se encuentra en cofres). Si caen todos, se reinicia el nivel. El jefe espera en la sala central con escoltas, golpea en área y no sale de su sala *(provisional)*.

## Core loop
- En tu turno gastas 3 PA en moverte, abrir, atacar o jugar cartas (que entran en enfriamiento).
- Abrir puertas retira la niebla: aparecen enemigos y cofres con tónicos.
- Turno enemigo: patrullan, persiguen a quien ven y atacan, con el intent marcado.
- Limpiáis salas y avanzáis al centro; ganáis al derribar al jefe, perdéis si caen todos.

Skeleton: mover y atacar con dados es lo central; visión y niebla, cartas y cooldown, IA de patrulla, derribo y tónico, y el jefe son sistemas reales conectados entre sí.

Leads: tactics lleva el tablero, el alcance, las coberturas, los dados y el intent enemigo; co-op lleva quién mueve, los turnos compartidos y los derribos.

## Goal & fail state
- Ganar: derrotar al jefe en la sala central.
- Perder: todos los héroes derribados a la vez; el nivel se reinicia.

## Features
- [x] Selección de 1-4 jugadores y clase al empezar; un héroe por jugador en su esquina
- [x] Tablero cenital de 5x5 salas, cada una de 12x12 casillas con el muro en su anillo exterior (60x60); plantillas de sala en `rooms.js`; la semilla elige plantillas, puertas (un laberinto que une todas las salas, más puertas extra) y contenido; puertas en las casillas 5-6 de cada lado; niebla por sala *(you said)*
- [x] Minimapa de las 25 salas: abiertas, puertas vistas, héroes; clic para ir a una sala
- [x] 3 PA por héroe: mover (1), atacar (1), carta (1-2), abrir puerta (1) *(guessed)*
- [x] Dados con la probabilidad real mostrada; la cobertura baja el acierto; rachas de fallos suavizadas
- [x] 4 clases, 2 cartas cada una con cooldown en turnos
- [x] 3 enemigos (esqueleto cuerpo a cuerpo, arquero goblin a distancia, rata rápida) con patrulla → persigue → ataca e intent marcado, más el jefe inmóvil con ataque en área
- [x] Derribado → Tónico (en cofres) para levantarlo
- [x] Turno, héroe activo y objetivo ("Derrota al jefe") siempre en pantalla

## Your systems
- dados y azar · in the slice
- coberturas que bajan el acierto · in the slice
- niebla con puertas y visión · in the slice
- cartas con cooldown · in the slice
- IA enemiga patrulla → persigue → ataca · in the slice
- objetos para levantar a un derribado · in the slice
- selección de jugadores al principio · in the slice

## Keep
-

## Avoid
- El nombre, arte, personajes e interfaz de Demeo
- Bots controlando héroes: el bot solo maneja a los enemigos

## Out of scope
- Una campaña de varias mazmorras con historia: grow it
- Equipo y mejoras entre partidas: add it as a feature
- Clases con promociones: add it as a feature
- Fuego, lluvia o terreno elemental: change it after play
- Jugar con amigos en otro ordenador: hot-seat en la misma pantalla en su lugar (needs a server: not built yet)

## Build order
1. El nivel completo: mapa de 5x5 salas de 12x12 con puertas y niebla (antes 25x25 de 3x3 salas); héroes elegidos en las esquinas; PA, dados y coberturas; cartas; los 3 enemigos con su IA; derribo y tónicos; el jefe en el centro. Se gana al derrotarlo, se pierde si caen todos.
2. Ajustar números tras jugar (vida, daño, acierto, cooldowns) en config.js.

---
**Kill condition:** si recorrer las salas hasta el jefe resulta tedioso en vez de tenso tras dos rondas de ajuste. *(guessed)*

**Who it's for / what they feel:** amigos en el sofá (o uno solo) que quieren planear juntos y sentir el alivio de levantar a un compañero a tiempo. *(guessed)*

**Games you love / don't:** Demeo (la niebla y las puertas).
