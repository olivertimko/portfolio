import React from "react";

const Skills = () => {
    return (
      <div>
        <header>
            <h1>Skills</h1>
        </header>
        <div className="skills-wrapper">
            <main className="skills-main">
                <div className="skills-content">
                    <div className="skills-main-content-1">
                        <h2 className="skills-main-h2">Penetration Testing (improving everyday)</h2>
                        <hr></hr>
                        <ul className="skills-main-ul">
                            <li className="skills-main-li">Nmap</li>
                            <li className="skills-main-li">Dirb, Gobuster, WPScan</li>
                            <li className="skills-main-li">Nikto</li>
                            <li className="skills-main-li">BurpSuite</li>
                            <li className="skills-main-li">SQLMap (little experience)</li>
                            <li className="skills-main-li">Nessus (little expereince)</li>
                            <li className="skills-main-li">Metasploit (little experience)</li>
                            <li className="skills-main-li">Wireshark</li>
                            <li className="skills-main-li">John the Ripper</li>
                            <li className="skills-main-li">Hashcat</li>
                            <li className="skills-main-li">BeEF (little experience)</li>
                        </ul>
                    </div>
                    <div className="skills-main-content-1">
                        <h2 className="skills-main-h2">Programming Languages</h2>
                        <hr></hr>
                        <ul className="skills-main-ul">
                            <li className="skills-main-li">Python</li>
                            <li className="skills-main-li">Java</li>
                            <li className="skills-main-li">JavaScript (little experience)</li>
                        </ul>
                    </div>
                    <div className="skills-main-content-2">
                        <h2 className="skills-main-h2">Web development</h2>
                        <hr></hr>
                        <ul className="skills-main-ul">
                            <li className="skills-main-li">Frontend</li>
                            <ul className="skills-main-ul">
                                <li className="skills-main-li">HTML5</li>
                                <li className="skills-main-li">CSS3</li>
                                <li className="skills-main-li">JavaScript</li>
                                <li className="skills-main-li">Bootstrap</li>
                                <li className="skills-main-li">React</li>

                            </ul>
                            <li className="skills-main-li">Backend (little experience)</li>
                            <li className="skills-main-li">Databases</li>
                            <ul className="skills-main-ul">
                                <li className="skills-main-li">SQL (little experience)</li>
                                <li className="skills-main-li">MySQL (little experience)</li>
                            </ul>
                        </ul>
                    </div>
                </div>    
            </main>
        </div>        
      </div>
    );
};

export default Skills;