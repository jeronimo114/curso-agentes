# Sesion 1: IA Basica — Version Presencial (Universitarios)

## Parametros

| Campo | Valor |
|-------|-------|
| Duracion | 2 horas (120 min) |
| Formato | Presencial |
| Publico | Universitarios (nivel cero en IA, pero ya usan ChatGPT) |
| Idioma | Espanol |
| Herramientas participantes | Celular con ChatGPT gratis o Claude gratis |
| Fecha | 7 de abril de 2026 |

## Enfoque estrategico

### Diferencias clave vs version virtual corporativa

| Aspecto | Virtual/Corporativo | Presencial/Universitario |
|---------|-------------------|------------------------|
| Interaccion | Chat escrito | Manos levantadas, parejas, movimiento |
| Tono | Profesional, cauto | Directo, intelectual, entre pares |
| Supuesto | "No saben que es IA" | "Ya usan ChatGPT pero no entienden como funciona" |
| Gancho | Utilidad laboral | Curiosidad intelectual + relevancia para su carrera |
| Silencio | Problema critico (rescate) | Manejable (leer la sala, adaptar) |
| Ejercicios | Demos del instructor | Hands-on con celular |

### Arco narrativo
**Curiosidad -> Entendimiento -> Pensamiento critico -> Aplicacion creativa**

No empezamos por "que es la IA" (ellos ya saben). Empezamos por "de donde viene" (no saben) y "como funciona realmente" (tampoco saben).

---

## Estructura minuto a minuto

### Bloque A: Apertura (0:00 - 0:08) — 8 min

**Objetivo:** Establecer que esto NO es una charla de "que es ChatGPT". Tono intelectual.

| Min | Accion |
|-----|--------|
| 0:00 | Slide titulo. Esperar a que se acomoden. |
| 0:02 | Gancho: "Todos usan IA. Casi nadie entiende como funciona." |
| 0:03 | Pedir manos: "Levanten la mano si usaron IA esta semana." (Casi todos.) |
| 0:04 | "Ahora levanten la mano si pueden explicar como funciona." (Casi nadie.) |
| 0:05 | "Esa brecha es exactamente lo que vamos a cerrar hoy." |
| 0:06 | Mostrar hoja de ruta: Historia / Como funciona / Pensamiento critico / Uso estrategico |
| 0:08 | Transicion: "Empecemos por el principio. Y el principio es 1950." |

**Frase clave:** "Hoy no les voy a ensenar a usar ChatGPT. Hoy van a entender la tecnologia que va a definir sus carreras."

---

### Bloque B: Historia de la IA (0:08 - 0:30) — 22 min

**Objetivo:** Narrativa de 70 anos que muestra ciclos de hype y decepcion. Que entiendan que lo que parece magia es resultado de decadas de trabajo.

**Hilo conductor:** "Cada generacion penso que habia resuelto la IA. Cada generacion se equivoco — hasta que los patrones cambiaron."

