import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Produks from "./page/Produks";
import Transaksi from "./page/Transaksi";
import Categori from "./page/Kategori";
import Login from "./page/Login";
import ProtectedRoute from "./auth/ProtectedRoute";
import Register from "./page/Register";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/produk" element={<Produks />} />
          <Route path="/kategori" element={<Categori />} />
          <Route path="/transaksi" element={<Transaksi />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
