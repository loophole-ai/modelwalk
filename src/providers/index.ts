import type { Provider } from '../types/index.js'

import aihubmix from './configs/aihubmix.json' with { type: 'json' }
import alibabaSingapore from './configs/alibaba-singapore.json' with { type: 'json' }
import alibabaUnitedStates from './configs/alibaba-united-states.json' with { type: 'json' }
import anthropic from './configs/anthropic.json' with { type: 'json' }
import atlascloud from './configs/atlascloud.json' with { type: 'json' }
import avian from './configs/avian.json' with { type: 'json' }
import azure from './configs/azure.json' with { type: 'json' }
import baseten from './configs/baseten.json' with { type: 'json' }
import bedrockEurope from './configs/bedrock-europe.json' with { type: 'json' }
import bedrockUnitedStates from './configs/bedrock-united-states.json' with { type: 'json' }
import cerebras from './configs/cerebras.json' with { type: 'json' }
import chutes from './configs/chutes.json' with { type: 'json' }
import copilot from './configs/copilot.json' with { type: 'json' }
import cortecs from './configs/cortecs.json' with { type: 'json' }
import deepseek from './configs/deepseek.json' with { type: 'json' }
import fireworks from './configs/fireworks.json' with { type: 'json' }
import gemini from './configs/gemini.json' with { type: 'json' }
import groq from './configs/groq.json' with { type: 'json' }
import huggingface from './configs/huggingface.json' with { type: 'json' }
import hyper from './configs/hyper.json' with { type: 'json' }
import inception from './configs/inception.json' with { type: 'json' }
import ionet from './configs/ionet.json' with { type: 'json' }
import kimi from './configs/kimi.json' with { type: 'json' }
import minimax from './configs/minimax.json' with { type: 'json' }
import minimaxChina from './configs/minimax-china.json' with { type: 'json' }
import mistral from './configs/mistral.json' with { type: 'json' }
import moonshot from './configs/moonshot.json' with { type: 'json' }
import nebius from './configs/nebius.json' with { type: 'json' }
import neuralwatt from './configs/neuralwatt.json' with { type: 'json' }
import openai from './configs/openai.json' with { type: 'json' }
import opencodeGo from './configs/opencode-go.json' with { type: 'json' }
import opencodeZen from './configs/opencode-zen.json' with { type: 'json' }
import openrouter from './configs/openrouter.json' with { type: 'json' }
import pioneer from './configs/pioneer.json' with { type: 'json' }
import qiniucloud from './configs/qiniucloud.json' with { type: 'json' }
import scaleway from './configs/scaleway.json' with { type: 'json' }
import synthetic from './configs/synthetic.json' with { type: 'json' }
import venice from './configs/venice.json' with { type: 'json' }
import vercel from './configs/vercel.json' with { type: 'json' }
import vertexai from './configs/vertexai.json' with { type: 'json' }
import xai from './configs/xai.json' with { type: 'json' }
import zai from './configs/zai.json' with { type: 'json' }
import zhipu from './configs/zhipu.json' with { type: 'json' }
import zhipuCoding from './configs/zhipu-coding.json' with { type: 'json' }

export const providers: Provider[] = [
  aihubmix,
  alibabaSingapore,
  alibabaUnitedStates,
  anthropic,
  atlascloud,
  avian,
  azure,
  baseten,
  bedrockEurope,
  bedrockUnitedStates,
  cerebras,
  chutes,
  copilot,
  cortecs,
  deepseek,
  fireworks,
  gemini,
  groq,
  huggingface,
  hyper,
  inception,
  ionet,
  kimi,
  minimax,
  minimaxChina,
  moonshot,
  mistral,
  nebius,
  neuralwatt,
  openai,
  opencodeGo,
  opencodeZen,
  openrouter,
  pioneer,
  qiniucloud,
  scaleway,
  synthetic,
  venice,
  vercel,
  vertexai,
  xai,
  zai,
  zhipu,
  zhipuCoding,
] as Provider[]

export function getAll(): Provider[] {
  return providers
}

export function getById(id: string): Provider | undefined {
  return providers.find((p) => p.id === id)
}
