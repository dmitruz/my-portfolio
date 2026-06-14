import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const GITHUB_USERNAME = 'dmitruz';

const customTheme = {
    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    dark: ['#211a17', '#0e4429', '#006d32', '#26a641', '#39d353'], // matches your card bg
};

export default function GithubSection() {
    return (
        <div style={{ backgroundColor: '#161414', color: '#fff', padding: '2rem', fontFamily: 'sans-serif' }}>

            {/* TOP SECTION: THE CONTRIBUTION CALENDAR */}
            <div className="github-activity-section" style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>GitHub Activity</h2>
                <p style={{ color: '#a19995', fontSize: '0.9rem', marginTop: '0' }}>• Live data from GitHub</p>

                <div className="github-stats-summary" style={{ display: 'flex', gap: '20px', color: '#00d2ff', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                    <span>29 repos</span>
                    <span>1032 this year</span>
                    <span>22 this month</span>
                    <span>4 day streak</span>
                </div>

                <div style={{ overflowX: 'auto', padding: '10px 0' }}>
                    <GitHubCalendar
                        username={GITHUB_USERNAME}
                        theme={customTheme}
                        throwOnError={false}
                    />
                </div>
            </div>

            {/* BOTTOM SECTION: COMMIT ACTIVITY STATS VIA WIDGET */}
            <div style={{
                backgroundColor: '#161414',
                padding: '2rem',
                maxWidth: '450px',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '1.4rem' }}>Commit Activity</h3>
                <p style={{ color: '#a19995', margin: '0 0 20px 0', fontSize: '0.9rem' }}>
                    Language metrics generated dynamically
                </p>

                {/* Dynamic Language Vector Card configured to match your layout colors */}
                <div style={{ width: '100%', overflow: 'hidden' }}>
                    <img
                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&hide_border=true&bg_color=211a17&title_color=ffffff&text_color=a19995&icon_color=ff9f1c&langs_count=6`}
                        alt="GitHub Language Stats"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </div>
            </div>

        </div>
    );
}