# Sesión 4 — IA Básica AGYL (Cierre del programa)

## Parámetros

| Campo | Valor |
|-------|-------|
| Duración | 2 horas (120 min) |
| Formato | Virtual / Streaming |
| Público | 500+ profesionales (mixto, corporativo, nivel general) |
| Idioma | Español neutro corporativo colombiano |
| Herramientas instructor | ChatGPT Plus (primario) + Gemini (secundario) + Claude (terciario) |
| Engagement | Chat de la plataforma de streaming |
| Fecha | 29 de abril de 2026 |
| Estado | Última sesión del programa — cierre + certificación |

---

## Enfoque estratégico

### Hook único (frase que sostiene toda la sesión)

> **"Hasta hoy le hablaron a la IA. Hoy van a construir su propia IA — y van a hacerla diseñar."**

### Tema central

**Agentes personalizados** (GPTs / Gemas / Projects) **+ generación visual con razonamiento** (gpt-image-2). De consumidores pasivos de IA a creadores de IA aplicada.

### Balance del contenido

- **55% Agentes** — definición pragmática, construcción en vivo, portabilidad entre plataformas (~58 min)
- **35% Imagen** — gpt-image-2 con caso real Parches de IA: flyer → banner → slides académicas (~37 min)
- **10% Augmentación + pensamiento crítico** — entrelazado en demos + sección dedicada corta (~10 min)
- **Q&A largo y cierre del programa** — bloque final protegido de 15 min

### Diferencias clave vs S1, S2, S3

- Primera sesión donde **construyen, no solo consumen**
- gpt-image-2 lanzado el 21-abr-2026 → contenido de la semana, no genérico
- Caso real de generación visual (Parches de IA, evento del instructor) → demostración auténtica
- Cierre del programa con QR a recursos centralizados en jeroooo.com
- Nada de tareas-puente (es la última sesión); en su lugar: "qué hacer el lunes" + reto opcional

### Qué NO se hace

- Definición técnica purista de agente (loops, tool-calling, ReAct) → solo mención al final como "lo que viene"
- Demos de Operator / Agent Mode / Computer Use → no son fiables en streaming con 500 personas
- Comparación API o pricing entre modelos → fuera del alcance de la audiencia
- Ningún emoji en slides ni decks (ya estándar AGYL)

---

## Arco narrativo (de menor a mayor compromiso del asistente)

```
Recap 4 sesiones
  → "qué es un agente" (concepto pragmático)
    → construir agente en vivo (PROSPECCIÓN COMERCIAL, demo estrella)
      → 2 agentes más rápido (REDACTOR DE ACTAS, MENTOR DE PROCESOS)
        → portabilidad: el mismo agente en GPT y en Gema
          → del texto a la imagen: gpt-image-2 razona antes de dibujar
            → caso real: Parches de IA (flyer → banner → slides)
              → augmentación + 5 preguntas de pensamiento crítico
                → cierre programa + qué hacer el lunes + Q&A largo
```

---

## Estructura minuto a minuto

### BLOQUE 0 — Apertura, recursos y recap programa (0:00 – 0:07) · 7 min

**Objetivo:** Reenganche + cumplir promesas pendientes de S3 + instalar el hook.

| Min | Acción |
|-----|--------|
| 0:00 | Slide cover — esperar 30 seg con música/silencio |
| 0:01 | Hook: *"Hasta hoy le hablaron a la IA. Hoy van a construir su propia IA — y van a hacerla diseñar."* |
| 0:02 | **Slide RECURSOS DEL CURSO** — QR grande + URL `jeroooo.com/cursos/ia-basica-agyl` (cumple promesa S3 de compartir prompts y slides) |
| 0:04 | Slide rápido: cómo desactivar entrenamiento del modelo en Gemini (resuelve "tarea pendiente" S3) |
| 0:05 | Recap del programa en 1 slide: S1 entender · S2 hablarle · S3 contextualizar · **S4 construir + crear** |
| 0:06 | Hoja de ruta de hoy: Agentes → Imagen → Cierre |

