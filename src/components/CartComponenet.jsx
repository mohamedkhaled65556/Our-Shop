import { IoCart } from "react-icons/io5";
import { useCart, useLimit } from "../store";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
export default function CartComponenet() {

    const { cart, setCart } = useCart()
    const { limit, setLimit } = useLimit()
    let total = 0

    const Increase = (index) => {
        if (limit < 10) {
            let copy = [...cart]
            copy[index].qty++
            setCart(copy)
            setLimit(limit + 1)
            localStorage.setItem("cart", JSON.stringify(copy))
        }
        else toast.error("Qty limited to 10 Items", { duration: 3000 })
    }

    const Decrease = (index) => {
        let copy = [...cart]
        if (cart[index].qty > 1) {
            copy[index].qty--
        }
        else copy.splice(index, 1)

        setCart(copy)
        setLimit(limit - 1)
        localStorage.setItem("cart", JSON.stringify(copy))
    }

    const remove = (index) => {
        let copy = [...cart]
        copy.splice(index, 1)
        setCart(copy)
        setLimit(limit - cart[index].qty)
        localStorage.setItem("cart", JSON.stringify(copy))
    }

    return (
        <div className="px-4 pt-4 w-fit h-7 flex justify-between items-center">
            <div className="drawer">
                <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-1" className=""><IoCart className="text-3xl text-gray-900 hover:text-gray-700" /></label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {
                            cart.map((el, index) => {
                                total += (el.price * el.qty)
                                return (
                                    <div className="flex items-start gap-3 py-4 shadow-sm" key={index}>
                                        <img src={el.imgSrc} width={50} />
                                        <li className="font-semibold mt-5">{el.price}$</li>
                                        <div className="flex flex-col justify-center items-center">
                                            <li className="font-semibold -ml-15">{el.name}</li>
                                            <button><FaTrashAlt className="text-red-500 bg-red-200 p-2 rounded-2xl hover:bg-red-300 text-4xl cursor-pointer" onClick={() => {
                                                remove(index)
                                            }} /></button>
                                        </div>
                                        <div className="flex items-center">
                                            <button className="btn btn-success w-3 mx-3 my-3" onClick={() => Increase(index)}>+</button>
                                            <h1>{+el.qty}</h1>
                                            <button className="btn btn-error w-3 mx-3 my-3" onClick={() => Decrease(index)}>-</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="alert alert-info">
                            <h1 className=" font-semibold mt-auto">Total : {total}</h1>
                        </div>
                    </ul>
                </div>
            </div>
            <h1 className="pt-4 font-semibold">{cart.length}</h1>
        </div>
    )
}
