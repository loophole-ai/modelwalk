# ModelWalk

A TypeScript model catalog server for Loophole IDE, inspired by [Charm's catwalk](https://github.com/charmbracelet/catwalk).

Serves a `GET /v2/providers` endpoint with all AI provider and model configs as JSON, with ETag support for efficient caching.

## Providers

44 providers · 1,587 models

| Provider | Models |
|---|---|
| [AIHubMix](https://models.loopholeeditor.in/v2/providers#aihubmix) | 291 |
| [Alibaba (Singapore)](https://models.loopholeeditor.in/v2/providers#alibaba-singapore) | 21 |
| [Alibaba (US)](https://models.loopholeeditor.in/v2/providers#alibaba-us) | 4 |
| [Anthropic](https://models.loopholeeditor.in/v2/providers#anthropic) | 14 |
| [Atlas Cloud](https://models.loopholeeditor.in/v2/providers#atlascloud) | 32 |
| [Avian](https://models.loopholeeditor.in/v2/providers#avian) | 13 |
| [Azure OpenAI](https://models.loopholeeditor.in/v2/providers#azure) | 14 |
| [Baseten](https://models.loopholeeditor.in/v2/providers#baseten) | 15 |
| [AWS Bedrock Europe](https://models.loopholeeditor.in/v2/providers#bedrock-europe) | 10 |
| [AWS Bedrock US](https://models.loopholeeditor.in/v2/providers#bedrock) | 11 |
| [Cerebras](https://models.loopholeeditor.in/v2/providers#cerebras) | 2 |
| [Chutes](https://models.loopholeeditor.in/v2/providers#chutes) | 12 |
| [GitHub Copilot](https://models.loopholeeditor.in/v2/providers#copilot) | 32 |
| [Cortecs](https://models.loopholeeditor.in/v2/providers#cortecs) | 103 |
| [DeepSeek](https://models.loopholeeditor.in/v2/providers#deepseek) | 2 |
| [Fireworks](https://models.loopholeeditor.in/v2/providers#fireworks) | 17 |
| [Google Gemini](https://models.loopholeeditor.in/v2/providers#gemini) | 10 |
| [Groq](https://models.loopholeeditor.in/v2/providers#groq) | 2 |
| [Hugging Face](https://models.loopholeeditor.in/v2/providers#huggingface) | 19 |
| [Charm Hyper](https://models.loopholeeditor.in/v2/providers#hyper) | 17 |
| [Inception Labs](https://models.loopholeeditor.in/v2/providers#inception) | 2 |
| [io.net](https://models.loopholeeditor.in/v2/providers#ionet) | 32 |
| [Kimi Coding](https://models.loopholeeditor.in/v2/providers#kimi-coding) | 4 |
| [MiniMax China](https://models.loopholeeditor.in/v2/providers#minimax-china) | 8 |
| [MiniMax](https://models.loopholeeditor.in/v2/providers#minimax) | 8 |
| [Mistral AI](https://models.loopholeeditor.in/v2/providers#mistral) | 12 |
| [Moonshot](https://models.loopholeeditor.in/v2/providers#moonshot) | 11 |
| [Nebius Token Factory](https://models.loopholeeditor.in/v2/providers#nebius) | 24 |
| [Neuralwatt](https://models.loopholeeditor.in/v2/providers#neuralwatt) | 18 |
| [OpenAI](https://models.loopholeeditor.in/v2/providers#openai) | 28 |
| [OpenCode Go](https://models.loopholeeditor.in/v2/providers#opencode-go) | 33 |
| [OpenCode Zen](https://models.loopholeeditor.in/v2/providers#opencode-zen) | 64 |
| [OpenRouter](https://models.loopholeeditor.in/v2/providers#openrouter) | 268 |
| [Pioneer](https://models.loopholeeditor.in/v2/providers#pioneer) | 17 |
| [QiniuCloud](https://models.loopholeeditor.in/v2/providers#qiniucloud) | 14 |
| [Scaleway](https://models.loopholeeditor.in/v2/providers#scaleway) | 12 |
| [Synthetic](https://models.loopholeeditor.in/v2/providers#synthetic) | 11 |
| [Venice AI](https://models.loopholeeditor.in/v2/providers#venice) | 102 |
| [Vercel](https://models.loopholeeditor.in/v2/providers#vercel) | 225 |
| [Google Vertex AI](https://models.loopholeeditor.in/v2/providers#vertexai) | 12 |
| [xAI](https://models.loopholeeditor.in/v2/providers#xai) | 6 |
| [Z.AI](https://models.loopholeeditor.in/v2/providers#zai) | 12 |
| [Zhipu Coding](https://models.loopholeeditor.in/v2/providers#zhipu-coding) | 12 |
| [Zhipu](https://models.loopholeeditor.in/v2/providers#zhipu) | 11 |

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