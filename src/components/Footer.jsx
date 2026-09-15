import Logo from "../images/dmitruz.png";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>
                    Copyright © 2026 by Dmytro Ruzhytskyi | All Rights Reserved.
                </p>
            </div>
            <div>
                <img src={Logo} className="logo-img" alt="logo image" />
            </div>

            <div className="footer-iconTop">
                <a href="#home">
                    ↑
                </a>
            </div>
        </footer>
    );
}


