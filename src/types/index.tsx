export interface ProductReview {
    review: string;
    rating: number;
}

export interface ProductImage {
    src: string;
    alt: string;
}

export interface ProductPricing {
    quantity: string;
    price: number;
    salePrice?: number;
}

export interface BriefProductInfo {
    id: number;
    name: string;
    strainInfo: string;
    pricing: ProductPricing[];
    description: string;
    mainImage: string;
}

export interface FullProductInfo extends BriefProductInfo {
    images: ProductImage[];
    reviews: ProductReview[];
}

// Component Props
export interface ProductOverviewProps {
    product: FullProductInfo | null;
}

export interface CartItem extends BriefProductInfo {
    quantity: number;
}

export interface CartInfo {
    items: CartItem[];
    total: number;
    tax: number;
}