| Min | Era | Contenido clave | Frase del instructor |
|-----|-----|-----------------|---------------------|
| 0:08 | Divider | "70 anos de intentos" | "La IA no aparecio en 2022. Lleva 70 anos intentandolo." |
| 0:09 | 1950: Turing | Test de Turing. No pregunto "pueden pensar las maquinas?" sino "pueden comportarse como si pensaran?" | "Esa distincion sigue siendo relevante hoy." |
| 0:11 | 1956: Dartmouth | Se inventa el termino "Inteligencia Artificial". McCarthy, Minsky, Shannon. | "Pensaron que lo resolverían en un verano. Literal." |
| 0:13 | 1960s: Perceptrones | Primera red neuronal (Rosenblatt). Hype mediatico. Luego Minsky demuestra limitaciones matematicas. | "Primera vez que el hype supero la realidad. No seria la ultima." |
| 0:15 | 1970s-80s: Primer invierno | Fondos se secan. Sistemas expertos (reglas, no aprendizaje). | "Las reglas escritas por humanos no pueden capturar la complejidad del mundo real." |
| 0:17 | 1990s: ML emerge | Enfoques estadisticos. Deep Blue vence a Kasparov (1997) — pero es fuerza bruta. | "Vencer en ajedrez no es inteligencia. Es calcular muy rapido." |
| 0:19 | 2012: Deep Learning | ImageNet. AlexNet reduce error del 25% al 16%. GPUs hacen posible el entrenamiento. | "El momento en que datos + computo + algoritmos convergieron." |
| 0:21 | 2016: AlphaGo | DeepMind vence a Lee Sedol en Go. No se puede resolver por fuerza bruta. | "Go tiene mas posiciones posibles que atomos en el universo." |
| 0:23 | 2017: Transformers | Paper "Attention Is All You Need". La arquitectura detras de todo. | "Este paper de 2017 es la razon por la que ChatGPT existe. La mayoria nunca ha oido hablar de el." |
| 0:25 | 2020-2023: Era GPT | GPT-3, DALL-E, ChatGPT (100M usuarios en 2 meses). | "La adopcion mas rapida de una tecnologia en la historia humana." |
| 0:27 | 2024-2026: Hoy | Modelos multimodales, agentes, open-source, regulacion. | "Estamos aqui. Pero recuerden los inviernos. Que podria salir mal esta vez?" |
| 0:28 | Ciclos | Diagrama de olas hype/decepcion. | "Entender este patron es lo mas valioso que pueden aprender hoy." |
| 0:29 | Discusion parejas | 30 seg: "Hablen con su companero. Estamos en un ciclo de hype o en una revolucion real?" | Pedir 2-3 opiniones en voz alta. |

---

### Bloque C: Como funciona realmente (0:30 - 0:45) — 15 min

**Objetivo:** Explicacion tecnica accesible. Universitarios pueden con mas profundidad.

| Min | Tema | Contenido |
|-----|------|-----------|
| 0:30 | Divider | "Como funciona realmente" |
| 0:31 | Prediccion de tokens | El concepto central: predice la siguiente palabra mas probable, una a la vez. No "entiende". Calcula distribuciones de probabilidad. |
| 0:34 | Entrenamiento | Datos (texto a escala de internet) + Arquitectura (transformers) + Computo (miles de GPUs). Analogia: "Como aprender un idioma leyendo todos los libros del mundo, sin que nadie te explique la gramatica." |
| 0:37 | Capacidades emergentes | Razonamiento, traduccion, codigo, creatividad — no fueron programadas, emergieron de la escala. "Nadie entiende completamente por que aparecen. Es una pregunta de investigacion abierta." |
| 0:40 | Atencion | Visual de conexiones entre palabras. "El modelo aprende QUE palabras son relevantes para cuales otras. Por eso el contexto importa tanto." |
| 0:43 | Es vs No Es | No es base de datos. No es buscador. No es consciente. No "sabe" cosas. Tiene patrones estadisticos. No recuerda entre conversaciones. |

---

### Bloque D: Ejercicio 1 — "Rompe la IA" (0:45 - 0:55) — 10 min

**Objetivo:** Hands-on competitivo. Descubrir limites experimentalmente.

**Instrucciones (proyectar en pantalla):**
1. En parejas. Abran ChatGPT en su celular.
2. Tienen 5 minutos.
3. Mision: encontrar el fallo mas espectacular.
4. Categorias:
   - **Alucinacion:** Que invente un dato falso con total confianza
   - **Error logico:** Que falle en razonamiento basico
   - **Error matematico:** Que se equivoque en cuentas simples
   - **Sesgo:** Que muestre un sesgo evidente
5. Hagan screenshot del mejor fallo.

**Debrief (5 min):**
- Pedir 3-4 parejas que compartan
- Instructor conecta cada fallo con la teoria: "Recuerden: predice texto probable, no computa verdad"

**Frases de transicion para el debrief:**
- "Ese es un ejemplo perfecto de alucinacion. El modelo genero algo que suena coherente pero es completamente inventado."
- "Ese error matematico pasa porque el modelo no calcula — predice que numero 'se veria bien' en esa posicion."
- "Ese sesgo viene directamente de los datos de entrenamiento."

---

### Bloque E: Energizer (0:55 - 1:00) — 5 min

**Actividad:** Todos de pie.

