import { createHash } from 'node:crypto'
import { getAll } from '../dist/providers/index.js'

const providersJSON = JSON.stringify(getAll(), null, 2)
const providersETag = `"${createHash('sha256').update(providersJSON).digest('hex').slice(0, 16)}"`

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('ETag', providersETag)
  res.setHeader('Cache-Control', 'public, max-age=60')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'If-None-Match')

  const url = req.url ?? '/'

  if (req.method === 'OPTIONS') { res.status(204).end(); return }

  if (url.includes('/health') || url.includes('/healthz')) {
    res.setHeader('Content-Type', 'text/plain')
    res.status(200).end('OK')
    return
  }

  if (url.includes('/providers') && !url.includes('/v2')) {
    res.status(410).end(JSON.stringify({ error: 'Use /v2/providers instead.' }))
    return
  }

  const clientETag = req.headers['if-none-match']
  if (clientETag === providersETag) { res.status(304).end(); return }

  res.status(200).end(providersJSON)
}
