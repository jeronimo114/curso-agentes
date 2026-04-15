# Prompts demo — Sesión 2 AGYL

Lista plana para copiar rápido durante la sesión. Cada prompt está listo para pegar sin ajustes. Si algún prompt tiene `[placeholder]`, rellénalo antes de la sesión.

---

## 1. Demo apertura — vago vs estructurado

**Vago (ChatGPT):**
```
Hazme un reporte de ventas.
```

**Estructurado (mismo ChatGPT, misma conversación nueva):**
```
Actúa como analista de ventas senior de una consultora de aseguramiento con 200 empleados en Colombia.

Redacta un reporte ejecutivo del trimestre con esta estructura:
1. Resumen en 3 bullets
2. Cifras clave (ingresos, margen, top 3 cuentas)
3. 2 riesgos identificados
4. Recomendación accionable

Tono: directo, sin jerga vacía. Formato: markdown, máximo 400 palabras. Si te faltan datos, invéntalos de forma realista y márcalos con [dato ficticio].
```

---

## 2. RACTF — respuesta a cliente insatisfecho

```
ROL: Eres gerente de cuenta senior de una consultora de aseguramiento con 15 años atendiendo clientes corporativos.
ACCIÓN: Redacta una respuesta a un cliente que escribió quejándose por un retraso de 2 semanas en la entrega de un informe regulatorio.
CONTEXTO: El retraso se debió a cambios de alcance solicitados por el mismo cliente a mitad de proyecto. La relación es de 4 años, valiosa. Queremos sostenerla sin aceptar responsabilidad que no es nuestra.
TONO: Firme, empático, profesional. Ni a la defensiva ni complaciente.
FORMATO: Correo de máximo 180 palabras. Asunto incluido. Cierra con un próximo paso concreto.
```

---

## 3. CoT — distribución presupuesto $50k

**Sin CoT (ChatGPT):**
```
Tengo un presupuesto de $50,000 USD para marketing digital de una empresa B2B de software. ¿Cómo lo distribuyo?
```

**Con CoT (Claude):**
```
Tengo un presupuesto de $50,000 USD para marketing digital de una empresa B2B de software de nicho en Latinoamérica. Piensa paso a paso:

1. Primero analiza qué canales son más efectivos para B2B de nicho en LATAM
2. Luego evalúa el ROI típico de cada canal con rangos realistas
3. Después propón una distribución justificada del presupuesto
4. Finalmente identifica los 3 principales riesgos de esta distribución y cómo mitigarlos

Muestra tu razonamiento en cada paso antes de dar la recomendación final.
```

---

## 4. Few-shot — clasificación de tickets

**Sin ejemplos:**
```
Clasifica estos tickets de servicio al cliente en urgente, rutina o escalable:

1. "No puedo acceder a la plataforma desde ayer, tengo una entrega hoy"
2. "¿Cómo cambio mi contraseña?"
3. "La integración con SAP está fallando en 4 clientes simultáneamente"
4. "Necesito el manual de usuario en PDF"
5. "Hay un error en el cálculo del reporte de cierre trimestral"
```

**Con ejemplos (few-shot):**
```
Clasifica tickets de servicio al cliente. Usa estas 3 categorías exactas con los criterios dados:

URGENTE: afecta operación crítica del cliente hoy. Respuesta en <2h.
Ejemplo: "Sistema caído, 50 usuarios sin poder facturar"

RUTINA: solicitud informativa o funcionalidad estándar. Respuesta en 24h.
Ejemplo: "¿Dónde descargo el manual de la API?"

ESCALABLE: afecta a múltiples clientes o toca lógica core. Requiere ingeniería.
Ejemplo: "El módulo de reportes genera cifras incorrectas en 3 cuentas distintas"

Ahora clasifica estos 5 tickets, devuelve solo la categoría:

1. "No puedo acceder a la plataforma desde ayer, tengo una entrega hoy"
2. "¿Cómo cambio mi contraseña?"
3. "La integración con SAP está fallando en 4 clientes simultáneamente"
4. "Necesito el manual de usuario en PDF"
5. "Hay un error en el cálculo del reporte de cierre trimestral"
```

---

## 5. Iteración — email ejecutivo refinado

**Turno 1:**
```
Redacta un correo para el comité directivo informando que el proyecto de migración tecnológica se retrasará 6 semanas por dependencias con un proveedor externo.
```

**Turno 2:**
```
Más corto. Máximo 120 palabras.
```

**Turno 3:**
```
Ahora agrega al final una sección con 3 opciones de mitigación concretas. Mantén el total en 180 palabras.
```

**Turno 4:**
```
Perfecto. Ahora evalúa tu propio correo: ¿qué mejorarías tú si fueras el director? Reescríbelo aplicando esa crítica.
```

---

## 6. Multimodal — gráfica financiera (Claude)

Adjuntar `images/grafica-demo.png`:

```
Analiza esta gráfica. Piensa paso a paso antes de concluir:

1. Describe qué está midiendo y en qué periodo
2. Identifica las 3 tendencias más relevantes
3. Señala anomalías o puntos de inflexión
4. Propón 2 decisiones de negocio que un director de operaciones podría tomar con estos datos
5. Di qué información adicional necesitarías para decidir con más confianza

Tono: analítico, directo. Formato: secciones numeradas.
```

---

## 7. Multimodal — whiteboard / notas manuscritas (ChatGPT)

Adjuntar `images/whiteboard-demo.jpg`:

