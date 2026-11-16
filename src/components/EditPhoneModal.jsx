import { ErrorMessage, Field, Form, Formik } from "formik";
import { useCopyProducts, useIndex, useProducts, validationSchema } from "../store";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function EditPhoneModal() {
    const { products, setProducts } = useProducts();
    const { copyProducts, setCopyProducts } = useCopyProducts()
    const { index, setIndex } = useIndex();

    const [product, setProduct] = useState({})
    useEffect(() => {
        setProduct(products[index])
    }, [index])

    const editNewPhone = (values) => {
        let existProduct = products.filter((el) => {
            return (el.name.toLowerCase().replace(/\s/g, "") == values.name.toLowerCase().replace(/\s/g, ""))
        })
        if (existProduct.length == 0) {
            existProduct = [{ name: "" }]
        }
        let isFound = existProduct[0].name.toLowerCase().replace(/\s/g, "") == values.name.toLowerCase().replace(/\s/g, "")
        let copy = [...products]
        if (!isFound) {
            copy[index] = values
            toast.success("Item is Updated", { duration: 3000 })
        }
        else {
            if (copy[index].name != values.name) {
                toast.error("Item is already exist Name", { duration: 3000 })
                values.name = product.name
            }
        }
        if (copy[index].price != values.price) {
            copy[index].price = values.price
            toast.success("Item is changed Price", { duration: 3000 })
        }
        if (copy[index].inStock != values.inStock) {
            copy[index].inStock = values.inStock
            toast.success("Item is changed In Stock or Out", { duration: 3000 })
        }
        setProducts(copy)
        setCopyProducts(copy)
        localStorage.setItem("products", JSON.stringify(copy))
    }
    return (
        <dialog id="edit-phone-modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Edit Product</h3>
                <div className="modal-action">
                    <Formik onSubmit={(values) => {
                        editNewPhone(values)
                    }}
                        initialValues={product}
                        enableReinitialize
                        validationSchema={validationSchema}>
                        <Form className="flex flex-col gap-3 w-full">
                            <Field name="name" type="text" className="input w-full" placeholder="Enter Phone Name" />
                            <ErrorMessage name="name" className="text-red-500" component={"p"} />
                            <Field name="price" type="number" className="input w-full" placeholder="Enter Phone Price" />
                            <ErrorMessage name="price" className="text-red-500" component={"p"} />
                            <Field name="imgSrc" type="text" className="input w-full" placeholder="Enter Image Link" />
                            <ErrorMessage name="imgSrc" className="text-red-500" component={"p"} />
                            <Field component="select" name="inStock" className="select cursor-pointer w-full">
                                <option value={true}>In Stock</option>
                                <option value={false}>Out Of Stock</option>
                            </Field>
                            <ErrorMessage name="inStock" className="text-red-500" component={"p"} />
                            <button
                                type="submit"
                                onClick={() => {
                                    document.getElementById('edit-phone-modal').close()
                                }} className="btn btn-success w-full">Update Product</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </dialog>
    )
}
