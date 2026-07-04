# Regalo Claude — Runbook del evento

Sorteo en vivo de **2 suscripciones a Claude Code**. La gente escanea → deja nombre, correo y por qué la quiere. Una IA (DeepSeek) puntúa por **creatividad/originalidad**; tú eliges a los 2 ganadores desde la pantalla.

## URLs
- **Formulario (celular / QR):** https://jeroooo.com/regalo
- **Pantalla del show (proyector):** https://jeroooo.com/reveal
- QR ya embebido en `/reveal` y como imagen en `/qr-regalo.png` (apunta a `/regalo`).

## Cómo correrlo (todo con el teclado en `/reveal`)
- **ESPACIO / Enter** — Deliberar (ronda 1), y luego *continuar* al siguiente ganador / al final.
- **1–5** — Coronar al finalista de esa tarjeta (o toca la tarjeta).
- **F** — Pantalla completa.
- **R** — Reiniciar el show (no borra participaciones, solo el estado en pantalla).

Flujo: pantalla de espera (contador en vivo) → ESPACIO → la IA "delibera" → salen 5 finalistas con puntaje → eliges al **Ganador 1** → ESPACIO → ronda 2 (excluye al ganador 1) → eliges al **Ganador 2** → ESPACIO → pantalla final con ambos.

## Backend (n8n · https://n8n.jeroooo.com)
Data Table **`regalo_claude`** (id `dc4NIsy2hqie9H1y`) · columnas: nombre, email, razon.
3 workflows activos (no tocan los otros 37):
- **Regalo Claude — 1 Intake** (`PBOMGgbqJkmpNsJj`) → `POST /webhook/regalo-claude`
- **Regalo Claude — 2 Lista** (`Z020bd2IvDthiWth`) → `GET /webhook/regalo-lista`
- **Regalo Claude — 3 Juez** (`ufSxm8sPfcQJPWuR`) → `POST /webhook/regalo-juez` (DeepSeek)

## Antes de empezar (limpiar pruebas)
La tabla ya está **vacía**. Si haces pruebas y quieres volver a 0: en n8n → Data Tables → `regalo_claude` → borrar filas. El contador de `/reveal` vuelve a 0 solo.

## Notas
- Emails **no** se muestran en pantalla (solo nombre + razón). Quedan guardados en la tabla para avisar a los ganadores.
- Se permiten **entradas múltiples** por persona (sin dedupe), tal como se pidió.
- Si la IA no responde, el show arma igual un top‑5 (sin puntaje) para que puedas elegir.
- Todo requiere internet (backend en n8n). El QR es imagen estática, siempre carga.
