import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Stack from '../pages/Stack';
import PageNotFound from '../pages/PageNotFound';

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRouter