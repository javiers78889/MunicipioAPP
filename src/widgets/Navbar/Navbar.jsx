import { Link } from 'react-router-dom';
import { useState } from 'react';
import munLog from '../../img/logoMunicipio.png';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link to="/" className="navbar-brand p-0">
                        <img src={munLog} alt="Logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        aria-controls="navbarCollapse"
                        aria-expanded={isOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                        onClick={toggleNavbar}
                    >
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarCollapse">
                        <div className="navbar-nav mx-0 mx-lg-auto">
                            <Link to="/" className="nav-item nav-link active">
                                Inicio
                            </Link>
                            <Link to="/municipio" className="nav-item nav-link">
                                Municipio
                            </Link>
                            <Link to="/servicios" className="nav-item nav-link">
                                Departamentos
                            </Link>
                            <Link to="/noticias" className="nav-item nav-link">
                                Noticias
                            </Link>
                            <Link to="/turismo" className="nav-item nav-link">
                                Turismo
                            </Link>
                            <Link to="/tramites" className="nav-item nav-link">
                                Tramites y Requisitos
                            </Link>
                            <Link to="/preguntas" className="nav-item nav-link">
                                Preguntas Frecuentes
                            </Link>
                            <Link to="/comercios" className="nav-item nav-link">
                                Comercios
                            </Link>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link" data-bs-toggle="dropdown">
                                    <span className="dropdown-toggle">Ver Más</span>
                                </a>
                                <div className="dropdown-menu">
                                    <Link to="/transparencia" className="dropdown-item">
                                        Transparencia
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-btn px-3">
                                <button
                                    className="btn-search btn btn-primary btn-md-square rounded-circle flex-shrink-0"
                                    data-bs-toggle="modal"
                                    data-bs-target="#searchModal"
                                >
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};
