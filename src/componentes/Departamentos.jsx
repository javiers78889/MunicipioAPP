import React from 'react'
import { Link } from 'react-router-dom'

export const Departamentos = ({item}) => {
    
  return (
    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
    <div className="service-item">
      <div className="service-img">
        <img
          src={item.image}  // Usando la variable de imagen importada
          className="img-fluid rounded-top w-100"
          alt="Life Insurance"
        />
        <div className="service-icon p-3">
          <i className="fa fa-users fa-2x"></i>
        </div>
      </div>
      <div className="service-content p-4">
        <div className="service-content-inner">
          <Link to={`/utilidades/${item.name}`} className="d-inline-block h4 mb-4">
            {item.name}
          </Link>
          <Link to={`/utilidades/${item.name}`} className="btn btn-primary rounded-pill py-2 px-4" href="#">
            Solicitar
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
