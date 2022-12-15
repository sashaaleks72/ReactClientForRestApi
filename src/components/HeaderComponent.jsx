import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

const HeaderComponent = observer(() => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to="/teapots" className="del_underline">
                    <div className="navbar-brand">TeapotShop</div>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        <li className="nav-item dropdown">
                            <div
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                role="button"
                            >
                                Catalog
                            </div>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li>
                                    <Link
                                        to="teapots"
                                        className="dropdown-item"
                                    >
                                        Teapots
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    );
});

export default HeaderComponent;
