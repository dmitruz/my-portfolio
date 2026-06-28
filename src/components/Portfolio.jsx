import { reactProjects } from "../data/projects/FrontendProjects";
import "../styles/main.css";
import Github from "../images/github.png";


export default function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">

            <h2 className="heading">
                React <span>Projects</span>
            </h2>

            <div className="portfolio-container">
                {reactProjects.map((project, index) => (
                    <div className="portfolio-box" key={index}>
                        <img className="portfolio-img" src={project.image} alt={project.title} />
                        <div className="portfolio-layer">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <a href={project.code} target="_blank">
                                <img src={Github} alt="GitHub" className="github-icon" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="heading">
                Python <span>Projects</span>
            </h2>

            <div className="portfolio-container">
                {reactProjects.map((project, index) => (
                    <div className="portfolio-box" key={index}>
                        <img className="portfolio-img" src={project.image} alt={project.title} />
                        <div className="portfolio-layer">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <a href={project.code} target="_blank">
                                <img src={Github} alt="GitHub" className="github-icon" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="heading">
                Node.js <span>Projects</span>
            </h2>

            <div className="portfolio-container">
                {reactProjects.map((project, index) => (
                    <div className="portfolio-box" key={index}>
                        <img className="portfolio-img" src={project.image} alt={project.title} />
                        <div className="portfolio-layer">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <a href={project.code} target="_blank">
                                <img src={Github} alt="GitHub" className="github-icon" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="heading">
                JavaScript <span>Projects</span>
            </h2>

            <div className="portfolio-container">
                {reactProjects.map((project, index) => (
                    <div className="portfolio-box" key={index}>
                        <img className="portfolio-img" src={project.image} alt={project.title} />
                        <div className="portfolio-layer">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <a href={project.code} target="_blank">
                                <img src={Github} alt="GitHub" className="github-icon" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="heading">
                ML <span>Projects</span>
            </h2>

            <div className="portfolio-container">
                {reactProjects.map((project, index) => (
                    <div className="portfolio-box" key={index}>
                        <img className="portfolio-img" src={project.image} alt={project.title} />
                        <div className="portfolio-layer">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <a href={project.code} target="_blank">
                                <img src={Github} alt="GitHub" className="github-icon" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="heading">
                Data Science <span>Projects</span>
            </h2>

            <div className="portfolio-container">
                {reactProjects.map((project, index) => (
                    <div className="portfolio-box" key={index}>
                        <img className="portfolio-img" src={project.image} alt={project.title} />
                        <div className="portfolio-layer">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <a href={project.code} target="_blank">
                                <img src={Github} alt="GitHub" className="github-icon" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
