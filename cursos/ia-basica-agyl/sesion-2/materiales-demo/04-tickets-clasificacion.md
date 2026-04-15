# Aprender con ejemplos — Clasificación de tickets (slide 25 · min 0:46)

**Modelo:** ChatGPT (gpt-4o o gpt-5).

---

## Paso 1 — Sin ejemplos

Conversación nueva. Pegar:

--- COPIAR DESDE AQUÍ ---

Clasifica estos tickets de servicio al cliente en urgente, rutina o escalable:

1. "No puedo acceder a la plataforma desde ayer, tengo una entrega hoy"
2. "¿Cómo cambio mi contraseña?"
3. "La integración con SAP está fallando en 4 clientes simultáneamente"
4. "Necesito el manual de usuario en PDF"
5. "Hay un error en el cálculo del reporte de cierre trimestral"

--- HASTA AQUÍ ---

Lo importante: el modelo va a inventar criterios. Si corres el mismo prompt 3 veces, las respuestas no son consistentes — el "criterio" no está fijado.

---

## Paso 2 — Con 3 ejemplos

Conversación nueva. Pegar:

--- COPIAR DESDE AQUÍ ---

Clasifica tickets de servicio al cliente. Usa estas 3 categorías exactas con los criterios dados:

URGENTE: afecta operación crítica del cliente hoy. Respuesta en <2h.
Ejemplo: "Sistema caído, 50 usuarios sin poder facturar"

RUTINA: solicitud informativa o funcionalidad estándar. Respuesta en 24h.
Ejemplo: "¿Dónde descargo el manual de la API?"

ESCALABLE: afecta a múltiples clientes o toca lógica core. Requiere ingeniería.
Ejemplo: "El módulo de reportes genera cifras incorrectas en 3 cuentas distintas"

Ahora clasifica estos 5 tickets, devuelve solo el número y la categoría:

1. "No puedo acceder a la plataforma desde ayer, tengo una entrega hoy"
2. "¿Cómo cambio mi contraseña?"
3. "La integración con SAP está fallando en 4 clientes simultáneamente"
4. "Necesito el manual de usuario en PDF"
5. "Hay un error en el cálculo del reporte de cierre trimestral"

--- HASTA AQUÍ ---

---

## Resultado esperado con ejemplos

1. URGENTE
2. RUTINA
3. ESCALABLE
4. RUTINA
5. ESCALABLE

Si lo corres 5 veces seguidas → el resultado es el mismo. Eso es lo que aporta el few-shot.

---

## Narración

> "Los ejemplos no le enseñaron categorías nuevas. Le enseñaron **el criterio** para usar las que ya tenían. Eso es lo único que cambió entre los dos prompts."
