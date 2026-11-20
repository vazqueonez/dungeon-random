# Asset Specs — System: mazo-de-heroes

> **Source**: descripción del diseñador (2026-11-20). No hay GDD: en el modo `minimal` el registro es `design/game-brief.md`. Robar héroe sustituye a elegir clase; el mazo tiene 10 héroes, de los que hay 3 de ejemplo (`references/heroes/`).
> **Art Bible**: design/art/art-bible.md (secciones 1-4 y 7; la 8 no está escrita)
> **Generated**: 2026-11-20 · **Updated**: 2026-11-20 (marco y figura de Flink recibidos; Flink recortada y la carta compuesta en el juego)
> **Status**: 13 assets specced / 0 approved / 0 in production / 3 done

**Cómo se hizo:** en modo solo, sin el director de arte ni el artista técnico. Las restricciones técnicas no las ha validado un especialista. Tamaños y formatos salen de lo que ya usa `prototypes/antorchas-y-dados/art.js` y de las referencias; cuando se escriba la sección 8 del art bible, hay que revisarlos.

**Convenciones comunes:**
- Ficheros PNG (o WebP, como el dorso que se pasó) con nombre en kebab-case (`naming.files`), dentro de `assets/heroes/`.
- Cada fichero lleva su entrada en `assets/provenance.yaml`.
- Ninguna imagen lleva texto pintado: el juego escribe nombres y reglas (art bible §1, principio 2).

**Fuera de este encargo:**
- Los otros 7 héroes: se encargan cuando tengan nombre y habilidad, con una figura (patrón de ASSET-006) y una ficha (patrón de ASSET-009).
- **Las cartas de héroe se componen, no se pintan una a una (decisión del 2026-11-20):** todas usan el marco de ASSET-002; el texto va arriba (título) y abajo (habilidad pasiva); en el centro, la figura que pasa el diseñador. Vida, Ataque, Defensa, Mover, Alcance y Acierto no van en la carta (se ven en la placa del grupo). La línea «No puede usar…» queda fuera hasta que haya equipo. Cómo se compone: ASSET-013.
- El retrato de la placa del grupo: el juego lo recorta de la figura.
- El robo y el volteo de carta: los anima el código.

## ASSET-001 — Dorso del mazo de héroes

| Field | Value |
|-------|-------|
| Category | UI |
| Dimensions | 660×1024 px (proporción ~0,65) |
| Format | PNG |
| Naming | `assets/heroes/back.png` |

**Visual Description:**
Losa de piedra beige agrietada con un nudo celta en relieve en el centro. Las esquinas son de cuero teñido con remaches de latón y costuras, y el borde lleva tiras de cuero. Es `references/heroes/dorso.webp`, exportado a este tamaño.

**Art Bible Anchors:**
- §3 Formas: carta, rectángulo de esquinas redondeadas (las redondea el juego).
- §4 Color: cuero `#7a3f22`, latón `#ffd76e`.

**Generation Prompt:**
No hace falta: se exporta la referencia del diseñador.

**Status:** Needed

## ASSET-002 — Marco de carta de héroe, vacío

| Field | Value |
|-------|-------|
| Category | UI |
| Dimensions | 658×1024 px (recibido así; el dorso mide 660×1024, la diferencia de 2 px no se nota: el juego escala los dos al mismo tamaño) |
| Format | WebP |
| Naming | `assets/heroes/frame.webp` |

**Visual Description:**
- El marco único de todas las cartas de héroe, ya pintado y entregado por el diseñador: hierro oscuro y cuero con esquinas reforzadas y remaches, una antorcha encendida a cada lado y una gema azul en rombo en lo alto de la placa del título.
- Tres zonas vacías y lisas, sobre las que el juego escribe y dibuja (§7):
  - una placa gris azulada arriba, para el título;
  - una ventana de pergamino grande en el centro, para la figura;
  - una caja de pergamino abajo, para la habilidad pasiva.
- Medidas aproximadas, a ojo sobre el fichero (hay que afinarlas midiendo al implementarlo):

