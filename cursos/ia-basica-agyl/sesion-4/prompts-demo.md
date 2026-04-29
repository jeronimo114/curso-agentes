# Prompts demo — Sesión 4 AGYL

Lista plana para copiar rápido durante la sesión. Cada prompt está listo para pegar sin ajustes. Si algún prompt tiene `[placeholder]`, rellénalo antes de la sesión.

Convención: cada prompt aparece tal cual se pega en ChatGPT, Gemini o donde corresponda. La construcción de agentes (capa "instrucciones") va en archivos dedicados de `materiales-demo/` y aquí se referencia.

---

## 1. Demo 1 — Construir agente "Auditor de Automatización Personal"

### 1.1 Instrucciones del agente (capa "rol permanente")

Pegar contenido completo desde `materiales-demo/01-agente-auditor-automatizacion.md` (entre los marcadores `--- COPIAR DESDE AQUÍ ---` y `--- HASTA AQUÍ ---`). Va en el campo "Instructions" del GPT custom.

### 1.2 Primer mensaje al agente (arranca la entrevista)

```
Empieza la entrevista. Soy consultor de aseguramiento en una firma colombiana, llevo 5 años en la consultora, atiendo en paralelo 4 clientes corporativos del sector financiero. Adelante con la primera pregunta.
```

### 1.3 Empujarlo a la fase de análisis (cuando ya hay material)

Cuando el agente haya hecho 6 a 8 preguntas y tengas tareas concretas en la mesa:

```
Suficiente material. Pasa a Fase 02. Devuélveme la matriz 2×2 de frecuencia × tedio con todas las tareas que mencioné en celdas, y los 3 candidatos con justificación.
```

### 1.4 Pedir el artefacto del candidato 1 (Fase 03)

```
El candidato 1 es el ganador. Pasa a Fase 03 y entrégame los tres artefactos:
1. Prompt RAFAT listo para copiar y usar mañana.
2. Instrucciones completas del nuevo GPT/Gema que automatiza esta tarea.
3. Lista de archivos que tendría que subir como knowledge, con una línea de qué debería contener cada uno.
```

### 1.5 Mejora permanente del agente (técnica de S3 — auto-crítica + ajuste)

Después de probarlo una vez, volver a "Editar GPT" → Instructions y agregar al final, sin borrar lo anterior:

```
REGLA ADICIONAL — UNA PREGUNTA POR TURNO:
Nunca hagas más de una pregunta a la vez. Si te dan respuestas vagas, repregunta con un ejemplo concreto antes de avanzar. No pasas a Fase 02 hasta tener al menos 5 tareas distintas mencionadas con frecuencia explícita (diaria, semanal, mensual).
```

---

## 2. Demo 2 — Agente "Redactor de Actas"

### 2.1 Instrucciones del agente

Pegar contenido completo desde `materiales-demo/02-agente-redactor-actas.md`.

### 2.2 Input de prueba (transcripción ficticia)

```
Te paso la transcripción de una reunión interna. Genera el acta siguiendo la plantilla del knowledge.

---
[Transcripción]

Hablante 1: Bueno, gracias a todos por conectarse. La idea de hoy es revisar el avance del proyecto de actualización del marco de riesgo operacional. Vamos punto por punto.

Hablante 2: Yo arranco. La fase de levantamiento la cerramos el viernes pasado. Quedaron pendientes dos entrevistas con el área de tesorería que no hemos podido agendar.

Hablante 1: ¿Quién las agenda?

Hablante 2: Yo me encargo, las cierro esta semana.

Hablante 3: Sobre la matriz de controles, encontramos que hay 12 controles duplicados entre las áreas de cumplimiento y auditoría interna. Hay que decidir quién se queda con cuáles.

Hablante 1: Ese tema lo subimos al comité del jueves. Hablante 3, ¿puedes preparar una nota de una página para el comité?

Hablante 3: Sí, la mando el miércoles antes de mediodía.

Hablante 1: Perfecto. Última cosa: el cronograma se nos corre dos semanas por las entrevistas pendientes. Lo comunico yo al patrocinador.

Hablante 2: Una pregunta: ¿el alcance de la fase 2 sigue igual o lo recortamos?

Hablante 1: Sigue igual por ahora. Lo revisamos cuando tengamos las entrevistas.
---
```

---

## 3. Demo 3 — Agente "Mentor de Procesos AGYL" (pre-construido)

### 3.1 Instrucciones del agente

