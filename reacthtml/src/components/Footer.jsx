import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <h3>ARfotografering</h3>
                <div className="footer-container">
                    <div className="footer-section2">
                        <h3>Arbetstimmar</h3>
                        <p>Måndag - Fredag<br />9:00 - 17:00</p>
                        <p>Lördag - Söndag<br />10:00 - 14:00</p>
                    </div>
                    <div className="footer-section2">
                        <h3>Kontakt</h3>
                        <p>Andreasregardh@arfotografering.com</p>
                        <p>Andreas Regårdh</p>
                    </div>
                    <div className="footer-section2">
                        <h3>Plats</h3>
                        <p>Fagersta kommun</p>
                        <p>Andreas Regårdh</p>
                    </div>
                </div>
                <div className="s-links">
                    <ul>
                        <li>
                            <a href="mailto:andreasregardh@arfotografering.com" target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faEnvelope} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100088588085153" target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://www.instagram.com/arfotografering/" target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}
export default Footer;
