import { useProducts } from "../store"

export default function HomePage() {

    const { products, setProducts } = useProducts()

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-30 py-10">
            {
                products.map((el, index) => {
                    return (
                        <div className="card bg-base-100 w-96 shadow-lg border border-gray-200 rounded-3xl">
                            <figure>
                                <img src={el.imgSrc} className="py-4 h-70" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Name: {el.name}</h2>
                                <p>price: {el.price}$
                                    <br />
                                    {JSON.parse(el.inStock) ? 'In Stock' : 'Out Of Stock'}
                                </p>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
