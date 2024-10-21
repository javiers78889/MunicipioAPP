import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
export const FooterDown = () => {
    return (
        <div className="pt-5" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="row g-0">
                <div className="col-12">
                    <div className="row g-4">
                        <div className="col-lg-6 col-xl-4">
                            <div className="d-flex">
                                <div className="btn-xl-square bg-success text-white rounded p-4 me-4">
                                    <i className="fas fa-map-marker-alt fa-2x"></i>
                                </div>
                                <div>
                                    <h4 className="text-white">Address</h4>
                                    <p className="mb-0">123 Street New York.USA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="d-flex">
                                <div className="btn-xl-square bg-success text-white rounded p-4 me-4">
                                    <i className="fas fa-envelope fa-2x"></i>
                                </div>
                                <div>
                                    <h4 className="text-white">Mail Us</h4>
                                    <p className="mb-0">info@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="d-flex">
                                <div className="btn-xl-square bg-success text-white rounded p-4 me-4">
                                <FontAwesomeIcon icon={faPhoneAlt} size="2x" style={{ transform: 'rotate(90deg)' }} />
                                </div>
                                <div>
                                    <h4 className="text-white">Telephone</h4>
                                    <p className="mb-0">(+012) 3456 7890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
