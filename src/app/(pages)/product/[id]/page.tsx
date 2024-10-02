'use client'
import BannerPurchase from '@/components/product/BannerPurchase'
import InformationsProduct from '@/components/product/InformationsProduct'
import ProductNotFound from '@/components/product/ProductNotFound'
import TitleProduct from '@/components/product/TitleProduct'
import { Product } from '@/core'
import useProducts from '@/data/hooks/useProducts'
import { useEffect, useState } from 'react'

export default function PageProduct(props: any) {
    const { getProductById } = useProducts()
    const [product, setProduct] = useState<Product | null>(null)

    useEffect(() => {
        getProductById(+props.params.id).then(setProduct)
    }, [props.params.id])

    return product ? (
        <div className="flex flex-col gap-20 container py-10">
            <div className="flex flex-col gap-10">
                <TitleProduct product={product} />
                <InformationsProduct product={product} />
                <BannerPurchase product={product} />
            </div>
        </div>
    ) : (
        <ProductNotFound />
    )
}
