import React from 'react'
import imagen from '../../img/carousel-2.png'

export const PreguntasFrecuentes = () => {
    return (
        <div className="container-fluid faq-section bg-light py-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="h-100">
                            <div className="mb-5">
                                <h4 className="text-primary">Algunas Preguntas Frecuentes</h4>
                                <h1 className="display-4 mb-0">Las más comunes</h1>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button border-0" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            P: Pregunta #1?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show active"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body rounded">
                                            R: Respuesta #1
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            P: Pregunta #2?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            R: Respuesta #2
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            P: Pregunta #3?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            R: Respuesta #3
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.4s">
                        <img src={imagen} className="img-fluid w-100" alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}
