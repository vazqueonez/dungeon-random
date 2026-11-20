# Héroes — Antorchas y Dados

> **Estado:** Aprobado 2026-11-20 (modo solo)
> **Sustituye a:** las 4 clases del brief (Guerrero, Mago, Curandero, Arquero)
> **Arte:** `design/art/art-bible.md` §3–4 y §7 · `design/assets/specs/mazo-de-heroes-assets.md`
> **Números:** propuestas para ajustar tras jugar; al implementarlos van a `config.js`.

## Reglas comunes

- **Robo:** al empezar la partida, cada jugador roba una carta del mazo de 10 héroes. No se repiten, y se juega con el héroe robado: no se puede devolver para robar otro.
- **Estadísticas:**
  - **Ataque:** el daño que hace al acertar.
  - **Defensa:** cada punto resta 1 de daño. El daño mínimo de un golpe es 1.
  - **Vida.**
  - **Mover:** casillas por cada PA.
  - **Alcance.**
  - **Acierto:** la probabilidad base del d20. La cobertura y la distancia la bajan.
- **Ataque con dados:** acertar o fallar sale del d20. Más adelante, las armas subirán la probabilidad de acertar con los dados.
- **Habilidad:** cada héroe tiene una. Las activas cuestan PA y tienen enfriamiento; las pasivas siempre están.
- **Restricción de equipo:** la línea roja de la carta («No puede usar…») se escribe ya, pero no cuenta hasta que exista el equipo.
- **Fuera por ahora:** equipo, gemas, trampas y el d6. Las habilidades que los usaban están adaptadas a los sistemas actuales: d20, PA, enfriamiento, escudo, Tónicos, cobertura, puertas y volteo de cartas.
- **Colores:** cada héroe tiene uno reservado, según el art bible §4. Son propuestas hasta pasar la tabla de daltonismo.

## Tabla

| # | Héroe | Papel | Vida | Atq | Def | Mover | Alcance | Acierto | Color | Restricción |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Flink el herrero | Apoyo resistente | 14 | 4 | 1 | 3 | 1 | 75 % | naranja fuego `#ff7a1f` | — |
| 2 | Natwure | Invocador | 10 | 2 | 0 | 3 | 4 | 75 % | verde hoja `#5fd13a` | No puede usar Espadas |
| 3 | Sombra | Exploradora | 9 | 3 | 0 | 4 | 3 | 75 % | azul espectral `#7fd4ff` / púrpura `#5a3a8c` | — |
| 4 | Gorm el muro | Tanque | 18 | 3 | 2 | 2 | 1 | 75 % | cobre | No puede usar Arcos |
| 5 | Hermana Orla | Curandera | 11 | 2 | 1 | 3 | 3 | 70 % | plata | — |
| 6 | Kesh la cazadora | Tiradora | 10 | 3 | 0 | 4 | 6 | 80 % | turquesa | No puede usar Armaduras pesadas |
| 7 | Morwen la hechicera | Control en área | 9 | 3 | 0 | 3 | 5 | 75 % | lila | — |
| 8 | Mirko el tahúr | Manipula dados | 11 | 3 | 0 | 4 | 1 | 75 % | magenta | — |
| 9 | Velia la farolera | Luz y cobertura | 12 | 3 | 1 | 3 | 2 | 75 % | amarillo limón | — |
| 10 | Pip la ganzúa | Puertas y cofres | 10 | 2 | 0 | 4 | 1 | 80 % | blanco hueso | — |

## Habilidades

1. **Flink, Forja** (pasiva). Al empezar su turno tira el d20. Con 15 o más (30 %) da 2 de escudo a sí mismo o a un aliado a 3 casillas o menos.
   - Adapta «reparar equipo con 5 o 6» de su carta.
   - **Decisión del 2026-11-20:** la carta de Flink lleva el texto del diseñador («Lanza un dado en cada turno. Si sale 5 ó 6 reparas una pieza de equipo a ti o a otro héroe»). Cuando exista el equipo, Forja pasa a ser esto; hasta entonces el juego sigue con el d20 y el escudo de arriba.
2. **Natwure, Árbol guardián** (activa: 2 PA, enfriamiento de 3 turnos). Invoca un árbol en una casilla libre a su lado.
   - El árbol tiene Ataque 2, Defensa 2 y Vida 2, y no se mueve.
   - Los enemigos que puedan alcanzarlo van a por él hasta que muere.
   - Al final del turno de los héroes golpea a un enemigo a su lado.
   - Adapta el coste en gema a PA y enfriamiento; volverá a la gema cuando existan.
3. **Sombra, Incorpórea** (pasiva). Al moverse puede atravesar muros, pero no puede terminar dentro de uno.
   - Si cruza a una carta boca abajo, la carta se gira, igual que al abrir una puerta.
   - Los muros siguen tapándole la vista.
   - «No pisa trampas» se escribe en la carta y contará cuando haya trampas.
4. **Gorm, Escudo humano** (pasiva). Una vez por turno enemigo, si un aliado a su lado va a recibir daño, lo recibe Gorm en su lugar, y cuenta su defensa.
5. **Orla, Imposición de manos** (activa: 1 PA, enfriamiento de 1 turno). Cura 4 a un aliado a 3 o menos, o a sí misma.
   - También puede levantar a un derribado sin Tónico; vuelve con 1 de vida.
6. **Kesh, Tiro certero** (activa: 1 PA, enfriamiento de 2 turnos). Un ataque que ignora la cobertura y hace +2 de daño.
7. **Morwen, Cadenas arcanas** (activa: 2 PA, enfriamiento de 3 turnos). Elige un área de 3x3 a la vista y a 5 o menos.
   - Hace 2 de daño a los enemigos del área y siempre acierta.
   - Los alcanzados no se mueven en su próximo turno.
8. **Mirko, Dedos ligeros** (pasiva). Una vez por ronda repite una tirada del d20, suya o de un aliado a 4 o menos, y se queda la segunda.
9. **Velia, Farol** (pasiva). Su luz llega 2 casillas más lejos, y los enemigos dentro de su luz no reciben cobertura.
10. **Pip, Ganzúa** (pasiva). Abrir puertas y cofres no le cuesta PA, y los cofres que abre dan 2 Tónicos en vez de 1.

## Consecuencia de diseño

Ya no hay curandera asegurada. Si no sale Orla, curar depende de los Tónicos, Flink y Pip, y eso hace que el robo importe.

## Pendiente

- Specs de arte (figura y ficha) para los 7 héroes nuevos: `/asset-spec`.
- Llevarlo al prototipo: robar del mazo en lugar de elegir clase, la pantalla de la carta robada y las placas en el panel del grupo.
