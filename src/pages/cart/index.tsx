import React, { useEffect, useState } from 'react';
import Layout from '@/layout/layout';
import { ProductOverview } from '@/containers/productOverview';
import { Cart } from '@/containers/cart';

export const CartPage = () => {
    return (
        <Layout>
            <Cart />
        </Layout>
    );
};

export default CartPage;