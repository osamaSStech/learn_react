function LoginForm() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item me-3 me-lg-0">
                            <a className="nav-link" href="#">
                                <i className="fas fa-shopping-cart"></i>
                            </a>
                        </li>
                        <li className="nav-item me-3 me-lg-0">
                            <a className="nav-link" href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="nav-item me-3 me-lg-0 dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-user"></i>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="#">Action</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Another action</a>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default LoginForm;
