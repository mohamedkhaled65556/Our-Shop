import { ErrorMessage, Field, Form, Formik } from "formik"
import { useLogged, useRandomUUID, validationSchema1 } from "../store"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"

export default function LoginPage() {
    const navigator = useNavigate()
    const { isLogged, setLogged } = useLogged()
    const { randomUUID } = useRandomUUID()

    const checkPassword = (values) => {
        if (values.email === "admin@gmail.com" && values.password === "12345678") {
            navigator(`/${randomUUID}admin`)
            setLogged(true)
            sessionStorage.setItem(`${randomUUID}loggid`, JSON.stringify(true))
            toast.success("Login Success", { duration: 3000 })
        }
        else toast.error("Invalid Email or Password", { duration: 3000 })
    }

    return (
        <div className="w-full h-dvh overflow-auto flex justify-center items-center">
            <Toaster />
            <Formik
                onSubmit={(values, { resetForm }) => {
                    checkPassword(values);
                    resetForm()
                }}
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema1}
            >
                <Form className="fieldset flex flex-col gap-3 bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label mt-4">Email</label>
                    <Field type="email" className="input w-full" placeholder="Email" name="email" />
                    <ErrorMessage name="email" className="text-red-500" component={"p"} />

                    <label className="label mt-4">Password</label>
                    <Field type="password" className="input w-full" placeholder="Password" name="password" />
                    <ErrorMessage name="password" className="text-red-500" component={"p"} />
                    <button
                        type="submit"
                        className="btn btn-neutral mt-4"
                    >Login</button>
                </Form>
            </Formik>
        </div >
    )
}
