import { Outlet } from "react-router-dom";
import Header from "../components/partials/Header";
// import {ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const MainLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        {/* <ToastContainer /> */}
    </>
  )
}

export default MainLayout