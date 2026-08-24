import type { Provider } from './types/index.js';
export declare class ModelWalkClient {
    private baseURL;
    private cachedETag;
    private cachedProviders;
    constructor(url?: string);
    getProviders(): Promise<Provider[]>;
    getEmbedded(): Provider[];
}
export declare function fetchProviders(url?: string): Promise<Provider[]>;
//# sourceMappingURL=client.d.ts.map