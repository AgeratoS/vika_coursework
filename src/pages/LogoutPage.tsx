import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const LogoutPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/'), 2000);
    }, []);

    return <p>Выход из системы, пожалуйста, подождите...</p>
};


export default LogoutPage;
