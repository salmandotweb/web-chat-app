import { Route, Routes } from "react-router-dom";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</>
	);
}

export default App;
