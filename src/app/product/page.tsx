import { products } from "@/core"

export default function PageProduct(props: any) {
    const id = +props.params.id
    const product = products.find(p => p.id === id)

    return product ? <div>{product?.name}</div> : <div>Produto não encontrado</div>
}