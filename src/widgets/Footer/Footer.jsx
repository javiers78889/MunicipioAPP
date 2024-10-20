import React from 'react'
import { EnlacesUtiles } from './EnlacesUtiles'
import { FooterInstagram } from './FooterInstagram'
import { AddressMail } from './AddressMail'
import { Mapa } from './Mapa'

export const Footer = () => {
    return (
        <div className="container-fluid footer py-5 wow fadeIn mt-3" data-wow-delay="0.2s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-xl-9">
                        <div className="mb-5">
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-6 col-xl-5">
                                    <div className="footer-item">
                                        <a href="index.html" className="p-0">
                                            <h3 className="text-white">Municipio de Chame</h3>
                                        </a>
                                        <p className="text-white mb-4">Insertar Slogan</p>
                                        <div className="footer-btn d-flex">
                                            <a className="btn btn-md-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-md-square rounded-circle me-3" href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <EnlacesUtiles />
                                <FooterInstagram />
                            </div>
                        </div>
                        <AddressMail />
                    </div>

                    <Mapa/>
                </div>
            </div>
        </div>
    )
}
