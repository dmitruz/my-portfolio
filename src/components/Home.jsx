import githubIcon from "../images/icons8-github-50.png";
import linkedinIcon from "../images/icons8-linkedin-50.png";
import mailIcon from "../images/icons8-mail-50.png";
import "../styles/main.css";
import { useTypedText } from "../hooks/useTypedText";

export default function Home() {
    const typedText = useTypedText([
        "Software Developer",
    ]);

    return (
        <section className="home" id="home">
            <div className="home-content">
                <h1>Dmytro Ruzhytskyi</h1>

                <h3>
                    I'm a <span>{typedText}</span>
                </h3>
                <p className="home-paragraph">
                    I’m  focused on building scalable web applications and practical AI-driven solutions.

                    I work with technologies like JavaScript, Python, React, Node.js, and Django to deliver reliable, high-quality products from idea to deployment.

                    Beyond development, I care about clean architecture, performance, and creating systems that are easy to maintain and grow. Recently, I’ve been integrating AI and automation into applications to help businesses streamline workflows and improve user experience.

                    I’m always looking to solve real-world problems with efficient and thoughtful solutions.
                </p>
                <a href="#contact" className="btn">Contact Me</a>
                <div className="sociale-links">
                    <a href="https://github.com/dmitruz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github" style={{ color: '#fff' }}></i>
                    </a>
                    <a href="https://linkedin.com/in/dmytro-ruzhytskyi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin" style={{ color: '#fff' }}></i>
                    </a>
                    <a href="tel:+447831417609" target="_blank" rel="noopener noreferrer" aria-label="Call me">
                        <i class="fa fa-phone-square" aria-hidden="true style={{ color: '#fff' }}"></i>
                    </a>
                    <a href="mailto:dmitruz970@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="email me">
                        <i class="fa fa-envelope" aria-hidden="true style={{ color: '#fff' }}"></i>
                    </a>
                    <a href="https://docs.google.com/document/d/1tCjc4wjreTcB3EkBvxKlqnpwPFNlewMbad8ztNbTAUg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Download CV">
                        <i className="fas fa-file-alt" style={{ color: '#fff' }}></i>
                    </a>
                </div>
            </div>
            <div className="home-skills">
                <h2>Core Technologies</h2>
                <div className="skills-grid">
                    <div className="skill-item">JavaScript</div>
                    <div className="skill-item">Python</div>
                    <div className="skill-item">React</div>
                    <div className="skill-item">Node.js</div>
                    <div className="skill-item">Django</div>
                    <div className="skill-item">SQL</div>
                </div>
            </div>
        </section>
    );
}
