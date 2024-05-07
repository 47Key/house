import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/layout/layout';
import { ProductOverview } from '@/containers/productOverview';
import { FullProductInfo } from '@/types';

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [productInfo, setProductInfo] = useState<FullProductInfo | null>(null);

    useEffect(() => {
        if (id) {
            fetch(`/api/productInfo?id=${id}`)
                .then((res) => res.json())
                .then((data) => setProductInfo(data));
        }
    }, [id]);

    return (
        <Layout>
            <ProductOverview product={productInfo} />
        </Layout>
    );
};

export default ProductPage;