# Sesion 2: IA Basica — AGYL (Virtual, 500+ profesionales)

## Parametros

| Campo | Valor |
|-------|-------|
| Duracion | 2 horas (120 min) |
| Formato | Virtual / Streaming |
| Publico | 500+ profesionales (mixto, corporativo, nivel general) |
| Idioma | Espanol |
| Herramientas del instructor | ChatGPT (pago) + Claude (pago) — demos en vivo |
| Engagement | Chat de la plataforma (sin Slido ni herramientas externas) |
| Fecha | 15 de abril de 2026 |

## Enfoque estrategico

### Tema central
**Como hablarle bien a la IA.** Prompt engineering aplicado + multimodal (vision, documentos, audio).

### Audiencia
Misma audiencia de S1. Ya pasaron por la base teorica (que es la IA, como funciona, hallucinations, privacidad). Ahora necesitan herramientas metodologicas para obtener mejores resultados.

### Arco narrativo
**Reenganche → Intuicion (input=output) → 5 frameworks → Multimodal (wow) → Aplicacion por rol → Cierre con tarea**

### Diferencia clave vs Sesion 1
- Mucho menos teoria, mucha mas demo
- Cada framework tiene su demo o ejemplo concreto
- Casos aplicados por rol real de Agyl
- Bloque de cierre blindado con tarea pre-S3
- Nueva identidad visual: paleta Agyl oficial (teal #048dad + dorado #ccad00)

---

## Estructura minuto a minuto

### BLOQUE 1: REENCUENTRO + PUENTE (0:00 - 0:12) — 12 min

**Objetivo:** Reenganchar sin repetir. Cerrar cabos sueltos de S1. Instalar el hook del dia.

| Min | Accion |
|-----|--------|
| 0:00 | Slide cover. Esperar 30 seg. |
| 0:01 | Hook: "La semana pasada entendimos que es la IA. Hoy vamos a aprender a hablarle bien." |
| 0:02 | Recap 90 seg — 3 ideas clave S1 (predice no piensa / verificar siempre / privacidad) |
| 0:04 | Responder pregunta de CAPTCHAs que quedo colgada en S1 (redime a quien pregunto) |
| 0:05 | Chat prompt: "Cual fue la tarea mas util que le pidieron a una IA esta semana?" — leer 3-4 |
| 0:08 | **Demo apertura:** mismo ChatGPT, prompt vago vs prompt estructurado. Lado a lado. |
| 0:11 | Frase pivote: "Esto no es magia. Es metodo. Hoy aprenden el metodo." |
| 0:12 | Hoja de ruta: 5 frameworks → multimodal → 4 casos por rol → cierre |

**Instructor:** si alguien escribe algo relevante en el chat, dirigirse por nombre. No repetir caso Elida.

---

### BLOQUE 2: POR QUE IMPORTA EL PROMPT (0:12 - 0:25) — 13 min

**Objetivo:** Instalar intuicion "input determina output" antes de los frameworks.

| Min | Tema | Contenido |
|-----|------|-----------|
| 0:12 | Divider | "Calidad de pregunta = calidad de respuesta" |
| 0:13 | Analogia | Empleado brillante sin contexto. "Si le pides a tu asistente nuevo 'hazme un reporte', que esperarias?" |
| 0:15 | Que sabe el modelo | NO te conoce. NO sabe de tu empresa. NO tiene acceso a tus sistemas. SI tiene patrones generales. |
| 0:17 | 4 bloques minimos | ROL + TAREA + CONTEXTO + FORMATO. Micro-slide por cada uno. |
| 0:20 | Anti-patron | Prompts de una linea. Preguntas sin restricciones. Esperar que adivine. |
| 0:22 | Chat prompt | "Escriban el prompt mas vago que usaron esta semana. Lo refactorizamos." |
| 0:24 | Refactor en vivo | Tomar 1-2 ejemplos del chat, reescribir al aire con los 4 bloques. |

---

### BLOQUE 3: LOS 5 FRAMEWORKS (0:25 - 1:05) — 40 min

**Objetivo:** 5 herramientas memorables, cada una con demo o ejemplo. Corazon de la sesion.

**NOTA INSTRUCTOR:** Proteger estos 40 min a toda costa. Si vas atrasado, cortar Bloque 2, nunca este.

---

#### 3.1 — RACTF profundizado (0:25 - 0:35) — 10 min

- Rol · Accion · Contexto · Tono · Formato
- Una slide por letra con ejemplo real
- Ejemplo completo: respuesta a cliente insatisfecho (Agyl-relevante)
- Demo: mismo prompt SIN RACTF vs CON RACTF en Claude

**Prompt demo (ver `sesion-2/prompts-demo.md` #2):**
> ROL: Eres gerente de cuenta senior de una consultora de aseguramiento...

---

#### 3.2 — Chain of Thought (0:35 - 0:43) — 8 min

- Concepto: "piensa paso a paso" fuerza al modelo a desglosar razonamiento
- Cuando usar: decisiones multivariable, analisis, calculos, priorizacion
- **Demo en vivo:** distribucion presupuesto $50k marketing B2B (ver prompts #3)
- Frase: "No es un truco. Es pedirle al modelo que muestre el trabajo."

---

#### 3.3 — Few-shot prompting (0:43 - 0:51) — 8 min

- Concepto: 2-3 ejemplos del output que quieres → el modelo replica patron
- **Demo:** clasificar tickets (urgente/rutina/escalable) sin ejemplos vs con ejemplos (ver prompts #4)
- Aplicacion Agyl: clasificar correos, estandarizar reportes, mantener tono de marca

---

#### 3.4 — System prompt vs User prompt (0:51 - 0:57) — 6 min

- Conceptual, sin demo profunda
- System = instrucciones permanentes del asistente. User = la tarea especifica.
- Donde configurarlo: ChatGPT (Custom Instructions), Claude (Projects)
- Caso de uso: asistente recurrente con rol fijo ("editor financiero senior de Agyl")

---

#### 3.5 — Iteracion y refinamiento (0:57 - 1:05) — 8 min

- El primer output casi nunca es el final. El prompt es una conversacion.
- **Demo:** 4 turnos de refinamiento de un email ejecutivo (ver prompts #5)
- Tecnicas extra: "pregúntame que te falta saber antes de responder", "evalua tu propia respuesta y mejorala"

---

### BLOQUE 4: MULTIMODAL — MAS ALLA DEL TEXTO (1:05 - 1:30) — 25 min

**Objetivo:** Cerrar el gap multimodal de S1. Mostrar en vivo vision, documentos, audio.

**Pre-requisito critico:** Archivos demo probados 30 min antes. Subidas en vivo que fallen matan el bloque.

| Min | Demo | Prompt |
|-----|------|--------|
| 1:05 | Divider | "La IA ya no solo lee texto" |
| 1:06 | Vision — grafica financiera (Claude) | Ver prompts #6 |
| 1:11 | Vision — whiteboard / notas manuscritas (ChatGPT) | Ver prompts #7 |
| 1:15 | Documentos — PDF largo (Claude) | Ver prompts #8 |
| 1:20 | Audio — flujo (sin demo en vivo, solo mostrar) | Ver prompts #9 |
| 1:23 | ChatGPT vs Claude multimodal — mismo prompt de grafica a ambos | — |
| 1:27 | Chat prompt | "Que tipo de archivos manejan a diario que podrian pasarle a una IA?" |

---

### BLOQUE 5: CASOS APLICADOS POR ROL AGYL (1:30 - 1:50) — 20 min

**Objetivo:** Aterrizar todo a roles reales. Cada caso combina RACTF + CoT + restricciones + (cuando aplica) multimodal.

**Formato:** Grid de 4 tarjetas. Audiencia vota por chat cual profundizar. Se demuestran 2 de 4 en vivo.

| # | Rol | Caso | Tecnica | Prompt |
|---|-----|------|---------|--------|
| 1 | Comercial | Propuesta a cliente desde brief | RACTF + few-shot | #10 |
| 2 | Operaciones | Analisis de incidente + plan de accion | CoT + tabla | #11 |
| 3 | Analisis / Riesgo | Resumen ejecutivo regulatorio + KPIs | Multimodal + CoT | #12 |
| 4 | Liderazgo | Prep reunion con stakeholder dificil | Iteracion + tono | #13 |

| Min | Accion |
|-----|--------|
| 1:30 | Grid de 4 casos. "Voten en el chat: 1, 2, 3 o 4." |
| 1:32 | Contar votos 60 seg |
| 1:33 | Caso ganador — ejecutar en vivo, narrando cada eleccion |
| 1:41 | Caso segundo mas votado — version abreviada |
| 1:48 | "Los prompts completos estan en el material que les enviamos." |

---

### BLOQUE 6: CIERRE + PUENTE A S3 (1:50 - 2:00) — 10 min

**Objetivo:** Cierre formal obligatorio. No sacrificable por nada.

| Min | Accion |
|-----|--------|
| 1:50 | Divider "3 ideas para llevarse" |
| 1:51 | Idea 1 — Calidad del output = calidad del input. RACTF es el piso minimo. |
| 1:52 | Idea 2 — La IA no solo lee: ve, oye, procesa documentos. Lo que manejan ya es materia prima. |
| 1:53 | Idea 3 — El prompt es una conversacion. Iteren hasta que sirva. |
| 1:54 | **Tarea pre-S3:** "Refactoricen 1 prompt que usen semanalmente con RACTF. Mandenlo por chat antes de la proxima." |
| 1:55 | Preview S3: "Hoy le hablamos bien a la IA. La proxima, vamos a ensenarle a actuar por nosotros — herramientas, flujos y agentes." |
| 1:56 | Q&A abierto (4 min) |
| 2:00 | Slide final: contacto + agradecimiento + logo Agyl |

---

## Checklist pre-sesion

- [ ] ChatGPT logueado, Custom Instructions limpio, GPT-4 / GPT-4o
- [ ] Claude logueado, Project "AGYL sesion 2" configurado
- [ ] Archivos demo en carpeta unica: grafica.png, whiteboard.jpg, informe.pdf
- [ ] `prompts-demo.md` abierto en ventana lateral
- [ ] Navegador: slides fullscreen, chat de plataforma visible
- [ ] Segunda pantalla: tab Claude, tab ChatGPT
- [ ] Prueba audio/video
- [ ] Cerrar notificaciones (Slack, correo)

## Notas del instructor

### Lecciones aprendidas de S1 aplicadas aqui

- **PROTEGER TIEMPO DE DEMOS:** Bloques 3 y 4 son 65 min combinados. Si vas atrasado, corta Bloque 2 antes que tocar demos.
- **CIERRE OBLIGATORIO:** Bloque 6 tiene 10 min blindados. Nunca sacrificar.
- **NO CASO ELIDA:** dirigirse por nombre a quien escribe en chat, acusar recibo. Si pregunta fuera de tema: "excelente, lo retomo en Q&A al final".
- **ANGULO CORPORATIVO EN PRIVACIDAD:** en demos con documentos, recordar "usen datos anonimizados o documentos publicos al practicar".
- **LLM vs AGENTE:** retomarlo brevemente en preview S3.
- **CHAT ACTIVO SIEMPRE:** 4 momentos explicitos (min 0:05, 0:22, 1:27, 1:30). Leer en voz alta cada vez.

### Si la energia baja (se nota en el chat)

- Preguntar: "Quien ya probo esto en su trabajo?"
- Contar caso real
- Saltar a la siguiente demo

### Si van adelantados

- Extender Q&A
- Profundizar el 3er caso del bloque 5
- Demo extra con un prompt que pida la audiencia en chat

### Si van atrasados

- Comprimir Bloque 2 a 8 min (saltar anti-patron)
- Reducir Bloque 5 a 1 solo caso en vivo (el mas votado)
- Q&A puede ser 2 min
- NUNCA sacrificar demos de Bloque 3, multimodal de Bloque 4, ni cierre de Bloque 6

### Si falla un demo multimodal

- Tener screenshot del output esperado listo en carpeta `images/backup/`
- Mostrar el screenshot, explicar lo que deberia haber pasado, seguir
- No intentar debuggear en vivo mas de 20 seg