"Levanten la mano derecha si creen que la IA va a cambiar su carrera en los proximos 5 anos. Levanten la izquierda si creen que no."

"Ahora: los que levantaron la derecha, vayanse al lado izquierdo del salon. Los que levantaron la izquierda, al derecho."

Mini-debate de 2 minutos. Un argumento de cada lado.

"Perfecto. Ahora hablemos de por que ambos lados tienen razon parcialmente."

---

### Bloque F: Pensamiento critico (1:00 - 1:15) — 15 min

**Objetivo:** Rigor intelectual. No solo usar, sino evaluar.

| Min | Tema | Contenido clave |
|-----|------|-----------------|
| 1:00 | Divider | "Pensamiento critico" |
| 1:01 | Alucinaciones | Que son, por que ocurren (optimiza coherencia, no verdad). Ejemplos famosos: citas legales inventadas, papers academicos falsos. "Cuanto mas confiada suena la IA, mas cuidado debes tener." |
| 1:04 | Sesgo | Los datos reflejan sesgos humanos. Estereotipos de genero en descripciones de trabajo. Sesgo racial en generacion de imagenes. "La IA no tiene opiniones. Pero reproduce los patrones de sus datos." |
| 1:07 | Privacidad | Que pasa con lo que escribes en ChatGPT. Politicas de datos. Contexto universitario: no pegues examenes, datos personales, investigacion no publicada. |
| 1:10 | La paradoja | "Lo mas facil que la IA hace algo por ti, menos aprendes haciendolo." Diferencia entre que la IA escriba tu ensayo vs que la IA mejore tu ensayo. Delegacion vs aumentacion. |
| 1:13 | 5 reglas | 1) Nunca confies sin verificar. 2) Entiende lo que NO puede hacer. 3) Protege informacion sensible. 4) Usala para aumentar, no reemplazar, tu pensamiento. 5) Mantente curioso sobre como funciona. |

---

### Bloque G: Ejercicio 2 — "Detector de mentiras" (1:15 - 1:30) — 15 min

**Objetivo:** Entrenar habilidades de verificacion mediante competencia.

**Setup:**
- Grupos de 4-5 estudiantes
- El instructor proyecta 5 afirmaciones (ver abajo)
- Los grupos usan sus celulares para verificar cuales son verdaderas y cuales falsas
- Primer grupo en identificar correctamente todas las falsas gana
- 8 min actividad, 5 min debrief + reveal

**Las 5 afirmaciones (3 verdaderas, 2 falsas):**

1. **VERDADERA:** "El paper 'Attention Is All You Need' que introdujo la arquitectura Transformer fue publicado por investigadores de Google en 2017."
   - *Verificable: Vaswani et al., 2017, Google Brain.*

2. **FALSA:** "Alan Turing propuso el Test de Turing en su paper de 1947 titulado 'Machines and Intelligence' publicado en la revista Nature."
   - *Realidad: Fue en 1950, el paper se llama "Computing Machinery and Intelligence" y se publico en Mind, no en Nature.*

3. **VERDADERA:** "ChatGPT alcanzo 100 millones de usuarios en aproximadamente 2 meses despues de su lanzamiento en noviembre de 2022, convirtiendose en la aplicacion de mas rapido crecimiento en la historia."
   - *Verificable: dato ampliamente documentado.*

4. **VERDADERA:** "AlphaGo de DeepMind derroto al campeon mundial de Go, Lee Sedol, en 2016 con un resultado de 4-1."
   - *Verificable: marzo 2016, Seoul.*

5. **FALSA:** "El primer invierno de la IA fue causado directamente por la publicacion del libro 'Artificial Intelligence: A Modern Approach' de Stuart Russell y Peter Norvig en 1975."
   - *Realidad: Ese libro se publico en 1995, no en 1975. El primer invierno fue causado por la reduccion de fondos (informe Lighthill, 1973) y las limitaciones demostradas por Minsky y Papert.*

**Debrief:**
- Revelar respuesta por respuesta
- Pregunta clave: "Que hizo dificiles de detectar las falsas?"
- Leccion: "Las alucinaciones de IA funcionan exactamente asi. Suenan plausibles, tienen detalles especificos, pero son incorrectas."

---