| Zona | x0,y0 → x1,y1 | Contenido |
|---|---|---|
| Título | `130,55 → 535,120` | nombre en mayúsculas, una línea, centrado |
| Figura | `97,140 → 560,665` | la figura, entera, apoyada abajo, centrada |
| Habilidad pasiva | `85,705 → 580,925` | descripción, centrada o a la izquierda, 3–5 líneas |

- Las antorchas y las esquinas quedan fuera de las tres zonas; ningún texto ni figura debe tocarlas.

**Art Bible Anchors:**
- §3 Formas: marco con esquinas de metal y remaches, placa para el título, caja de pergamino con esquinas interiores recortadas, gema en rombo.
- §4 Color: pergamino `#e6d2ae` (el real es algo más oscuro y manchado), cuero `#7a3f22`, latón `#ffd76e`.
- §7 Interfaz: carta de héroe; texto sobre zona lisa; mínimo 16 px a 1280×720, así que la caja de abajo se escribe a 16 px como mínimo cuando la carta se ve ampliada.

**Generation Prompt:**
No hace falta: es el fichero del diseñador. Si hubiera que rehacerlo, el marco anterior de esta spec sirve de base (hierro y cuero, antorchas, gema en rombo, tres zonas vacías) con la placa del título en gris azulado.

**Status:** Done (recibido; falta medir las zonas con precisión al implementar)

## ASSET-003 — Icono de dado (condición de tirada)

| Field | Value |
|-------|-------|
| Category | UI (icono) |
| Dimensions | 64×64 px, fondo transparente; se ve a 16-20 px |
| Format | PNG |
| Naming | `assets/heroes/icons/dice.png` |

**Visual Description:**
Grabado de línea de un solo grosor, sin relleno: un dado de seis caras en vista de tres cuartos. Tinta `#2b1d14` sobre pergamino; el juego lo tiñe de dorado `#ffd76e` sobre piedra. Va delante del texto de condición de dado.

**Art Bible Anchors:**
- §7 Interfaz: iconos de grabado, un solo grosor, nunca emoji.
- §4 Color: respaldo para daltónicos de la tinta verde `#2f6b2a`.

**Generation Prompt:**
Single engraved line icon, six-sided die in three-quarter view, uniform stroke weight, no fill, dark ink #2b1d14, transparent background, centred, clean silhouette readable at 16 px, woodcut / engraving style.
Negative: colour fills, gradients, 3D render, emoji, shadow, text.

**Status:** Needed

## ASSET-004 — Icono de prohibido (restricción)

| Field | Value |
|-------|-------|
| Category | UI (icono) |
| Dimensions | 64×64 px, fondo transparente; se ve a 16-20 px |
| Format | PNG |
| Naming | `assets/heroes/icons/forbidden.png` |

**Visual Description:**
Grabado de línea de un solo grosor, sin relleno: un círculo con barra diagonal. Mismo tratamiento de tinta que ASSET-003. Va delante del texto de restricción.

**Art Bible Anchors:**
- §7 Interfaz: iconos de grabado.
- §4 Color: respaldo para daltónicos de la tinta roja `#7a1c1c`.

**Generation Prompt:**
Single engraved line icon, prohibition circle with a diagonal bar, uniform stroke weight, no fill, dark ink #2b1d14, transparent background, centred, clean silhouette readable at 16 px, woodcut / engraving style.
Negative: colour fills, gradients, 3D render, emoji, shadow, text.

**Status:** Needed

## ASSET-005 — Icono de gema (coste)

| Field | Value |
|-------|-------|
| Category | UI (icono) |
| Dimensions | 64×64 px, fondo transparente; se ve a 16-20 px |
| Format | PNG |
| Naming | `assets/heroes/icons/gem.png` |

**Visual Description:**
Grabado de línea de un solo grosor: un rombo facetado. Mismo tratamiento de tinta que ASSET-003. Marca los costes (por ejemplo, el de Natwure).

**Art Bible Anchors:**
- §3 Formas: el rombo se reserva para valores y recursos.
- §7 Interfaz: iconos de grabado.

**Generation Prompt:**
Single engraved line icon, faceted rhombus gem, uniform stroke weight, no fill, dark ink #2b1d14, transparent background, centred, clean silhouette readable at 16 px, woodcut / engraving style.
Negative: colour fills, gradients, 3D render, emoji, shadow, text.

