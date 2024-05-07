import { BriefProductInfo } from '@/types';
import Link from 'next/link';
import React from 'react';


export const ProductCard = ({ id, name, strainInfo, pricing, description, mainImage }: BriefProductInfo) => {
    const shortDesc = (description.length > 150) ? description.slice(0, 150).concat('...') : description;

    return (
        <Link href={`/products/${id}`}>
            <div className="min-h-[500px] max-h-[500px] overflow-y-hidden bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-slate-900 dark:border-gray-700">
                <div className=''>
                    {/* <img className="p-4 w-full rounded-lg min-h-[300px] max-h-[300px]" src={mainImage} /> */}
                    <img className="!h-[300px] w-full aspect-ratio-[4/3] object-cover rounded-t-lg" src={mainImage} alt={`Image of ${name}`} />
                </div>
                <div className="mt-5 px-5 pb-5 h-full flex flex-col items-start justify-end">
                    <h3 className="text-xl font-bold tracking-tight text-black dark:text-white">
                        <div>{name}</div>
                    </h3>
                    <span className="text-gray-500">{strainInfo}</span>
                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{shortDesc}</p>
                </div>
            </div>
        </Link>
    )
}
