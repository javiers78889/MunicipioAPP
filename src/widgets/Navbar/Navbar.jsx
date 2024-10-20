import React from 'react'
import munLog from '../../img/logoMunicipio.png'

export const Navbar = () => {
    return (
        <div className="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a href="index.html" className="navbar-brand p-0">
                        <img src={munLog} alt="Logo" />
                        {/* <h6 className="text-primary mb-0"></i>Municipio de Chame</h6> */}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-0 mx-lg-auto">
                            <a href="index.html" className="nav-item nav-link active">
                                Inicio
                            </a>
                            <a href="about.html" className="nav-item nav-link">
                                Municipio
                            </a>
                            <a href="service.html" className="nav-item nav-link">
                                Servicios
                            </a>
                            <a href="blog.html" className="nav-item nav-link">
                                Noticias
                            </a>
                            <a href="404.html" className="nav-item nav-link">
                                Turismo
                            </a>
                            <a href="404.html" className="nav-item nav-link">
                                Tramites y Requisitos
                            </a>
                            <a href="404.html" className="nav-item nav-link">
                                Preguntas Frecuentes
                            </a>
                            <a href="contact.html" className="nav-item nav-link">
                                Comercios
                            </a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link" data-bs-toggle="dropdown">
                                    <span className="dropdown-toggle">Ver Más</span>
                                </a>
                                <div className="dropdown-menu">
                                    <a href="feature.html" className="dropdown-item">
                                        Transparencia
                                    </a>
                                    <a href="team.html" className="dropdown-item">
                                        Our team
                                    </a>
                                    <a href="testimonial.html" className="dropdown-item">
                                        Testimonial
                                    </a>
                                    <a href="FAQ.html" className="dropdown-item">
                                        FAQs
                                    </a>
                                    <a href="404.html" className="dropdown-item">
                                        404 Page
                                    </a>
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
                    <div className="d-none d-xl-flex flex-shrink-0 ps-4">
                        <a
                            href="#"
                            className="btn btn-light btn-lg-square rounded-circle position-relative wow tada"
                            data-wow-delay=".9s"
                        >
                            <i className="fa fa-phone-alt fa-2x"></i>
                            <div className="position-absolute" style={{ top: '7px', right: '12px' }}>
                                <span>
                                    <i className="fa fa-comment-dots text-secondary"></i>
                                </span>
                            </div>
                        </a>
                        <div className="d-flex flex-column ms-3">
                            <span>Teléfono</span>
                            <a href="tel:+5072406041">
                                <span className="text-dark">+507 240-6041</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        

    )
}