**Status:** Needed

## ASSET-006 — Figura de carta: Flink el herrero

| Field | Value |
|-------|-------|
| Category | Sprite 2D |
| Dimensions | recibida a 1117×1409 px (proporción ~0,79); cabe entera en la ventana de ASSET-002, que mide ~463×525 |
| Format | WebP con transparencia (el original llegó como WebP sin canal alfa) |
| Naming | `assets/heroes/figures/flink.webp`; el original sin recortar se guarda como `flink-uncut.webp` |

**Visual Description:**
- Herrero enano corpulento, de frente, con el martillo grande al hombro. Mandil de cuero, gafas de forja en la frente y barba pelirroja.
- Rasgo dominante: la cabeza del martillo, con brasas dentro. Hay un cuenco de fuego en el cinto.
- Acento naranja fuego `#ff7a1f` en las brasas; contorno de tinta grueso.

**Recortada el 2026-11-20:** `assets/heroes/figures/flink.webp` (938×1404, WebP con alfa real), sacada de `flink-uncut.webp` borrando el tablero pintado desde los bordes; en el juego, `assets/heroes/flink.webp`.

**Estado del fichero recibido (antes del recorte):** `assets/heroes/figures/flink-uncut.webp` **no tenía transparencia**: el tablero gris y blanco del «fondo transparente» está pintado dentro de la imagen (el WebP lleva solo datos de color, sin canal alfa). Hay que recortar el fondo antes de usarla, con un quitafondos o volviendo a generarla sobre un fondo liso de un solo color. Mientras tanto no está lista.

**Art Bible Anchors:**
- §3 Formas: Flink, cuadrado y ancho, rasgo el martillo; los héroes llevan contorno grueso.
- §4 Color: color reservado `#ff7a1f`.

