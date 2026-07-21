import { reactProjects } from "../data/projects/FrontendProjects";
import { pythonProjects } from "../data/projects/PythonProjects";
import { mlProjects } from "../data/projects/MlProjects";
import { nodejsProjects } from "../data/projects/NodejsProjects";
import { dataScienceProjects } from "../data/projects/DataScienceProjects";
import "../styles/main.css";
import Github from "../images/github.png";
import Globe from "../images/globe_721998.png";


export default function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">

            <h2 className="heading">
                Python <span>Projects</span>
            </h2>

            <div className="portfolio-container">
                {pythonProjects.map((project, index) => (
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
                Node.js<span>Projects</span>
            </h2>

            <div className="portfolio-container">
                {nodejsProjects.map((project, index) => (
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
                ML <span>Projects</span>
            </h2>

            <div className="portfolio-container">
                {mlProjects.map((project, index) => (
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
