
import { Departamentos } from "./Departamentos";
import { array } from "../objects/ObjDepartamento";


export const Servicios = () => {
  return (
    <>
      {/*  Header Start */}
      <div className="container-fluid">
        <div className="container text-center py-4" style={{ backgroundColor: '#054424', width: '100%', borderRadius: '10px' }}>
          <h1 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
            Departamentos
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
            <h4 className="text-primary">Estamos para servirle</h4>
          </div>
          <div className="row g-4 justify-content-center">
            {/* iteramos */}
            {array.map(item => (

              <Departamentos key={item.name} item={item} />


            ))}






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