```
Transcribe estas notas manuscritas de reunión con fidelidad.

Luego reorganízalas en este formato:

**ACTA DE REUNIÓN**
- Fecha y asistentes (si se deducen)
- Decisiones tomadas
- Acciones comprometidas (qué, quién, cuándo)
- Temas pendientes / bloqueos
- Próximos pasos

Si algo no está claro en la imagen, márcalo con [ilegible].
```

---

## 8. Multimodal — PDF largo (Claude)

Adjuntar `images/informe-demo.pdf` (o cualquier PDF de 15+ páginas):

```
Acabo de subirte un informe. Haz lo siguiente:

1. Resumen ejecutivo en 5 bullets de máximo 25 palabras cada uno
2. Identifica 3 riesgos principales mencionados (cita la página donde aparece cada uno)
3. Lista cualquier cláusula, cifra o afirmación que sea ambigua o requiera validación
4. Pregúntame qué quiero saber con más profundidad antes de seguir

No inventes datos que no estén en el documento.
```

---

## 9. Multimodal — audio de reunión (flujo, no demo en vivo)

Flujo:
1. Grabar reunión con el grabador del sistema o app de notas
2. Subir archivo .m4a o .mp3 a Claude o ChatGPT
3. Usar este prompt:

```
Te estoy subiendo el audio de una reunión de trabajo. Haz lo siguiente:

1. Transcripción completa diferenciando intervenciones por hablante (Hablante 1, 2, 3...) — no inventes nombres
2. Resumen ejecutivo en 5 bullets
3. Tabla de acuerdos: qué se acordó, quién es responsable, fecha objetivo
4. Temas mencionados que NO se cerraron (pendientes)
5. Citas textuales breves que capturen decisiones clave

Tono neutral, sin interpretaciones.
```

---

## 10. Caso Comercial — propuesta desde brief

```
ROL: Director comercial de una consultora de aseguramiento con experiencia en banca y seguros.

ACCIÓN: Redacta una propuesta comercial de 2 páginas a partir de este brief.

CONTEXTO DEL BRIEF:
Cliente: [nombre del cliente]
Industria: banca digital colombiana
Necesidad: revisar su marco de gestión de riesgo operacional tras regulación de la Superintendencia Financiera
Plazo deseado: 3 meses
Presupuesto referencia: no revelado
Decisor: CRO + gerente de cumplimiento

EJEMPLOS DE PROPUESTAS ANTERIORES GANADORAS (emular tono y estructura):
[Pegar aquí 2 propuestas previas anonimizadas]

FORMATO: Markdown con secciones: Entendimiento / Enfoque / Equipo / Entregables / Plan de trabajo / Inversión.
TONO: Confianza técnica sin arrogancia. Español corporativo colombiano.
```

---

## 11. Caso Operaciones — análisis de incidente

```
ROL: Analista senior de operaciones especializado en gestión de incidentes.

ACCIÓN: Analiza este incidente reportado y genera un plan de acción priorizado.

INCIDENTE:
El lunes a las 8:30 AM, 120 usuarios del módulo de conciliación reportaron lentitud extrema. El equipo de infraestructura reinició el servicio a las 10:15 AM. La causa preliminar apunta a un proceso batch que no terminó la noche anterior.

Piensa paso a paso:
1. Reconstruye la línea de tiempo
2. Identifica causa raíz probable y 2 alternativas
3. Define acciones correctivas inmediatas (hoy)
4. Define acciones preventivas (próximas 2 semanas)
5. Propón indicadores para monitorear que no vuelva a pasar

FORMATO: tabla de acciones con columnas Acción / Responsable / Plazo / Criterio de cierre.
```

---

## 12. Caso Análisis/Riesgo — resumen regulatorio

Adjuntar PDF de un informe regulatorio o circular:

```
ROL: Analista de cumplimiento regulatorio senior.

ACCIÓN: Procesa este documento regulatorio y entrega un brief ejecutivo para el comité de riesgos.

Piensa paso a paso:
1. Identifica los cambios normativos clave (máximo 5)
2. Por cada cambio, estima impacto operativo (alto/medio/bajo) y justifica
3. Lista los procesos internos que se verían afectados
4. Identifica deadlines de cumplimiento
5. Propón un roadmap de adecuación de 90 días

KPIs a extraer si aparecen: plazos, límites cuantitativos, porcentajes, sanciones.

FORMATO: documento estructurado, máximo 1 página. Incluye tabla de impactos al final.
```

---

## 13. Caso Liderazgo — preparación de reunión difícil

**Turno 1:**
```
Tengo una reunión mañana con un stakeholder difícil. Contexto: él está en desacuerdo con la priorización que hicimos del portafolio de proyectos para Q2. Ya hubo una discusión tensa por correo. Tengo 30 minutos con él.

Ayúdame a prepararme. Dame:
1. 3 escenarios de cómo puede arrancar la conversación
2. Los 3 argumentos más fuertes que él probablemente traerá
3. Para cada argumento, una respuesta que valide su punto y sostenga la decisión
4. Una pregunta abierta que me ayude a descubrir qué necesita realmente
5. Un cierre posible si no llegamos a acuerdo
```

**Turno 2:**
```
El escenario 2 me parece el más probable. Profundiza solo en ese. Dame el guion de mi primer minuto de la reunión, palabra por palabra, en tono respetuoso pero firme.
```

**Turno 3:**
```
Ahora hazlo 20% más breve y quítame cualquier frase que suene corporativa genérica ("valoro tu perspectiva", etc.). Tiene que sonar a mí.
```
