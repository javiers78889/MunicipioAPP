import React from 'react';
import foto1 from '../../img/instagram-footer-1.jpg';
import foto2 from '../../img/instagram-footer-2.jpg';
import foto3 from '../../img/instagram-footer-3.jpg';
import foto4 from '../../img/instagram-footer-4.jpg';
import foto5 from '../../img/instagram-footer-5.jpg';
import foto6 from '../../img/instagram-footer-6.jpg';

export const FooterInstagram = () => {
    const fotos = [foto1, foto2, foto3, foto4, foto5, foto6];

    return (
        <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="footer-item">
                <h4 className="mb-4 text-white">Instagram</h4>
                <div className="row g-3">
                    {fotos.map((foto, index) => (
                        <div key={index} className="col-4">
                            <div className="footer-instagram rounded">
                                <img src={foto} className="img-fluid w-100" alt={`Instagram footer ${index + 1}`} />
                                <div className="footer-search-icon">
                                    <a href={foto} data-lightbox={`footerInstagram-${index + 1}`} className="my-auto">
                                        <i className="fas fa-link text-white"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