**Instructor:** mencionar por nombre a 1-2 personas que escribieron en chats anteriores cuyos pendientes hoy se resuelven.

---

### BLOQUE 1 — ¿Qué es un agente? (0:07 – 0:15) · 8 min

**Objetivo:** Aterrizar el concepto sin jerga técnica. Que la audiencia entienda "agente = asistente con rol fijo + conocimiento propio + instrucciones permanentes".

| Min | Tema | Contenido |
|-----|------|-----------|
| 0:07 | Divider | "Un agente no es un modelo más inteligente. Es un modelo con identidad." |
| 0:08 | Definición pragmática | **3 capas de un agente personalizado:**<br>1. **Rol permanente** (el "quién es")<br>2. **Conocimiento propio** (los archivos / referencias que siempre tiene)<br>3. **Instrucciones fijas** (formato y tono que repite siempre) |
| 0:10 | Comparación visual | Chat normal: empiezas de cero cada vez. Agente: ya sabe quién eres, qué haces y cómo hablas. |
| 0:11 | 4 lugares donde existen agentes hoy | GPTs (ChatGPT) · Gemas (Gemini) · Projects (Claude) · Agentes con acciones reales (Operator, Agent Mode) → estos últimos solo se mencionan |
| 0:13 | Frase pivote | *"En los próximos 50 minutos van a construir 3 agentes que el lunes pueden usar."* |
| 0:14 | Casos AGYL-relevantes | Lista: prospección comercial · redactor de actas · mentor de procesos · clasificador de tickets · pre-revisor de propuestas |

---

### BLOQUE 2 — Demo estrella: agente de Prospección Comercial (0:15 – 0:45) · 30 min

**Objetivo:** Construir desde cero, paso a paso y con la audiencia, un agente que el instructor podría usar el lunes para enviar correos en frío. Recicla narrativamente el ejercicio de correos de S3.

**Decisión técnica:** se construye en **ChatGPT (GPT custom)** porque es el flujo más maduro y conocido. Backup: si ChatGPT cae (como pasó en S3), se replica en Gemini Gem en vivo.

| Min | Paso | Detalle |
|-----|------|---------|
| 0:15 | Por qué este caso | "Lo más difícil de un correo en frío no es escribirlo, es que suene a vos. Un agente lo resuelve." |
| 0:17 | Abrir ChatGPT → Explorar GPTs → Crear | Mostrar UI literal |
| 0:18 | **Capa 1: Nombre + descripción** | Nombre: "Prospección Comercial AGYL" · Descripción: 1 línea |
| 0:19 | **Capa 2: Instrucciones (el rol)** | Pegar prompt de `materiales-demo/01-agente-prospeccion-instrucciones.md` (tipo RAFAT permanente: rol senior, formato fijo asunto+pre-header+cuerpo+CTA, tono sin hype, idioma español Colombia, sin promesas irreales). Recorrer línea por línea explicando cada bloque. |
| 0:24 | **Capa 3: Conocimiento (knowledge)** | Subir 3 archivos: descripción de servicios AGYL, 2 correos exitosos previos (anonimizados), 1 hoja con tono de marca. *"Esto es lo que separa a este agente de un prompt suelto."* |
| 0:28 | **Capa 4: Capacidades** | Habilitar: navegación web (para investigar al prospecto) · code interpreter (no necesario para este caso, dejarlo off para no confundir) |
| 0:30 | **Capa 5: Conversation starters** | 4 atajos: "Correo en frío para gerente operaciones" · "Seguimiento día 7" · "Adaptar correo a empresa LinkedIn" · "Reescribir tono más cálido" |
| 0:32 | Probar el agente | Pegar input mínimo: *"Empresa: aseguradora mediana en Bogotá. Decisor: gerente de operaciones. Pain: equipos atascados en clasificación manual."* |
| 0:34 | Iterar con auto-crítica (técnica de S3) | "Critica este correo desde la perspectiva de un gerente escéptico. Reescríbelo." |
| 0:37 | Mejorar el agente con la lección | Volver a "Editar GPT" y agregar a instrucciones: *"Por defecto incluye una métrica concreta o caso de éxito. Si no tienes, pídela antes de redactar."* |
| 0:40 | Probar de nuevo | Mismo input → ver cómo el agente ya pide la métrica antes de inventar |
| 0:42 | Compartir el agente | Mostrar opciones: solo yo · con link · público. Discutir privacidad: no publicar agentes con knowledge interno. |
| 0:44 | Cierre del bloque | *"Acaban de pasar de prompt a agente. La diferencia: este agente sabe quién soy y cómo vendo. No empiezo de cero nunca más."* |

