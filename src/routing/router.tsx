import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {AuthPage, OtherPage} from "../pages";

const AppRouter: React.FC = () =>
    <Router>
        <Routes>
            <Route path={'/auth'} element={<AuthPage />} />
            <Route path={'/'} element={<OtherPage />} />
        </Routes>
    </Router>;

export default AppRouter;
