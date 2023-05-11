import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menu from "./components/nav/Menu";
import Dashboard from "./pages/user/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PrivateRoute from "./components/routes/PrivateRoute";
import AdminRoutes from "./components/routes/AdminRoute"
import AdminDashboard from "./pages/admin/Dashboard";
import AdminCategory from "./pages/admin/Category";
import AdminProduct from "./pages/admin/Products";
 import UserProfile from "./pages/user/Profile";
import UserOrders from "./pages/user/Orders";


const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      404 | page not found
    </div>
  );
};
export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Toaster />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<UserProfile />} />
          <Route path="user/orders" element={<UserOrders />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoutes />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/category" element={<AdminCategory />} />
          <Route path="admin/product" element={<AdminProduct />} />
        </Route>

        <Route path="*" element={<PageNotFound />} replace />
         </Routes>
    </BrowserRouter>
  );
}
