import { getAll } from './providers/index.js';
const DEFAULT_URL = 'http://localhost:8080';
export class ModelWalkClient {
    baseURL;
    cachedETag = null;
    cachedProviders = null;
    constructor(url) {
        this.baseURL = url ?? process.env.MODELWALK_URL ?? DEFAULT_URL;
    }
    async getProviders() {
        const headers = {};
        if (this.cachedETag)
            headers['If-None-Match'] = this.cachedETag;
        try {
            const res = await fetch(`${this.baseURL}/v2/providers`, {
                headers,
                signal: AbortSignal.timeout(10_000),
            });
            if (res.status === 304 && this.cachedProviders) {
                return this.cachedProviders;
            }
            if (!res.ok) {
                throw new Error(`Unexpected status: ${res.status}`);
            }
            const etag = res.headers.get('etag');
            if (etag)
                this.cachedETag = etag;
            const providers = await res.json();
            this.cachedProviders = providers;
            return providers;
        }
        catch {
            if (this.cachedProviders)
                return this.cachedProviders;
            return getAll();
        }
    }
    getEmbedded() {
        return getAll();
    }
}
export async function fetchProviders(url) {
    const client = new ModelWalkClient(url);
    return client.getProviders();
}
//# sourceMappingURL=client.js.map