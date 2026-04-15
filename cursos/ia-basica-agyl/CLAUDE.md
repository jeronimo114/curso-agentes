# CLAUDE.md — Curso "IA Básica" para AGYL

This file provides guidance to Claude Code when working in this course folder.
For repo-wide conventions see the parent `CLAUDE.md` at `Presentaciones/CLAUDE.md`.

## Course context

- **Cliente:** AGYL (consultora colombiana de aseguramiento)
- **Programa:** 4 sesiones virtuales de 2 horas, ~500 profesionales, formato streaming
- **Audiencia:** corporativa mixta, nivel general, español
- **Fechas:** Sesión 1: 2026-04-08 · Sesión 2: 2026-04-15 · Sesión 3: TBD · Sesión 4: TBD
- **Canal de interacción:** chat de la plataforma de streaming (sin Slido ni terceros)
- **Stack del instructor:** ChatGPT (pago) + Claude (pago, Sonnet 4.5 default) + NotebookLM (gratis)

## Folder structure

```
ia-basica-agyl/
  CLAUDE.md                          # este archivo
  planificacion-sesion-1.md          # plan canónico S1
  planificacion-sesion-2.md          # plan canónico S2
  transcripcion-sesion.md            # transcripción de S1 (insumo para S2+)
  materiales/                        # logos, screenshots de marca del cliente
  sesion-1/sesion-1.html             # presentación S1 (ya impartida)
  sesion-2/
    sesion-2.html                    # presentación S2
    prompts-demo.md                  # prompts pre-escritos para copiar en vivo
    images/                          # assets visuales del HTML (logo, fotos)
    materiales-demo/                 # insumos de demo organizados por slide
      00-README.md                   # mapa: slide → archivo
      01-…05-*.md                    # prompts ready-to-paste por demo
      06-*.svg / 07-*.svg            # gráficas y mockups para subir
      08-informe-regulatorio.html    # imprimir a PDF antes de la sesión
      notebooklm-fuentes/            # 3 docs HTML para imprimir a PDF y subir a NotebookLM
```

## Design system (sesión 2 en adelante — paleta AGYL real)

**CSS variables (definidas en `<style>` de cada sesion-N.html):**
```css
--agyl-teal: #048dad;       /* primario · franjas, chips, acentos */
--agyl-teal-deep: #036078;  /* texto sobre fondo claro */
--agyl-gold: #ccad00;       /* secundario · viñetas, diagonales */
--agyl-bg: #FFFFFF;
--agyl-bg-soft: #F6F5F1;
--agyl-ink: #0B0B0F;
--agyl-muted: #5B5F6A;
--agyl-line: #E5E2D9;
```

**Tipografía:** Sofia Sans Extra Condensed (display, uppercase, 800) + DM Sans (body) — Google Fonts.

**Componentes recurrentes (clases CSS ya definidas en `sesion-2.html`):**

- `.slide-cover` — primera slide, diagonales decorativas teal+gold, logo grande
- `.slide-section.slide-teal-bg` — divisor de bloque, fondo teal, watermark "A"
- `.slide-page` — slide de contenido estándar, watermark "A", footer-stripe
- `.slide-statement` — frase grande, statement-tag arriba
- `.slide-split` — dos columnas (`.split-pane.soft-bg` + `.split-pane.teal-bg`)
- `.slide-contact.slide-dark-bg` — slide final
- `.chip-title` — pill teal con texto blanco, formato breadcrumb del bloque
- `.chip-title.gold` — variante dorada
- `.cards-grid` (3 col) / `.cards-grid-4` / `.cards-grid-2` — grids de tarjetas
- `.card` (teal top-border) / `.card.gold` (gold top-border)
- `.ractf-grid` + `.ractf-card` — grid 5 letras del framework RAFAT
- `.fw-grid` + `.fw-card` — grid 5 frameworks resumen
- `.steps` + `.step.turn-N` — pasos numerados (turn-1/turn-2 teal, turn-3/turn-4 gold)
- `.prompt-box.good` (borde teal izq, fondo crema) / `.prompt-box.bad` (borde rojo)
- `.chat-card` — caja de prompt para audiencia
- `.demo-buttons` + `.demo-btn[.primary][.gold]` — botones a Claude/ChatGPT/NotebookLM
- `.watermark-a` — letra "A" gigante semi-transparente esquina inferior izquierda
- `.footer-stripe` (teal + gold, base de slide-page)
- `.agyl-bullets` — lista con viñetas dorada cuadrada

