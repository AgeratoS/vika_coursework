import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <nav>
            <Link to={'/logout'}>
                Выйти
            </Link>
        </nav>
    </header>
);

export default Header;
