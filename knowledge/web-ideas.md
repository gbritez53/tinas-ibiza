# Ideas para la web

## Estructura propuesta (one-page, bilingüe EN/ES)

1. **Hero** — foto/video de piscina (`DbK-RQ-O0RG`) o puerta ibicenca (`DUTKLHQCGLO`) + titular
   "There are *things* you shouldn't *worry* about." + CTA (WhatsApp / contacto).
2. **Manifiesto** — "One team. One *responsibility*." + párrafo de discreción/confianza.
3. **Servicios** — 10 cards estilo stories (foto oscura + título serif mayúsculas + línea vertical + ✳),
   agrupadas (ver `services.md`).
4. **Antes / Después** — slider con piscina verde → cristalina (`DWUIzLPiGEf_3/4` vs `_1/2`).
5. **Carrusel de Instagram (marquee)** — ver abajo.
6. **Sobre nosotros** — Luis y Rocío, visión, "como si fuera nuestra".
7. **Escasez / temporada** — "Quality over volume — only 2 new properties this season".
8. **Contacto** — teléfonos, email, WhatsApp, Instagram, "Ibiza, Balearic Islands".

## Sección "Instagram marquee" (pedido del cliente/usuario)

Referencia: dos filas de cards verticales 9:16 con esquinas redondeadas, desplazándose en loop infinito,
**cada fila en dirección opuesta**, sobre fondo oscuro.

Adaptación a TINAS:
- Fondo `#0E3636` (verde de marca) en lugar de negro.
- **Fila 1 (→ izquierda):** piezas de marca con titular (`DUjC4JuiHDi`, `DUoZzBwjuMZ`, `DUtDy7ACO82_*`,
  `DUV1LK2iIjG`, `DUYiu2hiIoP`, `DWojVYBiFfL`, `DU1BF7fiAUy`).
- **Fila 2 (→ derecha):** trabajos reales (piscinas, apartamento, carpintería, `DbK-RQ-O0RG`).
- Cada card linkea al post original de Instagram.
- Pausa en hover, `prefers-reduced-motion` → sin animación (scroll horizontal manual).
- Implementación: CSS puro (`@keyframes translateX(-50%)` con la lista duplicada), sin librería.
- Las imágenes son 4:5; para 9:16 usar `object-fit: cover` o mantener 4:5 (se ve igual de bien).
- A futuro: podría alimentarse de la Instagram Graph API (requiere cuenta Business + token del cliente);
  para el MVP, imágenes estáticas en el repo.
