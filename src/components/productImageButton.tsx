import React from 'react'

export const ProductImageButton = ({ onClick, image }: { onClick: any, image: { src: string, alt: string } }) => {
    return (
        <button onClick={() => onClick({ ...image })} className="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto" id="product-1-image-1-tab" data-tabs-target="#product-1-image-1" type="button" role="tab" aria-controls="product-1-image-1" aria-selected="false">
            <img
                className="object-contain w-full h-full"
                src={image.src}
                alt={image.alt}
            />
        </button>
    )
}
