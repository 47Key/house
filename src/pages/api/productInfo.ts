import { NextApiRequest, NextApiResponse } from 'next';
import { productData } from '@/data/productData';
import { BriefProductInfo, FullProductInfo } from '@/types';

export default function handler(req: NextApiRequest, res: NextApiResponse<BriefProductInfo[] | FullProductInfo>): void {
    const { id } = req.query;
    console.log("INFO - ID: ", id);
    if (id) { 
        const product = productData[Number(id)];
        if (product) {
            return res.status(200).json(product);
        }
    } else {
        const basicProductList = Object.values(productData).map(({ id, name, strainInfo, pricing, description, mainImage }) => ({ id, name, strainInfo, pricing, description, mainImage }));
        return res.status(200).json(basicProductList);
    }
}