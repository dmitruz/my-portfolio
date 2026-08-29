import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import "../styles/main.css";

const GITHUB_USERNAME = 'dmitruz';

const customTheme = {
    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    dark: ['#161414', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

const projectCategories = {
    fullstack: [
        "crypto_trading_bot",
        "filmoteka-team-project",
        "my-portfolio",
    ],

    backend: [
        "college_erp",
        "clinic-management-backend",
        "text_analysis_api",
    ],

    dataScienceML: [
        "ML_python_projects",
        "fake_news_detector",
    ],
};

export default function GithubSection() {
    const [stats, setStats] = useState({
        totalProjects: 0,
        fullstackProjects: 0,
        backendProjects: 0,
        dataScienceMLProjects: 0,
    });

    useEffect(() => {

        async function fetchRepos() {
            try {

                const response = await fetch(
                    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&page=1`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch GitHub repositories");
                }

                const repos = await response.json();

                // Normalize any repository/category name
                const normalizeName = (name) =>
                    name
                        .toLowerCase()
                        .replace(/-/g, "_")
                        .trim();

                // Normalize category lists as well
                const fullstack = projectCategories.fullstack.map(normalizeName);
                const backend = projectCategories.backend.map(normalizeName);
                const dataScienceML = projectCategories.dataScienceML.map(normalizeName);

                // Normalize GitHub repositories
                const normalizedRepos = repos.map((repo) => ({
                    ...repo,
                    normName: normalizeName(repo.name),
                }));

                let fullstackProjects = 0;
                let backendProjects = 0;
                let dataScienceMLProjects = 0;

                normalizedRepos.forEach((repo) => {

                    if (fullstack.includes(repo.normName)) {
                        fullstackProjects++;
                    }

                    else if (backend.includes(repo.normName)) {
                        backendProjects++;
                    }

                    else if (dataScienceML.includes(repo.normName)) {
                        dataScienceMLProjects++;
                    }

                });

                const totalProjects =
                    fullstackProjects +
                    backendProjects +
                    dataScienceMLProjects;

                setStats({
                    totalProjects,
                    fullstackProjects,
                    backendProjects,
                    dataScienceMLProjects,
                });

                console.log("GitHub repositories:", normalizedRepos);
                console.log("Fullstack:", fullstack);
                console.log("Backend:", backend);
                console.log("Data Science & ML:", dataScienceML);

            } catch (error) {

                console.error("GitHub fetch error:", error);

            }
        }

        fetchRepos();

    }, []);

    const cards = [
        {
            label: "Total Projects",
            value: stats.totalProjects
        },
        {
            label: "Fullstack",
            value: stats.fullstackProjects
        },
        {
            label: "Backend",
            value: stats.backendProjects
        },
        {
            label: "Data Science & ML",
            value: stats.dataScienceMLProjects
        },
    ];

    return (
        <section className="github-activity">

            <div
                style={{
                    backgroundColor: '#161414',
                    color: '#fff',
                    padding: '2rem',
                    fontFamily: 'sans-serif'
                }}
            >

                {/* HEADER */}
                <div style={{ marginBottom: '2rem' }}>

                    <h2
                        style={{
                            fontSize: '1.6rem',
                            marginBottom: '0.5rem'
                        }}
                    >
                        GitHub Activity
                    </h2>

                    <p
                        style={{
                            color: '#a19995',
                            fontSize: '0.9rem'
                        }}
                    >
                        • Live data from GitHub
                    </p>

                    {/* QUICK STATS */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '20px',
                            flexWrap: 'wrap',
                            color: '#00d2ff',
                            fontWeight: 'bold',
                            marginBottom: '1.5rem'
                        }}
                    >

                        <span>
                            {stats.totalProjects} projects
                        </span>

                        <span>
                            {stats.fullstackProjects} Fullstack
                        </span>

                        <span>
                            {stats.backendProjects} Backend
                        </span>

                        <span>
                            {stats.dataScienceMLProjects} Data Science & ML
                        </span>

                    </div>

                    {/* CONTRIBUTION CALENDAR */}
                    <div
                        style={{
                            overflowX: 'auto',
                            padding: '10px 0'
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
                        backgroundColor: '#161414',
                        padding: '2rem',
                        maxWidth: '600px',
                        borderRadius: '16px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                    }}
                >

                    <h3
                        style={{
                            margin: '0 0 10px 0',
                            fontSize: '1.4rem'
                        }}
                    >
                        Development Overview
                    </h3>

                    <p
                        style={{
                            color: '#a19995',
                            marginBottom: '20px',
                            fontSize: '0.9rem'
                        }}
                    >
                        My projects by development area
                    </p>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '15px'
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