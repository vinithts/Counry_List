import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import AllCoutriesList from "./pages/AllCoutriesList";
import AsiaCountries from "./pages/AsiaCountries";
import EuropeCountries from "./pages/EuropeCountries";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/home" element={<Home />}>
        <Route index element={<AllCoutriesList />} />
        <Route path="all-countries" element={<AllCoutriesList />} />
        <Route path="asia-countries" element={<AsiaCountries />} />
        <Route path="europe-countries" element={<EuropeCountries />} />
      </Route>
    </Routes>
  );
}

export default App;
