'use client'
import { Product } from '@/core'
import { useCallback, useEffect, useState } from 'react'

const urlBase = 'http://localhost:3005'

export default function useProducts() {
    const [products, setProducts] = useState<Product[]>([])

    async function getProducts(): Promise<Product[]> {
        const resp = await fetch(`${urlBase}/products`)
        const products = await resp.json()
        return products ?? []
    }

    const getProductById = useCallback(
        async function getProdutoById(
            id: number
        ): Promise<Product | null> {
            const resp = await fetch(`${urlBase}/products/${id}`)
            const product = await resp.json()
            return product ?? null
        },
        []
    )

    useEffect(() => {
        getProducts().then(setProducts)
    }, [])

    return {
        products,
        getProductById,
    }
}
