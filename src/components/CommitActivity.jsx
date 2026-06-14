import React, { useEffect, useState } from 'react';

// Simple color mapping matching the sleek tones in your portfolio mockup
const colorPalette = {
    JavaScript: '#00d2ff',
    TypeScript: '#ff9f1c',
    CSS: '#a5f3fc',
    'C#': '#fcd34d',
    Python: '#0284c7',
    HTML: '#ef4444',
    Default: '#a19995'
};

const GITHUB_USERNAME = 'dmitruz';

export const GitHubCommitActivity = () => {
    const [languages, setLanguages] = useState([]);
    const [totalRepos, setTotalRepos] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                // Step 1: Fetch all public repositories
                const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
                if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
                const repos = await reposResponse.json();

                setTotalRepos(repos.length);

                const languageBytesMap = {};
                const languageRepoCountMap = {};
                let totalBytesOverall = 0;

                // Step 2: Concurrently fetch language breakdowns for every repository
                const languagePromises = repos.map(async (repo) => {
                    try {
                        const langRes = await fetch(repo.languages_url);
                        if (!langRes.ok) return;
                        const langData = await langRes.json();

                        // Aggregate byte weight and tracking counts
                        Object.keys(langData).forEach((lang) => {
                            const bytes = langData[lang];
                            languageBytesMap[lang] = (languageBytesMap[lang] || 0) + bytes;
                            totalBytesOverall += bytes;
                            languageRepoCountMap[lang] = (languageRepoCountMap[lang] || 0) + 1;
                        });
                    } catch (err) {
                        console.error(`Error processing languages for ${repo.name}:`, err);
                    }
                });

                await Promise.all(languagePromises);

                // Step 3: Format data into percentages & sort by prominence
                const formattedLanguages = Object.keys(languageBytesMap).map((lang) => {
                    const percentage = totalBytesOverall > 0
                        ? parseFloat(((languageBytesMap[lang] / totalBytesOverall) * 100).toFixed(1))
                        : 0;

                    return {
                        name: lang,
                        percentage,
                        reposCount: languageRepoCountMap[lang],
                        color: colorPalette[lang] || colorPalette['Default']
                    };
                }).sort((a, b) => b.percentage - a.percentage); // Higher percentage first

                setLanguages(formattedLanguages);
            } catch (error) {
                console.error('Error assembling GitHub stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    if (loading) return <div style={{ color: '#fff' }}>Loading GitHub Metrics...</div>;

    return (
        <div style={{ backgroundColor: '#211a17', color: '#fff', padding: '2rem', fontFamily: 'sans-serif', maxWidth: '450px', borderRadius: '12px' }}>

            {/* Top Header Match */}
            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.4rem' }}>Commit Activity</h3>
            <p style={{ color: '#a19995', margin: '0 0 25px 0', fontSize: '0.9rem' }}>Total Repositories Assessed: {totalRepos}</p>

            {/* Dynamic Rows mapping the UI style elements */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {languages.slice(0, 6).map((lang) => (
                    <div key={lang.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                        {/* Left Hand: Language Identification Title & Pill Shape Indicator */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '45%' }}>
                            <span style={{ fontWeight: 600, fontSize: '1.05rem', minWidth: '85px' }}>{lang.name}</span>
                            <span style={{
                                height: '14px',
                                width: '24px',
                                borderRadius: '10px',
                                backgroundColor: lang.color,
                                display: 'inline-block'
                            }} />
                        </div>

                        {/* Right Hand: Numerical Breakdowns */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', fontSize: '0.95rem' }}>
                            <span style={{ color: '#ff9f1c', fontWeight: 'bold' }}>{lang.percentage}%</span>
                            <span style={{ color: '#a19995' }}>{lang.reposCount} {lang.reposCount === 1 ? 'repo' : 'repos'}</span>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};