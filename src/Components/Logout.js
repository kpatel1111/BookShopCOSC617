
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Router, Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        localStorage.removeItem("email");
        localStorage.removeItem("isbnNumber");
        navigate("/");
        window.location.reload();
    },[]);
};

export default Logout;