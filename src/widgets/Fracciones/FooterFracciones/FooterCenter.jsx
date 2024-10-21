import React from 'react'

export const FooterCenter = () => {
    return (
        <>
            <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item">
                    <h4 className="text-white mb-4">Enlaces Útiles</h4>
                    <a href="#"><i className="fas fa-angle-right me-2"></i> Municipio</a>
                    <a href="#"><i className="fas fa-angle-right me-2"></i> Preguntas Frecuentes</a>
                    <a href="#"><i className="fas fa-angle-right me-2"></i> Servicios</a>
                    <a href="#"><i className="fas fa-angle-right me-2"></i> Noticias</a>
                    <a href="#"><i className="fas fa-angle-right me-2"></i> Contacto</a>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
                <div className="footer-item">
                    <h4 className="mb-4 text-white">Instagram</h4>
                    <div className="row g-3">
                        {[...Array(6)].map((_, index) => (
                            <div className="col-4" key={index}>
                                <div className="footer-instagram rounded">
                                    <img src={`img/instagram-footer-${index + 1}.jpg`} className="img-fluid w-100" alt="" />
                                    <div className="footer-search-icon">
                                        <a href={`img/instagram-footer-${index + 1}.jpg`} data-lightbox={`footerInstagram-${index + 1}`} className="my-auto">
                                            <i className="fas fa-link text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
