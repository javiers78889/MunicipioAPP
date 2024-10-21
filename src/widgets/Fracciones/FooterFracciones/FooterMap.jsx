import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

export const FooterMap = () => {
    return (
        <div className="col-xl-3">
            <div className="footer-item">
                <h4 className="text-white mb-4">Ubicación</h4>
                <p className="text-white mb-3">Buscanos en Google Maps</p>
                <div className="position-relative rounded-pill mb-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4756.824200983982!2d-79.88668802421402!3d8.578226391466217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8facef3a83d159d9%3A0xcad39ede08d70d25!2sPalacio%20Municipal%20de%20Chame!5e1!3m2!1ses-419!2spa!4v1727748326361!5m2!1ses-419!2spa"
                        width="340"
                        height="300"
                        style={{ borderRadius: '10px' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
