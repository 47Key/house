import Link from 'next/link';
import React from 'react';

export const Hero = () => {
    return (
        <>
            <section className="bg-[url('https://weedmaps.com/learn/wp-content/uploads/2020/05/181210_Nugs_017.jpg')] w-full h-[500px] bg-no-repeat bg-center bg-cover p-24">
                <div className="relative py-8 sm:px-4 sm:mx-auto max-w-screen-xl text-white lg:py-16 xl:px-0 z-1">
                    <div className="h-[300px] flex flex-col items-start justify-end mb-6 max-w-screen-md lg:mb-0">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-tight text-white md:text-5xl lg:text-6xl">Ounces under $120</h1>
                        <h2 className="mb-4 text-lg font-bold tracking-tight leading-tight text-white md:text-xl lg:text-3xl">Stock up on budget friendly bud</h2>
                        <Link href="/productList">
                            <button className="font-bold text-white bg-primary-500 p-2 rounded-lg md:text-lg lg:text-xl w-full sm:w-[25%] min-w-[150px]">Shop Now</button>
                        </Link>
                    </div>
                </div>
            </section>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script>
        </>
    );
}
