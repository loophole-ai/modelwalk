import { createServer } from 'node:http';
import { createHash } from 'node:crypto';
import { getAll } from './providers/index.js';
const PORT = process.env.MODELWALK_PORT ?? '8080';
const providersJSON = JSON.stringify(getAll(), null, 2);
const providersETag = `"${createHash('sha256').update(providersJSON).digest('hex').slice(0, 16)}"`;
function setCommonHeaders(res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('ETag', providersETag);
    res.setHeader('Cache-Control', 'public, max-age=60');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'If-None-Match');
}
function providersHandler(req, res) {
    setCommonHeaders(res);
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }
    if (req.method === 'HEAD') {
        res.writeHead(200);
        res.end();
        return;
    }
    if (req.method !== 'GET') {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Method not allowed' }));
        return;
    }
    const clientETag = req.headers['if-none-match'];
    if (clientETag === providersETag) {
        res.writeHead(304);
        res.end();
        return;
    }
    res.writeHead(200);
    res.end(providersJSON);
}
function healthHandler(_req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
}
function deprecatedHandler(_req, res) {
    res.writeHead(410, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'This endpoint was removed. Please use /v2/providers instead.' }));
}
const server = createServer((req, res) => {
    const url = req.url ?? '/';
    if (url === '/v2/providers')
        return providersHandler(req, res);
    if (url === '/providers')
        return deprecatedHandler(req, res);
    if (url === '/health' || url === '/healthz')
        return healthHandler(req, res);
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
});
server.listen(PORT, () => {
    console.log(`ModelWalk server running on http://localhost:${PORT}`);
    console.log(`Serving ${getAll().length} providers`);
});
//# sourceMappingURL=server.js.map