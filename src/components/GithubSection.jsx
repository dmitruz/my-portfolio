import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { projectCategories } from '../GithubCategories';
import "../styles/main.css";

const GITHUB_USERNAME = 'dmitruz';

const customTheme = {
    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    dark: ['#161414', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

export default function GithubSection() {
    const [stats, setStats] = useState({
        totalProjects: 0,
        reactProjects: 0,
        backendProjects: 0,
        analyticsProjects: 0,
        otherProjects: 0
    });

    useEffect(() => {

        async function fetchRepos() {
            try {
                const response = await fetch(
                    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&page=1`
                );

                const repos = await response.json();
                const normalized = repos.map((repo) => ({
                    ...repo,
                    normName: repo.name.toLowerCase().replace(/-/g, "_"),
                }));

                const filteredRepos = normalized.filter((repo) => {
                    return (
                        projectCategories.react.includes(repo.normName) ||
                        projectCategories.backend.includes(repo.normName) ||
                        projectCategories.analytics.includes(repo.normName) ||
                        projectCategories.other.includes(repo.normName)
                    );
                });

                let reactProjects = 0;
                let backendProjects = 0;
                let analyticsProjects = 0;
                let otherProjects = 0;

                filteredRepos.forEach((repo) => {

                    filteredRepos.forEach(r => console.log(r.name));
                    console.log("MATCHED REPOS:");
                    filteredRepos.forEach(r => console.log(r.name));
                    const name = repo.normName;
                    console.log("MATCHED REPOS:");


                    if (projectCategories.react.includes(name)) reactProjects++;
                    else if (projectCategories.backend.includes(name)) backendProjects++;
                    else if (projectCategories.analytics.includes(name)) analyticsProjects++;
                    else if (projectCategories.other.includes(name)) otherProjects++;
                });

                setStats({
                    totalProjects: filteredRepos.length,
                    reactProjects,
                    backendProjects,
                    analyticsProjects,
                    otherProjects,
                });

            } catch (error) {
                console.error("GitHub fetch error:", error);
            }
        }

        fetchRepos();
    }, []);

    const cards = [
        { label: "Total Projects", value: stats.totalProjects },
        { label: "React Projects", value: stats.reactProjects },
        { label: "Backend Projects", value: stats.backendProjects },
        { label: "Data Analytics", value: stats.analyticsProjects },
        { label: "Other Projects", value: stats.otherProjects },
    ];

    return (
        <section className="github-activity">

            {/* MAIN WRAPPER */}
            <div style={{ backgroundColor: '#161414', color: '#fff', padding: '2rem', fontFamily: 'sans-serif' }}>

                {/* TOP SECTION */}
                <div style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>
                        GitHub Activity
                    </h2>

                    <p style={{ color: '#a19995', fontSize: '0.9rem' }}>
                        • Live data from GitHub
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '20px',
                        color: '#00d2ff',
                        fontWeight: 'bold',
                        marginBottom: '1.5rem'
                    }}>
                        <span>{stats.totalProjects} repos</span>
                        <span>{stats.reactProjects} React</span>
                        <span>{stats.backendProjects} Backend</span>
                        <span>{stats.analyticsProjects} Analytics</span>
                        <span>{stats.otherProjects} Other Projects</span>
                    </div>

                    <div style={{ overflowX: 'auto', padding: '10px 0' }}>
                        <GitHubCalendar
                            username={GITHUB_USERNAME}
                            theme={customTheme}
                            throwOnError={false}
                        />
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div style={{
                    backgroundColor: '#161414',
                    padding: '2rem',
                    maxWidth: '450px',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}>

                    <h3 style={{ margin: '0 0 10px 0', fontSize: '1.4rem' }}>
                        Development Overview
                    </h3>

                    <p style={{ color: '#a19995', marginBottom: '20px', fontSize: '0.9rem' }}>
                        Summary of projects and technologies
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>

                        {cards.map((card) => (
                            <div className="stat-card" key={card.label}>
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