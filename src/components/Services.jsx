export default function Services() {
    return (
        <section className="services" id="services">
            <h2 className="heading">
                My <span>Services</span>
            </h2>

            <div className="services-container">
                <div className="services-box">
                    <i className="bx bx-bar-chart-alt"></i>
                    <h3>Data Analysis</h3>
                    <p className="text__alight">
                        Data cleaning, exploration, and analysis using SQL, Python, and
                        Pandas. Turning raw data into clear insights and business decisions.
                    </p>
                </div>

                <div className="services-box">
                    <i className="bx bx-line-chart"></i>
                    <h3>Data Visualization</h3>
                    <p>
                        Dashboards and reports using Power BI, Tableau, and Matplotlib.
                        Clear storytelling with data for stakeholders.
                    </p>
                </div>

                <div className="services-box">
                    <i className="bx bx-code-alt"></i>
                    <h3>Analytics Automation</h3>
                    <p>
                        Automating reports, data pipelines, and validation using Python,
                        APIs, and SQL databases (PostgreSQL, MySQL).
                    </p>
                </div>
            </div>
        </section>
    );
}
