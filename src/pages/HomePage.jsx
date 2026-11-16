import toast, { Toaster } from "react-hot-toast"
import CartComponenet from "../components/CartComponenet"
import { useCart, useLimit, useProducts } from "../store"
import SearchAndShowAll from "../components/SearchAndShowAll"

export default function HomePage() {

    const { products, setProducts } = useProducts()
    const { cart, setCart } = useCart()
    const { limit, setLimit } = useLimit()

    const addToCart = (index) => {
        if (JSON.parse(products[index].inStock)) {
            let indexInCart = cart.findIndex((el) => {
                return (el.name == products[index].name)
            })
            if (limit < 10) {
                let copy = [...cart]
                if (indexInCart == -1) {
                    products[index].qty = 1
                    copy.push(products[index])
                }
                else copy[indexInCart].qty++
                setCart(copy)
                setLimit(limit + 1)
                localStorage.setItem("cart", JSON.stringify(copy))
            }
            else toast.error("Qty limited to 10 Items", { duration: 3000 })
        }
        else toast.error("This item out of stock", { duration: 3000 })
    }
    return (
        <div>
            <div className="flex justify-between items-strat">
                <CartComponenet />
                <SearchAndShowAll />
            </div>
            <Toaster />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 px-30 py-10">
                {
                    products.map((el, index) => {
                        return (
                            <div className="card bg-base-100 w-96 shadow-lg border border-gray-200 rounded-3xl" key={index}>
                                <figure>
                                    <img src={el.imgSrc} className="py-4 h-70" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Name: {el.name}</h2>
                                    <p>price: {el.price}$
                                        <br />
                                        {JSON.parse(el.inStock) ? 'In Stock' : 'Out Of Stock'}
                                    </p>
                                    <label className="btn btn-primary" htmlFor={JSON.parse(el.inStock) && (limit < 10) ? 'my-drawer-1' : ''} onClick={() => { addToCart(index) }}>Buy Now</label>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}