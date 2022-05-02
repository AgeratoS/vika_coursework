import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {AuthPage, OtherPage, SuccessAuthPage} from "../pages";
import StudentsPage from "../pages/students/StudentsPage";
import AddStudentPage from "../pages/students/AddStudentPage";

const AppRouter: React.FC = () =>
    <Router>
        <Routes>
            <Route path={'/login'} element={<AuthPage />} />
            <Route path={'/auth'} element={<SuccessAuthPage />} />
            <Route path={'/students/add'} element={<AddStudentPage />} />
            <Route path={'/students'} element={<StudentsPage />} />
            <Route path={'/'} element={<OtherPage />} />
        </Routes>
    </Router>;

export default AppRouter;