Pegar contenido completo desde `materiales-demo/03-agente-mentor-procesos.md`. Este agente NO se construye en vivo: se muestra ya configurado.

### 3.2 Input de prueba

```
¿Qué pasos sigo cuando llega un incidente de datos digitales que afecta a un cliente externo? Cita los documentos del knowledge donde están definidos los pasos.
```

---

## 4. Demo 4 — Portar a Gema de Gemini

### 4.1 Instrucciones (idénticas, mínima adaptación)

En Gemini → Gems → Crear nueva. Pegar las MISMAS instrucciones de `materiales-demo/01-agente-auditor-automatizacion.md`. Solo ajustar la primera línea si es necesario:

```
Eres el Auditor de Automatización Personal. Tu rol y reglas se mantienen igual entre conversaciones.
```

El resto del prompt se pega tal cual. Subir el mismo catálogo de agentes ejemplo como knowledge.

---

## 5. Demo 5 — Extraer contexto del WhatsApp "Parches de IA"

Subir el archivo `parches-de-ia.txt` (export de WhatsApp anonimizado) a ChatGPT. Pegar:

```
Te subí la conversación reciente del grupo de WhatsApp "Parches de IA". Léela completa y devuélveme un brief creativo con esta estructura exacta:

1. Tres temas más recurrentes del grupo, ordenados por frecuencia, con una frase corta que los describa.
2. Tono general del grupo en una línea (formal/informal, técnico/cotidiano, etc.).
3. Vocabulario propio: 5 a 8 palabras o expresiones que se repiten y que solo tendrían sentido para alguien del grupo.
4. Qué emociona a esta comunidad: 3 cosas concretas que generan reacciones positivas (mensajes, stickers, respuestas largas).
5. Qué frustra o aburre a la comunidad: 1 o 2 cosas que provoquen rechazo.

Tono del output: directo, sin paráfrasis genéricas. Si algo no aparece con claridad en la conversación, dilo: no lo inventes.

Este brief lo voy a usar para diseñar un flyer del próximo evento del grupo, así que enfoca el lenguaje a lo que serviría a un diseñador.
```

---

## 6. Demo 6 — Flyer del evento "Parches de IA" con gpt-image-2

Pegar contenido desde `materiales-demo/04-imagen-flyer-parches.md`. Antes de pegar, reemplazar `[FECHA]`, `[HORA]`, `[LUGAR]`, `[NOMBRE_EVENTO]`.

---

## 7. Demo 7 — Edición del flyer sin regenerar

En la misma conversación de ChatGPT, justo después de generado el flyer:

```
Mantén exactamente la misma composición, tipografía, posición del texto y personajes. Solo cambia el fondo: pásalo a un degradado más oscuro, de azul noche a violeta profundo, con un sutil grano de película. Todo lo demás queda idéntico.
```

---

## 8. Demo 8 — Banner LinkedIn 1584×396 (consistencia visual)

Pegar contenido desde `materiales-demo/05-imagen-banner-linkedin.md`. Va en la MISMA conversación del flyer para que gpt-image-2 reuse el estilo.

---

## 9. Demo 9 — 4 slides consistentes del evento

Pegar contenido desde `materiales-demo/06-imagen-slides-evento.md`. Va en la MISMA conversación del flyer y el banner.

---

## 10. Demo 10 — Slides académicas (cumple promesa de S3)

Pegar contenido desde `materiales-demo/07-imagen-slides-academicas.md`. Conversación nueva (no relacionada con Parches de IA).

---

## 11. Demo 11 — Aplicar el checklist de 5 preguntas a un output

Sobre el correo generado por el agente de prospección en la Demo 1, pegar:

```
Voy a auditar este correo con un checklist de 5 preguntas. Respóndelas tú primero como si fueras un revisor externo escéptico, una por una, en máximo dos líneas cada una. Sé concreto y crítico, no condescendiente.

1. ¿De dónde sacó esto? (qué parte del correo viene del knowledge, qué parte es generada)
2. ¿Suena demasiado bueno? (frases vacías, promesas sin respaldo, hype)
3. ¿Lo firmaría yo con mi nombre y cargo? (qué cambiaría para que sí)
4. ¿Hay un dato que pueda verificar en 30 segundos? (cuál y cómo)
5. ¿Qué decisión concreta toma quien recibe este correo? (en una frase)

Cierra con un veredicto: ENVIAR / EDITAR / RECHAZAR, y la razón en una línea.
```
