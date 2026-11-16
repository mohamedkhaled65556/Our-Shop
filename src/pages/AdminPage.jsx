import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import NewPhoneModal from "../components/NewPhoneModal";
import { useCopyProducts, useIndex, useProducts } from "../store"
import EditPhoneModal from "../components/EditPhoneModal";
import toast, { Toaster } from "react-hot-toast";
import Swal from 'sweetalert2';
import SearchAndShowAll from "../components/SearchAndShowAll";
import { useEffect } from "react";

export default function AdminPage() {
    const { products, setProducts } = useProducts();
    const { copyProducts, setCopyProducts } = useCopyProducts()
    const { index, setIndex } = useIndex();

    useEffect(() => {
        setProducts(copyProducts)
        localStorage.setItem("products", JSON.stringify(copyProducts))
    }, [])

    const RemoveItem = async (index) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#e11d48",
            background: "#1d232a",
            color: "#ffffff",
        });

        if (result.isConfirmed) {
            let copy = [...products]
            copy.splice(index, 1)
            toast.success("Item Is Deleted", { duration: 3000 })
            setProducts(copy)
            setCopyProducts(copy)
            localStorage.setItem("products", JSON.stringify(copy))
        }
    }

    return (
        <div className="flex justify-center">
            <Toaster />
            <div className="container">
                <div className="flex items-center justify-between py-4">
                    <h1 className="text-2xl font-bold p-3">Admin Products</h1>
                    <SearchAndShowAll />
                    <button className="btn btn-primary" onClick={() => document.getElementById('new-phone-modal').showModal()}>Add New Product</button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product In Stock</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((el, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{el.name}</td>
                                        <td>{el.price}$</td>
                                        <td>
                                            {JSON.parse(el.inStock) ? 'In Stock' : 'Out Of Stock'}
                                        </td>
                                        <td>
                                            <img src={el.imgSrc} width={50} />
                                        </td>
                                        <td>
                                            <div className="flex gap-3 text-4xl">
                                                <FaEdit onClick={() => {
                                                    document.getElementById('edit-phone-modal').showModal()
                                                    setIndex(index)
                                                }} className="text-amber-500 bg-amber-200 p-2 rounded-2xl hover:bg-amber-300 cursor-pointer" />
                                                <FaTrashAlt className="text-red-500 bg-red-200 p-2 rounded-2xl hover:bg-red-300 cursor-pointer" onClick={() => {
                                                    RemoveItem(index)
                                                }} />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <NewPhoneModal />
                <EditPhoneModal />
            </div>
        </div>
    )
}
