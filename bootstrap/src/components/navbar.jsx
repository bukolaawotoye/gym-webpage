const Navbar =()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-black fixed-top">
         <div className="container-lg">
            <a className="navbar-brand text-danger" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
                <i className="bi bi-geo-alt-fill text-white"></i>
                SHAPE
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="./about.html">
                            ABOUT US
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">SERVICES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">FEATURES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">CONTACTS</a>
                    </li>
                </ul>
            </div>
         </div>
        </nav>
        </>

    )
}

export default Navbar;