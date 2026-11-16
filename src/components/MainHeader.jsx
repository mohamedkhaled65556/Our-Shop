import { Link } from "react-router-dom";
import { useLogged } from "../store";

export default function MainHeader() {
    const {isLogged, setLogged} = useLogged()

    return (
        <div className="w-full bg-gray-950 py-4 flex justify-center">
            <div className="container flex justify-between items-center text-amber-50 text-xl font-semibold">
                <h1 className="font-black text-gray-100 text-3xl">Our Shop</h1>
                <nav className="flex gap-4">
                    <Link to="/">Shop</Link>
                    <Link to={isLogged ? '/admin' : '/login'}>Admin</Link>
                </nav>
            </div>
        </div>
    )
}
