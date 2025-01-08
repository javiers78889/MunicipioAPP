import React from 'react'
import imagen from '../../img/blog-4.png'
import imagen2 from '../../img/blog-1.png'
import imagen3 from '../../img/blog-2.png'
import imagen4 from '../../img/blog-3.png'
import { array } from '../../objects/ObjDepartamento'
import { Departamentos } from '../../componentes/Departamentos'
export const Servicios = () => {
    return (
        <div className="container-fluid service py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                    <h4 className="text-primary">-</h4>
                    <h1 className="display-4 mb-4">Departamentos</h1>
                    <p className="mb-0"></p>
                </div>
                <div className="row g-4 justify-content-center">
                    {array.map(item => (
                 
                               <Departamentos key={item.name} item={item} />
                 
                 
                             ))}
                    <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                        <a className="btn btn-primary rounded-pill py-3 px-5" href="#">Más Servicios</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
