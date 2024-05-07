import Link from 'next/link'
import React from 'react'

export const ProductCategories = () => {
    return (
        <div className="w-full bg-white dark:bg-slate-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none py-10">
                    <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        <Link href='/productList'>
                            <div className="group relative">
                                <div className="relative h-96 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img src="https://www.bccannabisstores.com/cdn/shop/files/231030-DM2759-Go_Big_Tile_5a241a87-c3c2-46b2-9081-72d3a988a7b8_533x345.progressive.jpg?v=1704903843" alt="Collection of four insulated travel bottles on wooden shelf." className="h-full w-full object-cover object-center" />
                                </div>
                                <Link href="/productList">
                                    <button className="my-5 font-semibold text-white bg-primary-500 p-2 rounded-lg md:text-lg lg:text-xl w-full sm:w-[25%] min-w-[150px]">Shop Flower</button>
                                </Link>
                            </div>
                        </Link>
                        <Link href='/productList'>
                            <div className="group relative">
                                <div className="relative h-96 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img src="https://www.bccannabisstores.com/cdn/shop/files/240123-DM2849-Feb_Ecomm-1g_Vape-Tile_533x345.progressive.jpg?v=1707169001" alt="Collection of four insulated travel bottles on wooden shelf." className="h-full w-full object-cover object-center" />
                                </div>
                                <Link href="/productList">
                                    <button className="my-5 font-semibold text-white bg-primary-500 p-2 rounded-lg md:text-lg lg:text-xl w-full sm:w-[25%] min-w-[150px]">Shop Vapes</button>
                                </Link>
                            </div>
                        </Link>
                        <Link href='/productList'>
                            <div className="group relative">
                                <div className="relative h-96 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img src="https://www.bccannabisstores.com/cdn/shop/files/230327-DM-2332-Infused_Pre-roll_Tile_1_b2145dc7-aacf-4783-ac36-8d1f7a2ab395_533x345.progressive.jpg?v=1704107847" alt="Collection of four insulated travel bottles on wooden shelf." className="h-full w-full object-cover object-center" />
                                </div>
                                <Link href="/productList">
                                    <button className="my-5 font-semibold text-white bg-primary-500 p-2 rounded-lg md:text-lg lg:text-xl w-full sm:w-[25%] min-w-[150px]">Shop Prerolls</button>
                                </Link>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
