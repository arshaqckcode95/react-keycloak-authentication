import { Routes, Route } from "react-router";
import { DataPrivacy, Home, Terms,CheckList, SafePage } from '../pages';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<div/>} />
            <Route path="/dashboard" element={<SafePage/>} />
            <Route path="/data-privacy" element={<DataPrivacy />} />
            <Route path="/terms" element={<Terms />} />
             <Route path="/checklist" element={<CheckList />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
}

export default AppRoutes;