**Generation Prompt:**
Plan B si el recorte falla. Full-body fantasy character illustration, front view, standing, stout dwarf blacksmith with a red beard and forge goggles on his forehead, leather apron and tool belt, a heavy forge hammer on his shoulder with a glowing orange-hot head (#ff7a1f embers). Square, wide, grounded silhouette. Hand-painted, bold dark ink outline, warm light, on a plain flat single-colour background (pure #00ff00) so it can be cut out cleanly, centred, whole figure in frame.
Negative: checkerboard pattern, fake transparency, text, frame, scenery, cropped limbs, extra characters.

**Status:** Done

## ASSET-007 — Figura de carta: Natwure

| Field | Value |
|-------|-------|
| Category | Sprite 2D |
| Dimensions | las figuras las pasa el diseñador: unos 1100×1400 px, proporción ~0,79, como la de Flink (ASSET-006) |
| Format | WebP o PNG con transparencia real (comprobar que lleva canal alfa antes de aceptarla) |
| Naming | `assets/heroes/figures/natwure.webp` |

**Visual Description:**
- Druida con astas, de frente y alargado en vertical, con un manto de hojas.
- Lleva un bastón de raíces coronado por un orbe verde, y magia verde hoja `#5fd13a` le brota de la mano.
- Silueta asimétrica. Rasgo dominante: las astas y el bastón por encima de la cabeza.

**Art Bible Anchors:**
- §3 Formas: Natwure, vertical, orgánico y asimétrico.
- §4 Color: color reservado `#5fd13a`.

**Generation Prompt:**
Full-body fantasy character illustration, front view, standing, elf druid with small antlers, cloak of green leaves, holding a tall gnarled root staff topped with a glowing green orb, green leaf magic swirling from his open hand (#5fd13a). Tall, organic, asymmetric silhouette with antlers and staff above the head. Hand-painted, bold dark ink outline, soft ground shadow, transparent background, centred, whole figure in frame.
Negative: text, frame, background scenery, cropped staff, extra characters.

**Status:** Needed

## ASSET-008 — Figura de carta: Sombra

| Field | Value |
|-------|-------|
| Category | Sprite 2D |
| Dimensions | las figuras las pasa el diseñador: unos 1100×1400 px, proporción ~0,79, como la de Flink (ASSET-006) |
| Format | WebP o PNG con transparencia real (comprobar que lleva canal alfa antes de aceptarla) |
| Naming | `assets/heroes/figures/sombra.webp` |

**Visual Description:**
- Espectro encapuchada que levita sin pies, con ropa púrpura `#5a3a8c` y calaveras en los hombros.
- Fuego azul espectral `#7fd4ff` en las manos.
- Rasgo dominante: forma de gota invertida y una cola espectral que se deshace hacia abajo.
- Su sombra queda separada del suelo: flota.

**Art Bible Anchors:**
- §3 Formas: Sombra, gota invertida, sin pies, sombra despegada del suelo.
- §4 Color: pareja reservada `#7fd4ff` sobre `#5a3a8c`.

**Generation Prompt:**
Full-body fantasy character illustration, front view, floating hooded female wraith, no feet, robes in purple (#5a3a8c) with small skull pauldrons, lower body dissolving into a wispy spectral tail, pale blue spectral flames (#7fd4ff) in both open hands. Inverted teardrop silhouette. Hand-painted, bold dark ink outline, a soft shadow on the ground detached below her, transparent background, centred, whole figure in frame.
Negative: text, frame, feet, background scenery, cropped tail, extra characters.

**Status:** Needed

## ASSET-009 — Ficha del tablero: Flink

| Field | Value |
|-------|-------|
| Category | Sprite 2D |
| Dimensions | 256×256 px, fondo transparente; se dibuja a 1,2 casillas |
| Format | PNG |
| Naming | `assets/heroes/tokens/flink.png` (en `art.js`: `units.flink`) |

**Visual Description:**
- Flink visto desde arriba, como todo el tablero, centrado y compacto.
- Rasgo dominante: el martillo, como un bloque al final de una línea.
- Contorno de tinta grueso. El anillo con su color reservado lo dibuja el juego debajo: no se pinta.
- Tiene que distinguirse rellena de negro a 800x450.

**Art Bible Anchors:**
- §3 Formas: prueba del negro; los héroes llevan contorno grueso.
- §4 Color: `#ff7a1f` solo como acento.

**Generation Prompt:**
Top-down view of a stout dwarf blacksmith with a glowing hammer, seen straight from above for a tabletop dungeon board, centred, compact, the hammer clearly readable in the silhouette, hand-painted, bold dark ink outline, transparent background.
Negative: front view, perspective, floor, base, ring, text, shadow cast sideways.

**Status:** Needed

## ASSET-010 — Ficha del tablero: Natwure

| Field | Value |
|-------|-------|
| Category | Sprite 2D |
| Dimensions | 256×256 px, fondo transparente; se dibuja a 1,2 casillas |
| Format | PNG |
| Naming | `assets/heroes/tokens/natwure.png` (en `art.js`: `units.natwure`) |

**Visual Description:**
- Natwure visto desde arriba.
- Rasgo dominante: las astas y el bastón.
- Mismas reglas que ASSET-009.

**Art Bible Anchors:**
- §3 Formas: prueba del negro.
- §4 Color: `#5fd13a` solo como acento.

**Generation Prompt:**
Top-down view of an antlered elf druid with a root staff and a glowing green orb, seen straight from above for a tabletop dungeon board, centred, compact, antlers and staff clearly readable in the silhouette, hand-painted, bold dark ink outline, transparent background.
Negative: front view, perspective, floor, base, ring, text, shadow cast sideways.

**Status:** Needed

## ASSET-011 — Ficha del tablero: Sombra

| Field | Value |
|-------|-------|
| Category | Sprite 2D |
| Dimensions | 256×256 px, fondo transparente; se dibuja a 1,2 casillas |
| Format | PNG |
| Naming | `assets/heroes/tokens/sombra.png` (en `art.js`: `units.sombra`) |

**Visual Description:**
- Sombra vista desde arriba.
- Rasgo dominante: la capucha y la cola espectral.
- Mismas reglas que ASSET-009.

**Art Bible Anchors:**
- §3 Formas: prueba del negro.
- §4 Color: `#7fd4ff` sobre `#5a3a8c` como acento.

**Generation Prompt:**
Top-down view of a floating hooded purple wraith with a wispy pale blue spectral tail, seen straight from above for a tabletop dungeon board, centred, compact, hood and tail clearly readable in the silhouette, hand-painted, bold dark ink outline, transparent background.
Negative: front view, perspective, floor, base, ring, text, shadow cast sideways.

**Status:** Needed

## ASSET-012 — Ficha del tablero: árbol invocado de Natwure

| Field | Value |
|-------|-------|
| Category | Sprite 2D |
| Dimensions | 256×256 px, fondo transparente; se dibuja a 1,2 casillas |
| Format | PNG |
| Naming | `assets/heroes/tokens/natwure-tree.png` (en `art.js`: `units.natwure_tree`) |

**Visual Description:**
- Árbol pequeño y retorcido visto desde arriba: copa de hojas verde `#5fd13a` sobre raíces que se abren en el suelo.
- Es un invocado, no un héroe: lleva contorno más fino que las fichas de héroe.

**Art Bible Anchors:**
- §3 Formas: lo secundario, con contorno más fino.
- §4 Color: el verde de Natwure lo une a quien lo invoca.

**Generation Prompt:**
Top-down view of a small gnarled living tree for a tabletop dungeon board, round leafy canopy in leaf green (#5fd13a) with roots spreading on the ground, hand-painted, thin dark ink outline, transparent background, centred.
Negative: front view, pot, base, text, background.

**Status:** Needed

## ASSET-013 — Composición de la carta de héroe

| Field | Value |
|-------|-------|
| Category | UI |
| Dimensions | 658×1024 px de carta; se muestra a 330×512 en la placa ampliada y a un tamaño mayor en la pantalla de robo |
| Format | dibujada por el juego sobre ASSET-002; no es un fichero |
| Naming | `drawHeroCard(id)` en el juego; la figura de cada héroe es `heroes.<id>` en `art.js` y el texto, `desc` en `HEROES` |

**Visual Description:**
- Una carta se compone de tres cosas que da el diseñador: **título**, **descripción** (habilidad pasiva) e **imagen** (la figura).
- Capas, de abajo arriba: marco (ASSET-002), figura en su ventana, título en la placa, descripción en la caja.
- **Figura:** se escala para que quepa entera en la ventana (modo «contain»), centrada y apoyada en el borde de abajo; con una sombra suave bajo los pies. Nunca se recorta.
- **Título:** mayúsculas, una línea, centrado en la placa, tinta clara `#f4e6c4` sobre gris azulado; si no cabe, se reduce hasta 16 px y no se parte en dos líneas.
- **Descripción:** tinta `#2b1d14` sobre el pergamino, a 16 px como mínimo, partida en líneas por el juego dentro de la caja; sin texto pintado en las imágenes.
- No hay estadísticas ni línea de restricción en la carta (decisión del 2026-11-20). La línea «No puede usar…» vuelve cuando haya equipo.

**Ejemplo recibido (Flink el herrero):**
- Título: `FLINK EL HERRERO`
- Descripción: «Lanza un dado en cada turno. Si sale 5 ó 6 reparas una pieza de equipo a ti o a otro héroe.»
- Imagen: ASSET-006.
- **Pendiente de alinear con el juego:** hoy Forja usa el d20 y da escudo (`design/heroes.md`); la descripción del diseñador habla de un dado de 6 y de equipo, que están aparcados. Cuando exista el equipo, Forja pasa a lo que dice la carta; hasta entonces la carta va por delante del juego.

**Art Bible Anchors:**
- §1 principio 2: todo es un objeto sobre la mesa; el texto lo escribe el juego.
- §4 Color: tinta `#2b1d14`, pergamino `#e6d2ae`.
- §7 Interfaz: texto mínimo de 16 px a 1280×720.

**Generation Prompt:**
No aplica: la carta no se genera con IA, la compone el juego.

**En el juego (iteración 5):** un título que a 16 px sigue sin caber se estrecha en horizontal (le pasa a MORWEN LA HECHICERA). Los héroes sin figura pintada llevan la de código.

**Status:** Done
