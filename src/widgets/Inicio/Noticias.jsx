import React from 'react'
import imagen from '../../img/blog-1.png'
import imagen2 from '../../img/blog-2.png'
import imagen3 from '../../img/blog-3.png'

export const Noticias = () => {
    return (
        <div className="container-fluid blog py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
                    <h4 className="text-primary">-</h4>
                    <h1 className="display-4 mb-4">Noticias Distritales</h1>
                    <p className="mb-0">Lo más destacado en el distrito de Chame</p>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={imagen} className="img-fluid rounded-top w-100" alt="" />
                                <div className="blog-categiry py-2 px-4">
                                    <span>Distrito de Chame</span>
                                </div>
                            </div>
                            <div className="blog-content p-4">
                                <div className="blog-comment d-flex justify-content-between mb-3">
                                    <div className="small"><span className="fa fa-user text-primary"></span> Autor</div>
                                    <div className="small"><span className="fa fa-calendar text-primary"></span> Fecha</div>
                                    <div className="small"><span className="fa fa-comment-alt text-primary"></span> Comentarios</div>
                                </div>
                                <a href="#" className="h4 d-inline-block mb-3">Titulo</a>
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
                                    <span>Distrito de Chame</span>
                                </div>
                            </div>
                            <div className="blog-content p-4">
                                <div className="blog-comment d-flex justify-content-between mb-3">
                                    <div className="small"><span className="fa fa-user text-primary"></span> Autor</div>
                                    <div className="small"><span className="fa fa-calendar text-primary"></span> Fecha</div>
                                    <div className="small"><span className="fa fa-comment-alt text-primary"></span> Comentarios</div>
                                </div>
                                <a href="#" className="h4 d-inline-block mb-3">Titulo</a>
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
                                    <span>Distrito de Chame</span>
                                </div>
                            </div>
                            <div className="blog-content p-4">
                                <div className="blog-comment d-flex justify-content-between mb-3">
                                    <div className="small"><span className="fa fa-user text-primary"></span> Autor</div>
                                    <div className="small"><span className="fa fa-calendar text-primary"></span> Fecha</div>
                                    <div className="small"><span className="fa fa-comment-alt text-primary"></span> Comentarios</div>
                                </div>
                                <a href="#" className="h4 d-inline-block mb-3">Titulo</a>
                                <p className="mb-3">Resumen</p>
                                <a href="#" className="btn p-0">Leer nota completa <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