**Convenciones visuales:**
- Logo AGYL fijo esquina superior derecha en slides de contenido (oculto en cover y slides con fondo teal — manejado por JS en `update()`)
- Sin emojis. Iconografía SVG inline.
- En slides con `.slide-section` o `.slide-contact`, el logo de esquina se oculta.
- Las animaciones de entrada (`.animate-in`) NO se usan en S2 — diseño minimalista.

## Framework canónico: RAFAT

Reemplaza al RACTF de la primera versión. Acrónimo en español adaptado al cliente:

| Letra | Significado | Equivalente técnico |
|-------|-------------|---------------------|
| **R** | Rol | quién es el modelo |
| **A** | Acción | tarea concreta |
| **F** | Formato | estructura de salida |
| **A** | Antecedentes | contexto, audiencia, restricciones |
| **T** | Temperatura | nivel de creatividad + tono/registro |

**Importante:** Si el usuario ve "RACTF" en planes viejos, traducirlo a RAFAT en cualquier slide o material que se actualice.

## Convenciones de contenido

- **Idioma:** todo en español neutro corporativo colombiano. Evitar "vosotros" / "vale".
- **Términos técnicos:** evitar jerga ("few-shot", "system prompt") como label principal. Usar "Aprender con ejemplos" / "Instrucciones fijas". Mencionar el término técnico entre paréntesis solo cuando aporta.
- **Demos en vivo:** cada demo debe tener su archivo correspondiente en `materiales-demo/` con prompt **listo para copiar-pegar** entre marcadores `--- COPIAR DESDE AQUÍ ---` / `--- HASTA AQUÍ ---`.
- **Modelo recomendado para redacción corporativa:** Claude **Sonnet 4.5** (mencionarlo explícitamente en demos de redacción).
- **Sin tareas-puente entre sesiones:** la audiencia es 500+ corporativos; tareas asignadas suenan forzadas. Cerrar cada sesión con preview de la siguiente, no con compromiso.
- **No "voten en el chat 1, 2, 3":** se siente forzado en este formato. Preferir chat prompts abiertos que generen reflexión real.
- **Cierre obligatorio:** las 3 ideas + preview de la próxima sesión + Q&A son sagrados (último 10% del tiempo). Si vas atrasado, recortar Bloque 2 o el bloque de iteración primero.

## Lecciones aprendidas de S1 (aplicar siempre)

1. **No "caso Elida":** dirigirse por nombre a quien escribe en chat, acusar recibo. Si pregunta fuera de tema: "excelente, lo retomo en Q&A".
2. **Proteger las demos en vivo.** Bloque 3 (frameworks) y Bloque 4 (multimodal) son intocables.
3. **Privacidad con ángulo corporativo:** en cada demo con documentos, recordar "usen datos anonimizados o documentos públicos al practicar en casa".
4. **LLM vs Agente:** retomarlo brevemente en preview de S3.

## Working in this folder

- Cuando se modifique `sesion-N.html`, sincronizar también `prompts-demo.md` y `planificacion-sesion-N.md`.
- Cuando se agregue una demo en vivo, crear el archivo correspondiente en `materiales-demo/` y actualizar `00-README.md` con el mapa.
- Para verificar visualmente: abrir `sesion-N.html` directamente en Chrome (no requiere servidor). Si necesitas Playwright, levantar `python3 -m http.server 8765` desde esta carpeta.
- **Nunca commitear** archivos generados temporalmente (PDFs exportados desde HTML deben ser manuales del instructor antes de la sesión, no parte del repo).
