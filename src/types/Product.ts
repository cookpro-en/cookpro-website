export interface Product {
    sku: string;
    name: string;
    description: string;
    bullets: string[];
    brand: string;
    imageUrl: {
        main: string,
        alts: string[]
    };
}
