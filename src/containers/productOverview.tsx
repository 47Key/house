import { ProductImageButton } from '@/components/productImageButton';
import { FullProductInfo, ProductOverviewProps } from '@/types';
import React, { useEffect, useState } from 'react'

export const ProductOverview = ({ product }: ProductOverviewProps) => {
    if (!product) return null;

    const { name, pricing, description, images, reviews } = product;

    const [activeImage, setActiveImage] = useState({ src: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg', alt: '' });

    useEffect(() => {
        if (images && images.length > 0) {
            setActiveImage(images[0]);
        }
    }, []);

    const handleProductImageButtonClick = (image: { src: string, alt: string }) => {
        setActiveImage(image);
    }

    return (
        <section className="w-full min-h-screen py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="max-w-md lg:max-w-lg mx-auto">
                        <div id="product-1-tab-content">
                            <div className="p-4 rounded-lg bg-white dark:bg-gray-900" id="product-1-image-1" role="tabpanel" aria-labelledby="product-1-image-1-tab">
                                <img className="w-full mx-auto" src={activeImage.src} alt={activeImage.alt} />
                            </div>
                        </div>

                        <ul className="grid grid-cols-4 gap-4 mt-8" id="product-1-tab" data-tabs-toggle="#product-1-tab-content" data-tabs-active-classes="border-gray-200 dark:border-gray-700" data-tabs-inactive-classes="border-transparent hover:border-gray-200 dark:hover:dark:border-gray-700 dark:border-transparent" role="tablist">
                            {product.images && product.images.map((img, index) => {
                                if (index > 3) return; // only displays the first 3 images
                                return (
                                    <li className="me-2" role="presentation">
                                        <ProductImageButton onClick={handleProductImageButtonClick} image={{ src: img.src, alt: img.alt }} />
                                    </li>
                                )
                            })}
                        </ul>

                    </div>

                    <div className="mt-6 md:mt-0">
                        <span
                            className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                        >
                            In stock
                        </span>
                        <p
                            className="mt-4 text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
                        >
                            {name}
                        </p>
                        <div className="mt-4 xl:items-center xl:gap-4 xl:flex">
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                    <svg
                                        className="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                        />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                        />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                        />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                        />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                        />
                                    </svg>
                                </div>
                                <p
                                    className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
                                >
                                    (5.0)
                                </p>
                                <a
                                    href="#"
                                    className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                                >
                                    {`${reviews.length} reviews`}
                                </a>
                            </div>

                            <div className="flex items-center gap-1 mt-4 xl:mt-0">
                                <svg
                                    className="w-5 h-5 text-primary-700 dark:text-primary-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                    />
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                                    />
                                </svg>
                                <p
                                    className="text-sm font-medium text-primary-700 dark:text-primary-500"
                                >
                                    Deliver to [CUSTOMER'S ADDRESS HERE]
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between gap-4 mt-6 sm:mt-8">
                            <p
                                className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
                            >
                                {`$${pricing[0].price} / ${pricing[0].quantity}`}
                            </p>

                            <form className="flex items-center gap-2 sm:hidden">
                                <div className="flex items-center gap-1">
                                    <label
                                        htmlFor="quantity"
                                        className="text-sm font-medium text-gray-900 dark:text-white"
                                    >Quantity</label
                                    >
                                    <button
                                        data-tooltip-target="quantity-desc-1"
                                        data-tooltip-trigger="hover"
                                        className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        id="quantity-desc-1"
                                        role="tooltip"
                                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                                    >
                                        Quantity: Number of units to purchase.
                                        <div className="tooltip-arrow" data-popper-arrow></div>
                                    </div>
                                </div>
                                <select
                                    id="quantity"
                                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                >
                                    <option selected>Choose quantity</option>
                                    <option value="2" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </form>
                        </div>

                        <div className="mt-6 sm:gap-4 sm:flex sm:items-center sm:mt-8">
                            <div className="sm:gap-4 sm:items-center sm:flex">
                                <a
                                    href="#"
                                    title=""
                                    className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    role="button"
                                >
                                    <svg
                                        className="w-5 h-5 -ms-2 me-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                        />
                                    </svg>
                                    Add to favorites
                                </a>

                                <a
                                    href="#"
                                    title=""
                                    className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-500 dark:hover:bg-primary-600 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                                    role="button"
                                >
                                    <svg
                                        className="w-5 h-5 -ms-2 me-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                                        />
                                    </svg>

                                    Add to cart
                                </a>
                            </div>

                            <form className="items-center hidden gap-2 sm:flex">
                                <div className="flex items-center gap-1">
                                    <label
                                        htmlFor="quantity"
                                        className="text-sm font-medium text-gray-900 dark:text-white"
                                    >Quantity</label
                                    >
                                    <button
                                        data-tooltip-target="quantity-desc-2"
                                        data-tooltip-trigger="hover"
                                        className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        id="quantity-desc-2"
                                        role="tooltip"
                                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                                    >
                                        Quantity: Number of units to purchase.
                                        <div className="tooltip-arrow" data-popper-arrow></div>
                                    </div>
                                </div>
                                <select
                                    id="quantity"
                                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    defaultValue={1}
                                >
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </form>
                        </div>

                        <hr className="mt-6 border-gray-200 sm:mt-8 dark:border-gray-700" />

                        <div
                            className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 sm:mt-8 sm:gap-y-8"
                        >
                            <div>
                                <p className="text-base font-medium text-gray-900 dark:text-white">
                                    Select Size
                                </p>

                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                    {pricing && pricing.map((priceInfo) => {
                                        const { price, quantity } = priceInfo;

                                        return (
                                            <>
                                                <label htmlFor={quantity} className="relative block">
                                                    <input
                                                        type="radio"
                                                        name="purchase-option"
                                                        id={quantity}
                                                        className="absolute appearance-none top-2 left-2 peer"
                                                    />
                                                    <div
                                                        className="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 peer-checked:bg-primary-50 peer-checked:text-primary-700 peer-checked:border-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:peer-checked:bg-primary-900 dark:peer-checked:border-primary-600 dark:peer-checked:text-primary-300 dark:hover:bg-gray-600"
                                                    >
                                                        <p className="text-sm font-medium">{`$${price} / ${quantity}`}</p>
                                                    </div>
                                                </label>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <p className="text-base font-medium text-gray-900 dark:text-white">
                                    Pickup
                                </p>

                                <div className="flex flex-col gap-4 mt-2 sm:flex-row">
                                    <div className="flex">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="shipping-checkbox"
                                                aria-describedby="shipping-checkbox-text"
                                                name="shipping"
                                                type="radio"
                                                value=""
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                        </div>
                                        <div className="text-sm ms-2">
                                            <label
                                                htmlFor="shipping-checkbox"
                                                className="font-medium text-gray-900 dark:text-white"
                                            >
                                                Express Delivery - $20
                                            </label>
                                            <p
                                                id="shipping-checkbox-text"
                                                className="text-xs font-normal text-gray-500 dark:text-gray-400"
                                            >
                                                Arrives within 2 hours
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="pickup-checkbox"
                                                aria-describedby="pickup-checkbox-text"
                                                name="shipping"
                                                type="radio"
                                                value=""
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                        </div>
                                        <div className="text-sm ms-2">
                                            <label
                                                htmlFor="pickup-checkbox"
                                                className="font-medium text-gray-900 dark:text-white"
                                            >
                                                Regular Delivery - $10
                                            </label>
                                            <p
                                                id="shipping-checkbox-text"
                                                className="text-xs font-normal text-gray-500 dark:text-gray-400"
                                            >
                                                Arrives within 8 hours (Free for orders over $100)
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="pickup-store-checkbox"
                                                aria-describedby="pickup-store-checkbox-text"
                                                name="shipping"
                                                type="radio"
                                                value=""
                                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                disabled
                                            />
                                        </div>
                                        <div className="text-sm ms-2">
                                            <label
                                                htmlFor="pickup-store-checkbox"
                                                className="font-medium text-gray-400 dark:text-gray-500"
                                            >
                                                Pickup from our store
                                            </label>
                                            <p
                                                id="pickup-store-checkbox-text"
                                                className="text-xs font-normal text-gray-400 dark:text-gray-500"
                                            >
                                                Not available
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <p className="text-base font-medium text-gray-900 dark:text-white">
                                    Add accessories
                                </p>

                                <div className="flex flex-wrap items-center gap-4 mt-2">
                                    <div className="flex items-center">
                                        <input
                                            id="1-year"
                                            name="warranty"
                                            type="radio"
                                            value=""
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="1-year"
                                            className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                                        >
                                            Rolling papers - $5
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="2-years"
                                            type="radio"
                                            name="warranty"
                                            value=""
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="2-years"
                                            className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                                        >
                                            Lighter - $5
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="3-years"
                                            type="radio"
                                            name="warranty"
                                            value=""
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="3-years"
                                            className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                                        >
                                            Grinder - $20
                                        </label>
                                    </div>
                                </div>
                                <div className="text-sm mt-2 ms-2">
                                    <a
                                        href="#"
                                        title=""
                                        id="pickup-checkbox-text"
                                        className="block text-xs font-medium underline text-primary-700 hover:no-underline dark:text-primary-500"
                                    >
                                        Shop all accessories
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
