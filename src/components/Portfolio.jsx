import { reactProjects } from "../data/projects/FrontendProjects";
import { BackendProjects } from "../data/projects/BackendProjects";
import { dataScienceProjects } from "../data/projects/DataScienceProjects";
import "../styles/main.css";
import Github from "../images/github.png";
import Globe from "../images/globe_721998.png";


export default function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">

            <h2 className="heading">
                FullStack <span>Projects</span>
            </h2>

            <div className="portfolio-container">
                {reactProjects.map((project, index) => (
                    <div className="portfolio-box" key={index}>
                        <img className="portfolio-img" src={project.image} alt={project.title} />
                        <div className="portfolio-layer">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <div className="link-container">
                                <a href={project.code} target="_blank">
                                    <img src={Github} alt="GitHub" className="github-icon" />
                                </a>
                                <a href={project.link} target="_blank">
                                    <img src={Globe} alt="Globe" className="web-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="heading">
                Backend<span>Projects</span>
            </h2>

            <div className="portfolio-container">
                {BackendProjects.map((project, index) => (
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
                Data Science & ML <span>Projects</span>
            </h2>

            <div className="portfolio-container">
                {dataScienceProjects.map((project, index) => (
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
