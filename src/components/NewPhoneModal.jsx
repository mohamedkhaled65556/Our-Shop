import { ErrorMessage, Field, Form, Formik } from "formik";
import { useProducts, validationSchema } from "../store";
import toast from "react-hot-toast";

export default function NewPhoneModal() {
    const { products, setProducts } = useProducts();

    const addNewPhone = (values) => {
        let product = products.filter((el) => {
            return (el.name.toLowerCase().replace(/\s/g, "") == values.name.toLowerCase().replace(/\s/g, ""))
        })
        if (product.length == 0) {
            product = [{ name: "" }]
        }
        let isFound = product[0].name.toLowerCase().replace(/\s/g, "") == values.name.toLowerCase().replace(/\s/g, "")
        if (!isFound) {
            let copy = [...products]
            copy.push(values)
            setProducts(copy)
            localStorage.setItem("products", JSON.stringify(copy))
            toast.success("Item is Added", { duration: 3000 })
        }
        else toast.error("Item is already exist name", { duration: 3000 })
    }
    return (
        <dialog id="new-phone-modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Add Product</h3>
                <div className="modal-action">
                    <Formik onSubmit={(values, { resetForm }) => {
                        addNewPhone(values);
                        resetForm();
                    }}
                        initialValues={{ name: "", price: "", inStock: false, imgSrc: "" }}
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
                                onClick={() => document.getElementById('new-phone-modal').close()} className="btn btn-success w-full">Save Product</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </dialog>
    )
}
