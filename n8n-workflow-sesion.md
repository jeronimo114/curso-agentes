# n8n Workflow: Sesión Emilio Uribe → Google Sheets

## Setup

### 1. Google Sheets Preparation

Create a Google Sheet with these columns in the first row:

| timestamp | nombre | email | rol | nivel_tecnico | exp_ia | herramientas | motivo | expectativas | tema_especifico | disponibilidad | algo_mas | source | url |

### 2. n8n Workflow

Create a new workflow in n8n with these nodes:

#### Node 1: Webhook (Trigger)
- **Type**: Webhook
- **Method**: POST
- **Path**: `sesion-emilio-uribe`
- **Authentication**: None (or Header Auth if preferred)
- **Response Mode**: Immediately

#### Node 2: Google Sheets
- **Type**: Google Sheets
- **Operation**: Append
- **Authentication**: OAuth2 (connect your Google account)
- **Spreadsheet**: Select your sheet
- **Columns**: Auto-map from webhook data

### 3. Workflow JSON

Import this JSON into n8n:

```json
{
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "sesion-emilio-uribe",
        "options": {}
      },
      "id": "webhook-trigger",
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 2,
      "position": [240, 400]
    },
    {
      "parameters": {
        "operation": "append",
        "sheetId": {
          "__rl": true,
          "value": "YOUR_SPREADSHEET_ID",
          "mode": "list",
          "cachedResultName": "Sesiones - Respuestas"
        },
        "columns": {
          "mappingMode": "autoMapInputData",
          "value": {}
        },
        "options": {}
      },
      "id": "google-sheets",
      "name": "Google Sheets",
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.6,
      "position": [460, 400],
      "credentials": {
        "googleSheetsOAuth2Api": {
          "id": "YOUR_CREDENTIALS_ID",
          "name": "Google Sheets OAuth2"
        }
      }
    },
    {
      "parameters": {
        "respondWith": "json",
        "responseBody": "{\n  \"success\": true,\n  \"message\": \"Respuesta recibida\"\n}",
        "options": {
          "responseHeaders": {
            "entries": [
              {
                "name": "Content-Type",
                "value": "application/json"
              }
            ]
          }
        }
      },
      "id": "respond-webhook",
      "name": "Respond to Webhook",
      "type": "n8n-nodes-base.respondToWebhook",
      "typeVersion": 1.1,
      "position": [680, 400]
    }
  ],
  "connections": {
    "Webhook": {
      "main": [
        [
          {
            "node": "Google Sheets",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Google Sheets": {
      "main": [
        [
          {
            "node": "Respond to Webhook",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  }
}
```

## Configuration Steps

### Step 1: Update the Webhook URL

In `sesion-emilio-uribe.html`, update line ~10:

```javascript
const N8N_WEBHOOK_URL = 'https://YOUR-N8N-DOMAIN/webhook/sesion-emilio-uribe';
```

Replace with your actual n8n instance URL.

### Step 2: Set up Google OAuth in n8n

1. Go to n8n → Credentials → Add Credential
2. Select "Google Sheets OAuth2"
3. Follow the OAuth flow to authorize
4. Save the credential

### Step 3: Create the Google Sheet

1. Create a new Google Sheet named "Sesiones - Respuestas"
2. Add headers in row 1:
   - `timestamp`
   - `nombre`
   - `email`
   - `rol`
   - `nivel_tecnico`
   - `exp_ia`
   - `herramientas`
   - `motivo`
   - `expectativas`
   - `tema_especifico`
   - `disponibilidad`
   - `algo_mas`
   - `source`
   - `url`

### Step 4: Test the Workflow

1. Open `sesion-emilio-uribe.html` in browser
2. Fill out the form
3. Submit
4. Check Google Sheet for the new row

## Optional Enhancements

### Email Notification

Add an email node after Google Sheets to notify you when someone submits:

```
Webhook → Google Sheets → Email (SendGrid/Gmail) → Respond
```

### Slack/Discord Notification

Send a message to your team channel when a new response comes in.

### Duplicate Detection

Add a "Google Sheets - Read" node before append to check if email already exists.

## Data Received

The form sends this JSON structure:

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
