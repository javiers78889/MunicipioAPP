import React from "react";

import imagen2 from '../img/blog-1.png';
import imagen3 from '../img/blog-2.png';
import imagen4 from '../img/blog-3.png';
import imagen from '../img/blog-4.png';

export const Servicios = () => {
  return (
    <>
      {/*  Header Start */}
      <div className="container-fluid">
        <div className="container text-center py-4" style={{ backgroundColor: '#054424', width: '100%', borderRadius: '10px' }}>
          <h1 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
            Servicios Frecuentes
          </h1>
        </div>
      </div>
      {/* Header End */}

      {/* Service Start */}
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: '800px' }}
          >
            <h4 className="text-primary">Calidad y confianza en cada servicio</h4>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
              <div className="service-item">
                <div className="service-img">
                  <img
                    src={imagen4}  // Usando la variable de imagen importada
                    className="img-fluid rounded-top w-100"
                    alt="Life Insurance"
                  />
                  <div className="service-icon p-3">
                    <i className="fa fa-users fa-2x"></i>
                  </div>
                </div>
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <a href="#" className="d-inline-block h4 mb-4">
                      Servicio #1
                    </a>
                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                      Solicitar
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
              <div className="service-item">
                <div className="service-img">
                  <img
                    src={imagen}  // Usando la variable de imagen importada
                    className="img-fluid rounded-top w-100"
                    alt="Health Insurance"
                  />
                  <div className="service-icon p-3">
                    <i className="fa fa-hospital fa-2x"></i>
                  </div>
                </div>
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <a href="#" className="d-inline-block h4 mb-4">
                      Servicio #2
                    </a>
          
                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                      Solicitar
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
              <div className="service-item">
                <div className="service-img">
                  <img
                    src={imagen2}  // Usando la variable de imagen importada
                    className="img-fluid rounded-top w-100"
                    alt="Car Insurance"
                  />
                  <div className="service-icon p-3">
                    <i className="fa fa-car fa-2x"></i>
                  </div>
                </div>
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <a href="#" className="d-inline-block h4 mb-4">
                      Servicio #3
                    </a>
                    
                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                      Solicitar
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
              <div className="service-item">
                <div className="service-img">
                  <img
                    src={imagen3}  // Usando la variable de imagen importada
                    className="img-fluid rounded-top w-100"
                    alt="Home Insurance"
                  />
                  <div className="service-icon p-3">
                    <i className="fa fa-home fa-2x"></i>
                  </div>
                </div>
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <a href="#" className="d-inline-block h4 mb-4">
                      Servicio #4
                    </a>
                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                      Solicitar
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
              <a className="btn btn-primary rounded-pill py-3 px-5" href="#">
                Más servicios
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
    </>
  );
};