**Instructor — checkpoints:**
- Si ChatGPT cae: cambiar a Gemini, abrir Gem builder, replicar las mismas 5 capas. El plan funciona en cualquiera.
- Anonimizar siempre los correos de ejemplo antes de subirlos.
- Mencionar 2 veces durante este bloque que NO se sube knowledge con datos personales/financieros (refuerza S3).

---

### BLOQUE 3 — Dos agentes más + portabilidad (0:45 – 1:05) · 20 min

**Objetivo:** Mostrar que el patrón se repite. La audiencia debe sentir que ya entiende la receta.

| Min | Tema | Contenido |
|-----|------|-----------|
| 0:45 | Divider | "Mismo método, distinto trabajo." |
| 0:46 | **Agente 2 — Redactor de actas** | Construcción acelerada (5 min): pegar instrucciones desde `materiales-demo/02-agente-redactor-actas.md`. Knowledge: plantilla de acta corporativa AGYL. Probar con audio o transcripción de reunión ficticia (puede ser la transcripción de S3 misma — meta-broma). |
| 0:51 | **Agente 3 — Mentor de procesos AGYL** | NO se construye en vivo. Se muestra ya configurado. Knowledge: 3 docs internos de proceso (anonimizados, los mismos de S3 NotebookLM). Probar 1 pregunta: *"¿Qué pasos sigo cuando llega un incidente de datos digitales?"* Mostrar que cita los procesos. |
| 0:55 | **Portabilidad: el mismo agente en Gema** | Abrir Gemini Gems. Crear "Prospección Comercial AGYL" con las mismas instrucciones. Mostrar diferencias de UI pero misma lógica. *"El concepto es portable. Aprenden uno, los aprenden todos."* |
| 1:00 | Claude Projects (mención) | Slide: en Claude se llaman Projects, misma idea, diferencias clave (mejor para análisis largo, peor para acciones). Sin demo. |
| 1:02 | Frase pivote | *"Estos agentes los pueden duplicar y adaptar. Ya tienen la receta. Mañana cada uno construye el suyo."* |
| 1:03 | Mini Q&A — solo sobre agentes | 2 preguntas máximo del chat |

---

### BLOQUE 4 — gpt-image-2: razonar antes de dibujar (1:05 – 1:35) · 30 min

**Objetivo:** Demostrar el salto cualitativo de gpt-image-2 con un caso 100% real (Parches de IA, evento del instructor) que combina extracción de contexto + generación visual con texto legible.

**Pre-sesión (instructor):** exportar conversación reciente del grupo de WhatsApp "Parches de IA" como `.txt` y tenerla lista en escritorio. Confirmar fecha/lugar/hora del evento del sábado.

