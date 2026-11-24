
const Header = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid">

                <a className="navbar-brand" href="#">
                    My First Site
                </a>

                <ul className="navbar-nav ms-auto flex-row gap-4">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">About</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Services</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Contact</a>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Header;
