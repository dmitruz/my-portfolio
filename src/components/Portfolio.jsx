import { frontendProjects } from "../data/projects/FrontendProjects";
import "../styles/main.css";
import Github from "../images/github.png";


export default function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">

            <h2 className="heading">
                Frontend <span>Projects</span>
            </h2>

            <div className="portfolio-container">
                {frontendProjects.map((project, index) => (
                    <div className="portfolio-box" key={index}>
                        <img className="portfolio-img" src={project.image} alt={project.title} />
                        <div className="portfolio-layer">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank">
                                <img src={Github} alt="GitHub" className="github-icon" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="heading">
                Backend <span>Projects</span>
            </h2>

            <div className="portfolio-container">
                {frontendProjects.map((project, index) => (
                    <div className="portfolio-box" key={index}>
                        <img className="portfolio-img" src={project.image} alt={project.title} />
                        <div className="portfolio-layer">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank">
                                <img src={Github} alt="GitHub" className="github-icon" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="heading">
                Landing <span>Pages</span>
            </h2>

            <div className="portfolio-container">
                {frontendProjects.map((project, index) => (
                    <div className="portfolio-box" key={index}>
                        <img className="portfolio-img" src={project.image} alt={project.title} />
                        <div className="portfolio-layer">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank">
                                <img src={Github} alt="GitHub" className="github-icon" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
