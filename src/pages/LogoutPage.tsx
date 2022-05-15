import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const LogoutPage: React.FC = () => {

    useEffect(() => {
        setTimeout(() => {
            window.location.href = 'https://626fc8e39dd8360009c14a23.auth.us-east-1.amazoncognito.com/logout?client_id=75rnslps1qtkeejbtod8hhisp0&redirect_uri=http://localhost:3000&response_type=token&state=STATE';
        }, 2000);
    }, []);

    return <p>Выход из системы, пожалуйста, подождите...</p>
};


export default LogoutPage;
