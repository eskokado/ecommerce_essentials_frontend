'use client'
import { IconCreditCard, IconShoppingCart } from '@tabler/icons-react'
import { Product } from '@/core'
// import useCarrinho from '@/data/hooks/useCarrinho'
import { useRouter } from 'next/navigation'

export interface BannerPurchaseProps {
    product: Product
}

export default function BannerCompra(props: BannerPurchaseProps) {
    const router = useRouter()
    const { product } = props

    return (
        <div className="flex">
            <div className="flex flex-col border-r border-zinc-500 pr-5">
                <div className="line-through text-zinc-400">de R$ {product?.basePrice}</div>
                <div className="text-2xl font-semibold">
                    <span className="text-base text-zinc-300">por</span>{' '}
                    <span className="text-emerald-500">R$ {product?.promotionalPrice}</span>{' '}
                    <span className="text-base text-zinc-300">à vista</span>
                </div>
            </div>
            <div className="flex-1 flex flex-col text-2xl font-semibold text-zinc-400 pl-5">
                <span className="text-base text-zinc-300">{12}x de</span>
                {345.99}{' '}
            </div>
            <div className="flex gap-2 items-center">
                <button
                    className="flex-1 button bg-pink-600"
                    onClick={() => {}}
                >
                    <IconShoppingCart size={20} />
                    <span>Adicionar</span>
                </button>
                <button
                    className="flex-1 button bg-violet-700"
                    onClick={() => {
                        router.push('/checkout/pagamento')
                    }}
                >
                    <IconCreditCard size={20} />
                    <span>Comprar</span>
                </button>
            </div>
        </div>
    )
}
