import React from 'react';
import imagen from '../../img/carousel1.jpg';
import imagen2 from '../../img/carousel2.jpg';
import imagen3 from '../../img/carousel3.jpg';
import '../../css/ModalSlider.css'; // Importar el archivo CSS personalizado

export const ModalSlider = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active col-lg-7 animated fadeInRight">
          <img className="img-fluid w-100 imagen" src={imagen} alt="First slide" />
        </div>
        <div className="carousel-item col-lg-7 animated fadeInRight ">
          <img className="img-fluid w-100 imagen " src={imagen2} alt="Second slide" />
        </div>
        <div className="carousel-item col-lg-7 animated fadeInRight">
          <img className="img-fluid w-100 imagen " src={imagen3} alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span> {/* Cambié sr-only por visually-hidden */}
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span> {/* Cambié sr-only por visually-hidden */}
      </a>
    </div>
  );
};
