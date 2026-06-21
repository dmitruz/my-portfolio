

import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={`header ${menuOpen ? "sticky" : ""}`}>
            <a href="#home" className="logo">
                Wellcome to my <span>Portfolio</span>
            </a>

            <div
                className={`bx bx-menu ${menuOpen ? "bx-x" : ""}`}
                id="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            ></div>

            <nav className={`navbar ${menuOpen ? "active" : ""}`}>
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>
        </header>
    );
}