import { useTypedText } from "../hooks/useTypedText";

export default function Home() {
    const typedText = useTypedText([
        "Data Analyst",
    ]);

    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello, it's me</h3>
                <h1>Dmytro Ruzhytskyi</h1>

                <h3>
                    And I'm a <span>{typedText}</span>
                </h3>
                <p className="home-paragraph">
                    Welcome to my portfolio! I'm Dmytro Ruzhytskyi, a passionate Data Analyst dedicated to transforming data into actionable insights. Explore my projects and skills to see how I can help drive informed decision-making through data analysis.
                </p>
                <a href="#contact" className="btn">Contact Me</a>
            </div>
        </section>
    );
}
