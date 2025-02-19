import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserAuth from "./Pages/User/userAuth"
import Landing from "./Pages/Landing"
import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import AddHotel from "./Pages/Owner/addHotel"
import SellerAuth from "./Pages/Owner/SellerAuth"
import SellerDashboard from "./Pages/Owner/SellerDashboard"
import AdminAuth from "./Pages/Admin/AdminAuth"
import SearchPage from "./Pages/User/SearchPage"
import UserSignin from "./Model/User/userSignIn"
import UserSignup from "./Model/User/userSignup"


function App() {
    React.useEffect(() => {
      AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
      });
      AOS.refresh();
    }, []);
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/"  element={<Landing />} />
      {/* <Route path="/user/signin" element={<UserSignin />} /> */}
      {/* <Route path="/user/signup" element={<UserSignup />} /> */}
      <Route path="/auth"  element={<UserAuth />} />
      <Route path="/seller/auth"  element={<SellerAuth />} />
      <Route path="/seller/add" element={<AddHotel />} />
      <Route path="/seller/dashboard" element={<SellerDashboard />}  />
      <Route path="/admin/auth" element={<AdminAuth />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App