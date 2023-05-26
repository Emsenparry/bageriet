import { Route, Routes } from "react-router-dom";
import Home from "../../Components/Pages/Home/Home";
import Products from "../../Components/Pages/Products/Products";
import Contact from "../../Components/Pages/Contact/Contact";
import Login from "../../Components/Pages/Login/Login";


const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/products" element={<Products />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default AppRouter;