# ModelWalk

A TypeScript model catalog server for Loophole IDE, inspired by [Charm's catwalk](https://github.com/charmbracelet/catwalk).

Serves a `GET /v2/providers` endpoint with all AI provider and model configs as JSON, with ETag support for efficient caching.

## Providers

41 providers including Anthropic, OpenAI, Gemini, xAI, DeepSeek, Groq, OpenRouter, Azure, Bedrock, VertexAI, Mistral, and more.

## Usage

### As a server

```bash
npm install
npm run build
npm start
# or for dev
npm run dev
```

Set `MODELWALK_PORT` to change the port (default: `8080`).

### As a library (embedded in your IDE)

```ts
import { getAll, getById, ModelWalkClient } from 'modelwalk'

const providers = getAll()

const client = new ModelWalkClient('https://your-modelwalk-server.com')
const liveProviders = await client.getProviders()
```

The client falls back to embedded JSON if the server is unreachable.

## API

| Endpoint | Description |
|---|---|
| `GET /v2/providers` | All providers + models as JSON |
| `HEAD /v2/providers` | ETag check |
| `GET /health` | Health check |

## Adding / updating models

Edit the JSON files in `src/providers/configs/`. Each file is one provider. Rebuild to apply.

## Env vars

| Variable | Default | Description |
|---|---|---|
| `MODELWALK_PORT` | `8080` | Server port |
| `MODELWALK_URL` | `http://localhost:8080` | Client target URL |
