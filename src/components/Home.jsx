import { useTypedText } from "../hooks/useTypedText";

export default function Home() {
    const typedText = useTypedText([
        "Software Developer",
    ]);

    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello, it's me</h3>
                <h1>Dmytro Ruzhytskyi</h1>

                <h3>
                    I'm a <span>{typedText}</span>
                </h3>
                <p className="home-paragraph">
                    I’m a software developer focused on building scalable web applications and practical AI-driven solutions.

                    I work with technologies like JavaScript, Python, React, Node.js, and Django to deliver reliable, high-quality products from idea to deployment.

                    Beyond development, I care about clean architecture, performance, and creating systems that are easy to maintain and grow. Recently, I’ve been integrating AI and automation into applications to help businesses streamline workflows and improve user experience.

                    I’m always looking to solve real-world problems with efficient and thoughtful solutions.
                </p>
                <a href="#contact" className="btn">Contact Me</a>
            </div>
        </section>
    );
}
