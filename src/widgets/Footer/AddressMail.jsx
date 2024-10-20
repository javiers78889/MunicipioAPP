import React from 'react'

export const AddressMail = () => {
    return (
        <div className="pt-5" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="row g-0">
                <div className="col-12">
                    <div className="row g-4">
                        <div className="col-lg-6 col-xl-4">
                            <div className="d-flex">
                                <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                                    <i className="fas fa-map-marker-alt fa-2x"></i>
                                </div>
                                <div>
                                    <h4 className="text-white">Dirección</h4>
                                    <p className="mb-0">Vía Interamericana , Chame Cabecera</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="d-flex">
                                <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                                    <i className="fas fa-envelope fa-2x"></i>
                                </div>
                                <div>
                                    <h4 className="text-white">Correo</h4>
                                    <p className="mb-0">info@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="d-flex">
                                <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                                    <i className="fa fa-phone-alt fa-2x"></i>
                                </div>
                                <div>
                                    <h4 className="text-white">Teléfono</h4>
                                    <p className="mb-0">(+507) 240-6041</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
