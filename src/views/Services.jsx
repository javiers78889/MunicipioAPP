import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export const Services = () => {
  const { service } = useParams()
 
  return (
    <>
    
     {/*  Header Start */}
     <div className="container-fluid">
        <div className="container text-center py-4" style={{ backgroundColor: '#054424', width: '100%', borderRadius: '10px' }}>
          <h1 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
          {service}
          </h1>
        </div>
      </div>
    </>
  )
}
