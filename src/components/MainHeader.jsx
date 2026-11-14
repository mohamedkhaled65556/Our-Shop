import { Link } from "react-router-dom";

export default function MainHeader() {
    return (
        <div className="w-full bg-gray-950 py-4 flex justify-center">
            <div className="container flex justify-between items-center text-amber-50 text-xl font-semibold">
                <h1 className="font-black text-gray-100 text-3xl">Our Shop</h1>
                <nav className="flex gap-4">
                    <Link to="/">Shop</Link>
                    <Link to="/admin">Admin</Link>
                </nav>
            </div>
        </div>
    )
}
