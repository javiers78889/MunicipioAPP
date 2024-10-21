import React from 'react';

export const Municipio = () => {
  return (
    <>
      {/*  Header Start */}
      <div className="container-fluid" >
        <div className="container text-center py-4" style={{ backgroundColor: '#054424', width: '100%', borderRadius: '10px' }}>
          <h1 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
            Municipio de Chame
          </h1>
        </div>
      </div>
      {/* Header End */}

      {/* About Start */}
      <div className="container-fluid bg-light about py-5">
        <div className="container py-5">
          <div className="row g-5">
            {/* Misión a la izquierda */}
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="about-item-content bg-white rounded p-5 h-100">
                <h1 className="text-primary">Misión</h1>
                <p>
                  Nuestra misión es la promoción del desarrollo integral, la sostenibilidad y la competencia del Municipio, promover la participación del pueblo a través de una comunicación transparente y permanente en el manejo de los recursos humanos y financieros, con el ánimo de contribuir al mejoramiento de la calidad de vida de la comunidad, mediante el óptimo uso de los recursos y la excelencia en la prestación de servicios.
                </p>
              </div>
            </div>

            {/* Visión a la derecha */}
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
              <div className="about-item-content bg-white rounded p-5 h-100">
                <h1 className="text-primary">Visión</h1>
                <p>
                Nuestra visión consiste en lograr cada vez un mayor impacto social, fortaleciendo la calidad de vida, el civismo, la cultura y la educación de los ciudadanos, generando oportunidades de crecimiento y bienestar, basados en un organización moderna y en un talento humano especializado. Llegar a ser una Administración que haga cumplir las leyes, reglamentos y disposiciones generales establecidas, así como ser un ejemplo de transparencia, prosperidad y honestidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

            {/* Feature Start */}
            <div className="container-fluid feature bg-light pb-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: '800px' }}
          >
            <h1 className="text-primary">Organigrama</h1>

            <p className="mb-0">
              Próximamente
            </p>
          </div>
        </div>
      </div>
      {/* Feature End */}

    </>
  )
}