### Bloque H: Prompt engineering (1:30 - 1:45) — 15 min

**Objetivo:** De teoria a habilidad practica. No como truco sino como comunicacion.

| Min | Tema | Contenido |
|-----|------|-----------|
| 1:30 | Divider | "El arte de la instruccion" |
| 1:31 | Por que importan | "La calidad del output es directamente proporcional a la calidad del input." No es un hack: es la interfaz entre intencion humana y capacidad de maquina. "Estan programando en lenguaje natural." |
| 1:34 | Framework CTFC | Contexto + Tarea + Formato + Criterio. Ejemplo academico: C: "Soy estudiante de 3er semestre de ingenieria industrial." T: "Necesito entender cadena de suministro lean." F: "Explicame con una analogia cotidiana y luego la definicion formal." Cr: "Nivel universitario, en espanol, maximo 200 palabras." |
| 1:38 | Tecnicas avanzadas | Chain of thought: "Piensa paso a paso." Asignacion de rol: "Actua como profesor de [materia]." Refinamiento iterativo: "Mejora esto considerando X." Restricciones: "Argumenta en contra de tu propia respuesta." |
| 1:41 | Casos academicos | Grid de 6 usos legitimos: Investigacion ("Explica este concepto mas simple" / "Cuales son los contraargumentos?"), Estudio ("Crea flashcards de estos apuntes" / "Hazme un quiz del capitulo 3"), Mejora de escritura ("Revisa coherencia logica" — NO "escribe mi ensayo"), Resolucion de problemas ("Guidame paso a paso en este tipo de problema"), Preparacion de presentaciones ("Ayudame a estructurar una exposicion sobre X"), Analisis critico ("Que debilidades tiene este argumento?"). |

---

### Bloque I: Ejercicio 3 — "Reto academico" (1:45 - 1:55) — 10 min

**Objetivo:** Aplicacion inmediata y personalizada.

**Instrucciones:**
1. Ejercicio individual en su celular.
2. Piensen en un examen o materia real que tengan proximamente.
3. Usando ChatGPT o Claude gratis, creen el mejor recurso de estudio que puedan en 5 minutos.
4. Opciones:
   - Un mapa conceptual o resumen estructurado
   - Preguntas de practica con respuestas
   - Explicacion de un concepto dificil usando una analogia
   - Un plan de estudio personalizado
5. Compartan su mejor resultado. La clase vota el mas creativo/util.

**Debrief (5 min):**
- 3-4 voluntarios muestran su pantalla
- Discusion: que hizo funcionar los buenos prompts?
- Atar al framework CTFC

---

### Bloque J: Cierre (1:55 - 2:00) — 5 min

| Min | Accion |
|-----|--------|
| 1:55 | Vision: "La IA no aparecio de la nada. Es el resultado de 70 anos de investigacion, fracasos y descubrimientos. Entender su historia les da algo que la mayoria de usuarios no tiene: perspectiva." |
| 1:57 | 3 ideas clave: 1) La IA predice, no piensa. Verificar siempre. 2) Tu capacidad de hacer buenas preguntas es tu mayor ventaja. 3) Usarla bien es una habilidad. Empiecen a practicar hoy. |
| 1:59 | Teaser proxima sesion: "De entender que es, a ver claramente como aplicarla mejor y con mas estructura." |
| 2:00 | "Gracias. Preguntas?" |

---

## Patron de ritmo

Explicar 4-5 min -> Mostrar visual -> Actividad presencial -> Conclusion

Nunca mas de 7 minutos seguidos de exposicion sin interaccion.

---

## Notas del instructor

### Si la energia baja
- Agregar una pregunta de manos levantadas
- Pedir que hablen 30 seg con su companero
- Cambiar a anecdota o ejemplo polemico

### Si van adelantados en tiempo
- Extender debrief de ejercicios
- Agregar preguntas abiertas al grupo
- Profundizar en la discusion de ciclos de hype

### Si van atrasados
- Reducir historia: saltar Dartmouth y Perceptrones (ir directo de Turing a primer invierno)
- Reducir tecnicas avanzadas de prompts a solo mencion
- El ejercicio 3 puede hacerse en 3 min en vez de 5
