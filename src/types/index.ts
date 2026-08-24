export type ProviderType =
  | 'openai'
  | 'openai-compat'
  | 'openrouter'
  | 'vercel'
  | 'anthropic'
  | 'google'
  | 'azure'
  | 'bedrock'
  | 'google-vertex'

export interface ModelOptions {
  temperature?: number
  top_p?: number
  top_k?: number
  frequency_penalty?: number
  presence_penalty?: number
  provider_options?: Record<string, unknown>
}

export interface Model {
  id: string
  name: string
  cost_per_1m_in: number
  cost_per_1m_out: number
  cost_per_1m_in_cached: number
  cost_per_1m_out_cached: number
  context_window: number
  default_max_tokens: number
  can_reason: boolean
  reasoning_levels?: string[]
  default_reasoning_effort?: string
  supports_attachments: boolean
  options?: ModelOptions
}

export interface Provider {
  name: string
  id: string
  api_key?: string
  api_endpoint?: string
  type?: ProviderType
  default_large_model_id?: string
  default_small_model_id?: string
  models?: Model[]
  default_headers?: Record<string, string>
}
