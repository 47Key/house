import { ProductCard } from '@/components/productCard';
import { BriefProductInfo } from '@/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export const PreviewProductList = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch(`/api/productInfo`)
            .then((res) => res.json())
            .then((data) => setProductList(data.slice(0, 6))); // Only take the first 10 products
    }, []);

    return (
        <section className="w-full bg-white dark:bg-slate-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Featured Products</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Explore our top products</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {productList.map((product: BriefProductInfo, key: number) => (
                        <ProductCard key={key} {...product} />
                    ))}
                </div>
                <div className='w-full h-min my-5 flex items-center justify-center'>
                    <Link href="/productList">
                        <button type='button' className="flex flex-row items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-3 lg:px-3 py-2 lg:py-2.5 mr-2 dark:bg-primary-500 dark:hover:bg-primary-600 focus:outline-none dark:focus:ring-primary-800">
                            View All Products
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};