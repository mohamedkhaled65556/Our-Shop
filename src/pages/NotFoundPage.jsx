import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen w-full bg-white text-black grid place-items-center px-6">
            <div className="text-center max-w-xl">

                <p className="text-sm tracking-[6px] uppercase mb-6">
                    Error Page
                </p>

                <h1 className="text-[150px] md:text-[200px] font-black leading-none">
                    404
                </h1>

                <div className="w-20 h-1 bg-black mx-auto my-8" />

                <h2 className="text-3xl font-bold mb-4">
                    Page Not Found
                </h2>

                <p className="text-gray-500 mb-8">
                    Sorry, the page you're looking for doesn't exist.
                </p>

                <Link
                    to="/"
                    className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
                >
                    Back To Home
                </Link>

            </div>
        </div>
    )
}