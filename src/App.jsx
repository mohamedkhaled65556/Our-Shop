import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
	return (
		<div className="w-full h-dvh overflow-auto"
			data-theme="light">
			<BrowserRouter>
				<MainHeader />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/admin" element={<AdminPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}
