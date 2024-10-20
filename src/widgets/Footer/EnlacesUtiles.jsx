import React from 'react'
import { Link } from 'react-router-dom'

export const EnlacesUtiles = () => {
    return (
        <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item">
                <h4 className="text-white mb-4">Enlaces Útiles</h4>
                <Link to='/' ><i className="fas fa-angle-right me-2"></i> Municipio</Link>
                <Link to='/preguntas'><i className="fas fa-angle-right me-2"></i> Preguntas Frecuentes</Link>
                <Link to='/'><i className="fas fa-angle-right me-2"></i> Servicios</Link>
                <Link to='/'><i className="fas fa-angle-right me-2"></i> Noticias</Link>
                <Link to='/'><i className="fas fa-angle-right me-2"></i> Contacto</Link>
            </div>
        </div>
    )
}
