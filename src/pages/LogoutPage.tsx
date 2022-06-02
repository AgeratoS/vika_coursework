import React, {useEffect} from "react";

const LogoutPage: React.FC = () => {

    useEffect(() => {
        setTimeout(() => {
            window.location.href = 'https://626fc8e39dd8360009c14a23.auth.us-east-1.amazoncognito.com/logout?client_id=75rnslps1qtkeejbtod8hhisp0&redirect_uri=https://vika-coursework.vercel.app&response_type=token&state=STATE';
        }, 2000);
    }, []);

    return <p>Выход из системы, пожалуйста, подождите...</p>
};


export default LogoutPage;
