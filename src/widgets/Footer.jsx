import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'lightbox2/dist/css/lightbox.min.css';
import { FooterLeft } from './Fracciones/FooterFracciones/FooterLeft';
import { FooterCenter } from './Fracciones/FooterFracciones/FooterCenter';
import { FooterDown } from './Fracciones/FooterFracciones/FooterDown';
import { FooterMap } from './Fracciones/FooterFracciones/FooterMap';


export const Footer = () => {
    return (
        <div className="container-fluid footer py-5 wow fadeIn colorMun" data-wow-delay="0.2s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-xl-9">
                        <div className="mb-5">
                            <div className="row g-4">
                                <FooterLeft />
                                <FooterCenter />

                            </div>
                        </div>
                        <FooterDown />
                    </div>

                    <FooterMap />
                </div>
            </div>
        </div>
    );
};
