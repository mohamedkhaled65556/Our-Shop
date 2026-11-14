import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";

export default function App() {
	return (
		<div className="w-full h-dvh overflow-auto"
			data-theme="light">
			<BrowserRouter>
				<MainHeader />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/admin" element={<AdminPage />} />
					<Route path="*" element={<h1>Error Page</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}
