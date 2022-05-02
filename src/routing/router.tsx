import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {AuthPage, OtherPage, SuccessAuthPage} from "../pages";

const AppRouter: React.FC = () =>
    <Router>
        <Routes>
            <Route path={'/login'} element={<AuthPage />} />
            <Route path={'/auth'} element={<SuccessAuthPage />} />
            <Route path={'/'} element={<OtherPage />} />
        </Routes>
    </Router>;

export default AppRouter;