| Min | Paso | Detalle |
|-----|------|---------|
| 1:05 | Divider | "Lanzado hace 7 días. Es la primera vez que un modelo de imagen razona antes de dibujar." |
| 1:06 | Qué cambió en gpt-image-2 | 1 slide con 4 puntos: (1) razona y planea, (2) texto legible y multilingüe, (3) edita sin regenerar todo, (4) hasta 8 imágenes con el mismo personaje/estilo |
| 1:08 | Por qué importa para AGYL | Slides corporativas, infografías, banners LinkedIn, flyers internos. *"Por primera vez podemos generar visuales con texto correcto, en español."* |
| 1:10 | **Demo 1 — Extraer contexto del WhatsApp** | Subir `.txt` exportado a ChatGPT. Prompt: "Lee esta conversación del grupo Parches de IA. Dime: 3 temas más recurrentes, tono del grupo, vocabulario propio, qué emociona a esta comunidad." |
| 1:13 | Resultado se discute | *"Esto NO se lo inventó: salió de ustedes (los del grupo). Ahora lo usamos como brief."* |
| 1:14 | **Demo 2 — Flyer del evento del sábado** | Prompt completo en `materiales-demo/04-imagen-flyer-parches.md`. Incluye: contexto extraído arriba, info del evento, instrucciones de diseño (paleta, tipografía, formato vertical 9:16). Generar. |
| 1:18 | Iterar — edición sin regenerar | "Cambia el fondo a un degradado más oscuro. Mantén todo lo demás." Mostrar que solo cambia eso. |
| 1:20 | **Demo 3 — Banner LinkedIn del evento** | Prompt en `05-imagen-banner-linkedin.md`. Pedirle: "Mismo estilo del flyer anterior, ahora 1584×396 horizontal." Mostrar consistencia (multi-image). |
| 1:23 | **Demo 4 — Slides del evento** | Prompt en `06-imagen-slides-evento.md`. Pedir 4 imágenes con el mismo personaje/estética para 4 slides: portada, agenda, ponente, cierre. Discutir cómo se exportan e insertan en una plataforma de slides (Keynote/Slides/Canva). |
| 1:28 | **Bonus — Slides académicas** (cumple promesa S3) | Demo rápida: pedir slides para una presentación académica con balance imagen/texto, tipografía legible, no recargada. Prompt en `07-imagen-slides-academicas.md`. |
| 1:32 | Buenas prácticas en 1 slide | (1) descripción visual concreta, (2) especificar texto entre comillas, (3) referenciar paleta y tipografía, (4) usar imágenes de referencia cuando se pueda, (5) iterar con edición, no con regeneración |
| 1:34 | Frase pivote | *"La IA ya no solo escribe lo que piensan. Ahora también lo dibuja."* |

---

### BLOQUE 5 — Augmentación + pensamiento crítico (1:35 – 1:45) · 10 min

**Objetivo:** Anclar el "porqué" del programa. La IA no reemplaza, augmenta. Pero augmentar sin criterio es peligroso.

| Min | Tema | Contenido |
|-----|------|-----------|
| 1:35 | Divider | "La IA no te reemplaza. Te quita la parte aburrida para que quede tiempo para la parte difícil: decidir." |
| 1:36 | 3 capas humanas sobre cada output | 1 slide con: (1) **Verificar** la fuente · (2) **Ajustar** tono y contexto · (3) **Decidir** qué se publica |
| 1:38 | El checklist de 5 preguntas | Slide grande, en pantalla:<br>**1. ¿De dónde sacó esto?**<br>**2. ¿Suena demasiado bueno?**<br>**3. ¿Lo firmaría yo con mi nombre?**<br>**4. ¿Hay un dato que pueda verificar en 30 segundos?**<br>**5. ¿Qué decisión tomo con esto?** |
| 1:41 | Aplicación al output del agente y de la imagen | Volver visualmente al correo del Bloque 2 y al flyer del Bloque 4. Pasarlos por el checklist en vivo. |
| 1:44 | Frase de cierre del bloque | *"La IA es velocidad. El criterio sigue siendo suyo."* |

---

### BLOQUE 6 — Cierre del programa + Q&A (1:45 – 2:00) · 15 min

**Objetivo:** Cerrar las 4 sesiones con sentido, dejar una acción concreta y abrir un Q&A largo de calidad.

