import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubSection = () => {
    // Define custom colors matching the image layout
    const customTheme = {
        light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        dark: ['#2d2623', '#0e4429', '#006d32', '#26a641', '#39d353'], // Adjusted for your dark brown bg
    };

    return (
        <div className="github-section" style={{ backgroundColor: '#211a17', color: '#fff', padding: '2rem' }}>
            <h2>
                <i className="fab fa-github"></i> GitHub Activity
            </h2>
            <p style={{ color: '#8b837e' }}>• Live data from GitHub</p>

            {/* Stats Summary Row */}
            <div className="github-stats-summary" style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
                <span><strong>29</strong> repos</span>
                <span><strong>1032</strong> this year</span>
                <span><strong>22</strong> this month</span>
                <span><strong>4</strong> day streak</span>
            </div>

            {/* The Contribution Calendar Grid */}
            <div className="calendar-container">
                <GitHubCalendar
                    username="your-github-username"
                    theme={customTheme}
                    hideTotalCount
                    hideColorLegend
                />
            </div>
        </div>
    );
};

export default GitHubSection;