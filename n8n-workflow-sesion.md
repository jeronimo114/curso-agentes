# n8n Workflow: Sesión Emilio Uribe → Google Sheets

## Workflow Status

✅ **Created** in n8n at `https://n8n.jeroooo.com`  
**Name**: `Sesión Emilio Uribe → Google Sheets`  
**ID**: `uayud9n4lVVngnC2`  
**Webhook URL**: `https://n8n.jeroooo.com/webhook/sesion-emilio-uribe`  
**Status**: Inactive (needs final config)

## Remaining Setup Steps

### 1. Create the Google Sheet

1. Create a new Google Sheet named "Sesiones - Respuestas"
2. Add these headers in row 1 (exact names):

| timestamp | nombre | email | rol | nivel_tecnico | exp_ia | herramientas | motivo | expectativas | tema_especifico | disponibilidad | algo_mas | source | url |

3. Copy the sheet URL

### 2. Add Google Sheets OAuth Credential

1. In n8n → **Credentials** → **Add Credential**
2. Select **Google Sheets OAuth2**
3. Authorize with your Google account
4. Save

### 3. Configure the Google Sheets Node

1. Open the workflow in n8n
2. Click the **Google Sheets** node
3. Set the **Document** to your sheet (paste URL or select from list)
4. The column mappings are already set up
5. Save

### 4. Activate the Workflow

1. Click **Activate** toggle (top right)
2. Test by filling out `jeroooo.com/sesion-emilio-uribe.html`
3. Check Google Sheet for the new row

## Workflow Structure

```
Webhook (POST /sesion-emilio-uribe)
  → Google Sheets (Append row with all answers)
    → Respond to Webhook ({ success: true })
```

## Data Received

```json
{
  "nombre": "Emilio Uribe",
  "email": "emilio@example.com",
  "rol": "CEO en mi empresa",
  "nivel_tecnico": "7",
  "exp_ia": "Intermedia",
  "herramientas": "ChatGPT, Claude, Notion AI",
  "motivo": "Aprender IA para mi trabajo",
  "expectativas": "Quiero automatizar reportes...",
  "tema_especifico": "Automatización con n8n",
  "disponibilidad": "Próximas 2 semanas",
  "algo_mas": "",
  "timestamp": "2026-04-13T15:30:00.000Z",
  "source": "sesion-emilio-uribe",
  "url": "https://jeroooo.com/sesion-emilio-uribe.html"
}
```
