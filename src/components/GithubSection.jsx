import { GitHubCalendar } from "react-github-calendar";
import projectStats from "./projectStats";

const GITHUB_USERNAME = "dmitruz";

const customTheme = {
    light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    dark: ["#161414", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

export default function GithubSection() {

    const cards = [
        {
            label: "Total Projects",
            value: projectStats.totalProjects
        },
        {
            label: "Full-Stack",
            value: projectStats.fullstackProjects
        },
        {
            label: "Backend",
            value: projectStats.backendProjects
        },
        {
            label: "Data Science & ML",
            value: projectStats.dataScienceMLProjects
        },
    ];

    return (
        <section className="github-activity">

            <div
                style={{
                    backgroundColor: "#161414",
                    color: "#fff",
                    padding: "2rem",
                    fontFamily: "sans-serif"
                }}
            >

                {/* HEADER */}
                <div style={{ marginBottom: "2rem" }}>

                    <h2
                        style={{
                            fontSize: "1.6rem",
                            marginBottom: "0.5rem"
                        }}
                    >
                        GitHub Activity
                    </h2>

                    <p
                        style={{
                            color: "#a19995",
                            fontSize: "0.9rem"
                        }}
                    >
                        • Live data from GitHub
                    </p>

                    {/* QUICK STATS */}
                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            flexWrap: "wrap",
                            color: "#00d2ff",
                            fontWeight: "bold",
                            marginBottom: "1.5rem"
                        }}
                    >

                        <span>
                            {projectStats.totalProjects} projects
                        </span>

                        <span>
                            {projectStats.fullstackProjects} Full-Stack
                        </span>

                        <span>
                            {projectStats.backendProjects} Backend
                        </span>

                        <span>
                            {projectStats.dataScienceMLProjects} Data Science & ML
                        </span>

                    </div>

                    {/* CONTRIBUTION CALENDAR */}
                    <div
                        style={{
                            overflowX: "auto",
                            padding: "10px 0"
                        }}
                    >

                        <GitHubCalendar
                            username={GITHUB_USERNAME}
                            theme={customTheme}
                            throwOnError={false}
                        />

                    </div>

                </div>


                {/* DEVELOPMENT OVERVIEW */}
                <div
                    style={{
                        backgroundColor: "#161414",
                        padding: "2rem",
                        maxWidth: "600px",
                        borderRadius: "16px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
                    }}
                >

                    <h3
                        style={{
                            margin: "0 0 10px 0",
                            fontSize: "1.4rem"
                        }}
                    >
                        Development Overview
                    </h3>

                    <p
                        style={{
                            color: "#a19995",
                            marginBottom: "20px",
                            fontSize: "0.9rem"
                        }}
                    >
                        My projects by development area
                    </p>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "15px"
                        }}
                    >

                        {cards.map((card) => (

                            <div
                                className="stat-card"
                                key={card.label}
                            >

                                <h2>{card.value}</h2>

                                <p>{card.label}</p>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}


