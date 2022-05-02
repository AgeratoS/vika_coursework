import React, {useEffect} from "react";

const AuthPage: React.FC = () => {

    useEffect(() => {
        window.location.href = 'https://626fc8e39dd8360009c14a23.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=75rnslps1qtkeejbtod8hhisp0&response_type=token&state=STATE&redirect_uri=http://localhost:3000/auth'
    }, []);

    return (
        <p>Переход на страницу авторизации, пожалуйста, подождите...</p>
    );
};

export default AuthPage;