| Min | Tema | Contenido |
|-----|------|-----------|
| 1:45 | Divider | "Cuatro sesiones. Una idea." |
| 1:46 | Recap de las 4 sesiones en 1 slide | S1: entender qué es la IA · S2: cómo hablarle bien · S3: cómo darle contexto · S4: construir y crear |
| 1:48 | **Qué hacer el lunes** — 3 acciones pequeñas | 1. Construir tu primer agente personal (15 min)<br>2. Generar una imagen con texto en español para algo real esta semana<br>3. Pasar 1 output de IA por el checklist de 5 preguntas |
| 1:50 | Reto opcional (no obligatorio) | "Construyan su primer agente esta semana y compartan el caso en sus equipos. Si lo hacen, mándenme captura." |
| 1:51 | **Slide RECURSOS** (de cierre) | QR grande + URL → todo el material descargable: prompts, slides, demos, links a las 4 grabaciones |
| 1:52 | Certificación | 1 slide: "El certificado estará en la plataforma Agilex. Llenar la asistencia de hoy es lo último que necesitan." |
| 1:53 | **Q&A abierto** | 7 minutos. Instructor lee en orden de llegada del chat, llama por nombre, prioriza preguntas que no se hayan respondido en sesiones anteriores. |
| 2:00 | Despedida | Cita de cierre + agradecimiento + invitación a seguir en LinkedIn / jeroooo.com |

---

## Demos en vivo — checklist pre-sesión (15 min antes)

1. Confirmar que `gpt-image-2` está habilitado en la cuenta ChatGPT del instructor (si no, ir a Settings → Beta features).
2. Tener exportada la conversación de WhatsApp del grupo Parches de IA como `.txt` lista para subir.
3. Tener resueltos: nombre del evento, fecha del sábado, lugar, hora — todos los datos que entran al flyer.
4. Tener anonimizados los archivos de knowledge para el agente de prospección y el de redactor de actas.
5. Pestañas abiertas en orden: ChatGPT (con 2 tabs: Crear GPT + chat normal) · Gemini (Gems) · Claude (Projects, solo si hay tiempo) · NotebookLM (mención S3, no usado).
6. Carpeta `materiales-demo/` abierta en ventana lateral.
7. `prompts-demo.md` abierto en ventana lateral, sincronizado con la slide actual.
8. Probar el QR de recursos con el celular antes de empezar (que abra la URL correcta).
9. Verificar audio + screen share antes de empezar.

---

## Lecciones aprendidas (S1, S2, S3) que se aplican

1. **Dirigirse por nombre** a quien escribe en chat. No al nombre que pidió un favor (S1).
2. **Proteger las demos**: bloques 2, 3 y 4 son intocables. Si vas atrasado, recortar bloque 5 antes que cualquier demo.
3. **Privacidad con ángulo corporativo**: cada vez que se sube algo al agente o al modelo de imagen, recordar "anonimizar antes" (S3).
4. **No "voten en el chat 1 / 2 / 3"**: usar prompts abiertos.
5. **Agendar el cierre** desde el inicio (último 10% del tiempo es sagrado).
6. **gpt-image-2 + español**: el modelo es nuevo, las imágenes pueden tener errores ortográficos en raras ocasiones — si pasa, regenerar y mostrar la iteración como parte del aprendizaje.

---

## Recursos centralizados (URL final del curso)

- **URL pública:** `https://jeroooo.com/cursos/ia-basica-agyl/recursos.html`
- **Contenido:**
  - Slides de las 4 sesiones (HTML hosted)
  - `prompts-demo.md` de cada sesión
  - Plantillas de los 3 agentes construidos en S4 (instrucciones listas para pegar)
  - Lista de buenas prácticas y checklist de 5 preguntas
  - Enlaces a las grabaciones (cuando estén disponibles, los proporciona AGYL)
- **QR:** generado y embebido en slides 2 (apertura) y 51 (cierre).

---

## Mapa de archivos de la sesión

```
sesion-4/
  sesion-4.html                          # presentación
  prompts-demo.md                        # prompts ready-to-paste
  images/                                # assets
  materiales-demo/
    00-README.md                         # mapa slide → archivo
    01-agente-prospeccion-instrucciones.md
    01b-agente-prospeccion-knowledge/    # archivos para subir
    02-agente-redactor-actas.md
    03-agente-mentor-procesos.md
    04-imagen-flyer-parches.md
    05-imagen-banner-linkedin.md
    06-imagen-slides-evento.md
    07-imagen-slides-academicas.md
    08-checklist-5-preguntas.md
```
