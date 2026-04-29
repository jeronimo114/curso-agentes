# Materiales demo — Sesión 4 AGYL

Carpeta con todos los **insumos pre-cocinados** para que cada demo en vivo arranque sin fricción.
Abrir esta carpeta en una ventana lateral durante la sesión.

## Mapa rápido — qué archivo va en qué momento

| Min | Bloque / Demo | Archivo |
|-----|---------------|---------|
| 0:18 | B2 · Construir agente Auditor de Automatización Personal — instrucciones | `01-agente-auditor-automatizacion.md` |
| 0:24 | B2 · Knowledge ligero (solo catálogo de agentes ejemplo) | dentro de `01-agente-auditor-automatizacion.md` |
| 0:32 | B2 · Arrancar entrevista + saltar a matriz + pedir artefactos + mejora | `prompts-demo.md` (sección 1) |
| 0:46 | B3 · Agente Redactor de Actas | `02-agente-redactor-actas.md` |
| 0:51 | B3 · Mentor de Procesos AGYL (pre-construido) | `03-agente-mentor-procesos.md` |
| 0:55 | B3 · Portar a Gema | `prompts-demo.md` (sección 4) |
| 1:10 | B4 · Extraer contexto del WhatsApp | `09-whatsapp-extraccion-prompt.md` |
| 1:14 | B4 · Flyer Parches de IA (gpt-image-2) | `04-imagen-flyer-parches.md` |
| 1:18 | B4 · Edición sin regenerar | `prompts-demo.md` (sección 7) |
| 1:20 | B4 · Banner LinkedIn | `05-imagen-banner-linkedin.md` |
| 1:23 | B4 · 4 slides consistentes del evento | `06-imagen-slides-evento.md` |
| 1:28 | B4 · Slides académicas (promesa S3) | `07-imagen-slides-academicas.md` |
| 1:38 | B5 · Checklist de 5 preguntas | `08-checklist-5-preguntas.md` |
| 1:41 | B5 · Aplicar checklist al output | `prompts-demo.md` (sección 11) |

## Antes de la sesión (15 min)

1. Confirmar que **gpt-image-2** está habilitado en la cuenta ChatGPT del instructor (Settings → Beta features). Lanzado el 21-abr-2026.
2. Exportar la conversación reciente del grupo de WhatsApp "Parches de IA" como `.txt`. **Anonimizar** antes de subir: reemplazar nombres y números de teléfono por etiquetas genéricas (Persona 1, Persona 2…). Guardar como `parches-de-ia.txt` en escritorio.
3. Confirmar datos del evento del sábado: nombre, fecha, hora, lugar. Reemplazarlos en el prompt del flyer (`04-imagen-flyer-parches.md`) antes de empezar.
4. **Anonimizar los archivos de knowledge** del agente Redactor de Actas y Mentor de Procesos: sin nombres reales de clientes, sin cifras reales, sin datos personales. El Auditor de Automatización Personal NO requiere knowledge sensible — solo el catálogo de agentes ejemplo.
5. Tener pestañas abiertas en este orden: ChatGPT (2 tabs: "Crear GPT" + chat normal) · Gemini (Gems) · Claude (Projects, opcional).
6. Esta carpeta `materiales-demo/` abierta en Finder, ventana lateral visible.
7. `prompts-demo.md` abierto en otra ventana lateral, sincronizado con la slide actual.
8. Probar el QR de recursos del cierre (slide final) con el celular antes de empezar.
9. Verificar audio + screen share antes de arrancar.

## Aviso importante de privacidad

Antes de subir cualquier archivo a un GPT custom, Gema, o al chat de imagen:

- Quitar nombres reales de clientes, contrapartes, empleados.
- Quitar cifras financieras reales (reemplazar por rangos o por `[cifra anonimizada]`).
- Quitar números de identificación, correos personales, teléfonos.
- Si exportas un chat de WhatsApp: reemplazar números y nombres antes de subirlo.
- Recordatorio para la audiencia: lo mismo aplica cuando construyan sus propios agentes el lunes.

## Convención

Cada archivo `.md` tiene en la parte superior unas líneas de contexto para el instructor, y luego el **prompt listo para copiar-pegar** entre `--- COPIAR DESDE AQUÍ ---` y `--- HASTA AQUÍ ---`. Lo demás es nota de soporte.
