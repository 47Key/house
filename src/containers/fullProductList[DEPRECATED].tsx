import { ProductCard } from '@/components/productCard';
import { BriefProductInfo } from '@/types';
import React, { useEffect, useState } from 'react';

export const FullProductListDEPRECATED = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch(`/api/productInfo`)
            .then((res) => res.json())
            .then((data) => setProductList(data)); // Fetch all products
    }, []);

    return (
        <section className="w-full bg-white dark:bg-slate-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">All Products</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Browse all our available products</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {productList.map((product: BriefProductInfo, key) => (
                        <ProductCard key={key} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};