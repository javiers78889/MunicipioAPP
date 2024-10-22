import React from "react";

import imagen from '../img/parroquia1-1.jpg'
import imagen2 from '../img/felixCalvo1-1.jpg'
import imagen3 from '../img/cajonesDeChame1-1.jpg'

export const Turismo = () => {
    return (
        <>
            {/*  Header Start */}
            <div className="container-fluid">
                <div className="container text-center py-4" style={{ backgroundColor: '#054424', width: '100%', borderRadius: '10px' }}>
                    <h1 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
                        Turismo
                    </h1>
                </div>
            </div>
            {/* Header End */}

            {/* News Start */}
            <div className="container-fluid blog">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                        <h4 className="text-primary">Todos somos Chame</h4>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={imagen} className="img-fluid rounded-top w-100" alt="" />
                                    <div className="blog-categiry py-2 px-4">
                                        <span>Chame</span>
                                    </div>
                                </div>
                                <div className="blog-content p-4">
                                    <a href="#" className="h4 d-inline-block mb-3">Parroquia San Jose</a>
                                    <p className="mb-3">Resumen</p>
                                    <a href="#" className="btn p-0">Leer nota completa <i className="fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={imagen2} className="img-fluid rounded-top w-100" alt="" />
                                    <div className="blog-categiry py-2 px-4">
                                        <span>Chame</span>
                                    </div>
                                </div>
                                <div className="blog-content p-4">
                                    <a href="#" className="h4 d-inline-block mb-3">Calle Felix Calvo</a>
                                    <p className="mb-3">Resumen</p>
                                    <a href="#" className="btn p-0">Leer nota completa <i className="fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={imagen3} className="img-fluid rounded-top w-100" alt="" />
                                    <div className="blog-categiry py-2 px-4">
                                        <span>Buena Vista</span>
                                    </div>
                                </div>
                                <div className="blog-content p-4">
                                    <a href="#" className="h4 d-inline-block mb-3">Los Cajones de Chame</a>
                                    <p className="mb-3">Resumen</p>
                                    <a href="#" className="btn p-0">Leer nota completa <i className="fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/*  News end */}
        </>
    )
}
