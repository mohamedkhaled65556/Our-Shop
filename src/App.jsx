import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useRandomUUID } from "./store";

export default function App() {
	const { randomUUID } = useRandomUUID()

	return (
		<div className="w-full h-dvh overflow-auto"
			data-theme="light">
			<BrowserRouter>
				<MainHeader />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path={`/${randomUUID}login`} element={<LoginPage />} />
					<Route path={`/${randomUUID}admin`} element={<AdminPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}
