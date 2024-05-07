import { FullProductInfo } from '@/types';

export const productData: { [key: number]: FullProductInfo } = {
    1: {
        id: 1,
        name: "OG Kush",
        strainInfo: "Indica",
        pricing: [
            {
                quantity: "1g",
                price: 10
            },
            {
                quantity: "3.5g",
                price: 20
            },
            {
                quantity: "7g",
                price: 40
            },
            {
                quantity: "14g",
                price: 70
            },
            {
                quantity: "1oz",
                price: 120
            }
        ],
        description: "Deep relaxation and calming effects, perfect for evening use.",
        mainImage: "https://images.leafly.com/flower-images/defaults/purple/strain-17.png?auto=compress%2Cformat&w=151&dpr=2",
        images: [
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-17.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-1.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
        ],
        reviews: [
            {
                review: "Perfect for relaxation, helps with sleep tremendously.",
                rating: 5
            }
        ]
    },
    2: {
        id: 2,
        name: "Sour Diesel",
        strainInfo: "Sativa",
        pricing: [
            {
                quantity: "1g",
                price: 10
            },
            {
                quantity: "3.5g",
                price: 20
            },
            {
                quantity: "7g",
                price: 40
            },
            {
                quantity: "14g",
                price: 70
            },
            {
                quantity: "1oz",
                price: 130
            }
        ],
        description: "Energizing and uplifting, ideal for morning or mid-day use to boost creativity.",
        mainImage: "https://images.leafly.com/flower-images/defaults/generic/strain-21.png?auto=compress%2Cformat&w=151&dpr=2",
        images: [
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-21.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of Sour Diesel strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-1.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
        ],
        reviews: [
            {
                review: "Great for creativity and energy, without any jitters.",
                rating: 4
            }
        ]
    },
    3: {
        id: 3,
        name: "Blue Dream",
        strainInfo: "Hybrid",
        pricing: [
            {
                quantity: "1g",
                price: 10
            },
            {
                quantity: "3.5g",
                price: 20
            },
            {
                quantity: "7g",
                price: 40
            },
            {
                quantity: "14g",
                price: 70
            },
            {
                quantity: "1oz",
                price: 135
            }
        ],
        description: "A balanced hybrid, suitable for both relaxation and gentle stimulation, perfect for social gatherings.",
        mainImage: "https://leafly-public.imgix.net/strains/photos/ziw0L3SZSIyM6uiLup73_AppleFritter%20(1).jpg?auto=compress%2Cformat&w=151&dpr=2",
        images: [
            {
                src: "https://leafly-public.imgix.net/strains/photos/ziw0L3SZSIyM6uiLup73_AppleFritter%20(1).jpg?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of Blue Dream strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-1.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
        ],
        reviews: [
            {
                review: "Great balance, feels just right for any time of the day.",
                rating: 5
            }
        ]
    },
    4: {
        id: 4,
        name: "Granddaddy Purple",
        strainInfo: "Indica",
        pricing: [
            {
                quantity: "1g",
                price: 10
            },
            {
                quantity: "3.5g",
                price: 20
            },
            {
                quantity: "7g",
                price: 40
            },
            {
                quantity: "14g",
                price: 70
            },
            {
                quantity: "1oz",
                price: 110
            }
        ],
        description: "Known for its pain-relieving properties, offers a soothing and tranquil experience.",
        mainImage: "https://images.leafly.com/flower-images/gelato.jpg?auto=compress%2Cformat&w=151&dpr=2",
        images: [
            {
                src: "https://images.leafly.com/flower-images/gelato.jpg?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of Granddaddy Purple strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-1.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
        ],
        reviews: [
            {
                review: "Really effective for pain and insomnia.",
                rating: 5
            }
        ]
    },
    5: {
        id: 5,
        name: "Jack Herer",
        strainInfo: "Sativa",
        pricing: [
            {
                quantity: "1g",
                price: 10
            },
            {
                quantity: "3.5g",
                price: 20
            },
            {
                quantity: "7g",
                price: 40
            },
            {
                quantity: "14g",
                price: 70
            },
            {
                quantity: "1oz",
                price: 125
            }
        ],
        description: "Stimulates focus and clarity, a good choice for daytime tasks that require concentration.",
        mainImage: "https://images.leafly.com/flower-images/defaults/short-dense-heavy/strain-3.png?auto=compress%2Cformat&w=151&dpr=2",
        images: [
            {
                src: "https://images.leafly.com/flower-images/defaults/short-dense-heavy/strain-3.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of Jack Herer strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-1.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
        ],
        reviews: [
            {
                review: "Helps me focus intensely on my work without feeling overwhelmed.",
                rating: 4
            }
        ]
    },
    6: {
        id: 6,
        name: "White Widow",
        strainInfo: "Hybrid",
        pricing: [
            {
                quantity: "1g",
                price: 10
            },
            {
                quantity: "3.5g",
                price: 20
            },
            {
                quantity: "7g",
                price: 40
            },
            {
                quantity: "14g",
                price: 70
            },
            {
                quantity: "1oz",
                price: 118
            }
        ],
        description: "Offers a euphoric feeling with a balanced mind and body high.",
        mainImage: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
        images: [
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of White Widow strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-1.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
        ],
        reviews: [
            {
                review: "A perfect hybrid, makes me feel relaxed yet euphoric.",
                rating: 5
            }
        ]
    },
    7: {
        id: 7,
        name: "Pineapple Express",
        strainInfo: "Indica",
        pricing: [
            {
                quantity: "1g",
                price: 10
            },
            {
                quantity: "3.5g",
                price: 20
            },
            {
                quantity: "7g",
                price: 40
            },
            {
                quantity: "14g",
                price: 70
            },
            {
                quantity: "1oz",
                price: 115
            }
        ],
        description: "Highly effective for stress and anxiety, provides a calming body high.",
        mainImage: "https://images.leafly.com/flower-images/defaults/generic/strain-32.png?auto=compress%2Cformat&w=151&dpr=2",
        images: [
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-32.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of Pineapple Express strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-1.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
        ],
        reviews: [
            {
                review: "A perfect hybrid, makes me feel relaxed yet euphoric.",
                rating: 5
            }
        ]
    },
    8: {
        id: 8,
        name: "Girl Scout Cookies",
        strainInfo: "Sativa",
        pricing: [
            {
                quantity: "1g",
                price: 10
            },
            {
                quantity: "3.5g",
                price: 20
            },
            {
                quantity: "7g",
                price: 40
            },
            {
                quantity: "14g",
                price: 70
            },
            {
                quantity: "1oz",
                price: 140
            }
        ],
        description: "Ideal for artistic exploration and social interactions, promotes a sense of well-being.",
        mainImage: "https://images.leafly.com/flower-images/defaults/short-dense-heavy/strain-4.png?auto=compress%2Cformat&w=151&dpr=2",
        images: [
            {
                src: "https://images.leafly.com/flower-images/defaults/short-dense-heavy/strain-4.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of Girl Scout strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-1.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
        ],
        reviews: [
            {
                review: "Perfect for a creative boost and social gatherings, love it!",
                rating: 5
            }
        ]
    },
    9: {
        id: 9,
        name: "Gorilla Glue",
        strainInfo: "Hybrid",
        pricing: [
            {
                quantity: "1g",
                price: 10
            },
            {
                quantity: "3.5g",
                price: 20
            },
            {
                quantity: "7g",
                price: 40
            },
            {
                quantity: "14g",
                price: 70
            },
            {
                quantity: "1oz",
                price: 115
            }
        ],
        description: "Hybrid with a perfect mix of uplifting and relaxing effects, suitable for day or night.",
        mainImage: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-3.png?auto=compress%2Cformat&w=151&dpr=2",
        images: [
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-3.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of Gorilla Glue strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-1.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
        ],
        reviews: [
            {
                review: "Balances relaxation with a gentle buzz, a go-to for any occasion.",
                rating: 4
            }
        ]
    },
    10: {
        id: 10,
        name: "Amnesia Haze",
        strainInfo: "Indica",
        pricing: [
            {
                quantity: "1g",
                price: 10
            },
            {
                quantity: "3.5g",
                price: 20
            },
            {
                quantity: "7g",
                price: 40
            },
            {
                quantity: "14g",
                price: 70
            },
            {
                quantity: "1oz",
                price: 110
            }
        ],
        description: "Strong and potent, provides deep sedation and relief from chronic pain.",
        mainImage: "https://leafly-public.imgix.net/strains/photos/IaYQshrPTxiD2BOWHO1n_AnimalMints.png?auto=compress%2Cformat&w=151&dpr=2",
        images: [
            {
                src: "https://leafly-public.imgix.net/strains/photos/IaYQshrPTxiD2BOWHO1n_AnimalMints.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of Amnesia Haze strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-1.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
        ],
        reviews: [
            {
                review: "The best for pain relief and a good night's sleep. Very strong.",
                rating: 5
            }
        ]
    },
    11: {
        id: 11,
        name: "Northern Lights",
        strainInfo: "Sativa",
        pricing: [
            {
                quantity: "1g",
                price: 10
            },
            {
                quantity: "3.5g",
                price: 20
            },
            {
                quantity: "7g",
                price: 40
            },
            {
                quantity: "14g",
                price: 70
            },
            {
                quantity: "1oz",
                price: 128
            }
        ],
        description: "Vibrant and buzzy, perfect for daytime use, increases energy and alertness.",
        mainImage: "https://images.leafly.com/flower-images/defaults/generic/strain-2.png?auto=compress%2Cformat&w=151&dpr=2",
        images: [
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-2.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of Northern Lights strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-1.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
        ],
        reviews: [
            {
                review: "Incredible for daytime use, keeps me alert and in a great mood.",
                rating: 5
            }
        ]
    },
    12: {
        id: 12,
        name: "Super Lemon Haze",
        strainInfo: "Hybrid",
        pricing: [
            {
                quantity: "1g",
                price: 10
            },
            {
                quantity: "3.5g",
                price: 20
            },
            {
                quantity: "7g",
                price: 40
            },
            {
                quantity: "14g",
                price: 70
            },
            {
                quantity: "1oz",
                price: 122
            }
        ],
        description: "A smooth, balanced high that supports both relaxation and a mild euphoria.",
        mainImage: "https://images.leafly.com/flower-images/defaults/purple/strain-15.png?auto=compress%2Cformat&w=151&dpr=2",
        images: [
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-15.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of Super Lemon strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-1.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
        ],
        reviews: [
            {
                review: "Smooth and balanced, perfect for unwinding after work without heavy sedation.",
                rating: 4
            }
        ]
    },
    13: {
        id: 13,
        name: "Bubba Kush",
        strainInfo: "Indica",
        pricing: [
            {
                quantity: "1g",
                price: 10
            },
            {
                quantity: "3.5g",
                price: 20
            },
            {
                quantity: "7g",
                price: 40
            },
            {
                quantity: "14g",
                price: 70
            },
            {
                quantity: "1oz",
                price: 119
            }
        ],
        description: "Deeply relaxing, helps alleviate insomnia and soothe anxiety, with a lasting calm.",
        mainImage: "https://images.leafly.com/flower-images/defaults/generic/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
        images: [
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of Bubba Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-1.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
        ],
        reviews: [
            {
                review: "Fantastic for deep relaxation and sleep, very effective against anxiety.",
                rating: 5
            }
        ]
    },
    14: {
        id: 14,
        name: "AK-47",
        strainInfo: "Sativa",
        pricing: [
            {
                quantity: "1g",
                price: 10
            },
            {
                quantity: "3.5g",
                price: 20
            },
            {
                quantity: "7g",
                price: 40
            },
            {
                quantity: "14g",
                price: 70
            },
            {
                quantity: "1oz",
                price: 125
            }
        ],
        description: "Energizes and inspires creativity, best for artistic activities and brainstorming sessions.",
        mainImage: "https://images.leafly.com/flower-images/defaults/generic/strain-3.png?auto=compress%2Cformat&w=151&dpr=2",
        images: [
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-3.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of AK-47 strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-1.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
        ],
        reviews: [
            {
                review: "Really lights up the creative spark, perfect for my writing sessions.",
                rating: 5
            }
        ]
    },
    15: {
        id: 15,
        name: "Trainwreck",
        strainInfo: "Hybrid",
        pricing: [
            {
                quantity: "1g",
                price: 10
            },
            {
                quantity: "3.5g",
                price: 20
            },
            {
                quantity: "7g",
                price: 40
            },
            {
                quantity: "14g",
                price: 70
            },
            {
                quantity: "1oz",
                price: 120
            }
        ],
        description: "Offers a mellow high that balances mind and body, ideal for evening relaxation without heavy sedation.",
        mainImage: "https://images.leafly.com/flower-images/defaults/generic/strain-30.png?auto=compress%2Cformat&w=151&dpr=2",
        images: [
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-30.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of Trainwreck strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-1.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
        ],
        reviews: [
            {
                review: "Perfect for a relaxed evening at home, just enough to take the edge off.",
                rating: 4
            }
        ]
    },
    16: {
        id: 16,
        name: "Purple Haze",
        strainInfo: "Indica",
        pricing: [
            {
                quantity: "1g",
                price: 10
            },
            {
                quantity: "3.5g",
                price: 20
            },
            {
                quantity: "7g",
                price: 40
            },
            {
                quantity: "14g",
                price: 70
            },
            {
                quantity: "1oz",
                price: 135
            }
        ],
        description: "Strong sedative effects, recommended for deep relaxation and managing chronic pain.",
        mainImage: "https://images.leafly.com/flower-images/defaults/generic/strain-34.png?auto=compress%2Cformat&w=151&dpr=2",
        images: [
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-34.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of Purple Haze strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-1.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
        ],
        reviews: [
            {
                review: "The best for chronic pain relief, works like a charm every time.",
                rating: 5
            }
        ]
    },
    17: {
        id: 17,
        name: "Durban Poison",
        strainInfo: "Sativa",
        pricing: [
            {
                quantity: "1g",
                price: 10
            },
            {
                quantity: "3.5g",
                price: 20
            },
            {
                quantity: "7g",
                price: 40
            },
            {
                quantity: "14g",
                price: 70
            },
            {
                quantity: "1oz",
                price: 110
            }
        ],
        description: "Boosts energy and happiness, a great strain for social events and physical activities.",
        mainImage: "https://images.leafly.com/flower-images/defaults/generic/strain-4.png?auto=compress%2Cformat&w=151&dpr=2",
        images: [
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-4.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of Durban Poison strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-1.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
        ],
        reviews: [
            {
                review: "Makes social gatherings more fun and energetic, also great for hiking.",
                rating: 4
            }
        ]
    },
    18: {
        id: 18,
        name: "Cherry Pie",
        strainInfo: "Hybrid",
        pricing: [
            {
                quantity: "1g",
                price: 10
            },
            {
                quantity: "3.5g",
                price: 20
            },
            {
                quantity: "7g",
                price: 40
            },
            {
                quantity: "14g",
                price: 70
            },
            {
                quantity: "1oz",
                price: 118
            }
        ],
        description: "A well-rounded hybrid, perfect for those who need balance in their stress and mood levels.",
        mainImage: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
        images: [
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of Cherry Pie strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-1.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
        ],
        reviews: [
            {
                review: "Balances my mood and helps manage stress without too much fatigue.",
                rating: 5
            }
        ]
    },
    19: {
        id: 19,
        name: "Alaskan Thunder Fuck",
        strainInfo: "Indica",
        pricing: [
            {
                quantity: "1g",
                price: 10
            },
            {
                quantity: "3.5g",
                price: 20
            },
            {
                quantity: "7g",
                price: 40
            },
            {
                quantity: "14g",
                price: 70
            },
            {
                quantity: "1oz",
                price: 125
            }
        ],
        description: "Known for its potent effects that help with insomnia and deep body relaxation.",
        mainImage: "https://images.leafly.com/flower-images/defaults/generic/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
        images: [
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of Alaskan Thunder strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/generic/strain-31.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-1.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/purple/strain-11.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
            {
                src: "https://images.leafly.com/flower-images/defaults/frosty/strain-5.png?auto=compress%2Cformat&w=151&dpr=2",
                alt: "Picture of OG Kush strain"
            },
        ],
        reviews: [
            {
                review: "Fantastic for sleeping issues, deeply relaxing and very potent.",
                rating: 5
            }
        ]
    }
}