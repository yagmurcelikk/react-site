import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top fixed-bottom" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    </a>
                    <span className="mb-3 mb-md-0 text-muted">&copy; 2023 Kadir Has Üniversitesi, Inc</span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-muted" href="https://www.instagram.com/khasedutr/">
                            <FontAwesomeIcon icon={faInstagram} prefix="fab" style={{ fontSize: "24px" }} /></a></li>

                    <li className="ms-3"><a className="text-muted" href="https://twitter.com/khasedutr">
                        <FontAwesomeIcon icon={faTwitter} prefix="fab" style={{ fontSize: "24px" }} /></a></li>

                    <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/Khasedutr">
                        <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "24px" }} /></a></li>
                </ul>
            </footer>
        </>
    );
}

export default Footer;
