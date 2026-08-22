// Proxy de señalización WHEP: el navegador habla SIEMPRE con jeroooo.com,
// nunca con el host del túnel. Así el link no cambia y no importa si una red
// filtra el DNS de trycloudflare.com (el video sigue yendo P2P por WebRTC).
const POINTER = 'https://live-pointer.vercel.app/live.json';

async function rawBody(req) {
  if (typeof req.body === 'string') return req.body;
  if (Buffer.isBuffer(req.body)) return req.body.toString('utf8');
  const chunks = [];
  for await (const c of req) chunks.push(c);
  return Buffer.concat(chunks).toString('utf8');
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).send('method not allowed');

  let host = '', stream = 'live';
  try {
    const r = await fetch(POINTER + '?t=' + Date.now(), { cache: 'no-store' });
    const d = await r.json();
    host = (d.host || '').replace(/^https?:\/\//, '').replace(/\/+$/, '');
    stream = d.stream || 'live';
  } catch (_) {}
  if (!host) return res.status(503).send('sin transmision activa');

  try {
    const up = await fetch(`https://${host}/${stream}/whep`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/sdp' },
      body: await rawBody(req),
    });
    const sdp = await up.text();
    res.setHeader('Content-Type', 'application/sdp');
    return res.status(up.status).send(sdp);
  } catch (err) {
    return res.status(502).send('no se pudo hablar con el servidor de video');
  }
}
