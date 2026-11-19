import { NavLink } from "react-router-dom";
import { useLogged, useRandomUUID } from "../store";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { VscError } from "react-icons/vsc";

export default function MainHeader() {
    const { isLogged, setLogged } = useLogged()
    const { randomUUID } = useRandomUUID()

    return (
        <div className="w-full bg-gray-950 py-4 flex justify-center">
            <div className="container flex justify-between items-center text-amber-50 text-xl font-semibold">
                <h1 className="font-black text-gray-100 text-3xl">Our Shop</h1>
                <nav className="flex gap-4 items-center">
                    <h1 className={`p-2 mx-2 rounded-lg ${isLogged ? 'bg-green-500' : 'bg-red-500'} text-white font-semibold text-[14px]`}>{isLogged ? (
                        <div className="flex items-center justify-between font-semibold">
                            <IoIosCheckmarkCircleOutline className="text-xl mr-0.5 font-bold" /> Logged In
                        </div>
                    ) : (
                        <div className="flex items-center justify-between font-semibold">
                            <VscError className="text-xl mr-0.5 font-bold" /> Logged Out
                        </div>
                    )}</h1>
                    <NavLink to="/" className={({ isActive }) =>
                        isActive
                            ? "text-gray-500 bg-white rounded-2xl px-1"
                            : "text-white hover:text-gray-300"
                    }>Shop</NavLink>
                    <NavLink to={isLogged ? `/${randomUUID}admin` : "/login"} className={({ isActive }) =>
                        isActive
                            ? "text-gray-500 bg-white rounded-2xl px-1"
                            : "text-white hover:text-gray-300"
                    }>Admin</NavLink>
                </nav>
            </div>
        </div >
    )
}
