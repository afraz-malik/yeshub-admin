import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Toaster = () => {
    return <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />;
};

export default Toaster;
