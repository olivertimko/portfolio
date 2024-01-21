import React from "react";

const Projects = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
      <div>
        <header>
          <h1>Projects</h1>
        </header>
        <div className="projects-wrapper">
            <main className="projects-main">
                <div className="projects-main-content">
                    <div className="projects-main-content-1">
                        <h2 className="projects-main-h2">Contents</h2>
                        <hr></hr>
                        <p className="projects-main-p">The projects/works are separated into different categories. Click on the links below to jump directly to each category or just scroll down.</p>
                        <a href="#section-ibdp" onClick={() => scrollToSection('section-personal')} className="links">Personal Projects</a>
                        <a href="#section-ibdp" onClick={() => scrollToSection('section-ibdp')} className="links">IB Diploma Programme Work</a>
                        <a href="#section-uni" onClick={() => scrollToSection('section-uni')} className="links">University Work</a>
                    </div>
                    <div id="section-personal" className="projects-main-content-1">
                        <h2 className="projects-main-h2">Personal Projects</h2>
                        <hr></hr>
                        <p className="projects-main-p-ul">This section is yet empty.</p>
                    </div>
                    <div id="section-ibdp" className="projects-main-content-1">
                        <h2 className="projects-main-h2">IB Diploma Programme Work</h2>
                        <hr></hr>
                        <p className="projects-main-p-ul">This section is yet empty.</p>
                        <p className="projects-main-p-ul">Computer Science HL</p>
                        <ul className="projects-main-ul">
                            <li className="projects-main-li">Empty</li>
                        </ul>
                    </div>
                    <div id="section-uni" className="projects-main-content-2">
                        <h2 className="projects-main-h2">University Work</h2>
                        <hr></hr>
                        <p className="projects-main-p-notice">This section is yet empty.</p>
                    </div>
                </div>        
            </main>
        </div>
      </div>
    );
};

export default Projects;