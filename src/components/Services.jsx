export default function Services() {
    return (
        <section className="services" id="services">
            <h2 className="heading">
                My <span>Services</span>
            </h2>

            <div className="services-container">
                <div className="services-box">
                    <i className="bx bx-code-alt"></i>
                    <h3>Custom Software Development</h3>
                    <p className="text__alight">
                        Build end-to-end web applications tailored to business needs.
                        Full-stack development using React, Node.js, Django
                        REST APIs & backend systems
                        Scalable cloud deployment with AWS
                        Clean, maintainable architecture
                    </p>
                </div>
                <div className="services-box">
                    <i className="bx bx-bar-chart-alt"></i>
                    <h3>Data Analysis, Vizualisation and Analytics Automation</h3>
                    <p className="text__alight">
                        Data cleaning, exploration, and analysis using SQL, Python, and
                        Pandas. Turning raw data into clear insights and business decisions.
                        Automating reports, data pipelines, and validation using Python,
                        APIs, and SQL databases (PostgreSQL, MySQL).
                    </p>
                </div>

                <div className="services-box">
                    <i className="bx bx-brain"></i>
                    <h3>AI & Automation Solutions</h3>
                    <p>
                        Design smart systems that automate workflows and enhance user experience.
                        AI-powered chatbots and assistants
                        Workflow automation using APIs and LLMs
                        Data processing and intelligent features
                        Integration of AI into existing products
                    </p>
                </div>
            </div>
        </section>
    );
}

