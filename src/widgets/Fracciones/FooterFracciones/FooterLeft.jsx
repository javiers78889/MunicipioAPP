import React from 'react'

export const FooterLeft = () => {
    return (
        <div className="col-md-6 col-lg-6 col-xl-5">
            <div className="footer-item">
                <a href="index.html" className="p-0">
                    <h3 className="text-white"> Municipio de Chame</h3>
                </a>
                <p className="text-white mb-4">Insertar Slogan</p>
                <div className="footer-btn d-flex">
                    <a className="btn btn-md-square rounded-circle me-3 d-flex justify-content-center" href="#">
                        <i className="fab fa-facebook-f textMun"></i>
                    </a>
                    <a className="btn btn-md-square rounded-circle me-3 align-center d-flex justify-content-center" href="#">
                        <i className="fab fa-instagram textMun "></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
